import React, {useState} from 'react'
import './Petcard.css'
import Petregister from './Petregister';


function Petcard({user}){
    
    const [showReg, setShowReg] = useState(false);

    function handleClick(){
        setShowReg((showReg) => !setShowReg)
    }

    return(
        <div>
        <table class="container">
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
                <tbody>
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


        <button class="btn btn-outline-white mr-2" type="button" onClick={handleClick}>REGISTER NEW PET{showReg ? <Petregister /> : null}</button>
        
        
        <a class="nav-link" href="/scheduleapt"><button class="btn btn-outline-white mr-2" type="button">SCHEDULE APPOINTMENT</button></a>
        

        </div>

    )
}

export default Petcard;