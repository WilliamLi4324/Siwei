from django.shortcuts import render, redirect, reverse
from io import BytesIO
from django.http import HttpResponseRedirect
from . import models
from . import utils
from django.http import HttpResponse
from django.core.cache import cache
from django.core.paginator import Paginator
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required


def user_login(request):
    if request.method == 'GET':
        try:
            next_url = request.GET['next']
        except:
            next_url = '/'
        return render(request, 'users/user_login.html', {'next_url': next_url})
    elif request.method == "POST":
        next_url = request.POST.get("next", '/')
        username = request.POST['username'].strip()
        password = request.POST['password'].strip()
        code = request.POST["code"].strip()
        password1 = utils.encryption(password)
        # if code.lower() != request.session["code"].lower():
        #     return render(request, "users/user_login.html", {"msg": "验证码错误！！"})
        user = authenticate(username=username, password=password1)
        print(user)
        if user is not None:
            if user.is_active:
                login(request, user)
                try:
                    return redirect(next_url)
                except:
                    return redirect("/")
            else:
                return render(request, "users/user_login.html", {"msg": "您的账号已被锁定,请联系管理员"})
        else:
            return render(request, "users/user_login.html", {"msg": "用户名或者密码错误"})


@login_required
def user_logout(request):
    logout(request)
    return redirect('/')


def register(request):
    if request.method == 'GET':
        return render(request, 'users/user_register.html', {'msg': ""})
    elif request.method == "POST":
        # 接受参数
        next_url = request.POST.get("next", '/')
        username = request.POST["username"]
        password = request.POST['password']
        nickname = request.POST['nickname']
        confirmpwd = request.POST['confirmpwd']
        code = request.POST["code"].strip()
        # 数据校验
        # if code.lower() != request.session["code"].lower():
        #     return render(request, "users/user_register.html", {"msg": "验证码错误！！"})
        if username.strip() == "" or password.strip() == '':
            return render(request, "users/user_register.html", {"msg": "用户名或密码不能为空"})
        if password != confirmpwd:
            return render(request, "users/user_register.html", {"msg": "前后输入密码不一致"})
        try:
            User.objects.get(username=username)
            return render(request, "users/user_register.html", {"msg": "用户名已存在,请重新输入"})
        except:
            try:
                models.UserInfo.objects.get(username=username)
                return render(request, "users/user_register.html", {"msg": "用户昵称已存在,请重新输入"})
            except:
                password = utils.encryption(password)
                user = User.objects.create_user(username=username, password=password)
                userInfo = models.UserInfo(nickname=nickname, user=user)
                user.save()
                userInfo.save()
                return redirect(next_url)


@login_required
def user_info(request):
    return render(request, "users/user_info.html", {"msg": "登陆成功"})


@login_required
def user_update(request):
    if request.method == 'GET':
        return render(request, 'users/user_info.html', {'msg': ""})
    elif request.method == "POST":
        nickname = request.POST['nickname']
        age = request.POST['age']
        gender = request.POST['gender']
        bron = request.POST['bron']
        user_id = request.user.id
        user_id = User.objects.get(pk=user_id)
        userInfo = models.UserInfo.objects.get(user_id=user_id)
        userInfo.nickname = nickname
        userInfo.age = age
        userInfo.gender = gender
        userInfo.bron = bron
        userInfo.save()
        return render(request, "users/user_info.html", {"msg": "基本信息修改成功"})


@login_required
def user_photo(request):
    if request.method == 'GET':
        return render(request, 'users/user_info.html', {'msg': ""})
    elif request.method == "POST":
        user_id = request.user.id
        user_id = User.objects.get(pk=user_id)
        userInfo = models.UserInfo.objects.get(user_id=user_id)
        try:
            header = request.FILES["header"]
            userInfo.header = header
            userInfo.save()
            return render(request, "users/user_info.html", {"msg": "头像修改成功"})
        except:
            return render(request, "users/user_info.html", {"msg": "请选择您的头像"})


@login_required
def change_pwd(request):
    if request.method == 'GET':
        return render(request, 'users/user_info.html', {'msg': ""})
    elif request.method == "POST":
        next_url = request.POST.get("next", '/')
        password1 =request.POST['password1']
        password =request.POST['password']
        pwd = request.POST['pwd']
        pwd = utils.encryption(pwd)
        if password1 != password:
            return render(request, "users/user_info.html", {"msg": "两次密码不一致"})
        else:
            user_id = request.user.id
            user_id = User.objects.get(pk=user_id)
            username = user_id.username
            user = authenticate(username=username, password=pwd)

            if user is not None:
                if user.is_active:
                    userInfo = models.UserInfo.objects.get(user_id=user_id)
                    password = utils.encryption(password)
                    userInfo.password = password
                    user.save()
                    return render(request, "users/user_login.html", {"msg": "密码修改成功"})
                    # login(request, user)
                    # return redirect(next_url)
                else:
                    return render(request, "users/user_login.html", {"msg": "您的账号已被锁定,请联系管理员"})
            else:
                return render(request, "users/user_info.html", {"msg": "原始密码不正确"})


def code(request):
    img, msg = utils.create_code()
    f = BytesIO()
    img.save(f, "PNG")
    # 将验证码的值存储到session
    request.session["code"] = msg
    return HttpResponse(f.getvalue(), "image/png")