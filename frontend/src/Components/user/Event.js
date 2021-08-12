import React, { useState } from 'react';
import Dashboard from './Dashboard'
import './Event.css'
import { useHistory} from 'react-router-dom';

export default function Event() {
    
    const [res1, setRes1] = useState(
        {
          
          events: " ",
          
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
    
     fetch("http://localhost:8080/api/events", reqOptios).then(x => x.json()).then(data => {
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
        <div className="e">
            <div class="container-fluid py-2">
            <Dashboard/> 
    <div class="card2">
    
        <div class="card-head2" >
            
        </div>
    </div>
    <br/>

    <div class="card1">
        <div class="card-body2">
          
            <label className="l">Events - 2021</label><br/>
              <select name="work" className="form-control1" name="events" value={res1.events} onChange={handleOnchange}  >
                <option value="cookbook">DESIGN YOU OWN POTLUCK COOKBOOK</option>
                <option value="comm">THE ULTIMATE COMMUNITY TAG SALE</option>
                <option value="love">SPREAD THE LOVE ON VALENTINE'S DAY</option>
                <option value="star">BONFIRE S'MORES UNDER THE STARS</option>
                <option value="star">HEALTH-PROMOTING FITNESS CLASSES</option>
                <option value="star">GET CREATIVE WITH GROUP PAINTING</option>
                <option value="star">NOW YOUR'RE COOKING,WITH CLASSES!</option>
                <option value="star">GET YOUR FAMILIES DANCING</option>
                <option value="star">MOVIE SCREENINGS ON THE LAWN</option>
                <option value="star">ONE BOOK CLUB TO RULE ALL</option>
                <option value="star">FUN RUN, LITERALLY</option>
                <option value="star">BOUNCE HOUSE & INFLATABLES DAY</option>
                <option value="star">UNLEASH YOUR KARAOKE STARS</option>
                <option value="star">SPOOKY COSTUME COMPETITION</option>
                <option value="star">ROCK YOUR COMMUNITY</option>
                <option value="star">TURN UP THE JAMS ON DJ NIGHT</option>
               
              </select>  
            
        </div>
    </div>
    </div>
    <button className="btn1" onClick={handleOnClick} > ADD EVENT </button>
        </div>
    )
}
