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

The Sales microservice is a microservice made to accomodate customers and sell vehicles as well as register said vehicles to the customers. The microservice is created for use by employees of CarCar that can create new employee or customer objects into the database that will then be used to register purchases. The bounded contexts for this microservice contain the AutomobileVO, Employee model, customer model, and all models related to the sale of the automobile. The sales microservice is integrated with inventory via a poller. The sales record bounded context is responsible for recording all sales made by certain employees for varying customers and includes various functionalities as listed previously.
