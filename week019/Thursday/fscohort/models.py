from itertools import product
from pyexpat import model
from re import M
from statistics import mode
from tabnanny import verbose
from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100, verbose_name="category name")
    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name

class Student(models.Model):
    name = models.CharField(max_length=50)
    number = models.IntegerField()
    about = models.TextField()
    is_active = models.BooleanField(default=False)
    register_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateField(auto_now=True)
    slug = models.SlugField(null=True, blank=True)
    categories = models.ManyToManyField(Category, related_name='students')

    class Meta:
        verbose_name = "Student"
        verbose_name_plural = "Students"

    def __str__(self):
        return self.name


class Review(models.Model):

    product = models.ForeignKey(Student, on_delete=models.CASCADE, related_name='reviews')
    review = models.TextField()
    is_released = models.BooleanField(default=True)
    created_date = models.DateField(auto_now_add=True)
    

    class Meta:
        verbose_name = 'Review'
        verbose_name_plural = 'Reviews'

    def __str__(self):
        return f"{self.product.name} - {self.review}"


