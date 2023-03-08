import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AppointmentList() {
    const [appointments, setAppointments] = useState([]);

    const fetchData = async () => {
        const url = 'http://localhost:8080/service_rest/appointments/'

        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    const handleCancel= async (e) => {
        const url = `http://localhost:8080/service_rest/appointments/${e.target.id}/`
        const fetchConfigs = {
            method: "delete",
            headers: {
                "Content-Type": "application/json"
            }
        }

        const response = await fetch(url, fetchConfigs)

        if (response.ok) {
            setAppointments(appointments.filter(appointment => String(appointment.pk) !== e.target.id))
        }
    };


        const handleFinished = async (e) => {
            const url = `http://localhost:8080/service_rest/appointments/${e.target.id}/`

            const fetchConfigs = {
                method: "put",
                body: JSON.stringify({ completed: true }),
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const response = await fetch(url, fetchConfigs)

            if (response.ok) {
                setAppointments(appointments.filter(appointment => String(appointment.pk) !== e.target.id))
            }

        };


    return (<>
       <h1>Appointments</h1>
       <div className="d-grid gap-2 d-md-flex justify-content-md-end">
      <Link to="/services/appointments/create"><button className='btn btn-primary btn-sm'>Create an appointment!</button></Link></div>
        <table className="table table-striped table-sm">
            <thead>
                <tr>
                    <th></th>
                    <th>VIN</th>
                    <th>Customer name</th>
                    <th>Day</th>
                    <th>Time</th>
                    <th>Technician</th>
                    <th>Reason</th>
                    <th>VIP status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {appointments
                    .filter((appointment) => appointment.completed === false)
                    .map(appointment => {
                    let raw_time = new Date(appointment.time)
                    let d = raw_time.toLocaleDateString("en-US")
                    let t = raw_time.toLocaleTimeString("en-US")
                    return (
                        <tr key={appointment.pk}>
                            <td><button onClick={handleFinished} id={appointment.pk} className="btn btn-success">Finished</button></td>
                            <td>{appointment.vin}</td>
                            <td>{appointment.owner}</td>
                            <td>{d}</td>
                            <td>{t}</td>
                            <td>{appointment.technician.name}</td>
                            <td>{appointment.reason}</td>
                           <td>{appointment.vip}</td>
                           <td><button onClick={handleCancel} id={appointment.pk} className="btn btn-danger">Cancel</button></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </>)
}

export default AppointmentList;
