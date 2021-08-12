
import React, { useState } from 'react'
import './Login.css'
import { useHistory} from 'react-router-dom';

export default function LoginPage() {

    const validate = (values) => {
        let errors = {};
        const regex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
        if (values.uname == "") {
            errors.uname= "User Name cannot be empty"
        }
        if (values.pwd == "") {
            errors.pwd = "Password cannot be empty"
        }
        
        else if (!regex.test(values.email)) {
            errors.uname = "Enter valid user name";
        }
    }
    const [res1, setRes1] = useState(
        {
          
          uname: " ",
          pwd: '',
          
        }
      );
    const [res, setRes] = useState([]);
  const [submitted, setSubmitted] = useState(false);
    const history = useHistory();
    
    const handleOnClick = (e) => {

        e.preventDefault()
        setSubmitted(true);
    console.log(res1);
    console.log("Submitted...");

        const reqOptios = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(res1)
        };

 fetch("http://localhost:8080/api/login", reqOptios).then(x => x.json()).then(data => {
            console.log("Saved.");
            //alert("Successfully submitted!!");
           
            console.log(data.id);
            setRes(data.id);
        })
        alert("Summitted successfully!!");
        history.push('/dash');
    }
    
    const handleOnchange = (event) => {
        const { name, value } = event.target;
    
        setRes1((prev) => {
          return {
            ...prev,
            [name]: value
          }
        })
    
      }
    return (
        <div className="center">

           <div class="row">
                <div class="col-md-6 mx-auto p-0">
             <div class="card">
                 <form>
                        <div class="login-box">
                            <div class="login-snip">
                                 <input id="tab-1" type="radio" name="tab" class="sign-in" checked/>
                                <label for="tab-1" class="tab">Login</label>
                             <input id="tab-2" type="radio" name="tab" class="sign-up"/>
                             <label for="tab-2" class="tab">Sign Up</label>
                                <div class="login-space">
                                    <div class="login">
                                    <div class="group"> <label for="user" class="label">Username</label>
                                         <input id="user" type="text" class="input" name="uname" value={res1.uname} onChange={handleOnchange} placeholder="Enter your username"/ > </div>
                                            <div class="group"> <label for="pass" class="label">Password</label> 
                                            <input id="pass" type="password" class="input" name="pwd" value={res1.pwd} onChange={handleOnchange} data-type="password"  placeholder="Enter your password"/> </div>
                                                <div class="group"> <input id="check" type="checkbox" class="check" checked/> 
                                                <label for="check"><span class="icon"></span> Keep me Signed in</label> </div>
                                                    <div class="group"> 
                                                    <input type="submit" class="button" onClick={handleOnClick} value="Sign In"/> </div>
                                                        <div class="hr"></div>
                                                        <div class="foot"> 
                                                        <a href="#">Forgot Password?</a> </div>
                                                    </div>
                                                    <div class="sign-up-form">
                                                    <div class="group"> <label for="user" class="label">Username</label> 
                                                        <input id="user" type="text" class="input" placeholder="Create your Username"/> </div>
                                                            <div class="group"> <label for="pass" class="label">Password</label>
                                                             <input id="pass" type="password" class="input" data-type="password" placeholder="Create your password"/> </div>
                                                                <div class="group"> <label for="pass" class="label">Repeat Password</label>
                                                                 <input id="pass" type="password" class="input" data-type="password" placeholder="Repeat your password"/> </div>
                                                                    <div class="group"> <label for="pass" class="label">Email Address</label> 
                                                                    <input id="pass" type="text" class="input" placeholder="Enter your email address"/> </div>
                                                                        <div class="group"> <input type="submit" class="button" value="Sign Up"/> </div>
                                                                            <div class="hr"></div>
                                                                            <div class="foot"> <label for="tab-1">Already Member?</label> </div>
                                                                            </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </form>
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            )
        

}
