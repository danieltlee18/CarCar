import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

function AppointmentRecords() {
    const [appointments, setAppointments] = useState([]);
    const [filterInput, setFilterInput] = useState(' ');
    const [filterSelect, setFilterSelect] = useState('vin');

    const fetchData = async () => {
        const url = 'http://localhost:8080/service_rest/appointments/'

        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setAppointments(data.appointments)

        }
    };

    useEffect(() => {
        fetchData();
    }, []);

const textInput = useRef(null);

const handleFilterInput = (e) => {
    setFilterInput(e.target.value)
    };

const handleFilterSelect = (e) => {
    setFilterSelect(e.target.value);
    textInput.current.focus();
    };

const filteredAppointments = () => {
    if (filterInput === " ") {
        return appointments;
    } else {
        return appointments.filter(appointment => {
            if (filterSelect === "technician"){
                return appointment[filterSelect]["name"]
                            .toLowerCase().includes(filterInput.toLowerCase());
            }
            else if (filterSelect === "time"){
                let raw_time = new Date(appointment.time)
                let d = raw_time.toLocaleDateString("en-US")
                return d.includes(filterInput)
            }
            else {
                return appointment[filterSelect]
                            .toLowerCase().includes(filterInput.toLowerCase())
            }
            })
        }
    };

function mapWords(s){
        if (s === 'owner'){
            return 'search by customer';
        }
        if (s === 'time'){
            return 'search by day';
        }
        else {
            return `search by ${s}`;
        }
    };


    return (<>
       <h1>Appointment Records</h1>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <select onChange={handleFilterSelect}>
                <option value="vin"> VIN</option>
                <option value="owner">Customer</option>
                <option value="time">Day</option>
                <option value="technician">Technician</option>
                <option value="reason">Reason</option>
            </select>
            <input ref={textInput} autoFocus onChange={handleFilterInput} placeholder={mapWords(filterSelect)} />
        </div>
        <table className="table table-striped table-sm">
            <thead>
                <tr>
                    <th>VIN</th>
                    <th>Customer name</th>
                    <th>Day</th>
                    <th>Technician</th>
                    <th>Reason</th>
                    <th>VIP</th>

                </tr>
            </thead>
            <tbody>
                {filteredAppointments()
                    .map(appointment => {
                    let raw_time = new Date(appointment.time);
                    let d = raw_time.toLocaleDateString("en-US");
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
