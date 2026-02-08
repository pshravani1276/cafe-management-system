



function service()
{
    return(
        <>
        <div class="row" style={{backgroundColor:"black"}}>
            <h1 class="text-center text-white">Our Services</h1>
            <div class="col-lg-4">
            <div class="text-center">
            <img class="img-center" style={{width:"200px"}} src={require("../imges/hot4.jpg")} alt=""/>
            </div>
            <br />
            <h4 class="text-center text-white ">Hot Beveranges</h4>
            <p class="text-center text-white">Wide range of Steaming hot coffees to make you fresh and light.</p>
            </div>


            <div class="col-lg-4">
            <div class="text-center">
            <img class="img-center" style={{width:"200px"}} src={require("../imges/cold.jpg")} alt=""/>
            </div>
            <br />
            <h4 class="text-center text-white ">Cold Beveranges</h4>
            <p class="text-center text-white">Creamy and frothy cold coffee to make you feel cool from inside.</p>
            </div>


            <div class="col-lg-4">
            <div class="text-center">
            <img class="img-center" style={{width:"200px"}} src={require("../imges/refreshment.jpg")} alt=""/>
            </div>
           <br />
            <h4 class="text-center text-white ">Refreshment</h4>
            <p class="text-center text-white">Fruit and icy refreshing drink to make you feel good</p>
            </div>
        </div>


        <div class="row" style={{backgroundColor:"black"}}>
                <div class="col-lg-4">
            <div class="text-center">
            <img class="img-center" style={{width:"200px"}} src={require("../imges/special.jpg")} alt=""/>
            </div>
            <br />
            <h4 class="text-center text-white ">Special Combo</h4>
            <p class="text-center text-white">Now it's really easy to chose your favourite eating and drinking
            combinations.</p>
            </div> 


            <div class="col-lg-4">
            <div class="text-center">
            <img class="img-center" style={{width:"200px"}} src={require("../imges/burger&fries.jpg")} alt=""/>
            </div>
            <br />
            <h4 class="text-center text-white ">Burger & French Fries</h4>
            <p class="text-center text-white">Yummy! Quick bites to satisfy your small size hunger</p>
            </div>


            <div class="col-lg-4">
            <div class="text-center">
            <img class="img-center" style={{width:"200px"}} src={require("../imges/dessert.jpg")} alt=""/>
            </div>
            <br />
            <h4 class="text-center text-white ">Dessert</h4>
            <p class="text-center text-white">This for sure would satiate your palate and take you on a
            culinary treat.</p>
            </div>
            </div>
        </>
    )
};

export default service;