"""
Version 1.1.0
Author lkk
Email lkk199404@163.com
date 2018-11-07 20:13
DESC TODO
"""
from django.urls import re_path, include

from . import views

app_name = 'store'

urlpatterns = [
    re_path(r'^add_store/$', views.add_store, name='add_store'),
    re_path(r'^list_store/$', views.list_store, name='list_store'),
    re_path(r'^(?P<s_id>\d+)/update_store', views.update_store, name='update_store'),
    re_path(r'^(?P<s_id>\d+)/detail_store', views.detail_store, name='detail_store'),
    re_path(r'^(?P<s_id>\d+)/(?P<status>\d+)/status_store', views.status_store, name='status_store'),


]