from time import timezone
from django.contrib import admin
from .models import Student
from django.utils import timezone

# Register your models here.
class StudentAdmin(admin.ModelAdmin):
    list_display =  ("name", "number", "is_active","register_date", "added_since")
    actions = ("is_active",)
    list_filter = ("is_active", "update_date")
    ordering = ("name", "update_date")
    search_fields = ("name", "about")
    list_editable = ("is_active",)
    list_per_page = 15
    prepopulated_fields = {'slug': ('about',)}
    date_hierarchy = "register_date"

    fieldsets = (
        (None, {
            "fields": (
                ('name','number'),'is_active'
            )
        }),
        ('Advenced Options', {
            "fields": ('about', 'slug'),
            "classes": ('collapse',),
            "description": "You can use this action for optional settings"
        })
    )

    def is_active(self, request, queryset):
        count = queryset.update(is_active=True)
        self.message_user(request, f"{count} students activated")

    is_active.short_description = 'activate selected students'

    def added_since(self, student):
        difference = timezone.now() - student.register_date
        return difference.days

admin.site.register(Student, StudentAdmin)