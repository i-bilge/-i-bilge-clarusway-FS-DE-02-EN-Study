from multiprocessing import context
from django.contrib import messages
from urllib import response
from django.shortcuts import render
import requests
from decouple import config
from pprint import pprint
from .models import City

from week020.WeatherApp.weatherapp.models import City

# Create your views here.
def index(request):
    cities = City.objects.all()
    url = "https://api.openweathermap.org/data/2.5/weather?q={}&appid={}&units=metric"

    user_city = request.GET.get("name")
    if user_city:
        response = requests.get(url.format(user_city, config("API_KEY")))
        print(response.status_code)
        if response.status_code == 200:
            content = response.json()
            response_city = content["name"]
            if City.objects.filter(name=response_city):
                messages.warning(request, "city already ewists!")
            else:
                City.objects.create(neme=response_city)
                messages.success(request, "Cty is created...")
        else:
            messages.warning(request, "city not found!")


    city_data =[]
    # url = "https://api.openweathermap.org/data/2.5/weather?q={}&appid={}&units=metric"
    # city = "Berlin"
    # response = requests.get(url.format(city, config('API_KEY')))
    # content = response.json()
    # pprint(content)
    # pprint(type(content))
    for city in cities:
        url = "https://api.openweathermap.org/data/2.5/weather?q={}&appid={}&units=metric"
        response = requests.get(url.format(city, config('API_KEY')))
        content = response.json()
        data = {
            "city" : city.name,
            "temp" : content["main"]["temp"],
            "desc" : content["weather"][0]["descriptions"],
            "icon" : content["weather"][0]["icon"],
        }
        pprint(data)
        city_data.append(data)

    context = {
        "city_data" : city_data
    }

    return render(request, 'weatherapp/index.html', context)