import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AppointmentRecords() {
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


    return (<>
       <h1>Appointment Records</h1>

        <table className="table table-striped table-sm">
            <thead>
                <tr>
                    <th>VIN</th>
                    <th>Customer name</th>
                    <th>Day</th>
                    <th>Technician</th>
                    <th>Reason</th>
                    <th>VIP status</th>
                </tr>
            </thead>
            <tbody>
                {appointments
                    .map(appointment => {
                    let raw_time = new Date(appointment.time)
                    let d = raw_time.toLocaleDateString("en-US")
                    return (
                        <tr key={appointment.pk}>
                            <td>{appointment.vin}</td>
                            <td>{appointment.owner}</td>
                            <td>{d}</td>
                            <td>{appointment.technician.name}</td>
                            <td>{appointment.reason}</td>
                           <td>{appointment.vip}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </>)
}

export default AppointmentRecords;
