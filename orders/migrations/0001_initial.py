# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-11-13 08:32
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='MyOrder',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('order_time', models.DateTimeField(auto_now_add=True)),
                ('address', models.CharField(max_length=200, verbose_name='收货地址')),
                ('message', models.TextField(blank=True, default='', verbose_name='买家留言')),
                ('total', models.FloatField(verbose_name='总计金额')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='MyOrderItem',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('goods_image', models.ImageField(upload_to='static/images/goods')),
                ('goods_name', models.CharField(max_length=120, verbose_name='商品名称')),
                ('goods_price', models.FloatField(verbose_name='成交价格')),
                ('goods_count', models.IntegerField(verbose_name='购买数量')),
                ('goods_money', models.FloatField(verbose_name='小计金额')),
                ('my_order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='orders.MyOrder')),
            ],
        ),
    ]