"""
Version 1.1.0
Author lkk
Email lkk199404@163.com
date 2018-11-07 15:35
DESC TODO
"""
from django.urls import re_path, include
from . import views

app_name = 'commons'

urlpatterns = [
    re_path(r'^$', views.index, name='index'),
    # url(r'^$', views.index, name='index'),

]
