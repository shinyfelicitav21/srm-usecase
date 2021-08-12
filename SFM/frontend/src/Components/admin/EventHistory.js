import React, { useState, useEffect } from 'react';
import ADashboard from './ADashboard'

export default function EventHistory() {

    <ADashboard/>
    
    const [ehistory, ehistory] = useState([]);

    useEffect(() => {
        console.log("Hello this use effect... ");
        
        fetch("http://localhost:8080/api/events").then(res => res.json()).then(eve => {
            console.log(eve);
            setProfile(eve);
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
                                    <th>Event Name</th>
                                   
                                </tr>
                            </thead>

                            {
                               ehistory && ehistory.map((x) => {
                                    return (
                                        <tbody>
                                            <tr>

                                                <td>{x.ehistory}</td>
                                               
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
