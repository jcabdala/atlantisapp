from django.shortcuts import render_to_response
from django.template import RequestContext
from django.forms import ModelForm
from front.models import Client
import requests
# Create your views here.


def index(request, *args, **kwargs):
    form = ClientForm()
    return render_to_response("index.html", locals(),
                              context_instance=RequestContext(request))


def calcular(request, *args, **kwargs):
    calc = ClientForm(request.POST)
    if calc.is_valid():
            lat = calc.cleaned_data['lat']
            lon = calc.cleaned_data['lon']
            name = calc.cleaned_data['name']
            mail = calc.cleaned_data['email']
            print lat
            print lon
            url = "http://172.18.7.119:8000/atlantis/default/agua.json?"
            data = url + "latitud=" + str(lat) + "&longitud=" + str(lon)
            r = requests.get(data)
            print r.json
            print r.text
    return render_to_response("report.html", locals(),
                              context_instance=RequestContext(request))


class ClientForm(ModelForm):
    class Meta:
        model = Client
        fields = ["name", "lat", "lon", "email"]
