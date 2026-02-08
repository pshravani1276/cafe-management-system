

function About()
{
    // const style={{div:hover a:not(:hover) opacity: .7, tranform: scale(.85)}}
    return(
    <>
        <div class="container mt-5">
        <div class="row">
            
            
            <div class="col-lg-6">

            <h1 class="text-center mb-3"><u>About Us</u></h1>
              <img class="img-fluid" src={require("../imges/coffe1.jpg")} alt=""/>
                        
            </div>
            <div class="col-lg-6">
            <h1 class="text-center" style={{color:"skyblue",backgroundColor:"yellow"}}>Celebrate the Every Joy here</h1>
                    <br /><br />
                    <h6>"Celebration Cafe Day is one of the best cafe in kolhapur. Celebrate your joyful moments with us. We are one of the top 10 cafes in kolhapur offering delicious dishes and refreshing drinks and many more special items like Goan Food, Bubble Tea, Boba Tea etc.."
                    </h6> 
                         <p>
                    We at Celebration Cafe Day, located in Tarabai Park, Kolhapur, are one of the
              favorite hangouts for coffee and conversations. Our goal is to
              offer the best experience to our guests, ensuring an authentic
              coffee drinking experience in a warm, friendly, and relaxed
              environment. We aim to bring a sense of relaxation to the city
              with our cozy space, complete with comfortable couches to lounge
              in while you enjoy your coffee.
              </p>
              </div>  
            </div>
        </div>
    
        </>
        )
}
export default About;