# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
#
# Also note: You'll have to insert the output of 'django-admin sqlcustom [app_label]'
# into your database.
from __future__ import unicode_literals

from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=80)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup)
    permission = models.ForeignKey('AuthPermission')

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group_id', 'permission_id'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType')
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type_id', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=30)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.CharField(max_length=254)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser)
    group = models.ForeignKey(AuthGroup)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user_id', 'group_id'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser)
    permission = models.ForeignKey(AuthPermission)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user_id', 'permission_id'),)


class CuerposAguaBase(models.Model):
    id_1 = models.AutoField(primary_key=True)
    geom = models.TextField(blank=True, null=True)  # This field type is a guess.
    id_0 = models.CharField(max_length=10, blank=True, null=True)
    union = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
    tipo = models.CharField(max_length=20, blank=True, null=True)
    nombre = models.CharField(max_length=45, blank=True, null=True)
    regimen = models.CharField(max_length=17, blank=True, null=True)
    navegabili = models.CharField(max_length=12, blank=True, null=True)
    provincia = models.CharField(max_length=60, blank=True, null=True)
    pais = models.CharField(max_length=15, blank=True, null=True)
    observacio = models.CharField(max_length=50, blank=True, null=True)
    hoja = models.CharField(max_length=10, blank=True, null=True)
    fuente = models.CharField(max_length=50, blank=True, null=True)
    id = models.CharField(max_length=10, blank=True, null=True)
    nombre_1 = models.CharField(max_length=59, blank=True, null=True)
    regional = models.CharField(max_length=10, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cuerpos_agua_base'


class CuerposDeAgua(models.Model):
    id_0 = models.AutoField(primary_key=True)
    geom = models.TextField(blank=True, null=True)  # This field type is a guess.
    union = models.FloatField(blank=True, null=True)
    tipo = models.CharField(max_length=20, blank=True, null=True)
    nombre = models.CharField(max_length=45, blank=True, null=True)
    regimen = models.CharField(max_length=17, blank=True, null=True)
    navegabili = models.CharField(max_length=12, blank=True, null=True)
    provincia = models.CharField(max_length=60, blank=True, null=True)
    pais = models.CharField(max_length=15, blank=True, null=True)
    observacio = models.CharField(max_length=50, blank=True, null=True)
    hoja = models.CharField(max_length=10, blank=True, null=True)
    fuente = models.CharField(max_length=50, blank=True, null=True)
    id = models.IntegerField(blank=True, null=True)
    nombre_1 = models.CharField(max_length=59, blank=True, null=True)
    regional = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cuerpos_de_agua'


class Departamentos(models.Model):
    geom = models.TextField(blank=True, null=True)  # This field type is a guess.
    nombre = models.CharField(max_length=59, blank=True, null=True)
    regional = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'departamentos'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.SmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', blank=True, null=True)
    user = models.ForeignKey(AuthUser)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Layer(models.Model):
    topology = models.ForeignKey('Topology')
    layer_id = models.IntegerField()
    schema_name = models.CharField(max_length=-1)
    table_name = models.CharField(max_length=-1)
    feature_column = models.CharField(max_length=-1)
    feature_type = models.IntegerField()
    level = models.IntegerField()
    child_id = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'layer'
        unique_together = (('topology_id', 'layer_id'), ('schema_name', 'table_name', 'feature_column'),)


class Lc82300812013113Lgn01B3(models.Model):
    rid = models.AutoField(primary_key=True)
    rast = models.TextField(blank=True, null=True)  # This field type is a guess.
    filename = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'lc82300812013113lgn01_b3'


class SpatialRefSys(models.Model):
    srid = models.IntegerField(primary_key=True)
    auth_name = models.CharField(max_length=256, blank=True, null=True)
    auth_srid = models.IntegerField(blank=True, null=True)
    srtext = models.CharField(max_length=2048, blank=True, null=True)
    proj4text = models.CharField(max_length=2048, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'spatial_ref_sys'


class Topology(models.Model):
    name = models.CharField(unique=True, max_length=-1)
    srid = models.IntegerField()
    precision = models.FloatField()
    hasz = models.BooleanField()

    class Meta:
        managed = False
        db_table = 'topology'
