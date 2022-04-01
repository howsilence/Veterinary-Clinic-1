import React, {useState} from 'react'
import './Petcard.css'
import Petregister from './Petregister';
import Appointmentcreate from './Appointmentcreate';


function Petcard({user, onAddUser, setUser}){
    
    const [toggleR, setToggleR] = useState(false);
    const [toggleA, setToggleA] = useState(false);
    
    function handleClick(){
        setToggleR((toggleR) => !toggleR)
    }
    function handleUpdate(){
        setToggleA((toggleA) => !toggleA)
    }

    function handleDestroy(e){
      const id = e.target.id
        fetch('http://localhost:4000/pets/' + id, {
            method: 'DELETE',
          })
          .then(res => res.json())
          .then(res => console.log(res))
    }

    // async function handleDestroy(e){
    //     const id = e.target.id
    //     await fetch('http://localhost:4000/pets/' + id, {method: "DELETE"});
    //     const response = await fetch("http://localhost:4000/users/");
    //     const user = await response.json();
    //     setUser(user)
    // }


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
                <tr key={pet.id} id={pet.id}>
                <td onClick={handleDestroy} id={pet.id}>{pet.name + " " + user.last_name}</td>
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
                    <th><h1>Date</h1></th>
                    <th><h1>Month</h1></th>
                    <th><h1>Time</h1></th>
                    <th><h1>Duration</h1></th>
                    
                </tr>
            </thead>
            {user.appointments.map(appointment =>  
             <tbody>
        <tr key={appointment.id} id={appointment.id}>
        <td>{appointment.doctor}</td>
        <td>{appointment.day}</td>
        <td>{appointment.month}</td>
        <td>{appointment.time}</td>
        <td>{appointment.duration}</td>
    
        </tr>
        </tbody>
        )}    
        </table>
        <button className="btn btn-outline-white mr-2" type="button" onClick={handleClick}>REGISTER NEW PET</button>
                {toggleR ? <Petregister /> : ""}
      
        
        

        </div>

    )
}

export default Petcard;