from multiprocessing import context
from django.shortcuts import render
from django.http import HttpResponse

from week018.Tuesday.home.models import Student

# Create your views here.
def home(request):
    return HttpResponse("<h1>Home Page!!!</h1>")

def index(request):
    students = Student.objects.all()
    context = {
        'students': students,
        "student": "Henrry",
        "number": 123456,
        "myl_list": [1, 2, 3],
    }
    return render(request, "home/index.html", context)

