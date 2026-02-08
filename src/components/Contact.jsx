import { Link } from 'react-router-dom';
import background from '../imges/contact2.jpg'

import axios from 'axios';
import React, { useState } from 'react'


const  myStyle= {
   
        backgroundImage: `url(${background})`,
        // height: "100vh",
        // marginTop: "-70px",
        // fontSize: "30px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    

}

function Contact()
{


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [text, setText] = useState("");

    function handleSubmit() {
        // console.log(name, image, price, mrp);
        const data = {
            Name: name,
           Email: email,
           Number: number,
            Text: text
    
        };

        console.log(data);

        axios.post("https://66823f4704acc3545a08bfec.mockapi.io/contact_feedback", data)
            .then((response) => {
                console.log(response.data);
            });

        setName("");
        setEmail("");
        setNumber("");
        setText("");
        alert("Thank You For your Feedback!!")

    }
    return(

         <>
         <h1 class="text-center bg-primary mb-3">Contact Us</h1>
         <div class="row" style={myStyle}>
            <div className="col-lg-2"></div>
                <div className="col-lg-4">
                    <br />
                    <label htmlFor="">Name: </label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text"placeholder="Your Name" />
                    <br /><br />
                    <label htmlFor="">Email: </label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email"placeholder="Your Email" />
                    <br /><br />
                    <label htmlFor="">Number: </label>
                    <input value={number} onChange={(e) => setNumber(e.target.value)} type="Number"placeholder="Your Contact Number" />
                    <br /><br />
                    <label htmlFor="">Feedback: </label>
                    <input value={text} onChange={(e) => setText(e.target.value)} type="text"placeholder="Your Message" />
                    <br /><br />
                    <button onClick={handleSubmit} class=" btn btn-outline-dark">Submit</button>

                </div>
                <div className="col-lg-6">
                    <br />
                    <Link class="navbar-brand" to="#">
                    <img style={{width:"75px"}}src={require("../imges/images.png" )}alt="" />Our Location</Link>
                    <p>Burj Royale Building, next to Skoda Showroom, Sarlashkar Park, Tarabai Park, Kolhapur, Maharashtra 416003</p>
                    <Link class="navbar-brand" to="#">
                    <img style={{width:"75px"}}src={require("../imges/calliconturn_00000.jpg" )}alt="" />Call Us</Link>
                    <p>099223 11558</p>
                    <Link class="navbar-brand" to="#">
                    <img style={{width:"75px"}}src={require("../imges/time-clock-icon-logo-YewkMl3-600.jpg" )}alt="" />Our Timing</Link>
                    
                    <p>Mon-Sun:11:00 AM-11.00 PM
                        <br />
                        Wednesday :Closed
                    </p>
                </div>
         </div>
         
         </>
       
      
    )
};
export default Contact;