from django.db import models
from django.contrib.auth.models import User


class UserInfo(models.Model):
    id = models.AutoField(primary_key=True)
    nickname = models.CharField(max_length=255, unique=True, verbose_name='用户昵称')
    age = models.IntegerField(default='20', verbose_name='用户年龄')
    gender = models.CharField(max_length=10, default='男', verbose_name='用户性别')
    header = models.ImageField(upload_to='static/images/headers', default='static/images/headers/default.jpg', verbose_name='用户头像')
    phone = models.CharField(max_length=50, null=True, blank=True, verbose_name='用户电话号码')
    bron = models.CharField(max_length=255, default='2000年01月01日', verbose_name='出生年月日')
    user = models.OneToOneField(User, on_delete=models.CASCADE)



