from django.shortcuts import render, redirect, reverse
from django.views.decorators.http import require_GET
from . import models
from django.core.serializers import serialize
from django.http import HttpResponse
from store.models import Store
from shopcar.models import ShopCar
from django.contrib.auth.decorators import login_required


@login_required
def goods_add(request):
    if request.method == 'GET':
        return render(request, 'goods/goods_add.html', {})
    else:
        name = request.POST['name']
        price = request.POST['price']
        stock = request.POST['stock']
        goodSize = request.POST['goodSize']
        #TODO 验证
        path = request.FILES['path']
        desc = request.POST['desc']
        type2 = request.POST['type2']
        store_id = request.POST['goodsStore']
        store = Store.objects.get(pk=store_id)
        goodsType = models.GoodsType.objects.get(pk=type2)
        goods = models.Goods(name=name, price=price, stock=stock, desc=desc, goodSize=goodSize, goodsType=goodsType,goodsStore=store )
        goods.save()
        goodsImage = models.GoodsImage(path=path, goods=goods)
        goodsImage.save()
        return redirect(reverse('store:detail_store', kwargs={'s_id': store_id}))


def goods_detail(request, g_id):
    try:
        shop_cars = ShopCar.objects.filter(user=request.user).order_by('-createTime')
        nums = len(shop_cars)
    except:
        nums = 0
    goods = models.Goods.objects.get(pk=g_id)
    goodsStore_id = goods.goodsStore_id
    store = models.Store.objects.get(pk=goodsStore_id)
    return render(request, 'goods/goods_show.html', {'goods': goods, 'store': store, 'nums':nums})


def goods_update(request):
    pass


def goods_list(request):
    all_goods = models.Goods.objects.all()
    return render(request, 'goods/all_goods.html', {'all_goods': all_goods})


def goods_delete(request):
    pass


@require_GET
def findTypeByPID(request):
    parent_id = request.GET['parent_id']
    type2 = models.GoodsType.objects.filter(parent=parent_id)
    return HttpResponse(serialize('json', type2))
