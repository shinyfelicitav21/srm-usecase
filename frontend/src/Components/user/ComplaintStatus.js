import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard'
import './Complaint.css'

export default function ProfileDetails() {

    <Dashboard/>
    
    const [complaint, complaint] = useState([]);

    useEffect(() => {
        console.log("Hello this use effect... ");
        
        fetch("http://localhost:8080/api/complaint").then(res => res.json()).then(com => {
            console.log(com);
            setProfile(com);
        }).catch(e => {
            console.error("ERR in complaint data");
            console.error(e);
        }).finally(() => {
            console.log("I am in finally block!!!!");
        });
    }, [])

    return (
    
        <div>
            <form>
               
                <div className="container-fluid">
                    <div className="box1">
                        <nav className="navbar">
                            
                        </nav><br />
                       <br />
                        <table>
                            <thead>
                                <tr>
                                    <th>Subject</th>
                                    <th>Complaint Message</th>
                                    <th>Duration of Days</th>
                                    
                                </tr>
                            </thead>

                            {
                                complaint && complaint.map((x) => {
                                    return (
                                        <tbody>
                                            <tr>

                                                <td>{x.subject}</td>

                                                <td>{x.request}</td>

                                                <td>{x.duration}</td>

                                               
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
