import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import Register from './components/Register'
import Footer from './components/Footer'
import Account from './components/Account'
import Login from './components/Login'

function App() {

  //making sure we have our users
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/users/")
      .then((r) => r.json())
      .then((usersArr) => {
        console.log(usersArr)
        setUsersList(usersArr);
      });
  }, []);
  console.log(usersList)

  function handleAddUser(newUser) {
    const updatedUsersArray = [...usersList, newUser];
    setUsersList(updatedUsersArray);
  }



  //setting state for our session
  const [user, setUser] = useState(null);
    useEffect(() =>{
      fetch('/me').then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user))
        }
      });
    }, []);



   

	function handleLogoutClick() {
		fetch("/logout", { method: "DELETE" }).then((r) => {
		  if (r.ok) {
			setUser(null);
		  }
		});
	  }



  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/register">
            <Header logout={handleLogoutClick} user={user} setUser={setUser}/>
            <Register onAddUser={handleAddUser} />
            <Footer/>
          </Route>
          <Route path="/login">
            <Header logout={handleLogoutClick} user={user} setUser={setUser} />
            <Login user={user} onLogin={setUser} />
            <Footer/>
          </Route>
          <Route path="/account">
            <Header logout={handleLogoutClick} user={user} setUser={setUser} />
            <Account user={user} setUser={setUser} />
            <Footer/>
          </Route>
          <Route path="/">
            <Header logout={handleLogoutClick} user={user} setUser={setUser}/>
            <Home />
            <Footer/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
