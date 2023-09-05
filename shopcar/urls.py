"""
Version 1.1.0
Author lkk
Email lkk199404@163.com
date 2018-11-10 11:33
DESC TODO
"""
from django.urls import re_path, include
from . import views

app_name = 'shopcar'

urlpatterns = [
    re_path(r'^(?P<number>\d+)/(?P<goods_id>\d+)/shop_into/$', views.shop_into, name='shop_into'),
    re_path(r'^list_car/$', views.list_car, name='list_car'),
    re_path(r'^(?P<shopcar_id>\d+)/del_car/$', views.del_car, name='del_car'),
]