"""
Version 1.1.0
Author lkk
Email lkk199404@163.com
date 2018-11-06 15:35
DESC users模块路由
"""
from django.urls import re_path, include
from . import views

app_name = 'users'

urlpatterns = [
    re_path(r'^login/$', views.user_login, name='user_login'),
    re_path(r'^register/$', views.register, name='register'),
    re_path(r'^logout/$', views.user_logout, name='user_logout'),
    re_path(r'^user_info/$', views.user_info, name='user_info'),
    re_path(r'^user_update/$', views.user_update, name='user_update'),
    re_path(r'^user_photo/$', views.user_photo, name='user_photo'),
    re_path(r'^change_pwd/$', views.change_pwd, name='change_pwd'),
    re_path(r"^code/$", views.code, name="code"),

]
