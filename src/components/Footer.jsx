

// import './App.css'
function Footer()
{
    return(
        // <h1 class="App">Footer component</h1>
       
        <div className="App">
           {/* <!-- Footer --> */}
            <footer class="text-center text-lg-start bg-body-dark text-muted">
  {/* <!-- Section: Social media --> */}
  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* <!-- Left --> */}
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    {/* <!-- Left --> */}

    {/* <!-- Right --> */}
    <div>
    
      <a href="https://m.facebook.com/reel/732892621724890/" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="https://www.google.com/search?q=celebration+cafe+day+kolhapur&rlz=1C1CHBD_enIN1102IN1103&oq=ce&gs_lcrp=EgZjaHJvbWUqBggDEEUYOzIICAAQRRgnGDsyCAgBEEUYJxg7MgYIAhBFGDkyBggDEEUYOzIMCAQQABhDGIAEGIoFMgwIBRAAGEMYgAQYigUyEggGEC4YQxjHARjRAxiABBiKBTIMCAcQABhDGIAEGIoFMgwICBAAGEMYgAQYigUyDAgJEAAYQxiABBiKBdIBCTU5MzRqMGoxNagCCLACAQ&sourceid=chrome&ie=UTF-8" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="https://www.instagram.com/celebration_cafe_day?igsh=MWt4ZmpsZm82bWlkaA==" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-youtube"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-snapchat"></i>
      </a>
    </div>
    {/* <!-- Right --> */}
  </section>
  {/* <!-- Section: Social media --> */}

  {/* <!-- Section: Links  --> */}
  <section class="">
    <div class="container text-center text-md-start mt-5">
      {/* <!-- Grid row --> */}
      <div class="row mt-3">
        {/* <!-- Grid column --> */}
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* <!-- Content --> */}
          <h6 class="text-uppercase fw-bold mb-4">
          <img class="img-fluid" style={{width:"75px"}} src={require("../imges/footer_image.jpg")} alt=""/>
            <i class="fas fa-gem me-3"></i>Celebration Cafe Day
          </h6>
          <p>
            
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="http://localhost:3000/about" class="text-reset">About</a>
          </p>
          <p>
            <a href="http://localhost:3000/service" class="text-reset">Services</a>
          </p>
          <p>
            <a href="http://localhost:3000/whyus" class="text-reset">Why Us</a>
          </p>
          <p>
            <a href="http://localhost:3000/gallery" class="text-reset">Gallery</a>
          </p>
          <p>
            <a href="http://localhost:3000/contact" class="text-reset">Contact</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p>
          <a class="navbar-brand" href="https://maps.app.goo.gl/92AQFfPvrSwwdCeX7">
          <img style={{width:"75px"}}src={require("../imges/images.png" )}alt="" />Our Location</a>
          </p>
          <p>
          <a class="navbar-brand" href="https://www.google.com/search?q=celebration+cafe+day+kolhapur+phone+number&rlz=1C1CHBD_enIN1102IN1103&oq=&gs_lcrp=EgZjaHJvbWUqCQgAECMYJxjqAjIJCAAQIxgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQkxNTA5ajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8">
          <img style={{width:"75px"}}src={require("../imges/calliconturn_00000.jpg" )}alt="" />Call Us</a>
          </p>
          <p>
          <a class="navbar-brand" href="https://www.swiggy.com/restaurants/celebration-cafe-day-sarlashkar-park-tarabai-park-kolhapur-710770">
          <img style={{width:"75px"}}src={require("../imges/order.png" )}alt="" />Order</a>
          </p>
          <p>
          <a class="navbar-brand" href="https://www.google.com/search?q=celebration+cafe+day+kolhapur+timing&sca_esv=5253a18b766cf5c0&sca_upv=1&rlz=1C1CHBD_enIN1102IN1103&sxsrf=ADLYWIIv05-ikklMWvXAHoJGPaGWC26lxg%3A1720365972798&ei=lLOKZs22MP6w4-EPmtyE8As&ved=0ahUKEwjN0MTVnpWHAxV-2DgGHRouAb4Q4dUDCA8&uact=5&oq=celebration+cafe+day+kolhapur+timing&gs_lp=Egxnd3Mtd2l6LXNlcnAiJGNlbGVicmF0aW9uIGNhZmUgZGF5IGtvbGhhcHVyIHRpbWluZzIFECEYoAEyBRAhGKABSKNRUNsEWNNIcAF4AJABAZgBuwSgAfY1qgEJMi00LjcuNC4zuAEDyAEA-AEBmAIIoAKcFsICCxAAGIAEGLADGKIEwgILEAAYsAMYogQYiQXCAgQQIxgnwgIGEAAYFhgewgILEAAYgAQYhgMYigXCAggQABiiBBiJBcICBxAhGKABGArCAgUQIRifBZgDAIgGAZAGBJIHCTEuMC4xLjIuNKAHtlM&sclient=gws-wiz-serp">
          <img style={{width:"75px"}}src={require("../imges/time-clock-icon-logo-YewkMl3-600.jpg" )}alt="" />Our Timing</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold mb-4">Follow us</h6>
          <a class="navbar-brand" href="https://m.facebook.com/reel/732892621724890/">
          <img style={{width:"75px"}}src={require("../imges/facebook.avif" )}alt="" />celebration_cafe_day</a>
          <br />
          <br />
          <a class="navbar-brand" href="https://www.instagram.com/celebration_cafe_day?igsh=MWt4ZmpsZm82bWlkaA==">
          <img style={{width:"75px"}}src={require("../imges/insta.avif" )}alt="" />celebration_cafe_day1212</a>
          <br /><br />
          <a class="navbar-brand" href="https://youtu.be/dFuigxyucUc?si=KFf4NnJ0lEB8uzp6">
          <img style={{width:"75px"}}src={require("../imges/youtube.avif" )}alt="" />celebration_cafe_day1212</a>
          <br /><br />
          <a class="navbar-brand" href="#">
          <img style={{width:"75px"}}src={require("../imges/twitter.avif" )}alt="" />celebration_cafe_day1212</a>
          
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
  {/* <!-- Section: Links  --> */}

  {/* <!-- Copyright --> */}
  <div class="text-center p-4" style={{backgroundColor :"rgba(0, 0, 0, 0.05)"}}>
    © 2024 Copyright:
    <a class="text-reset fw-bold" href="https://www.google.com/search?q=celebration+cafe+day+kolhapur&sca_esv=b6006db025cb7db1&sca_upv=1&rlz=1C1CHBD_enIN1102IN1103&sxsrf=ADLYWIKftwwhFxzJUa416G7jidk33XdlXw:1719153763565&source=lnms&fbs=AEQNm0COtQ6qE5snXClm_cWqGTLX_jMP5V4l2v9LemFtanifXVoSDc4z6nO25TAUUgCi_PqCbebMxH2l70BIpVN1tqaoTHU6lwbH9DsAcppZt6T9NYgJhqN-CxUP6v-KgdRHi_aRy5fEF9y2ip7sLwrQOdVrPWz7g0rDeDpKrQmZgy69qnSLINuAz2_HdWCssNNrsaeTWfyoY8KICeLZKZDkB3w3c091Lg&sa=X&ved=2ahUKEwj8yJDr-vGGAxUdoK8BHb54C6sQ0pQJegQIAxAC&biw=1536&bih=730&dpr=1.25">Celebration_Cafe_day.com</a>
  </div>
  {/* <!-- Copyright --> */}
 </footer>
{/* <!-- Footer --> */}
        </div>
    )
};
export default Footer;