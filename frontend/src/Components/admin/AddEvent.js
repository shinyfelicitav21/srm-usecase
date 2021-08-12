import React, { useState } from 'react'
import ADashboard from './ADashboard'
import { useHistory} from 'react-router-dom';

export default function AddEvent() {

    <ADashboard/>
    const [res1, setRes1] = useState(
        {
          event: " ",
          
        }
      );
      const [res, setRes] = useState([]);
      const [submitted, setSubmitted] = useState(false);
        const history = useHistory();
    
    const handleOnClick=(e)=>
    {
      e.preventDefault()
      setSubmitted(true);
        console.log(res1);
        console.log("Submitted..");
    
            const reqOptios = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(res1)
            };
    
     fetch("http://localhost:8080/api/addevent", reqOptios).then(x => x.json()).then(data => {
                console.log("Saved.");
               
               
                console.log(data.id);
                setRes(data.id);
            })
            alert("Event added successfully!!");
            
        }
        const handleOnchange = (event) => {
          const { name, value } = event.target;
      
          setRes1((prev) => {
            return {
              ...prev,
              [name]: value
            }
          })
      
        }
    return (
        <div>
             <div class="col ">
    <label className="l1">Event Name </label>
    <textarea id="form7" class="md " name="event" value={res1.event} onChange={handleOnchange}  placeholder="Event Name"></textarea>    
  </div>
  <button className="btn"  onClick={handleOnClick} >ADD EVENT</button>
        </div>
    )
}
