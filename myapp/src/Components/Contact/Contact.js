import React from "react";
// import './Contact.css';
export const Conatact =()=>{
    return(
        <>
               {/* <!-- contact  section --> */}
   <div id="contact" className="contact ">
      <div className="container">
         <div className="row">
            <div className="col-md-12">
               <div className="titlepage">
                  <h2><strong className="yellow">Contact us</strong><br/>Request a call back</h2>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-md-8 offset-md-2">
               <form id="post_form" className="contact_form">
                  <div className="row">
                     <div className="col-md-12 ">
                        <input className="contact_control" placeholder=" Name" type="type" name="Name"/>
                     </div>
                     <div className="col-md-12">
                        <input className="contact_control" placeholder="Email" type="type" name="Email"/>
                     </div>
                     <div className="col-md-12">
                        <input className="contact_control" placeholder="Phone Number " type="type" name="Phone Number "/>
                     </div>
                     <div className="col-md-12">
                        <textarea className="textarea" placeholder="Message" type="type" Message="Name">Message </textarea>
                     </div>
                     <div className="col-md-12">
                        <button className="send_btn">Send</button>
                     </div>
                    </div>
               </form>
            </div>
         </div>
      </div>
   </div>
   {/* <!-- end contact  section --> */}
        </>
    )
}