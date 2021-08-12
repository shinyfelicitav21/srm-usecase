import React from 'react'
import './Report.css'
import ADashboard from './ADashboard'

export default function ComplaintReport() {
    return (
        <div>
         <ADashboard/>
            
               
    <div class="card">
        
        <div class="card-head1">
            {/* Complaint Report */}
        </div>
    </div>
    
    <div class="card">
        <div class="card-body1">
            <table class="com">
                <thead className="head">
                    <th className="thead">S No</th>
                    <th className="thead">Complaint Message</th>
                    <th className="thead">Customer Name</th>
                    <th className="thead">Vendor Names</th>
                    <th className="thead">Date</th>
                    <th className="thead">Work Assigned</th>
                    <th className="thead">Work Completed</th>
                    
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Pipe is Not Working</td>
                        <td>Shiny</td>
                        <td>A,B,C</td>
                        <td>12/05/2021</td>
                        <td className="thead">Change the Damage Pipe</td>
                        <td className="thead">Removed the pipe</td>
                       
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Pipe is Not Working</td>
                        <td>Shiny</td>
                        <td>A,B,C</td>
                        <td>13/05/2021</td>
                        <td className="thead">Change the Damage Pipe</td>
                        <td className="thead">Changed the pipe</td>
                      
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Pipe is Not Working</td>
                        <td>Shiny</td>
                        <td>A,B,C</td>
                        <td>14/05/2021</td>
                        <td className="thead">Put Some White cement</td>
                        <td className="thead"> Completed the Work</td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</div>  
    )
}
