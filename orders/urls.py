"""
Version 1.1.0
Author lkk
Email lkk199404@163.com
date 2018-11-13 10:22
DESC TODO
"""
from django.urls import re_path, include
from . import views

app_name = 'orders'

urlpatterns = [
    re_path(r'^order_confirm/$', views.order_confirm, name='order_confirm'),
    re_path(r'^order_pay/$', views.order_pay, name='order_pay'),
    re_path(r'^order_done/$', views.order_done, name='order_done'),
    re_path(r'^order_list/$', views.order_list, name='order_list'),
    re_path(r'^(?P<order_id>\d+)/order_desc/$', views.order_desc, name='order_desc'),

]
