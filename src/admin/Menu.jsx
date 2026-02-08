import axios from 'axios';
import React, { useEffect, useState } from 'react'



function Menu()
{



    const [newData, setNewData] = useState([]);

    function fetchData() {
        axios.get("https://66823f4704acc3545a08bfec.mockapi.io/menus")
            .then((res) => {
                console.log(res.data);
                setNewData(res.data)
            })
    };


    function handleDelete(id){
        axios.delete("https://66823f4704acc3545a08bfec.mockapi.io/menus/"+id)
        .then((res)=>{
           console.log(res.data);
           fetchData();
        }
    )
    };

    useEffect(() => {
        fetchData();
    }, [])

    return(
        <div >
            <div class="mt-2  bg-success text-white rounded"><h1>Menu</h1></div>
        {/* <div className="container mt-5 bg-primary"> */}
                <div className="row">
                    <div className="col-lg-2"> </div>
                    <div className="col-lg-8">
                        <table class="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Dish Title</th>
                                    <th scope="col">Dish Image</th>
                                    <th scope="col">Dish Price</th>
                                    <th scope="col">Dish MRP</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>



                                {
                                    newData.map((item, index) => {
                                        return (
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td>{item.Menu_Name}</td>
                                                <td><img style={{ width: "80px" }} src={item.Menu_Image} alt="" /></td>
                                                <td>{item.Menu_Price}</td>
                                                <td>{item.Menu_Mrp}</td>
                                                <td>
                                                    <button className='btn btn-danger'onClick={()=>handleDelete(item.id)}><i class="fa-solid fa-trash"></i></button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                               
                                    
                            </tbody>

                        </table>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        // </div>
    )
};
export default Menu;
  