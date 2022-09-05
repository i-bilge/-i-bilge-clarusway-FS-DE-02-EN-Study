from django.db import models

# Create your models here.
class Students(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    number = models.IntegerField()
    about = models.TextField(null= True, blank=True)

    def __str__(self):
        return self.first_name