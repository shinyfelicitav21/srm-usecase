import React from 'react'
import './Event.css'
import ADashboard from './ADashboard'

export default function EventHistory() {
    return (
        <div>
             
             <div class="container-fluid py-2">
            <ADashboard/> 
    <div class="card2">
        <div class="card-head2" >
            {/* EventHistory */}
        </div>
    </div>
    <br/>

    <div class="card2">
        <div class="card-body2">
            <table className="event ">
                <thead>
                    <th className="head">S.No</th>
                    <th className="head">Event Month</th>
                    <th className="head">Event Date</th>
                    <th className="head">Event Year</th>
                    <th className="head">Event Amount Paid</th>
                   
                    <th className="head">View</th>
                </thead>
                <tbody>
                    <tr>
                        <td className="head">1</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><button class="btn1 btn-primary">VIEW</button></td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
        </div>
    )
}
