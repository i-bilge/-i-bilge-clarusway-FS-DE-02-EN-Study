from django.shortcuts import render, redirect
from django.contrib.auth import logout
from django.contrib import messages


# Create your views here.
def home(request):
    return render(request, 'users/home.html')


def logout_view(request):
    logout(request)
    messages.success(request, 'Logged out!')
    return redirect('home')

def register(request):
    form_user = UserForm()
    form_profile = UserProfileForm()

    context = {
        'form_user': form_user,
        'form_profile': form_profile,
    }

    return render(request, 'users/register.html', context)