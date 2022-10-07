from os import stat
from pyexpat import model
from django.shortcuts import HttpResponse, render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.generics import GenericAPIView, ListCreateAPIView,RetrieveUpdateDestroyAPIView
from rest_framework.mixins import ListModelMixin, CreateModelMixin, DestroyModelMixin
from rest_framework.viewsets import ModelViewSet

from .serializers import StudentSerializer
from .models import Student

from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from .pagination import SmallPageNumberPagination, LargePageNumberPagination



# Create your views here.

def home(request):
    return HttpResponse('<h1>API PAGE</h1>')

# @api_view(['GET', 'POST'])
# def student_list(request):
#     if request.method == 'GET':
#         student = Student.objects.all()
#         serializer = StudentSerializer(student, many=True)
#         return Response(serializer.data)
#     elif request.method == 'POST':
#         serializer = StudentSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class StudentList(APIView):
    def get(self, request):
        student = Student.objects.all()
        serializer = StudentSerializer(student, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.errors)

# ------------------------------------------------

class StudentDetailUpdateDelete(APIView):
    def get(self, request, pk):
        student = get_object_or_404(Student, pk=pk)
        serializer = StudentSerializer(student)
        return Response(serializer.data)

    def put(self, request, pk):
        student = get_object_or_404(Student, pk=pk)
        serializer = StudentSerializer(student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.errors)

    def delete(self, request, pk):
        student = get_object_or_404(Student, pk=pk)
        student.delete()
        data = {
            "message" : "Student is deleted..."
        }
        return Response(data, status=status.HTTP_204_NO_CONTENT)

# ------------------------------------------------
        
class StudentListGeneric(GenericAPIView, ListModelMixin, CreateModelMixin, DestroyModelMixin):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
# ------------------------------------------------

class StudentListCreateAPI(ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

# ------------------------------------------------
class StudentDUD(RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    # lookup_field = 'id'
# ------------------------------------------------

class StudentModelViewSet(ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    pagination_class = LargePageNumberPagination
    # pagination_class = MyLimitOfSetPagination

# ------------------------------------------------
# ------------------------------------------------
