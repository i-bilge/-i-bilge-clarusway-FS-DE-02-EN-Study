from pyexpat import model
from statistics import mode
from unicodedata import name
from django.db import models

# Create your models here.
class Creator(models.Model):
    first_name = models.CharField(max_length=25)
    last_name= models.CharField(max_length=25)

    def __str__(self):
        return self.first_name

class Languages(models.Model):
    creator = models.OneToOneField(Creator, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Frameworks(models.Model):
    languages = models.ForeignKey(Languages, on_delete= models.CASCADE)
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

