import React, { useState, useEffect } from 'react';
import ADashboard from './ADashboard'
import './Pro.css'

export default function ProfileDetails() {

    <ADashboard/>
    
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        console.log("Hello this use effect... ");
        

        fetch("http://localhost:8080/api/profile").then(res => res.json()).then(pro => {
            console.log(pro);
            setProfile(pro);
        }).catch(e => {
            console.error("ERR in profile data");
            console.error(e);
        }).finally(() => {
            console.log("I am in finally block!!!!");
        });
    }, [])

    return (
    
        <div>
            <form>
                <div>
                <img class="logo" 
               src="user.jpg"  />
    
                </div>
               
                <div className="container-fluid">
                    <div className="box1">
                        <nav className="navbar">
                            
                        </nav><br />
                       <br />
                        <table>
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>DOB</th>
                                    <th>Email</th>
                                    <th>Nationality</th>
                                    <th>Religion</th>
                                    <th>Blood Group</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Country</th>
                                    <th>Pincode</th>
                                </tr>
                            </thead>

                            {
                                profile && profile.map((x) => {
                                    return (
                                        <tbody>
                                            <tr>

                                                <td>{x.fname}</td>

                                                <td>{x.lname}</td>

                                                <td>{x.dob}</td>

                                                <td>{x.email}</td>

                                                <td>{x.nationality}</td>

                                                <td>{x.religion}</td>

                                                <td>{x.bloodgroup}</td>

                                                <td>{x.city}</td>

                                                <td>{x.state}</td>

                                                <td>{x.country}</td>
                                                <td>{x.pin}</td>
                                            </tr>
                                        </tbody>
                                    )
                                })
                            }
 
                        </table>

                    </div>
                </div>
            </form>
        </div>
    

  
    
  
    
            
        
    )
}
