import React from 'react'
import Login from "./Login"

function Account({user, setUser}){
    // const renderUser = Object.keys(user).map((user.id) => (
    //     <li key={movieID}>
    //       <Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
    //     </li>
    //   ));

    if (!user) return <Login onLogin={setUser} />;
    return(
        <div class="thirdContainer">
            <div class="quote">
                <h3>I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little "clever" comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot.</h3>
                <p><strong>-Me</strong></p>
            </div>
        </div>

    )
}

export default Account;