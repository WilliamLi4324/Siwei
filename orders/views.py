from django.shortcuts import render, reverse, redirect
import shopcar
import users, goods
from . import models
from address.models import Address
from django.contrib.auth.decorators import login_required


@login_required
def order_confirm(request):
    """
    结算确认
    :param request:
    :return:
    """
    shopcar_id_list = request.POST.getlist('buy_goods_id')
    shopcar_list = shopcar.models.ShopCar.objects.filter(pk__in=shopcar_id_list)
    return render(request, 'orders/order_confirm.html', {'shopcar_list': shopcar_list})


def order_pay(request):
    pass


@login_required
def order_list(request):
    all_order = models.MyOrder.objects.filter(user=request.user)
    return render(request, 'orders/order_list.html', {'all_order': all_order})


@login_required
def order_desc(request, order_id):
    _order = models.MyOrder.objects.get(pk=order_id)
    return render(request, 'orders/order_desc.html', {'order': _order})


@login_required
def order_done(request):
    """
    生成订单
    :param request:
    :return:
    """
    shopcar_list = request.POST.getlist('sc')
    addr_id = request.POST['addr_id']
    address = Address.objects.get(pk=addr_id)
    addr = address.recv_name+','+address.recv_tel+','+address.province\
        + ' '+address.city+' '+address.area+' '+address.street+' '+address.desc
    total = 0
    # 生成订单
    my_order = models.MyOrder(user=request.user, address=addr, total=total)
    my_order.save()
    # 创建订单项对象
    for sc_id in shopcar_list:
        shopcart = shopcar.models.ShopCar.objects.get(pk=sc_id)
        order_item = models.MyOrderItem(goods_image=shopcart.goods.goodsimage_set.first().path,
                                        goods_name=shopcart.goods.name,
                                        goods_price=shopcart.goods.price,
                                        goods_count=shopcart.number,
                                        goods_money=shopcart.allMoney,
                                        my_order=my_order)
        order_item.save()
        total += shopcart.allMoney
    my_order.total = total
    my_order.save()
    return redirect(reverse('orders:order_desc', kwargs={'order_id': my_order.id}))
