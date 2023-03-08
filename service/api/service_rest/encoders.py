from common.json import ModelEncoder
from .models import Appointment, Technician


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = ["name", "employee_number", "pk"]


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
                "pk",
                "vin",
                "owner",
                "time",
                "reason",
                "completed",
                "technician",
                "vip",
                ]
    encoders = {
        "technician": TechnicianEncoder(),
    }
