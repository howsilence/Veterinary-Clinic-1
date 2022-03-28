import React, {useState} from 'react'



function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        // fetch("http://localhost:4000/users", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     first_name: firstName,
        //     last_name: lastName,
        //     email: email,
        //     username: username,
        //     password: password,
        //     password_confirm: passwordConfirm
        //   }),
        // })
        //   .then((r) => r.json())
        //   .then((newUser) => onAddUser(newUser));
      }


    return(
        <div class="formContainer">
        <section class="form">
    <div class="center">
	<h1>Welcome Back!</h1>
	<hr class="formHr" />

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button class="formSubmit" type="submit">Sign In</button>
      </form>
    </div>
    </section>
    </div>
    )
}

export default Login;