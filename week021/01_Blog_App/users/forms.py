from dataclasses import fields
from pyexpat import model
from statistics import mode
from django import forms
from django.contrib.auth.models import User
from .models import Profile
from django.contrib.auth.forms import UserCreationForm

class RegisterationForm(UserCreationForm):

    class Meta:
        model=User
        fields=("username", "email", "first_name", "last_name")
class ProfileForm(forms.ModelForm):

    class Meta:
        model=Profile
        fields=("bio", "image")