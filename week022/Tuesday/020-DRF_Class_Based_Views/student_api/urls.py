from django.urls import path
from .views import StudentList, home, StudentDetailUpdateDelete

urlpatterns = [
    path('', StudentList.as_view()),
    path('<int:pk>/', StudentDetailUpdateDelete.as_view()),
]