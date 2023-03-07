from django.urls import path
from .views import list_appointments

urlpatterns = [
    path("appointments/", list_appointments, name="list_appointments"),

]


   # path("shoes/<int:pk>/", show_shoe, name="show_shoe"),
