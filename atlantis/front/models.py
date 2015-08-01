from django.db import models

class Client(models.Model):

    name = models.CharField(max_length=100, null=False)
    lat = models.FloatField()
    lon = models.FloatField()
    email = models.EmailField(null=False, blank=False)
    creation = models.DateTimeField()

    def __unicode__(self):
        return '%s' % (self.name)
