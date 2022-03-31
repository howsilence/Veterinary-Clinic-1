import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import Register from './components/Register'
import Footer from './components/Footer'
import Account from './components/Account'
import Login from './components/Login'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Faq from './components/Faq'





function App() {

  // making sure we have our users


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

  // function handleAddPet(newPet){
  //   const updatedPetsArray = [...petsList, newPet]
  //   setPetsList(updatedPetsArray)
  // }



  //setting state for our session, auto login
  const [user, setUser] = useState(null);
  useEffect(() => {
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
      <Header logout={handleLogoutClick} user={user} setUser={setUser} />
        <Switch>
          <Route path="/register">
            <Register onAddUser={handleAddUser} />
          </Route>
          <Route path="/login">
            <Login user={user} onLogin={setUser} />
          </Route>
          <Route path="/account">
            <Account user={user} setUser={setUser} />
          </Route>
          <Route path="/testimonials">
            <Testimonials />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/Faq">
            <Faq />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
