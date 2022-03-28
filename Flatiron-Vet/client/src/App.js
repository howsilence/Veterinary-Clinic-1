import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'

function App() {
  const [users, setUsers] = useState([]);

    useEffect(() => {
      fetch("http://localhost:4000/users")
        .then((r) => r.json())
        .then((usersArr) => {
          console.log(usersArr)
          setUsers(usersArr);
        });
    }, []);

    console.log(users)

    function handleAddUser(newUser) {
      const updatedUsersArray = [...users, newUser];
      setUsers(updatedUsersArray);
    }



  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/register">
            <Header />
            <Register onAddUser={handleAddUser} />
          </Route>
          <Route path="/login">
            <Header />
            <Login />
          </Route>
          <Route path="/">
            <Header/>
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
