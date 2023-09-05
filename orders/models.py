from django.db import models
from django.contrib.auth.models import User


class MyOrder(models.Model):
    id = models.AutoField(primary_key=True)
    order_time = models.DateTimeField(auto_now_add=True)
    address = models.CharField(max_length=200, verbose_name='收货地址')
    message = models.TextField(verbose_name='买家留言', default='', blank=True)
    total = models.FloatField(verbose_name='总计金额')
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class MyOrderItem(models.Model):
    id = models.AutoField(primary_key=True)
    goods_image = models.ImageField(upload_to='static/images/goods')
    goods_name = models.CharField(max_length=120, verbose_name='商品名称')
    goods_price = models.FloatField(verbose_name='成交价格')
    goods_count = models.IntegerField(verbose_name='购买数量')
    goods_money = models.FloatField(verbose_name='小计金额')
    my_order = models.ForeignKey(MyOrder, on_delete=models.CASCADE)
