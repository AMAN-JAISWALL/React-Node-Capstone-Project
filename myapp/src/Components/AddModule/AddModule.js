import React,{useState} from "react";
import axios from "axios";
import { apiURL } from "../apiURL";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import { ValiModule } from "../Schema";
const initialValues={
  course_title:"",
  module_title:"",
  module_details:"",
  number_of_questions:"",
  number_of_chapters:""
}
export const AddModule = () => {


    //show result data insert or not
    var [output,setOutput]= useState();

    //for cancel navigate
    var navigate = useNavigate(); 

  
//formik start
   const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
      initialValues:initialValues,
      validationSchema:ValiModule,
      onSubmit:(values)=>{

        // console.log("formik",values);  
        // console.log("course_title ",values.course_title);
         const moduleDetails={
      "course_title":values.course_title,"module_title":values.module_title,
      "module_details":values.module_details,"number_of_questions":values.number_of_questions,
      'number_of_chapters':values.number_of_chapters
    };
    console.log(moduleDetails);

        axios.post(apiURL+"module/insert",moduleDetails).then((response)=>{

          // console.log("axios")
          setOutput( <span style={{color:"green"}} > "Module Data Insert Successfully!!!"</span>);
          values.course_title="";
          values.module_title="";
          values.module_details="";
          values.number_of_questions="";
          values.number_of_chapters="";
      }).catch((err)=>{
          setOutput(<span color="red" >"data is not insert"</span>);
          console.log("insert course failed--",err)
      })
      }
    });
    //formik end

 const handleCancel=()=>{
  navigate("/module")
}
  

  return (
    <>
      <h1 style={{fontSize:"30px",textAlign:"center", marginTop:"20px",fontSize:'50px'}}  >Create Module</h1>
      <form onSubmit={handleSubmit} >
<div className="form-group">
<label for="Course Title">Course Title <span style={{color:"red"}}>*</span></label>
<select className="form-control" name="course_title" id="Course Title *"           
   data-validate-type="no-blank" value={values.course_title} onChange={handleChange} onBlur={handleBlur}  >
                  <option >Select Option</option>
                  <option value="React">React</option>
                  <option value="Node">Node</option>
                  <option value="Express">Express</option>
                  <option value="java">Java</option>
                  <option value="Javascript">Javascript</option>
</select>
   { errors.course_title && touched.course_title ? <p style={{color:"red"}} >{errors.course_title}</p>: null}
</div>



<div className="form-group">
<label for="ModuleTitle">Module Title <span style={{color:"red"}}>*</span></label>
<input type="text" className="form-control" name="module_title" id="ModuleTitle*"           
 value={values.module_title} onChange={handleChange} onBlur={handleBlur}/>
 { errors.module_title && touched.module_title ? <p style={{color:"red"}} >{errors.module_title}</p>: null}
</div>

<div className="form-group">
  <label for="">Module Details <span style={{color:"red"}}>*</span></label>
  <input type="text" className="form-control" name="module_details"  placeholder="" value={values.module_details} onChange={handleChange} onBlur={handleBlur}/>
  { errors.module_details && touched.module_details ? <p style={{color:"red"}} >{errors.module_details}</p>: null}
</div>


<div className="form-group">
  <label for="">Number Of Questions <span style={{color:"red"}}>*</span></label>
  <input type="text" className="form-control" placeholder="" name="number_of_questions" value={values.number_of_questions} onChange={handleChange} onBlur={handleBlur} />
  { errors.number_of_questions && touched.number_of_questions ? <p style={{color:"red"}} >{errors.number_of_questions}</p>: null}
</div>


<div className="form-group">
  <label for="">Number Of Chapters <span style={{color:"red"}}>*</span></label>
  <input type="text" className="form-control" name="number_of_chapters" placeholder="" value={values.number_of_chapters} onChange={handleChange} onBlur={handleBlur}/>
  { errors.number_of_chapters && touched.number_of_chapters ? <p style={{color:"red"}} >{errors.number_of_chapters}</p>: null}

</div>

  <p>{output}</p>
  <br />
<input type="submit" className="btn btn-success"   />
<button type="button" className="btn btn-danger" onClick={handleCancel} style={{margin:"10px"}}  >Cancel</button>

</form>
    
    </>
  )
} 