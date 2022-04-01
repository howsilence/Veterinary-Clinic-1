import React from 'react'
import Login from "./Login"
import Petcard from './Petcard'


function Account({user, setUser, onAddUser}){


    if (!user) return <Login onLogin={setUser} />;
    return(
        <div>
        <Petcard user={user} setUser={setUser} onAddUser={onAddUser}/>
        
        </div>
    )
}

export default Account;