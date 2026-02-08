import { useState } from 'react';
import '../App.css'
import { useNavigate } from 'react-router-dom';

function PaymentGateway() {

    const navigate = useNavigate();


    const [amount, setAmount] = useState("")

    function payNow() {
        var options = {
            "key": "rzp_test_4yosHYDduPYmKN", // Enter the Key ID generated from the Dashboard
            "amount": amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "iGAP Technologies", //your business name
            "description": "Test Transaction",
            "image": "https://igaptechnologies.com/assets/logo/igap.png",
            // "order_id": "0123", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
            "handler": function (response) {

                if(response){
                    navigate("/thankYou")
                }else{
                    alert("Pls try again...")
                }
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
            // "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
            //     "name": "Gaurav Kumar", //your customer's name
            //     "email": "gaurav.kumar@example.com",
            //     "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
            // },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                // "color": "#3399cc"
                "color": "#88c8bc"
            }
        };


        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    }

    return (

        <div className="App App-header">

            <div className="div">
                <label htmlFor="">Amount</label><br />
                <input onChange={(e) => setAmount(e.target.value)} type="text" /><br /><br />
            </div>



            <button onClick={payNow} className="btn btn-primary">Pay Now</button>
        </div>
    )
};

export default PaymentGateway;