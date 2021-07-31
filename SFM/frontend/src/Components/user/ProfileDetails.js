import React from 'react'
import Dashboard from './Dashboard'
import './Profile.css'
export default function ProfileDetails() {
    return (
        <div>
            {<Dashboard/>}
            <div class="box-example">
            <img class="logo" 
                                    src="user.jpg"  />
                    <table className="table">
                        <tr >

                <td><label >First Name </label></td>
               <td> <input type="text"  className="fname" required="required" placeholder="Enter your first name"/>
               </td>
               <br/>
                </tr>
                <tr>
               <td> <label>Last Name </label></td>
               <td> <input type="text"  className="fname" required="required" placeholder="Enter your  last name"/><br/>
               </td>
                </tr>
                <tr>

               <td> <label>Date of Birth </label></td>
                <td><input type="text"  className="fname" required="required" placeholder="Enter your dob"/><br/>
                </td>
                </tr>
                <tr>
                
                <td><label>Email ID </label></td>
                <td><input type="text"  className="fname" required="required"  placeholder="Enter your email id"/><br/>
                </td>
                </tr>
                <tr>
                <td><label>Nationality </label></td>
                <td><input type="text"  className="fname" required="required" placeholder="Enter your nationality"/><br/>
                </td>
                </tr>
                <tr>
                <td><label>Religion </label></td>
                <td><input type="text"  className="fname" required="required" placeholder="Enter your religion"/><br/>
                </td>
                </tr>
                <tr>
                <td><label>Blood Group</label></td>
                <td><input type="text"  className="fname" required="required" placeholder="Enter your blood group"/><br/>
                </td>
                </tr>
                <tr>
               <td> <label >Old Address </label></td>
    <td><textarea   required="required" className="fname" placeholder="Enter your old address"></textarea><br/>
    </td>
    </tr>
    <tr>
   <td> <label>New Address </label></td>
    <td><textarea required="required" className="fname"placeholder="Enter your new address"></textarea>  <br/>  
    </td>
    </tr>
    <tr>
    <td><button class="btn" type="submit">UPDATE</button>
    </td>
    </tr>
    </table>
    
            </div>
        </div>
    )
}
