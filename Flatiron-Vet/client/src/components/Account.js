import React from 'react'
import Login from "./Login"
import Petcard from './Petcard'

function Account({user, setUser}){
 

    if (!user) return <Login onLogin={setUser} />;
    return(
        <div>
        <Petcard user={user} />
        </div>
    )
}

export default Account;