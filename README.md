# CarCar

Team:

* Dan - Sales
* Brian - Service

## Design

## Service microservice

There are three models in the service context:

- Technician: A person who performs the service
- Appointment: A scheduled service for a customer's automobile
- AutomobileVO: A value object that represents an automobile's data

The AutomobileVOs are populated by the inventory microservice via the poller. This data is used to flag VIP appointments based on VIN numbers. The Appointment model has a foreign key that references the Technician model.



## Sales microservice

Explain your models and integration with the inventory
microservice, here.
