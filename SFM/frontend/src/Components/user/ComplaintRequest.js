import React, { useState } from 'react'
import Dashboard from './Dashboard'
import './Complaint.css'
import { useHistory} from 'react-router-dom';

export default function ComplaintRequest() {

  const [res1, setRes1] = useState(
    {
      
      subject: " ",
      request:" ",
      duration: '',
      
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

 fetch("http://localhost:8080/api/complaint", reqOptios).then(x => x.json()).then(data => {
            console.log("Saved.");
            //alert("Successfully submitted!!");
           
            console.log(data.id);
            setRes(data.id);
        })
        alert("Complaint requested successfully!!");
        
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
    <div className="m" >
        <Dashboard/> 
       
      <div className="card ">
        <div className="card-header">
          Complaint Portal
        </div>
        </div>
        <div class="card-body">
          <div class="card-body">
            <label className="l">Subject </label><br/>
              <select name="work" className="form-control" name="subject" value={res1.subject} onChange={handleOnchange}>
                <option value="Electrical">Electrical</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Gardener">Gardening</option>
                <option value="Cleaning">Cleaning</option>
              </select>  
              <br />
    </div>
    <div class="col ">
    <label className="l1">Compaint Message </label>
    <textarea id="form7" class="md " name="request" value={res1.request} onChange={handleOnchange}  placeholder="Complaint Message"></textarea>    
  </div>
  <div class="row">
  <div class=" col-sm-4 form-group">
    <label className="l2">Duration of Days </label>
    <input type="text"  className="day" name="duration" value={res1.duration} onChange={handleOnchange} placeholder="Duration of Days"/>
  </div>
  </div>
  
        
  <button className="btn"  onClick={handleOnClick} >FILE COMPLAINT</button>
         
    </div>
    </div>
    </div>
        
      
      )
}

