from django.shortcuts import render_to_response
from django.template import RequestContext
from django.forms import ModelForm
from front.models import Client
import requests
import json
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
            email = calc.cleaned_data['email']
            print lat
            print lon
            url = "http://172.18.7.119:8000/atlantis/default/agua.json?"
            data = url + "latitud=" + str(lat) + "&longitud=" + str(lon)
            r = requests.get(data)
            dic = r.json()
            print dic
            zone = ""
            status = ""
            print dic["rows"][0]

            if dic["rows"][0]:
                status = "danger"
                zone = "A sufrido una inundacion "
            else:
                zone = "No a sufrido una inundacion "
                status = "success"

    return render_to_response("report.html", locals(),
                              context_instance=RequestContext(request))


class ClientForm(ModelForm):
    class Meta:
        model = Client
        fields = ["name", "lat", "lon", "email"]
