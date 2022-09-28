from multiprocessing import context
from re import I
from django.shortcuts import render, redirect
from .forms import RegisterationForm, ProfileForm
from django.contrib import messages

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
        messages.success(request, "User created successfully!")
        return redirect('home')

    context = {
        "form" : form
    }
    return render(request, 'users/register.html', context)
