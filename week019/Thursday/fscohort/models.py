from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=50)
    number = models.IntegerField()
    about = models.TextField()
    is_active = models.BooleanField(default=False)
    register_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateField(auto_now=True)
    slug = models.SlugField(null=True, blank=True)

    def __str__(self):
        return self.name