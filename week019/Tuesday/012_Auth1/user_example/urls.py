from django.urls import path
from .views import home
from django.contrib.auth.views import PasswordChangeView


urlpatterns = [
    path('', home, name='home'),
    path('change_password/', PasswordChangeView.as_view(template_name='registration/change_password.html'), name='change_password'),
]
