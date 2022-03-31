import React, {useState} from 'react'
import Account from './Account'



function Login({user, onLogin}){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }


      

    if (user) return <Account user={user} />;
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

              <button class="formSubmit" type="submit">{isLoading ? "Loading..." : "Login"}</button>

              <span>
                {errors.map((err) => (
                  <span key={err}>{err}</span>
                ))}
              </span>

            </form>
          </div>
        </section>
      </div>
    )
}

export default Login;