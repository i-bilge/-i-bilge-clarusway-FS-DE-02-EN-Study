from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from .models import Student
from .forms import StudentForm
from django.shortcuts import get_object_or_404
from django.contrib import messages
from django.views.generic import TemplateView, ListView, DetailView, CreateView, UpdateView, DeleteView
from django.contrib.messages.views import SuccessMessageMixin
# Create your views here.

def index(request):
    return render(request, 'fscohort/index.html')

class IndexView(TemplateView):
    template_name = "fscohort/index.html"

def home(request):
    students = Student.objects.all()

    try:
        if Student.objects.get(number=52):
            print('That is it!')
    except Student.DoesNotExist:
        print('Not found')
    
    context = {
        "students": students 
    }
    return render(request, "fscohort/home.html", context)

from django.utils import timezone
class StudentListView(ListView):
    model = Student
    # template_name = "fscohort/home.html" # default : "fscohort/student_list.html"
    # context_object_name = "students" # default: object_list

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['now'] = timezone.now()
        print(context)
        return context

def student_create(request):
    form = StudentForm()
    if request.method=='POST':
        form = StudentForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Student Created!')
            # form = StudentForm()
            return redirect("home")
    context = {
        "form": form,
    }
    return render(request, 'fscohort/student_create.html', context)

from django import forms
class StudentCreateView(SuccessMessageMixin,CreateView):
    model = Student
    form_class = StudentForm
    # template_name = "fscohort/student_create.html"  # default appname/modelname_form.html
    success_url = reverse_lazy("home")
    success_message = "Student added successfully"

    def form_valid(self, form):
        """If the form is valid, save the associated model."""
        self.object = form.save()
        self.object.last_name = self.object.last_name.upper()

        # if not 1000 < self.object.number < 10000:
        #      raise forms.ValidationError("Invalid student number!")

        self.object.save()

        return super().form_valid(form)

    

def student_update(request, id):
    student = Student.objects.get(id=id)
    form = StudentForm(instance=student)
    if request.method=='POST':
        form = StudentForm(request.POST, instance=student)
        if form.is_valid():
            form.save()
            # form = StudentForm(instance=student)
            messages.success(request, 'Student Updated!')
            return redirect("home")
    context = {
        "form": form,
    }
    return render(request, 'fscohort/student_update.html', context)

class StudentUpdateView(UpdateView):
    model = Student
    form_class = StudentForm
    success_url =  reverse_lazy('home')
    pk_url_kwarg = 'id'
    template_name = 'fscohort/student_update.html'


def student_delete(request, id):
    # student = Student.objects.get(id=id)
    student = get_object_or_404(Student, id=id)
    if request.method=='POST':
            student.delete()
            return redirect("home")
    return render(request, 'fscohort/student_delete.html')

class StudentDeleteView(DeleteView):
    model = Student
    template_name = 'fscohort/student_delete.html' # default appname/modelname_confirm_delete.html
    success_url = reverse_lazy('home')

def student_detail(request, id):
    # student = Student.objects.get(id=id)
    student = get_object_or_404(Student, id=id)
    context = {
        'student': student,
    }
    return render(request, 'fscohort/student_detail.html', context)

class StudentDetailView(DetailView):
    model = Student
    # template_name defaul model_detail---> studen_detail.html 
    # pk_url_kwarg = 'id'
    # context_object_name = 'student'