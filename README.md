# CarCar

Team:

* Dan - Sales
* Brian - Service

## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

The Sales microservice is a microservice made to accomodate customers and sell vehicles as well as register said vehicles to the customers. The microservice is created for use by employees of CarCar that can create new employee or customer objects into the database that will then be used to register purchases. The bounded contexts for this microservice contain the AutomobileVO, Employee model, customer model, and all models related to the sale of the automobile. The sales microservice is integrated with inventory via a poller. The sales record bounded context is responsible for recording all sales made by certain employees for varying customers and includes various functionalities as listed previously.
