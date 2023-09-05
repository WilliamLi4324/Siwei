"""
Version 1.1.0
Author lkk
Email lkk199404@163.com
date 2018-11-12 20:41
DESC TODO
"""
from django.urls import re_path, include
from . import views

app_name = 'address'

urlpatterns = [
    re_path(r'^add_address/$', views.add_address, name='add_address'),
    re_path(r'^list_address/$', views.list_address, name='list_address'),

]