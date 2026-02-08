// import './App.css'

import { Link } from "react-router-dom";


function Header()
{
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <Link to={"/"}>
          <a class="navbar-brand">
          <img style={{width:"75px"}} src={require("../imges/cd-logo-letter-monogram-slash-with-modern-logo-designs-template-vector.jpg")}alt="" />
      Celebration Cafe Day
    </a>
    </Link>
          <a class="navbar-brand" href="#"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to={"/"} class="nav-item">
                <a class="nav-link active" aria-current="page">Home</a>
                </Link>
              
                <Link to={"/about"} class="nav-item">
                <a class="nav-link active" aria-current="page">About</a>
                </Link>
                <Link to={"/gallery"} class="nav-item">
                <a class="nav-link active" aria-current="page">Gallery</a>
                </Link>
                <Link to={"/contact"} class="nav-item">
                <a class="nav-link active" aria-current="page">Contact</a>
                </Link>
                <Link to={"/whyus"} class="nav-item">
                <a class="nav-link active" aria-current="page">Why Us?</a>
                </Link>
                <Link to={"/service"} class="nav-item">
                <a class="nav-link active" aria-current="page">Service</a>
                </Link>
                <Link to={"/adminlogin"} class="nav-item">
                <a class="nav-link active" aria-current="page">AdminLogin</a>
                </Link>
        
                <Link to={"/allmenu"} class="nav-item">
                <a class="nav-link active" aria-current="page">AllMenu</a>
                </Link>
                <Link to={"/addmenu"} class="nav-item">
                <a class="nav-link active" aria-current="page">AddMenu</a>
                </Link>
                <Link to={"/menu"} class="nav-item">
                <a class="nav-link active" aria-current="page">Menu</a>
                </Link>
        
         

              
              
              
              {/* <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li> */}
            </ul>
           <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search items" aria-label="Search"/>
              <button class="btn btn-outline-primary" type="submit">Search</button>
            </form> 
            {/* <div class="wrap-input-17"><div class="search-box">
              <button class="btn-search">🔍</button>
              <input type="text" class="input-search" placeholder="Type to Search..."/>
            </div>
            </div> */}
          </div>
        </div>
      </nav>

      
        </>
    )
    
};

export default Header;