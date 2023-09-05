"""
Version 1.1.0
Author lkk
Email lkk199404@163.com
date 2018-11-06 16:22
DESC 工具类
"""
from django.shortcuts import render
from django.core.cache import cache
from . import models
import hmac, re, _sha256
import string
import random
from PIL import Image, ImageDraw, ImageFont
from django.conf import settings
import logging


# 密码加密
def encryption(key):
    pwd = hmac.new(key.encode('utf-8'), settings.SALT_KEY.encode('utf-8'), 'MD5')
    return pwd.hexdigest()


# 验证码
def getRandomChar(count=4):
    # 生成随机字符串
    # string模块包含各种字符串，以下为小写字母加数字
    ran = string.ascii_lowercase + string.ascii_uppercase + string.digits
    char = ''
    for i in range(count):
        char += random.choice(ran)
    return char


# 返回一个随机的RGB颜色
def getRandomColor():
    return random.randint(50, 150), random.randint(50, 150), random.randint(50, 150)


def create_code():
    # 创建图片，模式，大小，背景色
    img = Image.new('RGB', (120, 30), (255, 255, 255))
    # 创建画布
    draw = ImageDraw.Draw(img)
    # 设置字体
    font = ImageFont.truetype('ARIALUNI.TTF', 25)

    code = getRandomChar()
    # 将生成的字符画在画布上
    for t in range(4):
        draw.text((25*t+7, 0), code[t], getRandomColor(), font)

    # 生成干扰点 增加识别的难度
    for _ in range(random.randint(99, 110)):
        # 位置，颜色
        draw.point((random.randint(0, 120), random.randint(0, 30)), fill=getRandomColor())
    # 生成干扰线 增加识别的难度
    for _ in range(random.randint(8, 15)):
        begin = random.randint(0, 120), random.randint(0, 50)
        end = random.randint(0, 120), random.randint(0, 50)
        draw.line([begin, end], fill=getRandomColor())

    # 使用模糊滤镜使图片模糊
    # img = img.filter(ImageFilter.BLUR)
    return img, code
