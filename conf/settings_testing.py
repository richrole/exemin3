# -*- coding: utf-8 -*-
"""
用于测试环境的全局配置
"""
import os

from conf.default import PROJECT_PATH
from settings import APP_ID


# ===============================================================================
# 数据库设置, 测试环境数据库设置
# ===============================================================================
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.mysql',  # 默认用mysql
#         'NAME': APP_ID,                        # 数据库名 (默认与APP_ID相同)
#         'USER': '',                            # 你的数据库user
#         'PASSWORD': '',                        # 你的数据库password
#         'HOST': '',                   		   # 数据库HOST
#         'PORT': '3306',                        # 默认3306
#     },
# }

# 使用sqlite
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',  # 默认用mysql
        'NAME': os.path.join(os.path.dirname(PROJECT_PATH), 'db.sqlite3'),
    },
}