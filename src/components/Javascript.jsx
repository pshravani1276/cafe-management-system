import { useState } from "react";

function JavaScript() {

    // const data = "Product Data";
    const [data, setData] = useState("Product Data");

    var name = "iGAP Technologies";
    var address = "Rajarampuri, Kolhapur";

    function demo() {
        alert("I am Demo Function !!!")
    };

    // demo();
    console.log(name);

    function changeData() {
        name = "MultiSpark Technologies";
        console.log(name);


        // alert("ChangeData Called")

        setData("User Data")
    };

    function changeData2() {
        setData("Menu Card")
    }

    return (
        <>
            <h1 style={{ color: "red" }}>JavaScript in React</h1>
            <h1>{name}</h1>
            {/* <h1>{address}</h1> */}
            {/* <h1>500 + 545</h1> */}

            <br /><br />

            <h1>{data}</h1>


            {/* ********Function********  */}

            <br /><br />
            {/* <button onClick={demo()} className="btn btn-primary">Submit</button> */}

            {/* <button onClick={demo} className="btn btn-primary">Submit</button> */}

            {/* <button onClick={() => demo()} className="btn btn-primary">Submit</button> */}



            {/* ******** Intro to useSatate( ) ********  */}

            <button onClick={changeData} className="btn btn-success">Change Data</button>
            <button onClick={changeData2} className="btn btn-success">Change Data</button>


        </>
    )

};


export default JavaScript;
