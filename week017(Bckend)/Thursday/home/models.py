from pyexpat import model
from django.db import models

# Create your models here.
class Student(models.Model):
    first_name = models.CharField(max_length=30)
    lastt_name = models.CharField(max_length=30)
    number = models.IntegerField()
    about = models.TextField(null=True, blank=True)
    register_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.first_name