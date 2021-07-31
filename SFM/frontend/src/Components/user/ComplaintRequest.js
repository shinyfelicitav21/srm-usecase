import React from 'react'
import Dashboard from './Dashboard'
import './Complaint.css'


export default function ComplaintRequest() {
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
              <select name="work" className="form-control">
                <option value="Electrical">Electrical</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Gardener">Gardening</option>
                <option value="Cleaning">Cleaning</option>
              </select>  
              <br />
    </div>
    <div class="col ">
    <label className="l1">Compaint Message </label>
    <textarea id="form7" class="md "  placeholder="Complaint Message"></textarea>    
  </div>
  <div class="row">
  <div class=" col-sm-4 form-group">
    <label className="l2">Duration of Days </label>
    <input type="text"  className="day" placeholder="Duration of Days"/>
  </div>
  </div>
  
        
        
  
           
            <button className="btn" type="submit">FILE COMPLAINT</button>
         
           
         
         
         
    </div>
    </div>
    </div>
         

      
      )
}
