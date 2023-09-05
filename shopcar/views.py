from django.shortcuts import render, redirect, reverse
from django.views.decorators.http import require_GET
from django.contrib.auth.decorators import login_required
from goods.models import Goods
from . import models


@login_required
@require_GET
def shop_into(request, number, goods_id):
    goods = Goods.objects.get(pk=goods_id)
    user = request.user
    try:
        shop_car = models.ShopCar.objects.get(user=user, goods=goods)
        shop_car.number += int(number)
        shop_car.allMoney = shop_car.number*goods.price
        shop_car.save()
    except:
        shop_car = models.ShopCar(goods=goods, number=number, user=user)
        shop_car.allMoney = int(shop_car.number)*goods.price
        shop_car.save()
    return redirect(reverse('shopcar:list_car'))


@login_required
def list_car(request):
    try:
        shop_cars = models.ShopCar.objects.filter(user=request.user).order_by('-createTime')
        nums = len(shop_cars)
        return render(request, 'shopcar/list_car.html', {'shop_cars': shop_cars, 'nums': nums})
    except:
        return render(request, 'shopcar/list_car.html', {})


@login_required
def del_car(request, shopcar_id):
    user = request.user
    shopcar = models.ShopCar(pk=shopcar_id, user=user)
    shopcar.delete()
    return redirect(reverse('shopcar:list_car'))
