# Generated by Django 5.0 on 2023-12-13 16:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='productModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('productName', models.CharField(max_length=50)),
                ('productImage', models.ImageField(upload_to='')),
                ('productDescrip', models.TextField()),
            ],
        ),
    ]