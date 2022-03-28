import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'

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
            <Header/>
            <Home />
          </Route>
          <Route path="/register">
          </Route>
          <Route path="/user">
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
