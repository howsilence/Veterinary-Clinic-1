import React, {useState} from 'react'
import { useParams } from 'react-router-dom';

function Register({onAddUser}){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");


    function handleSubmit(e) {
        fetch("http://localhost:4000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            email: email,
            username: username,
            password: password,
            password_confirm: passwordConfirm
          }),
        })
          .then((r) => r.json())
          .then((newUser) => onAddUser(newUser));
      }


    return(
        <div class="formContainer">
        <section class="form">
    <div class="center">
	<h1>JOIN OVER <b class="formB">{2}</b> PEOPLE ON OUR NETWORK</h1>
	<hr class="formHr" />

      <h2>New User</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          class="firstLastNames"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          type="text"
          class="firstLastNames"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="text"
          name="password confirm"
          placeholder="Confirm Password"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <button class="formSubmit" type="submit">Register</button>
      </form>
    </div>
    </section>
    </div>
  );

}

export default Register;