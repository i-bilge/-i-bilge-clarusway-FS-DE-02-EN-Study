from django.contrib import admin
from .models import Student

# Register your models here.
class StudentAdmin(admin.ModelAdmin):
    list_display =  ("name", "number", "is_active","register_date")
    list_filter = ("is_active", "update_date")
    ordering = ("name", "update_date")
    search_fields = ("name", "about")
    list_editable = ("is_active",)
    list_per_page = 15
    prepopulated_fields = {'slug': ('about',)}

admin.site.register(Student, StudentAdmin)