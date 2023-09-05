from django.db import models
from django.contrib.auth.models import User
from goods.models import Goods

class ShopCar(models.Model):
    id = models.AutoField(primary_key=True)
    goods = models.ForeignKey(Goods, verbose_name='购物车商品', on_delete=models.CASCADE)
    number = models.IntegerField(default=0, verbose_name='购买商品数量')
    createTime = models.DateTimeField(auto_now_add=True, verbose_name='添加商品时间')
    allMoney = models.FloatField(default=0.00, verbose_name='总计')
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.goods.name


