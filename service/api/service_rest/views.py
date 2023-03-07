
from django.views.decorators.http import require_http_methods
from .models import Appointment, Technician, AutomobileVO
import json
from django.http import JsonResponse
from common.json import ModelEncoder



class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = ["name", "employee_number"]


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
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


@require_http_methods(["GET", "POST"])
def list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
        )
    else:
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )

@require_http_methods(["GET", "POST"])
def list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder,
        )
    else:
        content = json.loads(request.body)

        try:
            tech_number = content["technician"]
            tech = Technician.objects.get(employee_number=tech_number)
            content["technician"] = tech
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid employee number"},
                status=400,
            )

        try:
            incoming_vin = content["vin"]
            vip = AutomobileVO.objects.get(vin=incoming_vin)
            print('car is in inventory')
            content["vip"] = True
        except AutomobileVO.DoesNotExist:
            content["vip"] = False
            print('car not in inventory')

        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )


@require_http_methods(["PUT", "DELETE"])
def change_appointment(request, id):
    if request.method == "DELETE":
        count, _ = Appointment.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)
        Appointment.objects.filter(id=id).update(**content)
        appointment = Appointment.objects.get(id=id)

        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )
