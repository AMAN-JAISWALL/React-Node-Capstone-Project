import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../apiURL";

export const ForgotPass=()=>{

  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [outPut,setOutPut] = useState();

  // useEffect(()=>{

  // },[outPut]);

  const navigate = useNavigate();
  const handleCancel=()=>{
      navigate("/");
  }

  const handleUpdatePass=()=>{
    // alert("update pass")
    let obj = {"email":email,"password":password}
    console.log(obj);
    axios.patch(apiURL+"user/forget",obj).then((response)=>{
      setOutPut("Change Password Successfulluy!!!")
    }).catch((err)=>{
      setOutPut("Password doesn't Change!!!!")
      console.log("forget pass",err);
      // setChangePassword("")

    })


  }

    return(
        <>
       <h1 style={{fontSize:"30px",textAlign:"center", marginTop:"20px",fontSize:'50px'}}  >Reset password</h1>
		<form className="" name="forget_pass_form" id="forget_pass_form" action="" method="post">
              <div className="form-group">
                <div>
                <label style={{fontSize:"20px"}} >Email <span style={{color:"red"}}> *</span></label>
                <input className="form-control" type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                {/* <span>{email}</span> */}

                <div>
                                <label  style={{fontSize:"20px"}} >New Password<span style={{color:"red"}}> *</span></label>
                                <input
                                    className="form-control"
                                    // placeholder="Enter Password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                                {/* <span id="pwd" style={{color:"red"}}  >{password}</span> */}
                            </div>

                            {/* <div>
                                <label  style={{fontSize:"20px"}} >Confirm Password<span style={{color:"red"}}> *</span></label>
                                <input
                                    className="form-control"
                                    // placeholder="Enter Confirm Password"
                                    type="password"
                                    // value={Cpassword}
                                    // onChange={(e) => checkCPassword(e.target.value)}
                                    required />
                                <span id="Cpwd" style={{color:"red"}}  ></span>
                            </div> */}

                <br />
                    <span>{outPut}</span>
                <br />

                <button type="button" style={{margin:"10px"}} id="btn-forget-pass" className="btn btn-success" onClick={handleUpdatePass} >Submit</button>
              <button type="button"  className="btn btn-danger" onClick={handleCancel} > Cancel</button>
              </div>
		</form>
        
        </>
    )
}