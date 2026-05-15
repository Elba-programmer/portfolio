"""
Django settings for portfolio_backend project.
"""
from pathlib import Path
import os
from dotenv import load_dotenv

load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = os.getenv('SECRET_KEY', 'change-me-in-production')

DEBUG = os.getenv('DEBUG', 'True') == 'True'

ALLOWED_HOSTS = os.getenv('ALLOWED_HOSTS', 'localhost,127.0.0.1').split(',')

INSTALLED_APPS = [
    'django.contrib.staticfiles',
    'corsheaders',
    'contact',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
]

ROOT_URLCONF = 'portfolio_backend.urls'

WSGI_APPLICATION = 'portfolio_backend.wsgi.application'

# ─── CORS ─────────────────────────────────────────────────────
# Allow your portfolio HTML to call the API
CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000',
    'http://127.0.0.1:5500',   # VS Code Live Server default
    'http://localhost:5500',
]
# When deployed, add your live domain here, e.g.:
# 'https://elbaouma.github.io'

# ─── Email ────────────────────────────────────────────────────
EMAIL_BACKEND   = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST      = 'smtp.gmail.com'
EMAIL_PORT      = 587
EMAIL_USE_TLS   = True
EMAIL_HOST_USER = os.getenv('MAIL_USERNAME')
EMAIL_HOST_PASSWORD = os.getenv('MAIL_PASSWORD')
DEFAULT_FROM_EMAIL  = os.getenv('MAIL_USERNAME')
OWNER_EMAIL     = os.getenv('OWNER_EMAIL', os.getenv('MAIL_USERNAME'))

DATABASES = {}  # No database needed for this project

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
