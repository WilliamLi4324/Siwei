# Generated by Django 4.2.1 on 2023-05-18 19:58

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0003_user_confirmstring_alter_task_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='EmailVerifyRecord',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=20, verbose_name='verification code')),
                ('email', models.EmailField(max_length=50, verbose_name='Mail')),
                ('send_type', models.CharField(choices=['register', 'forget'], max_length=10, verbose_name='Captcha type')),
            ],
            options={
                'verbose_name': 'E-mail verification code',
                'verbose_name_plural': 'E-mail verification code',
            },
        ),
        migrations.AlterField(
            model_name='task',
            name='user',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.DeleteModel(
            name='ConfirmString',
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]
