from django.db import models
from store.models import Store


class GoodsType(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, unique=True, verbose_name='商品类型名称')
    logo = models.ImageField(upload_to='static/images/logo', default='static/images/logo/goods-style1.png', verbose_name='商品类型图标')
    intro = models.TextField(verbose_name='商品类别描述')
    parent = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE, verbose_name='父级类型')


class Goods(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, verbose_name='商品名称')
    price = models.FloatField(verbose_name='商品价格')
    createTime = models.DateTimeField(auto_now_add=True, verbose_name='商品上架时间')
    desc = models.TextField(verbose_name='商品描述')
    stock = models.IntegerField(verbose_name='商品数量')
    count = models.IntegerField(default=0, verbose_name='商品销量')
    commentCount = models.IntegerField(default=0, verbose_name='商品累计评论数')
    goodSize = models.CharField(max_length=50, verbose_name='商品尺寸/大小/')
    goodsStore = models.ForeignKey(Store, on_delete=models.CASCADE, verbose_name='商品所属店铺')
    goodsType = models.ForeignKey(GoodsType, on_delete=models.CASCADE, verbose_name='商品类型')


class GoodsImage(models.Model):
    id = models.AutoField(primary_key=True)
    path = models.ImageField(upload_to='static/images/goods', default='static/images/goods/default.jpg', verbose_name='商品图片')
    status = models.BooleanField(default=False, verbose_name='是否默认显示')
    intro = models.TextField(null=True, blank=True, verbose_name='商品图片描述')
    goods = models.ForeignKey(Goods, on_delete=models.CASCADE, verbose_name='所属商品 ')
