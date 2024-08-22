import React, { useEffect, useState ,} from "react";
// import './Head.css';
import { Link, useNavigate } from "react-router-dom";
import Auth from "../Auth";

export const Head = () =>{

   const [navContant,setNavContant] = useState();
   const navigate = useNavigate();
   

   function handleLogOut (){
      // localStorage.removeItem("email");
      // localStorage.removeItem("role");
      localStorage.clear();
       navigate('/');
   }


   useEffect(()=>{

   setTimeout(()=>{

  

   if(localStorage.getItem("role")==="admin"){
      setNavContant(  <header>
      {/* <!-- header inner --> */}
      <div className="header">
         <div className="header_to d_none">
            <div className="container">
               <div className="row">
                 
                
               </div>
            </div>
         </div>
         <div className="header_midil">
            <div className="container">
               <div className="row d_flex">
                  <div className="col-md-4 col-sm-4 d_none">
                     <ul className="conta_icon">
                        <li><Link href="/"><i className="fa fa-phone" aria-hidden="true"></i> Call Us : +01 1234567890</Link> </li>
                     </ul>
                  </div>
                  <div className="col-md-4 col-sm-4 ">
                     <Link className="logo" to="/home"><img src="/assets/images/logo.png" alt="#" /></Link>
                  </div>
                  <div className="col-md-4 col-sm-4 d_none">
                     <ul className="conta_icon ">
                        <li><Link href="/"><i className="fa fa-envelope" aria-hidden="true"></i> demo@gmail.com</Link> </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <div className="header_bo">
            <div className="container">
               <div className="row">
                  <div className="col-md-9 col-sm-7">
                     <nav className="navigation navbar navbar-expand-md navbar-dark ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                           <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample04">
                           <ul className="navbar-nav mr-auto">
                              
                           <li className="nav-item ">
                                 <Link className="nav-link" to='/home' style={{color:'white'}} > Home</Link> 
                              </li>

                              <li className="nav-item">
                                  <Link to='/course' style={{color:'white'}} className="nav-link" > course </Link>
                              </li>                             

                              <li className="nav-item">
                                <Link to="/module" style={{color:'white'}} className="nav-link" > module </Link>
                              </li>

                              <li className="nav-item">
                                  <Link to='/material' style={{color:'white'}} className="nav-link" > material </Link>
                              </li>

                              <li className="nav-item">
                                  <Link to='/users' style={{color:'white'}} className="nav-link" > Users </Link>
                              </li>

                              <li className="nav-item">
                                  <Link to='/myprofile' style={{color:'white'}} className="nav-link" > profile </Link>
                              </li>

                  
                              <li className="nav-item">
                                  <Link to='/' style={{color:'white'}} className="nav-link" onClick={handleLogOut} > logout </Link>
                              </li>

                           </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>)
   }else if(localStorage.getItem("role")==="user") {



      setNavContant(   <header>
      {/* <!-- header inner --> */}
      <div className="header">
         <div className="header_to d_none">
            <div className="container">
               <div className="row">
                 
                
               </div>
            </div>
         </div>
         <div className="header_midil">
            <div className="container">
               <div className="row d_flex">
                  <div className="col-md-4 col-sm-4 d_none">
                     <ul className="conta_icon">
                        <li><Link href="/"><i className="fa fa-phone" aria-hidden="true"></i> Call Us : +01 1234567890</Link> </li>
                     </ul>
                  </div>
                  <div className="col-md-4 col-sm-4 ">
                     <Link className="logo" to="/home"><img src="/assets/images/logo.png" alt="#" /></Link>
                  </div>
                  <div className="col-md-4 col-sm-4 d_none">
                     <ul className="conta_icon ">
                        <li><Link href="/"><i className="fa fa-envelope" aria-hidden="true"></i> demo@gmail.com</Link> </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <div className="header_bo">
            <div className="container">
               <div className="row">
                  <div className="col-md-9 col-sm-7">
                     <nav className="navigation navbar navbar-expand-md navbar-dark ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                           <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample04">
                           <ul className="navbar-nav mr-auto">
                              <li className="nav-item ">
                                 <Link className="nav-link" to='/home' style={{color:'white'}} > Home</Link> 
                              </li>
                              
      
                              <li className="nav-item">
                                  <Link to='/myprofile' style={{color:'white'}} className="nav-link" > profile </Link>
                              </li>

                              {/* <li className="nav-item">
                                <Link to="/module" style={{color:'white'}} className="nav-link" > module </Link>
                              </li>
                              
                              <li className="nav-item">
                                  <Link to='/course' style={{color:'white'}} className="nav-link" > course </Link>
                              </li>

                              <li className="nav-item">
                                  <Link to='/material' style={{color:'white'}} className="nav-link" > material </Link>
                              </li> */}

                              <li className="nav-item">
                                  <Link to='/' style={{color:'white'}} className="nav-link" onClick={handleLogOut} > logout </Link>
                              </li>

                           </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>)


   }else{ 
      setNavContant(
   <header>
      {/* <!-- header inner --> */}
      <div className="header">
         <div className="header_to d_none">
            <div className="container">
               <div className="row">
                 
                
               </div>
            </div>
         </div>
         <div className="header_midil">
            <div className="container">
               <div className="row d_flex">
                  <div className="col-md-4 col-sm-4 d_none">
                     <ul className="conta_icon">
                        <li><Link href="/"><i className="fa fa-phone" aria-hidden="true"></i> Call Us : +01 1234567890</Link> </li>
                     </ul>
                  </div>
                  <div className="col-md-4 col-sm-4 ">
                     <Link className="logo" to="/"><img src="/assets/images/logo.png" alt="#" /></Link>
                  </div>
                  <div className="col-md-4 col-sm-4 d_none">
                     <ul className="conta_icon ">
                        <li><Link href="/"><i className="fa fa-envelope" aria-hidden="true"></i> demo@gmail.com</Link> </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
         <div className="header_bo">
            <div className="container">
               <div className="row">
                  <div className="col-md-9 col-sm-7">
                     <nav className="navigation navbar navbar-expand-md navbar-dark ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                           <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample04">
                           <ul className="navbar-nav mr-auto">
                              <li className="nav-item active">
                                 <Link className="nav-link" to='/home' style={{color:'white'}} > Home</Link> 
                              </li>
                              <li className="nav-item">
                                  <Link to="/" style={{color:'white'}} className="nav-link" > Login </Link>
                              </li>
                              
                           </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>)

   }
},1); 

})
    return(
    <>
      {navContant}
      <Auth/>
    </>
    )
}
// exports default 