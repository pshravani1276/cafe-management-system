import image1 from '../imges/burger.jpg'
import image2 from '../imges/pizza.jpg'
import image3 from '../imges/sanwich (1).webp'
import image4 from '../imges/coffe.jpg'
import image5 from '../imges/cold.jpg'
import image6 from '../imges/refreshment.jpg'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
function AllMenu()
{



    const [newData, setNewData] = useState([]);

    function fetchData() {
        axios.get("https://66823f4704acc3545a08bfec.mockapi.io/menus")
            .then((res) => {
                console.log(res.data);
                setNewData(res.data)
            })
    };

    useEffect(() => {
        fetchData();
    }, [])
      return(
        <div className="row">
          {
            newData.map((item, index) => {
              return (
                <div className="col-lg-4">
                    <div class="card" cstyle={{width : "18rem;"}}>
                        <img style={{height:"400px"}}src={item.Menu_Image} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h3 class="card-title">{item.Menu_Name}</h3>
                          <h4 class="card-text">Rs.{item.Menu_Price}/-</h4>
                          <h5 class="card-text">Rs.<del>{item.Menu_Mrp}</del>/-</h5>
                          {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                      </div>  
                </div>
              )
          })
        }
        </div>
        )
      };
        
    


// // function AllMenu()
// // {
// //     return(
// //         <>
// <div className="row">
//     <div className="col-lg-4">
// {/* <div class="card" cstyle={{width : "18rem;"}}>
//   <img style={{height:"400px"}}src={require=image1} class="card-img-top" alt="..."/>
//   <div class="card-body">
//     <h5 class="card-title">Burger</h5>
//     <p class="card-text"> Enjoy Crispy Crunchy & Delicious Burger</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div> */}
// // </div>
// // <div className="col-lg-4">
// // <div class="card" style={{width : "18rem;"}}>
// //   <img style={{height:"400px"}}src={require=image2} class="card-img-top" alt="..."/>
// //   <div class="card-body">
// //     <h5 class="card-title">Pizza</h5>
// //     <p class="card-text"> Enjoy Spicy Cheesy & Mouth watering Pizza</p>
// //     <a href="#" class="btn btn-primary">Go somewhere</a>
// //   </div>
// // </div>
// // </div>

// // <div className="col-lg-4">
// // <div class="card" style={{width : "18rem;"}}>
// //   <img style={{height:"400px"}} src={require=image3} class="card-img-top" alt="..."/>
// //   <div class="card-body">
// //     <h5 class="card-title">Sandwich</h5>
// //     <p class="card-text">Enjoy veggie overloded Sandwich</p>
// //     <a href="#" class="btn btn-primary">Go somewhere</a>
// //   </div>
// // </div>
// // </div>

// // </div>




// // <div className="row">
// //     <div className="col-lg-4">
// // <div class="card" cstyle={{width : "18rem;"}}>
// //   <img style={{height:"400px"}}src={require=image4} class="card-img-top" alt="..."/>
// //   <div class="card-body">
// //     <h5 class="card-title">Coffe</h5>
// //     <p class="card-text"> Enjoy Hot Coffe with delicious snackes</p>
// //     <a href="#" class="btn btn-primary">Go somewhere</a>
// //   </div>
// // </div>
// // </div>
// // <div className="col-lg-4">
// // <div class="card" style={{width : "18rem;"}}>
// //   <img style={{height:"400px"}}src={require=image5} class="card-img-top" alt="..."/>
// //   <div class="card-body">
// //     <h5 class="card-title">Various Milkshake</h5>
// //     <p class="card-text"> Enjoy Cold & sweet Milkshakes</p>
// //     <a href="#" class="btn btn-primary">Go somewhere</a>
// //   </div>
// // </div>
// // </div>

// // <div className="col-lg-4">
// // <div class="card" style={{width : "18rem;"}}>
// //   <img style={{height:"400px"}} src={require=image6} class="card-img-top" alt="..."/>
// //   <div class="card-body">
// //     <h5 class="card-title">Green Tea</h5>
// //     <p class="card-text">Enjoy Diet special Green tea</p>
// //     <a href="#" class="btn btn-primary">Go somewhere</a>
// //   </div>
// // </div>
// // </div>

// // </div>

// //         </>
// //     )
// // };

export default AllMenu;