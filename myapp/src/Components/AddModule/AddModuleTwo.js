import React,{useEffect, useState} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiURL } from "../apiURL";
export const AddModuleTwo = () => {

    var [data,setData]=useState({});
    var params = useParams();
    var navigate = useNavigate();
   
    useEffect(()=>{   
        axios.get(apiURL+"module/fetchOne/"+params.id).then((response)=>{
            // console.log(response.data.response[0]);
            setData(response.data.response[0])
          }).catch((err)=>{
            console.log(err);
          })
        },[])


    const handleChange=(e)=>{
        setData({...data, [e.target.name]:e.target.value})
      }
  
  
      const handleUpdate=()=>{
        console.log(data);
        axios.post(apiURL+"module/update",data).then((response)=>{
            setData(response.data.response[0]);
            
          }).catch((err)=>{
            console.log("update failed",err);
            toast.info('Successfully Updated!!', {
              position: toast.POSITION.TOP_CENTER
          });
            navigate('/module');
        //   setMsg("update failed");
       
        })
      }




  

  return (
    <>
      <h1 style={{fontSize:"30px",textAlign:"center", marginTop:"20px",fontSize:'50px'}}  >Create Module</h1>
      <form>
<div className="form-group">
<label for="Course Title">Course Title <span style={{color:"red"}}>*</span></label>
<select className="form-control" name="course_title" id="Course Title *" value={data.course_title} onChange={handleChange} >
                  <option value="">Select Option</option>
                  <option value="React">React</option>
                  <option value="Node">Node</option>
                  <option value="Express">Express</option>
                  <option value="java">Java</option>
                  <option value="Javascript">Javascript</option>
</select>
</div>

<div className="form-group">
<label for="ModuleTitle">Module Title <span style={{color:"red"}}>*</span></label>
<input type="text" className="form-control" name="module_title" id="ModuleTitle*"  value={data.module_title}    onChange={handleChange}      />
</div>

<div className="form-group">
  <label for="">Module Details <span style={{color:"red"}}>*</span></label>
  <input type="text" className="form-control" placeholder=""  name="module_details" value={data.module_details} onChange={handleChange}/>
</div>

<div className="form-group">
  <label for="">Number Of Questions <span style={{color:"red"}}>*</span></label>
  <input type="text" className="form-control" name="number_of_questions" placeholder="" value={data.number_of_questions} onChange={handleChange} />
</div>

<div className="form-group">
  <label for="">Number Of Chapters <span style={{color:"red"}}>*</span></label>
  <input type="text" className="form-control" placeholder="" name="number_of_chapters" value={data.number_of_chapters} onChange={handleChange} />
</div>

  <br />
<button type="button" className="btn btn-success" onClick={handleUpdate}  >Submit</button>
</form>
<ToastContainer/>
    </>
  )
} 