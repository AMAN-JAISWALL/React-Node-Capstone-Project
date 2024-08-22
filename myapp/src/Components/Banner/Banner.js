import React from "react";
import {Link} from 'react-router-dom';

export  const Banner= ()=>{


    return(
        <>
             {/* <!-- banner --> */}
   <section className="banner_main">
      <div className="container">
         <div className="row">
            <div className="col-md-7 col-lg-7">
               <div className="text-bg">
                  <h1>Trusted and <br/>Professional Advisers</h1>
                  <span>for your Business</span>
                  <p>Showcase your Profile to the world using online CV builder and Get Hired Faster</p>
                  <Link >About us</Link>
               </div>
            </div>
            <div className="col-md-5 col-lg-5">
               <div className="ban_img">
                  <figure><img src="/assets/images/ba_ing.png" alt="#" /></figure>
               </div>
            </div>
         </div>
      </div>
   </section>
   {/* <!-- end banner --> */}
        </>
    )
}