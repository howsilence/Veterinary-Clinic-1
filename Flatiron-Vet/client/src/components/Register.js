import React, {useState} from 'react'

function Register({onAddUser}){

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    function handleSubmit(e) {
      e.preventDefault();
      setErrors([]);
      setIsLoading(true);
        fetch("/signup", {
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
            password_confirmation: passwordConfirmation
          }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok){
            r.json().then((user) => onAddUser(user));
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
      });
    }

    return(
        <div class="formContainer">
          <section class="form">
            <div class="center">
	            <h1 class="formh1">JOIN OUR NETWORK</h1>
	            <hr class="formHr" />

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
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <input
                  type="password"
                  name="password confirmation"
                  placeholder="Confirm Password"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                />

                <button class="formSubmit" type="submit">{isLoading ? "Loading.." : "Register"}</button>

                <span>
                  {errors.map((err) => (
                    <span key={err}>{err}</span>
                  ))}
                </span>

              </form>
            </div>
          </section>
        </div>
  );

}

export default Register;