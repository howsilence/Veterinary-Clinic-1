import React from 'react'
import './Petcard.css'


function Petcard({user}){


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
                    <tr>
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
        <button class="register">Register New Pet</button>
        

        </div>

    )
}

export default Petcard;