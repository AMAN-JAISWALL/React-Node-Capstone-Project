import React,{useState,useEffect} from "react";
import axios from "axios";
import { apiURL } from "../apiURL";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";


export const AddMaterial2=()=>{

    var [data,setData]=useState({});
    var params = useParams();
    var navigate= useNavigate();
    // console.log("params",params);
    useEffect(()=>{   
        axios.get(apiURL+"material/fetchOne/"+params.id).then((response)=>{
            // console.log(response.data.response[0]);
            setData(response.data.response[0])
          }).catch((err)=>{
            console.log("add",err);
          })
        },[])


    const handleChange=(e)=>{
        setData({...data, [e.target.name]:e.target.value})
      }
  
  
      const handleUpdate=()=>{
        // console.log(data);
        axios.post(apiURL+"material/update",data).then((response)=>{
          setData(response.data.response[0])
          // navigate('/course');
        }).catch((err)=>{
          console.log("update failed",err);
          // navigate("./material");
          navigate("/material");
        });
      }

    return(
        <>
         <h1 style={{fontSize:"30px",textAlign:"center", marginTop:"20px",fontSize:'50px'}}  >Create Material</h1>
         <form>
<div className="form-group">

<label for="Course Title">Course Title <span style={{color:"red"}}>*</span></label>
<select className="form-control" name="course_title" id="Course Title *"           
 value={data.course_title} onChange={handleChange} >
                  {/* <option value="">Select Option</option> */}
                  <option value="React">React</option>
                  <option value="Node">Node</option>
                  <option value="Express">Express</option>
                  <option value="java">Java</option>
                  <option value="Javascript">Javascript</option>
</select>
</div>

<div className="form-group">
<label for="ModuleTitle">Module Title <span style={{color:"red"}}>*</span></label>
<select className="form-control" name="module_title" id="ModuleTitle*"           
 value={data.module_title} onChange={handleChange}  >
                  {/* <option value="">Select Option</option> */}
                  <option value="Components">components</option>
                  <option value="Npm base">npm base</option>
                  <option value="core">core</option>
                  <option value="framwork">framwork</option>
                  <option value="library">library</option>
</select>
</div>
<div className="form-group">
  <label for="">Material Title <span style={{color:"red"}}>*</span></label>
  <input type="text" className="form-control" name="material_title" placeholder="" value={data.material_title} onChange={handleChange} />
</div>

<div className="form-group">
  <label for="">Material Details <span style={{color:"red"}}>*</span></label>
  <input type="text" className="form-control" placeholder="" name="material_details" value={data.material_details} onChange={handleChange} />
</div>

  {/* <p>{output}</p> */}
  <br />
  {/* <span style={{color:"green"}} >{update}</span> */}
<button type="button" className="btn btn-success"  onClick={handleUpdate} >Submit</button>
</form>
        
        </>
    )
}     
