from django.shortcuts import render
from goods.models import GoodsType
from goods.models import Goods
from shopcar.models import ShopCar


def index(request):
    try:
        shop_cars = ShopCar.objects.filter(user=request.user).order_by('-createTime')
        nums = len(shop_cars)
    except:
        nums = 0
    goods_type1 = GoodsType.objects.filter(pk=1001)
    goods_type1_2 = GoodsType.objects.filter(parent=goods_type1)
    goods1_list = Goods.objects.filter(goodsType__in=goods_type1_2)[:4]

    goods_type3 = GoodsType.objects.filter(pk=1003)
    goods_type3_2 = GoodsType.objects.filter(parent=goods_type3)
    goods3_list = Goods.objects.filter(goodsType__in=goods_type3_2)[:4]

    goods_type4 = GoodsType.objects.filter(pk=1004)
    goods_type4_2 = GoodsType.objects.filter(parent=goods_type4)
    goods4_list = Goods.objects.filter(goodsType__in=goods_type4_2)[:4]

    goods_type5 = GoodsType.objects.filter(pk=1005)
    goods_type5_2 = GoodsType.objects.filter(parent=goods_type5)
    goods5_list = Goods.objects.filter(goodsType__in=goods_type5_2)[:4]

    goods_type6 = GoodsType.objects.filter(pk=1006)
    goods_type6_2 = GoodsType.objects.filter(parent=goods_type6)
    goods6_list = Goods.objects.filter(goodsType__in=goods_type6_2)[:4]

    goods_type7 = GoodsType.objects.filter(pk=1008)
    goods_type7_2 = GoodsType.objects.filter(parent=goods_type7)
    goods7_list = Goods.objects.filter(goodsType__in=goods_type7_2)[:4]

    goods_type9 = GoodsType.objects.filter(pk=1010)
    goods_type9_2 = GoodsType.objects.filter(parent=goods_type9)
    goods9_list = Goods.objects.filter(goodsType__in=goods_type9_2)[:4]

    goods_type8 = GoodsType.objects.filter(pk=1011)
    goods_type8_2 = GoodsType.objects.filter(parent=goods_type8)
    goods8_list = Goods.objects.filter(goodsType__in=goods_type8_2)[:4]

    goods_type10 = GoodsType.objects.filter(pk=1007)
    goods_type10_2 = GoodsType.objects.filter(parent=goods_type10)
    goods10_list = Goods.objects.filter(goodsType__in=goods_type10_2)[:4]

    allGoodsType = GoodsType.objects.filter(parent__isnull=True)
    return render(request, 'index.html', {'allGoodsType': allGoodsType, 'goods1_list': goods1_list,
                                          'goods3_list': goods3_list, 'goods4_list': goods4_list,
                                          'goods5_list': goods5_list, 'goods6_list': goods6_list,
                                          'goods7_list': goods7_list,  'goods9_list': goods9_list,
                                          'goods8_list': goods8_list, 'goods10_list': goods10_list,'nums': nums})
