import React, {useState} from 'react'

function Petregister({user}){


    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [fixed, setFixed] = useState(false);
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
          fetch("/registerpet", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {user: user.id},{
              name: name,
              species: species,
              breed: breed,
              age: age,
              weight: weight,
              fixed: fixed
            }),
          }).then((r) => {
              setIsLoading(false);
              if (r.ok){
              r.json()
              } else {
                r.json().then((err) => setErrors(err.errors));
              }
        });
      }
    //   .then((pet) => onAddPet(pet));

    return(
        <div class="formContainer">
          <section class="form">
            <div class="center">
	            
              <h2>New Pet</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  class="firstLastNames"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="text"
                  class="firstLastNames"
                  name="species"
                  placeholder="Species"
                  value={species}
                  onChange={(e) => setSpecies(e.target.value)}
                />

                <input
                  type="text"
                  name="breed"
                  placeholder="Breed"
                  value={breed}
                  onChange={(e) => setBreed(e.target.value)}
                />

                <input
                  type="text"
                  name="age"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />

                <input
                  type="text"
                  name="weight"
                  placeholder="Estimated Weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />

                <input
                  type="boolean"
                  name="fixed"
                  placeholder="Spayed/Neutered?"
                  value={fixed}
                  onChange={(e) => setFixed(e.target.value)}
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
    )
}

export default Petregister;