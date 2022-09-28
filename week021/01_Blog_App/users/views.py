from multiprocessing import context
from re import I
from django.shortcuts import render, redirect
from .forms import RegisterationForm, ProfileForm
from django.contrib import messages
from .models import Profile
# from .signals import *

# Create your views here.
def home(request):
    return render(request, 'home.html')

def register(request):
    form = RegisterationForm(request.POST or None)

    if request.user.is_authenticated:
        messages.warning(request, "You have allready an account...")
        return redirect('home')

    if form.is_valid():
        form.save()
        # user = form.save()
        # Profile.objects.create(user=user)
        messages.success(request, "User created successfully!")
        return redirect('home')

    context = {
        "form" : form
    }
    return render(request, 'users/register.html', context)

def profile(request):
    u_form = RegisterationForm(request.POST or None, instance = request.user)
    p_form = ProfileForm(request.POST or None, instance=request.user.profile, files=request.FILES)

    if u_form.is_valid() and p_form.is_valid():
        u_form.save()
        p_form.save()
        messages.success(request, 'Profile Updated')
        return redirect(request.path)

    context = {
        'u_form' : u_form,
        'p_form' : p_form
    }

    return render(request, 'users/profile.html', context)

