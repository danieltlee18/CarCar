from .views import api_show_sales, api_create_sale, api_create_customer, api_create_sales_person, api_show_customers, api_show_sales_people, api_show_all_sales
from django.urls import path

urlpatterns = [
    path("sales/<int:sale_id>/", api_show_sales, name="api_show_sales"),
    path("sales/create/", api_create_sale, name="api_create_sale"),
    path("customer/<int:customer_id>/", api_show_customers, name="api_show_customers"),
    path("customer/create/", api_create_customer, name="api_create_customer"),
    path("employee/<int:sales_person_id>/", api_show_sales_people, name="api_show_sales_people"),
    path("employee/create/", api_create_sales_person, name="api_create_sales_person"),
    path("sales/", api_show_all_sales, name="api_show_all_sales"),
    path("employee/all/", api_show_sales_people, name="api_show_sales_people"),
    path("customer/all/", api_show_customers, name="api_show_customers"),

]
