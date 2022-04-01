import React, {useState} from 'react'
import './Petcard.css'
import Petregister from './Petregister';


function Petcard({user}){
    
    const [toggleR, setToggleR] = useState(false);

    function handleClick(){
        setToggleR((toggleR) => !toggleR)
    }
    
  console.log(user)

    return(
        <div>
        <table className="container">
            <thead>
                <tr>
                    <th><h1>Name</h1></th>
                    <th><h1>Species</h1></th>
                    <th><h1>Breed</h1></th>
                    <th><h1>Age</h1></th>
                    <th><h1>Weight</h1></th>
                    <th><h1>Fixed</h1></th>
                </tr>
            </thead>
            <tbody className='petbody'>
                {user.pets.map(pet =>  
                <tr key={pet.id}>
                <td>{pet.name + " " + user.last_name}</td>
                <td>{pet.species}</td>
                <td>{pet.breed}</td>
                <td>{pet.age}</td>
                <td>{pet.weight + "lbs"}</td>
                <td>{pet.fixed ? "Yes" : "No"}</td>
                </tr>
                )}
            </tbody>
        </table>
        <table className="container">
        <thead>
                <tr>
                    <th><h1>Doctor</h1></th>
                    <th><h1>Day</h1></th>
                    <th><h1>Month</h1></th>
                    <th><h1>Time</h1></th>
                    <th><h1>Duration</h1></th>
                    <th><h1>With</h1></th>
                </tr>
            </thead>
            {user.appointments.map(appointment =>  
             <tbody>
        <tr key={appointment.id}>
        <td>{appointment.doctor}</td>
        <td>{appointment.day}</td>
        <td>{appointment.month}</td>
        <td>{appointment.time}</td>
        <td>{appointment.duration}</td>
        <td>{appointment.with}</td>
        </tr>
        </tbody>
        )}    
        </table>
        <button className="btn btn-outline-white mr-2" type="button" onClick={handleClick}>REGISTER NEW PET</button>
                {toggleR ? <Petregister /> : ""}
        <a class="nav-link" href="/schedule"><button className="btn btn-outline-white mr-2" type="button">NEW APPOINTMENT</button></a>
        

        </div>

    )
}

export default Petcard;