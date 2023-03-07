from django.urls import path
from .views import list_appointments, list_technicians, change_appointment

urlpatterns = [
    path("appointments/", list_appointments, name="list_appointments"),
    path("appointments/<int:id>/", change_appointment, name="change"),
    path("technicians/", list_technicians, name="list_technicians"),

]
