from django.urls import path, include
from .views import StudentDUD, StudentList, StudentListCreateAPI, StudentListGeneric, home, StudentDetailUpdateDelete, StudentMVS, StudentRetrieveUpdateDestroyGeneric
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('student', StudentMVS)


urlpatterns = [
    # path('', StudentList.as_view()),
    path('list1', StudentListGeneric.as_view()),
    path('list2', StudentListCreateAPI.as_view()),
    path('<int:pk>/', StudentDetailUpdateDelete.as_view()),
    path('dud/<int:pk>/', StudentDUD.as_view()),
    path('gen/<int:pk>/', StudentRetrieveUpdateDestroyGeneric.as_view()),
    # path("", include(router.urls)),
]

urlpatterns += router.urls