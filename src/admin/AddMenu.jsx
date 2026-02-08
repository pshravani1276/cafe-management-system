import axios from 'axios';
import React, { useState } from 'react'

export default function AddProducts() {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [mrp, setMrp] = useState("");

    function handleSubmit() {
        // console.log(name, image, price, mrp);
        const data = {
            Menu_Name: name,
            Menu_Image: image,
            Menu_Price: price,
            Menu_Mrp: mrp
        };

        // console.log(data);

        axios.post("https://66823f4704acc3545a08bfec.mockapi.io/menus", data)
            .then((response) => {
                console.log(response.data);
            });

        setName("");
        setImage("");
        setPrice("");
        setMrp("");

    }

    return (
        <div>
            {/* <h1>Add Menu</h1> */}

            <div className="div">
                <div class="row mb-4">
                    <div class="col">
                        <div data-mdb-input-init class="form-outline">
                            <label class="form-label" for="form3Example1">Menu Name</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="form3Example1" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div data-mdb-input-init class="form-outline">
                            <label class="form-label" for="form3Example2">Menu Image</label>
                            <input value={image} onChange={(e) => setImage(e.target.value)} type="text" id="form3Example2" class="form-control" />
                        </div>
                    </div>
                </div>

            </div>

            <div className="div">
                <div class="row mb-4">
                    <div class="col">
                        <div data-mdb-input-init class="form-outline">
                            <label class="form-label" for="form3Example1">Price</label>
                            <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" id="form3Example1" class="form-control" />
                        </div>
                    </div>
                    <div class="col">
                        <div data-mdb-input-init class="form-outline">
                            <label class="form-label" for="form3Example2">Mrp.</label>
                            <input value={mrp} onChange={(e) => setMrp(e.target.value)} type="text" id="form3Example2" class="form-control" />
                        </div>
                    </div>
                </div>

            </div>

            <button onClick={handleSubmit} className='btn btn-primary'>Submit</button>
        </div>
    )
}
