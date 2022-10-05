from django.shortcuts import render, HttpResponse, get_object_or_404
from .models import Student

from .serializers import StudentSerializerWithSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

# Create your views here.
def home(request):
    return HttpResponse('<h1>API Page</h1>')

