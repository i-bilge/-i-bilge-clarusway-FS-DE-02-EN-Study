from django.db import router
from django.urls import path, include
from .views import StudentDUD, StudentList, StudentListCreateAPI, StudentListGeneric, home, StudentDetailUpdateDelete, StudentModelViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('-student', StudentModelViewSet)

urlpatterns = [
    path('', StudentList.as_view()),
    path('<int:pk>/', StudentDetailUpdateDelete.as_view()),
    path('list1', StudentListGeneric.as_view()),
    path('list2', StudentListCreateAPI.as_view()),
    path('dud/<int:pk>/', StudentDUD.as_view()),
    path('viewset',include(router.urls)),
]