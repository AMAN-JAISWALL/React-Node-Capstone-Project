import React from "react";
// import './Footer.css'
import { Link, Outlet } from "react-router-dom";


export const Footer =()=>{
    return(
        <>
               {/* <!--  footer --> */}
   <footer>
      <div className="footer">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <Link className="logo2" href="/"><img src="/assets/images/loogo2.png" alt="#" /></Link>
               </div>
               <div className="col-lg-5 col-md-6 col-sm-6">
                  <h3>Contact Us</h3>
                  <ul className="location_icon">
                     <li><Link href="/"><i className="fa fa-map-marker" aria-hidden="true"></i></Link> London 145
                        <br/> United Kingdom
                     </li>
                     <li><Link href="/"><i className="fa fa-envelope" aria-hidden="true"></i></Link>demo@gmail.com<br/> demo@gmail.com</li>
                     <li><Link href="/"><i className="fa fa-volume-control-phone" aria-hidden="true"></i></Link>+01 1234567890<br/>+01 1234567889</li>
                  </ul>
                  <ul className="social_icon">
                     <li> <Link href="/"><i className="fa fa-facebook-f"></i></Link></li>
                     <li> <Link href="/"><i className="fa fa-twitter"></i></Link></li>
                     <li> <Link href="/"> <i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                     <li> <Link href="/"><i className="fa fa-instagram"></i></Link></li>
                  </ul>
               </div>
               <div className="col-lg-2 col-md-6 col-sm-6">
                  <h3>Menus</h3>
                  <ul className="link_icon">
                     <li className="active"> <Link> <Link to="/" >  Home </Link> </Link></li>
                     <li><Link > <Link to='/module' > Module </Link> </Link></li>
                     <li> <Link > <Link to="/material" >Material </Link> </Link></li>
                     <li> <Link > <Link to='/course' >  Course </Link></Link></li>
                     <li> <Link > <Link to='/users' > Users </Link> </Link></li>
                  </ul>
                  <Outlet/>
               </div>
               <div className="col-lg-2 col-md-6 col-sm-6">
                  <h3>Recent Post</h3>
                  <ul className="link_icon">
                     <li> <Link > Participate in staff </Link></li>
                     <li>
                        <Link > meetings manage </Link></li>
                     <li> <Link > dedicated to </Link></li>
                     <li> <Link > marketing</Link></li>
                     <li> <Link > November 25, 2019</Link></li>
                  </ul>
               </div>
               <div className="col-lg-3 col-md-6 col-sm-6">
                  <h3>Newsletter</h3>
                  <form id="request" className="main_form">
                     <div className="row">
                        <div className="col-md-12 ">
                           <input className="news" placeholder="Your Email" type="type" name="Your Email"/>
                        </div>
                        <div className="col-md-12">
                           <button className="send_btn">Send</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
         <div className="copyright">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <p>© 2023 All Rights Reserved.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
  
   </footer>
        </>
    )
}