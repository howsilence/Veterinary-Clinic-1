import React from 'react'

function Schedule({user}){

    return(
        <div class="wrapper">
            <table class="container">
            <thead>
                <tr>
                    <th><h1>Doctor</h1></th>
                    <th><h1>Start Time</h1></th>
                    <th><h1>End Time</h1></th>
                    <th><h1>Duration</h1></th>
                </tr>
            </thead>
            <tbody>
            {user.appointments.map(appointment =>  
        <tr key={appointment.id}>
        <td>{appointment.doctor}</td>
        <td>{appointment.start_time}</td>
        <td>{appointment.end_time}</td>
        <td>{appointment.duration}</td>
        </tr>
        )}    


            </tbody>
            
            </table>
        </div>
    )
}

export default Schedule;