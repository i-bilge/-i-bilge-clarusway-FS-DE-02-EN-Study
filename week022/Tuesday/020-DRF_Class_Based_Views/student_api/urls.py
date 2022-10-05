from django.urls import path
from .views import StudentList, StudentListCreateAPI, StudentListGeneric, home, StudentDetailUpdateDelete

urlpatterns = [
    path('', StudentList.as_view()),
    path('<int:pk>/', StudentDetailUpdateDelete.as_view()),
    path('list1', StudentListGeneric.as_view()),
    path('list2', StudentListCreateAPI.as_view()),
]