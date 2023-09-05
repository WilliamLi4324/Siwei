from django.db import models
from django.contrib.auth.models import User


class Store(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, unique=True, verbose_name='店铺名称')
    cover = models.ImageField(upload_to='static/images/store/', default='static/images/store/default.jpg', verbose_name='店铺封面')
    intro = models.TextField(verbose_name='店铺描述')
    openTime = models.DateTimeField(auto_now_add=True, verbose_name='开店时间')
    status = models.IntegerField(default=0, verbose_name='店铺状态')
    level = models.CharField(default='1级', max_length=50, verbose_name='店铺等级')
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='商户信息')

