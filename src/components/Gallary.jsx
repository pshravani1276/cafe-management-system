

function Gallary()
{
    return(
        <>
        <div class="row">
            <div class="text-img">
            GALLERY
            </div>
            <div class="col-lg-3 border">
                <a href="http://">
            <img class="img-fluid"   src={require("../imges/2023-04-23.jpg")} alt=""/>
            </a>

            </div>
            <div class="col-lg-3">
                <a href="http://">
            <img class="img-fluid" src={require("../imges/2023-04-23 (1).jpg")} alt=""/>
            </a>
            </div>
            <div class="col-lg-3 border">
                <a href="http://">
            <img class="img-fluid" src={require("../imges/2023-04-23 (2).jpg")} alt=""/>
            </a>
            </div>
            <div class="col-lg-3 border">
                <a href="http://">
                <img class="img-fluid" src={require("../imges/2023-04-23 (3).jpg")} alt=""/>
                </a>
            </div>
            </div> 
        </>
    )
};
export default Gallary;