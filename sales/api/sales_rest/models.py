from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    vin = models.TextField(max_length=50)
    import_href = models.TextField(max_length=200)

class SalesPerson(models.Model):
    name = models.TextField(max_length=50)
    employee_id = models.TextField(max_length=50)

    def __str__(self):
        return f'{self.name} ({self.employee_id})'

class Customer(models.Model):
    name = models.TextField(max_length=50)
    address = models.TextField(max_length=100)
    phone_number = models.TextField(max_length=14)

    def __str__(self):
        return self.name

class SaleRecord(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="automobile",
        on_delete=models.CASCADE,
    )
    sales_person = models.ForeignKey(
        SalesPerson,
        related_name="sales_person",
        on_delete=models.CASCADE,
    )
    customer = models.ForeignKey(
        Customer,
        related_name="customer",
        on_delete=models.CASCADE,
    )
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"{self.automobile.vin} sold to {self.customer.name} by {self.sales_person.name}"

    def get_api_url(self):
        return reverse("api_show_sales", kwargs={"id": self.pk})
