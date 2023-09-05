from django.db import models
from users.models import User


class ParentAddress(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255,)
    parent = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE, verbose_name='父级地址')


class Address(models.Model):
    id = models.AutoField(primary_key=True)
    recv_name = models.CharField(max_length=100, verbose_name='收货人')
    recv_tel = models.CharField(max_length=20, verbose_name='收货人电话')
    country = models.CharField(max_length=255, default='中国')
    province = models.CharField(max_length=100, verbose_name='收货人省份')
    city = models.CharField(max_length=100, verbose_name='收货人城市')
    area = models.CharField(max_length=50, verbose_name='收货人县/区/')
    street = models.CharField(max_length=50, verbose_name='收货人街道')
    desc = models.CharField(max_length=255, verbose_name='收货人详细地址')
    is_default = models.BooleanField(default=False, verbose_name='是否是默认地址')
    user = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name='地址所属')




