# Generated by Django 2.1.dev20180114011155 on 2018-05-02 07:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_auto_20180502_0517'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='about',
            field=models.TextField(default='about'),
        ),
    ]
