from dataclasses import fields
from pyexpat import model
from statistics import mode
from django import forms
from django.contrib.auth.models import User
from .models import Profile
from django.contrib.auth.forms import UserCreationForm

class RegisterationForm(UserCreationForm):
    email = forms.EmailField()

    class Meta:
        model=User
        fields=("username", "email", "first_name", "last_name")

    def clean_email(self):
        email = self.cleaned_data.get('email')

        if email == "":
            raise forms.ValidationError("Email is requird!")
        if User.objects.filter(email=email).exists():
            raise forms.ValidationError("Emails should be unique, that email is registred.")
        return email

class ProfileForm(forms.ModelForm):

    class Meta:
        model=Profile
        fields=("bio", "image")

class UserUpdateForm(forms.ModelForm):
    email = forms.EmailField()
    
    class Meta:
        model=User
        fields = ("username", "email", "first_name", "last_name")