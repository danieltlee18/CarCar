# CarCar

Team:

* Dan - Sales
* Brian - Service

## Design

## Service microservice

I've got three models in the service context:
    - Technician
    - Appointment
    - AutomobileVO
The data for the AutomobileVOs is popolated by the data in the inventory
microservice via the poller. This informatin is used when adding a new Appointment to check whether or not the Appoitnment should be flagged as VIP. The Appointment models are realted to the Technician models by a ForeignKey.



## Sales microservice

Explain your models and integration with the inventory
microservice, here.
