import React from 'react'
import './ADashboard.css'
import { Link } from 'react-router-dom'

export default function Dash() {
    
    return (
        <div>

            <body>
                <div id="throbber" ></div>
                <div id="noty-holder"></div>

                <div id="wrapper">

                    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">

                        <div class="navbar-header">
                            {/* <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse"> 
                                
                                <i class="fa fa-bars" aria-hidden="true" ></i>
                            </button> */}
                            <div class="navbar-brand">
                            </div>
                        </div>

                        <form action="" class="navbar-form navbar-left">
                            <div class="input-group">
                                {/* <div class="input-group-btn">
                                    <button class="btn  search-btn-icon">
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </div> */}
                                {/* <input type="Search"  placeholder="Search..." class="form-control-serch search-box" /> */}
                            </div>
                        </form>

{/* 
                        <div class="items">
                            <ul class="nav navbar-right top-nav">
                                <li class="editpro">
                                    <i class="fasett fa-cog" aria-hidden="true" class="menu-button" id="menu-button"></i>
                                    <h5 class="pull-left login-person-head"></h5>
                                </li>
                            </ul>
                        </div> */}


                        <div class="collapse navbar-collapse navbar-ex1-collapse" >
                        {/* // style={{background-color: #616060; border:1px solid #616060}}> */}
                            <ul className="nav navbar-nav side-nav1">
                                <Link to="/report">
                             <Link to="/profile"></Link>
                                    <img class="logostyle" 
                                    src="society.jpg"  />
                                </Link>
                                <li>
                                    <Link className="active" to="/dashboard" data-toggle="collapse" data-target="#submenu-1">
                                        <i class="fa fa-home" aria-hidden="false"></i>
                                        <span > Dashboard</span></Link>
                                </li>
                                <li>
                                    <Link className="#" to="/report" data-toggle="collapse" data-target="#submenu-1"><i class="fa fa-user-o" aria-hidden="true"></i>
                                        <span >  Complaint Report </span></Link>
                                </li>
                                <li>
                                    <Link className="#" to="/profiledetails" data-toggle="collapse" data-target="#submenu-1">
                                        <i class="fa fa-calendar" aria-hidden="true"></i>  
                                         <span > Profile Details </span></Link>
                                </li>
                                <li>
                                    <Link className="#" to="/addevent" data-toggle="collapse" data-target="#submenu-1">
                                        <i class="fa fa-cogs" aria-hidden="true"></i>   
                                        <span > Add Event </span></Link>
                                </li>
                                <li>
                                    <Link className="#" to="/eventhistory" data-toggle="collapse" data-target="#submenu-1">
                                        <i class="fa fa-envelope" aria-hidden="true"></i> 
                                         <span > Event History </span></Link>
                                </li>

                                <li>
                                    <Link className="#" to="/addcomplaint" data-toggle="collapse" data-target="#submenu-1">
                                        <i class="fa fa-cogs" aria-hidden="true"></i>   
                                        <span > Add Complaint Report </span></Link>
                                </li>

                                <li>
                                    <Link className="#" to="/payment" data-toggle="collapse" data-target="#submenu-1">
                                        <i class="fa fa-cogs" aria-hidden="true"></i>  
                                         <span > Payment Details </span></Link>
                                </li>
                            </ul>
                        </div>

                    </nav>

                    <div class="container-fluid">
                        <div class="row text-center">
                            <div class="col-md-12 dashhead">
                                <h1> </h1>
                            </div>
                        </div>
                    </div>

                </div>
            </body>
        </div>
    )
}
