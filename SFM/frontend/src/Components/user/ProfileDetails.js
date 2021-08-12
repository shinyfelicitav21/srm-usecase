import React, { useState } from 'react'
import Dashboard from './Dashboard'
import './Profile.css'
import { useHistory} from 'react-router-dom';

export default function ProfileDetails() 

{
  const [res1, setRes1] = useState(
    {
      
      fname: " ",
      lname:" ",
      dob: '',
      email:" ",
      nationality:"  ",
      religion:" ",
      bg:" ",
      city:" ",
      state:" ",
      country:" ",
      pin:" ",

    }
  );
  const [data, setData] = useState(0);
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

  fetch("http://localhost:8080/api/profile", reqOptios).then(res => res.json()).then(data => {
      console.log("saved");
      alert("successfully submitted");
      console.log(data.id);
      setData(data.id);
  })
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
            {<Dashboard/>}
            <div class="box-example">
            <img class="logo" 
                                    src="user.jpg"  />
                    <table className="table">
                        <tr >

                <td><label >First Name </label></td>
               <td> <input type="text"  className="fname" name="fname" value={res1.fname} onChange={handleOnchange} required="required" placeholder="Enter your first name"/><br/>
               </td>
               
                </tr>
                <tr>
               <td> <label>Last Name </label></td>
               <td> <input type="text"  className="fname" name="lname" value={res1.lname} onChange={handleOnchange} required="required" placeholder="Enter your last name"/><br/>
               </td>
                </tr>
                <tr>

               <td> <label>Date of Birth </label></td>
                <td><input type="text"  className="fname" name="dob" value={res1.dob} onChange={handleOnchange} required="required" placeholder="Enter your dob"/><br/>
                </td>
                </tr>
                <tr>
                
                <td><label>Email ID </label></td>
                <td><input type="text"  className="fname" name="email" value={res1.email} onChange={handleOnchange} required="required"  placeholder="Enter your email id"/><br/>
                </td>
                </tr>
                <tr>
                <td><label>Nationality </label></td>
                <td><input type="text"  className="fname"  name="nationality" value={res1.nationality} onChange={handleOnchange} required="required" placeholder="Enter your nationality"/><br/>
                </td>
                </tr>
                <tr>
                <td><label>Religion </label></td>
                <td><input type="text"  className="fname" name="religion" value={res1.religion} onChange={handleOnchange} required="required" placeholder="Enter your religion"/><br/>
                </td>
                </tr>
                <tr>
                <td><label>Blood Group</label></td>
                <td><input type="text"  className="fname"  name="bg" value={res1.bg} onChange={handleOnchange} required="required" placeholder="Enter your blood group"/><br/>
                </td>
                </tr>
                <tr>
               <td> <label >City </label></td>
             <td><input type="text"  required="required" className="fname" name="city" value={res1.city} onChange={handleOnchange} required="required" placeholder="Enter your city"/><br/>
    </td>
    </tr>
    <tr>
   <td> <label>State </label></td>
    <td><input type="text" required="required" className="fname" name="state" value={res1.state} onChange={handleOnchange} required="required" placeholder="Enter your state"/>  <br/>  
    </td>
    </tr>
    <tr>
   <td> <label>Country </label></td>
    <td><input type="text" required="required" className="fname" name="country" value={res1.country} onChange={handleOnchange} required="required" placeholder="Enter your country"/>  <br/>  
    </td>
    </tr>
    <tr>
   <td> <label>Pincode </label></td>
    <td><input type="text" required="required" className="fname" name="pin" value={res1.pin} onChange={handleOnchange} required="required" placeholder="Enter your pincode"/>  <br/>  
    </td>
    </tr>
    <tr>
    <td><button class="btn" onClick={handleOnClick}>REGISTER DETAILS</button>
    </td>
    </tr>
    </table>
    
            </div>
        </div>
    )
}

