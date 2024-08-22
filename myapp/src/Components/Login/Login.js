import {useState } from "react";
import "./Login.css";
import { useNavigate ,Link} from "react-router-dom";
import { apiURL } from "../apiURL";
import axios from "axios";


export const Login = () => {

    const [first_name, setFirstName] = useState();
    const [middle_name, setMiddleName] = useState();
    const [last_name, setLastName] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [password, setPassword] = useState();
    const [Cpassword, setCPassword] = useState();
    const [gender, setGender] = useState();
    const [signup_output,setSignup_output] = useState();


//     // login satates
    const [logEmail, setLogEmail] = useState();
    const [logPassword, setLogPassword] = useState();
    const [loginOutput,setLoginOutput] = useState();

    const navigate = useNavigate();

   const  goToForgotPass = ()=>{
    navigate("/forgotpass")
   }
   
   
   const checkName1 = (val) => {
       setFirstName(val);
    let nm = document.getElementById("nm");
    if (val === "" || val.length < 2) {
        return nm.innerHTML = "*Name Length Should Be Greater Than 2 Characters"
    }
    else if (val.includes(1) || val.includes(0) || val.includes(2) || val.includes(3) || val.includes(4) ||
        val.includes(5) || val.includes(6) || val.includes(7) || val.includes(8) || val.includes(9)) {
        return nm.innerHTML = "*Name Does Not Contain Numerical Values"
    }
    else if (val.length > 50) {
        return nm.innerHTML = "*Name Length Should Not be Greater Than 50 Words"
    }
    else if (val.includes("!") || val.includes("@") || val.includes("#") || val.includes("$") || val.includes("%") ||
        val.includes("^") || val.includes("&") || val.includes("*")) {
        return nm.innerHTML = "*Name Does Not Contain Special Character Values"
    }
    return nm.innerHTML = "";

}


const checkName2 = (val) => {
        setMiddleName(val);
        let nm = document.getElementById("nm2");
        if (val === "") {
            return nm.innerHTML = "*Name Can't Empty"
        }
        else if (val.includes(1) || val.includes(0) || val.includes(2) || val.includes(3) || val.includes(4) ||
            val.includes(5) || val.includes(6) || val.includes(7) || val.includes(8) || val.includes(9)) {
            return nm.innerHTML = "*Name Does Not Contain Numerical Values"
        }
        else if (val.length > 50) {
            return nm.innerHTML = "*Name Length Should Not be Greater Than 50 Words"
        }
        else if (val.includes("!") || val.includes("@") || val.includes("#") || val.includes("$") || val.includes("%") ||
            val.includes("^") || val.includes("&") || val.includes("*")) {
            return nm.innerHTML = "*Name Does Not Contain Special Character Values"
        }
         return nm.innerHTML = "";
         
        }
    const checkName3 = (val) => {
        setLastName(val);
        let nm = document.getElementById("nm3");
        if (val === "" || val.length < 2) {
            return nm.innerHTML = "*Name Length Should be Greater Than 2 Characters"
        }
        else if (val.includes(1) || val.includes(0) || val.includes(2) || val.includes(3) || val.includes(4) ||
            val.includes(5) || val.includes(6) || val.includes(7) || val.includes(8) || val.includes(9)) {
            return nm.innerHTML = "*Name Does Not Contain Numerical Values"
        }
        else if (val.length > 50) {
            return nm.innerHTML = "*Name Length Should Not Be Greater Than 50 Words"
        }
        else if (val.includes("!") || val.includes("@") || val.includes("#") || val.includes("$") || val.includes("%") ||
            val.includes("^") || val.includes("&") || val.includes("*")) {
            return nm.innerHTML = "*Name Does Not Contain Special Character Values"
        }
        return nm.innerHTML = "";
    }


    const checkEmail = (val) => {
        setEmail(val);
        let eml = document.getElementById("eml");
        if (!val.includes("@") || !val.includes(".")) {
            return eml.innerHTML = "Email Should Includes @ And (.) In Between"
        }
        else if (val === "" || val.length < 10) {
            return eml.innerHTML = "*Name Length Should Be Greater Than 10 Characters"
        }
        return eml.innerHTML = "";
    }
    
    const checkMobile = (val) => {
        setMobile(val);
        let mob = document.getElementById("mob");
        if (val.length === 0) {
            return mob.innerHTML = "";
        }
        else if (val[0].includes("0") || val[0].includes("1") || val[0].includes("2") || val[0].includes("3") ||
            val[0].includes("4") || val[0].includes("5")) {
            return mob.innerHTML = "Invalid Mobile Number"
        }
        else if (val.length < 10 || val.length > 10) {
            return mob.innerHTML = "Mobile Number Length should be 10"
        }
        return mob.innerHTML = "";

    }
    const checkPassword = (val) => {
        setPassword(val);
        let pwd = document.getElementById("pwd");
        if (val.length < 8 || val.length > 16) {
            return pwd.innerHTML = "Password Length Should Be Min 8 and Max 16 Character"
        }

        // return pwd.innerHTML = "";
    }
    const checkGender=(val)=>{
        setGender(val)
    }

    const checkCPassword = (val) => {
        setCPassword(val);
        let Cpwd = document.getElementById("Cpwd");
        if (val !== password) {
            return Cpwd.innerHTML = "Doesn't Match Password";
        }
        return Cpwd.innerHTML = "";
    }



   
    const HandleSignUp = (e) => {
        e.preventDefault();
   
         let gd = document.getElementById("gd").value;
        setGender(gd);

        const userDetails={"first_name":first_name,"middle_name":middle_name,"last_name":last_name,"email":email,"password":password,"gender":gender,"contact":mobile};
        console.log(userDetails);

        axios.post(apiURL+"user/signup",userDetails).then((response)=>{
            setSignup_output("User Registration success");
            // console.log(response)
            setFirstName("");
            setMiddleName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setMobile("");
            setGender("");
            setCPassword('');
            // toast.info(' Signup Successfully!', {
            //     position: toast.POSITION.TOP_CENTER
            // });
        }).catch((err)=>{
            setSignup_output("User Registration Failed");
            console.log(err)
        })
    }
   
    const checkLogEmail = (val) => {
        setLogEmail(val);
        let eml = document.getElementById("logeml");
        if (!val.includes("@") || !val.includes(".")) {
            return eml.innerHTML = "*Email Should Includes @ And (.) in Between"
        }
        else if (val === "" || val.length < 10) {
            return eml.innerHTML = "*Name Length Should Be Greater Than 10 Characters"
        }
        return eml.innerHTML = "";
    }
    const checkLogPassword = (val) => {
        setLogPassword(val);
        let pwd = document.getElementById("logpwd");
        if (val.length < 8 || val.length > 16) {
            return pwd.innerHTML = "Password Length Should Be Min 8 And Max 16 Character"
        }
        return pwd.innerHTML = "";
    }



    const HandleLogin=(evt)=>{
        evt.preventDefault();
        const userDetails = {"email":logEmail,"password":logPassword};
        axios.post(apiURL+"user/login",userDetails).then((response)=>{
            if(response.data.token==="error"){
                setLoginOutput("Invalide User Please Check Email or Password")
            }else{
                // setLoginOutput("")
                const obj = response.data.userDetails;
                localStorage.setItem("token",response.data.token);
                localStorage.setItem("user_id",obj.user_id);
                localStorage.setItem("email",obj.email);
                localStorage.setItem("role",obj.role);
                (obj.role==="admin")? navigate("/myprofile"):navigate("/home");
            }
        }).catch((err)=>{
            console.log("login error",err);
            setLoginOutput("Invalid User Please Check Email or Password");
        })
      }


    return (
        <div className="container-fluid" id="regi">
            <div className="container" id="regi_1">
                <div className="row">
                    <div id="sign" className="form-group col-md-6">
                        <h1 style={{fontSize:"30px",fontWeight:"bold",marginTop:"20px"}} >Sign Up</h1>
                        <h4 style={{color:"green"}} >{signup_output}</h4>
                        <form onSubmit={HandleSignUp}>
                            <div>
                                <label>First Name<span style={{color:"red"}}>*</span> </label>
                                <input
                                    className="form-control"
                                    placeholder="Enter Name"
                                    type="text"
                                    value={first_name}
                                    onChange={(e) => checkName1(e.target.value)}
                                    required />
                                <span id="nm" style={{color:"red"}}  ></span>
                            </div>

                            <div>
                                <label>Middle Name </label>
                                <input
                                    className="form-control"
                                    placeholder="Enter Name"
                                    type="text"
                                    value={middle_name}
                                    onChange={(e) => checkName2(e.target.value)}
                                    required />
                                <span id="nm2" style={{color:"red"}}  ></span>
                            </div>

                            <div>
                                <label>Last Name<span style={{color:"red"}}>*</span> </label>
                                <input
                                    className="form-control"
                                    placeholder="Enter Name"
                                    type="text"
                                    value={last_name}
                                    onChange={(e) => checkName3(e.target.value)}
                                    required />
                                <span id="nm3" style={{color:"red"}}  ></span>
                            </div>

                            <div>
                                <label>Mobile Number<span style={{color:"red"}}>*</span></label>
                                <input
                                    className="form-control"
                                    placeholder="Enter Mobile Number"
                                    type="text"
                                    maxLength={10}
                                    value={mobile}
                                    onChange={(e) => checkMobile(e.target.value)} required />
                                <span id="mob"  style={{color:"red"}}  ></span>
                            </div>


                            <div>
                                <label>Email<span style={{color:"red"}}>*</span> </label>
                                <input className="form-control"
                                    placeholder="Enter Email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => checkEmail(e.target.value)}
                                    required />
                                <span id="eml" style={{color:"red"}}  ></span>
                            </div>

                            

                            <div>
                                <label>Password<span style={{color:"red"}}>*</span></label>
                                <input
                                    className="form-control"
                                    placeholder="Enter Password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => checkPassword(e.target.value)}
                                    required />
                                <span id="pwd" style={{color:"red"}}  ></span>
                            </div>

                            <div>
                                <label>Confirm Password<span style={{color:"red"}}>*</span></label>
                                <input
                                    className="form-control"
                                    placeholder="Enter Confirm Password"
                                    type="password"
                                    value={Cpassword}
                                    onChange={(e) => checkCPassword(e.target.value)}
                                    required />
                                <span id="Cpwd" style={{color:"red"}}  ></span>
                            </div>

                         
                           


                            <div>
                                <h5>Gender<span style={{color:"red"}}>*</span></h5>
                                <label >Male </label>
                                <input id="gd" style={{"marginLeft":"31px"}}
                                    className="form-check-input"
                                    type="radio"
                                    value="male"
                                    checked
                                    name="gender" onChange={(e) => checkGender(e.target.value)} 
                                    
                                    />
                                <br />
                                <label>Female </label>&nbsp;&nbsp;
                                <input style={{"marginLeft":"10px"}}
                                    id="gd"
                                    className="form-check-input"
                                    type="radio"
                                    value="female"
                                    name="gender" 
                                    
                                    onChange={(e) => checkGender(e.target.value)} />
                            </div>

                            <div>
                                <input  type="submit" className="btn btn-success"/>
                            </div>
                        </form>
                    </div>
                    <div id="log" className="form-group col-md-6">
                        <h1 style={{fontSize:"30px",fontWeight:"bold",marginTop:"20px"}} >Login</h1>
                        <h4 style={{color:"red"}} >{loginOutput}</h4>
                        <form >
                            <div>
                                <label>Email<span style={{color:"red"}}>*</span></label>
                                <input className="form-control"
                                    placeholder="Enter Email"
                                    type="text"
                                    value={logEmail}
                                    onChange={(e) => checkLogEmail(e.target.value)} 
                                    required
                                    />
                                    <span id="logeml" style={{color:"red"}}  ></span>
                            </div>
                            <div>
                                <label>Password<span style={{color:"red"}}>*</span></label>
                                <input
                                    className="form-control"
                                    placeholder="Enter Password"
                                    type="password"
                                    value={logPassword}
                                    onChange={(e) => checkLogPassword(e.target.value)}
                                    required />
                                <span id="logpwd" style={{color:"red"}}  ></span>
                            </div>
                            <div>
                                <Link to='/forgotpass' onClick={()=>goToForgotPass()} style={{cursor:"pointer"}} > Forgot Password?</Link>
                            </div>
                            <div>
                                <button onClick={HandleLogin} type="button" className="btn btn-success">
                                    Login
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

}