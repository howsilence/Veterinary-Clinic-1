import React, {useState} from 'react'

function Appointmentcreate({user, onAddUser}){

  const [duration, setDuration] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [time, setTime] = useState("");
  const [doctor, setDoctor] = useState("");
  const [petId, setPetId] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  function takeData(appObj){
    console.log(appObj)
    console.log(user)
  }
  


    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
          fetch("/registerapt", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              duration: duration,
              day: day,
              month: month,
              time: time,
              doctor: doctor,
              petId: petId
            }),
          }).then((r) => {
              setIsLoading(false);
              if (r.ok){
              r.json().then((data) => takeData(data))
              } else {
                r.json().then((err) => setErrors(err.errors));
              }
        });
      }

  
    return(
        <div class="formContainer">
          <section class="form">
            <div class="center">
	            
              <h2>Request Appointment</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  class="firstLastNames"
                  name="duration"
                  placeholder="Duration"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />

                <input
                  type="text"
                  class="firstLastNames"
                  name="day"
                  placeholder="day"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                />

                <input
                  type="text"
                  name="month"
                  placeholder="month"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                />

                <input
                  type="text"
                  name="time"
                  placeholder="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />

                <input
                  type="text"
                  name="doctor"
                  placeholder="requested Doctor"
                  value={doctor}
                  onChange={(e) => setDoctor(e.target.value)}
                />

                <input
                  type="text"
                  name="petId"
                  placeholder="1 (increment for additional pets)"
                  value={petId}
                  onChange={(e) => setPetId(e.target.value)}
                />

                <button class="formSubmit" type="submit">{isLoading ? "Loading.." : "Submit"}</button>
               

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

export default Appointmentcreate;