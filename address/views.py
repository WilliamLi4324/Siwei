from django.shortcuts import render, redirect, reverse
from . import models
from django.contrib.auth.decorators import login_required


@login_required
def add_address(request):
    if request.method == 'GET':
        address_list = models.Address.objects.filter(user=request.user)
        return render(request, 'address/address_add.html', {'address_list': address_list})
    elif request.method == 'POST':
        recv_name = request.POST['recv_name']
        recv_tel = request.POST['recv_tel']
        province = request.POST['province']
        city = request.POST['city']
        area = request.POST['area']
        street = request.POST['street']
        desc = request.POST['desc']
        try:
            set_default = request.POST['set_default']
            address_list = models.Address.objects.filter(user=request.user)
            for addr in address_list:
                addr.is_default = False
                addr.save()
            address = models.Address(recv_name=recv_name, recv_tel=recv_tel, province=province, city=city, area=area,
                                     street=street, desc=desc, is_default=True, user=request.user)
        except:
            address = models.Address(recv_name=recv_name, recv_tel=recv_tel, province=province, city=city, area=area,
                                     street=street, desc=desc, is_default=False, user=request.user)
        address.save()
        address_list = models.Address.objects.filter(user=request.user)
        return render(request, 'address/address_add.html', {'address_list': address_list})


@login_required
def list_address(request):
    """
    查看当前登录用户的所有收货地址
    :param request:
    :return:
    """
    address_list = models.Address.objects.filter(user=request.user)
    return render(request, 'address/address_list.html', {'address_list': address_list})






