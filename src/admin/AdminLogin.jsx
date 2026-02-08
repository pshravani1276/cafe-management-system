import background from '../imges/login.jpg'
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';



const myStyle = {
            backgroundImage: `url(${background})`,
            height: "100vh",
            marginTop: "-70px",
            fontSize: "30px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        };
        const fontstyle={
          color:'white'
        }
function AdminLogin()
{
    const navigate = useNavigate();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit() {

        // console.log("userName : " + userName);
        // console.log("password : " + password);

        if (userName === "admin" && password === "admin") {
            // alert("Success")
            navigate("/admin")
        } else {
            alert("Invalid Credential !!!")
            setUserName("")
            setPassword("")
        }
    };
    return(
        <>
        <div className="container mt-5"style={myStyle} >
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <form>
                            {/* <!-- Email input --> */}
                            <div data-mdb-input-init class="form-outline mb-4">
                                <label style={fontstyle} class="form-label" for="form2Example1">User Name</label>
                                <input  value={userName} onChange={(event) => setUserName(event.target.value)} type="email" id="form2Example1" class="form-control" />
                            </div>

                            {/* <!-- Password input --> */}
                            <div data-mdb-input-init class="form-outline mb-4">
                                <label style={fontstyle}  class="form-label" for="form2Example2">Password</label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="form2Example2" class="form-control" />
                            </div>

                            {/* <!-- 2 column grid layout for inline styling --> */}
                            <div class="row mb-4">
                                <div class="col d-flex justify-content-center">
                                    {/* <!-- Checkbox --> */}
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                        <label style={fontstyle}  class="form-check-label" for="form2Example31"> Remember me </label>
                                    </div>
                                </div>

                                <div class="col">
                                    {/* <!-- Simple link --> */}
                                    <a href="#!">Forgot password?</a>
                                </div>
                            </div>

                            {/* <!-- Submit button --> */}
                            <button type="button" onClick={handleSubmit}  data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">Sign in</button>

                            {/* <!-- Register buttons --> */}
                            <div class="text-center">
                                <p  style={fontstyle}>Not a member? <a href="#!">Register</a></p>
                                <p  style={fontstyle}>or sign up with:</p>
                                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                                    <i class="fab fa-facebook-f"></i>
                                </button>

                                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                                    <i class="fab fa-google"></i>
                                </button>

                                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                                    <i class="fab fa-twitter"></i>
                                </button>

                                <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                                    <i class="fab fa-github"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>

        </>
    )
};



export default AdminLogin;