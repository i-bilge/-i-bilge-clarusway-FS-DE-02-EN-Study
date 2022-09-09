from django import forms
from .models import Student


class StudentForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = "__all__"

    def clean_number(self):
        number = self.cleaned_data.get('number')

        if not 1000 < number < 10000:
            raise forms.ValidationError('Numbers should be between 1000-9999')
        
        return number
