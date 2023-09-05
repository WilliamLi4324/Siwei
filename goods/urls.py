"""
Version 1.1.0
Author lkk
Email lkk199404@163.com
date 2018-11-08 13:58
DESC TODO
"""
from django.urls import re_path, include
from . import views

app_name = 'goods'

urlpatterns = [
    re_path(r'^goods_add/$', views.goods_add, name='goods_add'),
    re_path(r'^goods_update/$', views.goods_update, name='goods_update'),
    re_path(r'^goods_list/$', views.goods_list, name='goods_list'),
    re_path(r'^goods_delete/$', views.goods_update, name='goods_update'),
    re_path(r'^(?P<g_id>\d+)/goods_detail/$', views.goods_detail, name='goods_detail'),

    re_path(r'^findTypeByPID/$', views.findTypeByPID, name='findTypeByPID'),
]