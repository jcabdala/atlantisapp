import datetime

from django.shortcuts import render_to_response
from django.template import RequestContext
from django.forms import ModelForm
from front.models import Client
# Create your views here.


def index(request, *args, **kwargs):
    form = ClientForm()
    return render_to_response("index.html", locals(),
                              context_instance=RequestContext(request))


def calcular(request, *args, **kwargs):
    #client = Client(creation=datetime.datetime.now())
    #form = ClientForm(request.POST, instance=client)

    #if form.is_valid():
        #form.save()
    print "termine"
    return render_to_response("report.html", locals(),
                              context_instance=RequestContext(request))


class ClientForm(ModelForm):
    class Meta:
        model = Client
        fields = ["name", "lat", "lon", "email"]
