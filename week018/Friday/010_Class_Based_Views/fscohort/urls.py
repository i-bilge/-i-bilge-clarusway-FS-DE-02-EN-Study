from django.urls import path
from .views import *

urlpatterns = [
    # path('', home, name='home'),
    path('', StudentListView.as_view(), name='home'),
    # path('create/', student_create, name='create'),
    path('create/', StudentCreateView.as_view(), name='create'),
    # path('update/<int:id>', student_update, name='update'),
    path('update/<int:id>', StudentUpdateView.as_view(), name='update'),
    # path('delete/<int:id>', student_delete, name='delete'),
    path('delete/<int:pk>', StudentDeleteView.as_view(), name='delete'),
    # path('detail/<int:id>', student_detail, name='detail'),
    path('detail/<int:pk>', StudentDetailView.as_view(), name='detail'),
]