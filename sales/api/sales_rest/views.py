from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .models import SaleRecord, SalesPerson, Customer, AutomobileVO
from .encoders import CustomerEncoder, SalesPersonEncoder, SaleRecordEncoder


@require_http_methods(["GET"])
def api_show_customers(request, customer_id=None):
    try:
        if customer_id is None:
            customers = Customer.objects.all()
        else:
            customers = Customer.objects.get(id=customer_id)
        return JsonResponse(
            customers,
            encoder=CustomerEncoder,
            safe=False,
        )
    except Customer.DoesNotExist:
        return JsonResponse(
            {"message": "Customer not found"},
            status=404,
        )


@require_http_methods(["POST"])
def api_create_customer(request):
    content = json.loads(request.body)
    name = content.get("name")
    address = content.get("address")
    phone_number = content.get("phone_number")
    customer = Customer.objects.create(
        name=name,
        address=address,
        phone_number=phone_number,
    )
    return JsonResponse(
        customer,
        encoder=CustomerEncoder,
        safe=False,
    )


@require_http_methods(["GET"])
def api_show_sales_people(request, sales_person_id=None):
    try:
        if sales_person_id is None:
            sales_people = SalesPerson.objects.all()
        else:
            sales_people = SalesPerson.objects.get(id=sales_person_id)
        return JsonResponse(
            sales_people,
            encoder=SalesPersonEncoder,
            safe=False,
        )
    except SalesPerson.DoesNotExist:
        return JsonResponse(
            {"message": "Sales person not found"},
            status=404,
        )


@require_http_methods(["POST"])
def api_create_sales_person(request):
    content = json.loads(request.body)
    name = content.get("name")
    employee_id = content.get("employee_id")
    sales_person = SalesPerson.objects.create(
        name=name,
        employee_id=employee_id,
    )
    return JsonResponse(
        sales_person,
        encoder=SalesPersonEncoder,
        safe=False,
    )


@require_http_methods(["GET"])
def api_show_all_sales(request):
    sales = SaleRecord.objects.all()
    return JsonResponse(
        sales,
        encoder=SaleRecordEncoder,
        safe=False,
    )


@require_http_methods(["GET"])
def api_show_sales(request, sale_id):
    try:
        if sale_id is None:
            sale = SaleRecord.objects.all()
        else:
            sale = SaleRecord.objects.get(id=sale_id)
        return JsonResponse(
            sale,
            encoder=SaleRecordEncoder,
            safe=False,
        )
    except SaleRecord.DoesNotExist:
        return JsonResponse(
            {"message": "sale record not found"},
            status = 404
        )


@require_http_methods(["POST"])
def api_create_sale(request):
    content = json.loads(request.body)
    automobile_id = content.get("automobile")
    sales_person_id = content.get("sales_person")
    customer_id = content.get("customer")
    price = content.get("price")
    try:
        automobile = AutomobileVO.objects.get(vin=automobile_id)
        sales_person = SalesPerson.objects.get(employee_id=sales_person_id)
        customer = Customer.objects.get(id=customer_id)
    except (AutomobileVO.DoesNotExist, SalesPerson.DoesNotExist, Customer.DoesNotExist):
        return JsonResponse(
            {"message": "Invalid automobile, sales person, or customer id"},
            status=400,
        )
    sale = SaleRecord.objects.create(
        automobile=automobile,
        sales_person=sales_person,
        customer=customer,
        price=price,
    )
    return JsonResponse(
        sale,
        encoder=SaleRecordEncoder,
        safe=False,
    )


# @require_http_methods(["POST"])
# def api_create_sale(request):
#     content = json.loads(request.body)
#     automobile_id = content.get("automobile")
#     sales_person_id = content.get("sales_person")
#     customer_id = content.get("customer")
#     price = content.get("price")
#     try:
#         automobile = AutomobileVO.objects.get(id=automobile_id)
#         sales_person = SalesPerson.objects.get(id=sales_person_id)
#         customer = Customer.objects.get(id=customer_id)
#     except (AutomobileVO.DoesNotExist, SalesPerson.DoesNotExist, Customer.DoesNotExist):
#         return JsonResponse(
#             {"message": "Invalid automobile, sales person, or customer id"},
#             status=400,
#         )
#     sale = SaleRecord.objects.create(
#         automobile=automobile,
#         sales_person=sales_person,
#         customer=customer,
#         price=price,
#     )
#     return JsonResponse(
#         sale,
#         encoder=SaleRecordEncoder,
#         safe=False,
#     )
