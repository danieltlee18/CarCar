from django.db import models


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200)
    vin = models.CharField(max_length=200, unique=True)


class Technician(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.CharField(max_length=200)


class Appointment(models.Model):
    vin = models.CharField(max_length=200)
    owner = models.CharField(max_length=200)
    time = models.DateTimeField()
    reason = models.TextField()
    completed = models.BooleanField(default=False)
    vip = models.BooleanField()
    technician = models.ForeignKey(
        Technician,
        related_name="assignments",
        on_delete=models.CASCADE,
    )
