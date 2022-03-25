import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState([]);

    useEffect(() => {
      fetch("http://localhost:4000/users/1")
        .then((r) => r.json())
        .then((userObj) => {
          console.log(userObj)
          setUser(userObj);
        });
    }, []);

    console.log(user)

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            <h1>Page Count: {count}</h1>
          </Route>
          <Route path="/createuser">
            <createUserForm /> //build out new user form here
          </Route>
          <Route path="/user">
            <UserInfo /> // build out user information page, allow CRUD
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
