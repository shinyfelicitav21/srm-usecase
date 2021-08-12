import React, { useState } from 'react'
import Dashboard from './Dashboard'
import './Pay.css'
import { useHistory} from 'react-router-dom';


export default function Payment() {
    const [res1, setRes1] = useState(
        {
          cardnumber:" ",
         expirydate:" ",
         ccvnumber:" ",
          
        }
      );
      const [data, setData] = useState(0);
      const [submitted, setSubmitted] = useState(false);
        const history = useHistory();
    
    const handleOnClick=(e)=>
    {
      e.preventDefault()
      setSubmitted(true);
        console.log(res1);
        console.log("Submitted..");
    
        const handleOnchange = (event) => {
          const { name, value } = event.target;
      
          setRes1((prev) => {
            return {
              ...prev,
              [name]: value
            }
          })
      
        }
      }
    
    return (
        <div>
             {<Dashboard />}
             <div >
    <div className="cardn p-4">
        <div className="heading">
            <h5 >Make yor payment here!!</h5>
            
        </div>
        <div> 
        <label className="cardnumber"> CARD NUMBER</label>
        {/* <img src="https://img.icons8.com/dusk/64/000000/visa.png" width="30" className="image" /> */}
         <input type="tel"  className="cardnumber1" maxlength="19" name="cardnumber"  value={res1.cardnumber} onChange={handleOnchange} required="required"placeholder="Card number"/> </div>
        <div >

            <div> <label className="expirydate">EXPIRY
             </label> 
             <input type="date" className="expirydate1" name="expirydate"  value={res1.expirydate} onChange={handleOnchange} required="required" placeholder="MM / YY"/> </div>
            <div> <label className="cvvnumber">CVV</label>
                 <input type="tel"  className="cvvnumber1" name="cvvnumber"  value={res1.cvvnumber} onChange={handleOnchange} required="required" maxlength="4"  pattern="\d*" placeholder="CVV Number"/> </div>
        </div>
        <div >
             <button  className="cbtn" onClick={handleOnClick}>Cancel</button>
              <button className="pbtn" onClick={handleOnClick}>Make Payment</button> </div>
    </div>
</div> 
</div>

)
}
