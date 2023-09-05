from django.shortcuts import render, redirect, reverse
from django.contrib.auth.decorators import login_required
from . import models
from goods.models import GoodsType, Goods
from django.views.decorators.http import require_GET
# from django.http import HttpResponse


@login_required
def add_store(request):
    if request.method == 'GET':
        return render(request, 'store/store_add.html', {})
    else:
        name = request.POST['name'].strip()
        intro = request.POST['intro'].strip()

        sto = models.Store.objects.filter(name=name)
        if len(sto) == 1:
            return render(request, 'store/store_add.html', {"msg": "商铺名称已存在,请重新输入"})
        else:
            try:
                cover = request.FILES['cover']
                store = models.Store(name=name, intro=intro, cover=cover, user=request.user)
            except:
                store = models.Store(name=name, intro=intro, user=request.user)
            store.save()
            return redirect(reverse('store:list_store'))


@require_GET
@login_required
def list_store(request):
    stores = models.Store.objects.filter(user=request.user, status__in=[0, 1])
    return render(request, 'store/store_list.html', {'stores': stores})


@login_required
def update_store(request, s_id):
    if request.method == 'GET':
        store = models.Store.objects.get(pk=s_id)
        return render(request, 'store/store_update.html', {'store': store})
    else:
        name = request.POST['name'].strip()
        intro = request.POST['intro'].strip()
        sto = models.Store.objects.filter(name=name)
        store = models.Store.objects.get(pk=s_id)
        store.intro = intro
        if len(sto) == 1:
            return render(request, 'store/store_add.html', {"msg": "商铺名称已存在,请重新输入"})
        else:
            try:
                store.name = name
                cover = request.FILES['cover']
                store.cover = cover
            except:
                store.name = name
            store.save()
            return redirect(reverse('store:detail_store', kwargs={'s_id': store.id}))


@require_GET
@login_required
def detail_store(request, s_id):
    goods_type1 = GoodsType.objects.filter(pk=1001)
    goods_type1_2 = GoodsType.objects.filter(parent=goods_type1)

    goods_list1 = Goods.objects.filter(goodsType__in=goods_type1_2)
    store = models.Store.objects.get(pk=s_id)
    type1 = GoodsType.objects.filter(parent__isnull=True)
    return render(request, 'store/store_detail.html', {'store': store, 'type1': type1, 'goods_list1': goods_list1})


@require_GET
@login_required
def status_store(request, s_id, status):
    store = models.Store.objects.get(id=s_id)
    store.status = int(status)
    store.save()
    if store.status == 2:
        return redirect(reverse('store:list_store'))
    return redirect(reverse('store:detail_store', kwargs={'s_id': store.id}))
