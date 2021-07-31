import React from 'react'
import './Payment.css';
import ADashboard from './ADashboard'

export default function PaymentReport() {
    return (
        <div className="box">
            
            <div class="container-fluid py-2">
            <ADashboard/> 
    <div class="card1">
        <div class="card-head" >
            {/* Payment Report */}
        </div>
    </div>
    <br/>

    <div class="card2">
        <div class="card-body1">
            <table className="pay ">
                <thead>
                    <th className="thead">S.No</th>
                    <th className="thead">Transaction Id</th>
                    <th className="thead">Customer Name</th>
                    <th className="thead">Date</th>
                    <th className="thead">Time</th>
                    <th className="thead">Amount</th>
                    <th className="thead">View</th>
                </thead>
                <tbody>
                    <tr>
                        <td className="thead">1</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><button class="btn btn-primary">VIEW</button></td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
        </div>
        
    )
}
