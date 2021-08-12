import React from 'react'
import ADashboard from './ADashboard'


export default function AddComplaintReport() {
    return (
        <div>
            <ADashboard/>
            <div class="container-fluid py-4">
    <div class="card">
        <div class="card-body">
            <h4>Update The Complaint Report</h4>
            <div align="end">
                <button class="btn btn-success">
                    Save
                </button>
                <button class="btn btn-danger">
                    Cancel
                </button>
            </div>
        </div>
    </div>
    <br/>
    <form>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-4 form-group">
                        <label class="control-label">Customer Id</label>
                        <input class="form-control" id="" formControlName="" placeholder="Religion" type="" value="" />        
                    </div>
                    <div class="col-sm-4 form-group">
                        <label class="control-lable">Complaint Message</label>
                        <input class="form-control" id="" formControlName="" placeholder="Religion" type="" value="" />        
                    </div>
                    <div class="col-sm-4 form-group">
                        <label class="control-label">Date</label>
                        <input class="form-control" id="" formControlName="" placeholder="Religion" type="date" value="" />        
                    </div>
                </div>
                <div class="row">       
                    <div class="col-sm-4 form-group">
                        <label class="control-lable">Work Assigned</label>
                        <input class="form-control" id="" formControlName="" placeholder="Religion" type="" value="" />        
                    </div>
                    <div class="col-sm-4 form-group">
                        <label class="control-lable">Work Completed</label>
                        <input class="form-control" id="" formControlName="" placeholder="Religion" type="" value="" />        
                    </div>
                    <div class="col-sm-4 form-group">
                        <label class="control-lable">Type Of Work</label>
                        <select class="form-control">
                            <option>Electrical</option>
                            <option>Electrical</option>
                            <option>Electrical</option>
                            <option>Electrical</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4 form-group" >
                        <label class="control-lable">Vendor Id</label>
                        <input type="text" class="form-control" />        
                    </div>           
                </div>
                <div class="row">                  
                    <div class="col-sm-4 form-group justify-content-center py-4" style="align-items: center; justify-content: center;">
                       <div formArrayName="vendor">
                        <button onClick class="btn btn-primary">ADD VENDOR</button>
                        </div>
                    </div>  
                </div>
            </div>
        
    
</div>
</form>
</div>
    </div>
    )
}

