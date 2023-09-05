"""my_shop URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.urls import re_path, include
from django.urls import path
# from .views import my_view
# from django.conf.urls import include
from django.contrib import admin
from users.views import user_login
# from store.views import list_store

# 
# 
# 
# 
# 
# 

urlpatterns = [
    re_path(r'users', include('users.urls', namespace='users')),
    re_path(r'commons', include('commons.urls', namespace='commons')),
    re_path(r'store', include('store.urls', namespace='store')),
    re_path(r'goods', include('goods.urls', namespace='goods')),
    re_path(r'shopcar', include('shopcar.urls', namespace='shopcar')),
    re_path(r'address', include('address.urls', namespace='address')),
    re_path(r'orders', include('orders.urls', namespace='orders')),
    re_path(r'admin', admin.site.urls),
    re_path(r'', user_login, name="user_login"),
    # re_path(r'', list_store, name="list_store"),
]
