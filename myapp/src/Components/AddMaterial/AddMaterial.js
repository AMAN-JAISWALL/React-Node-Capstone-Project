import React,{useState} from "react";
import axios from "axios";
import { apiURL } from "../apiURL";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { ValiMaterial } from "../Schema";


const initialValues={
  course_title:"",
  module_title:"",
  material_title:"",
  material_details:"",
}

export const AddMaterial=()=>{


  var [course_title,setCourse_title] = useState();
  var [module_title,setModule_title] = useState();
  var [material_title,setMaterial_title] = useState();
  var [material_details,setMaterial_details] = useState();

  var [err,setErr] = useState({
    course_title:"",
    module_title:"",
    material_title:"",
    material_details:""
  })

    //show result data insert or not
    var [output,setOutput]= useState();
    // var params = useParams();
    var navigate = useNavigate();
    // console.log(params);
    // console.log(params.id);


//formik start
const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
  initialValues:initialValues,
  validationSchema:ValiMaterial,
  onSubmit:(values)=>{

  const materialDetails={"course_title":values.course_title,"module_title":values.module_title,
      "material_title":values.material_title,"material_details":values.material_details};
console.log(materialDetails);

axios.post(apiURL+"material/insert",materialDetails).then((response)=>{
      // console.log(response)
      setOutput(<span style={{color:"red"}} >Material Data Insert Successfully!!!</span>);
      values.course_title="";
      values.module_title='';
      values.material_title="";
      values.material_details=""
     
    }).catch((err)=>{
      setOutput("Material Data are Not Insert!!!!");
      console.log(err)
    })
}
});
//formik end




  //   const handleAddMaterial=(e)=>{
  //     e.preventDefault();

  //     const materialDetails={"course_title":course_title,"module_title":module_title,
  //     "material_title":material_title,"material_details":material_details};
  //   // console.log(materialDetails);

  //   if(materialDetails.course_title===undefined ){
  //     setErr({course_title:"Course Title cannot be blank"});
  //   }else if(materialDetails.module_title===undefined){
  //   setErr({module_title:"Module Title cannot be blank"});
  //   }else if(materialDetails.material_title===undefined){
  //     setErr({material_title:"Material Title cannot be blank"});
  //    }else if(materialDetails.material_details===undefined){
  //     setErr({material_details:"Material Details cannot be blank"});
  //    }else{
  //    axios.post(apiURL+"material/insert",materialDetails).then((response)=>{
  //     // console.log(response)
  //     setOutput("Material Data Insert Successfully!!!");
  //     setCourse_title('');
  //     setModule_title('');
  //     setMaterial_title('');
  //     setMaterial_details("");
  //   }).catch((err)=>{
  //     setOutput("Material Data are Not Insert!!!!");
  //     console.log(err)
  //   })
  //   }
  // }
  //navigate to back to material
  const handleCancel=()=>{
    navigate("/material")
  }


    return(
        <>
         <h1 style={{fontSize:"30px",textAlign:"center", marginTop:"20px",fontSize:'50px'}}  >Create Material </h1>
         <form onSubmit={handleSubmit} >
<div className="form-group">
<label for="Course Title">Course Title <span style={{color:"red"}}>*</span></label>
<select className="form-control" name="course_title" id="Course Title *"           
   data-validate-type="no-blank" value={values.course_title} onChange={handleChange} onBlur={handleBlur} >
                  <option value="">Select Option</option>
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
<select className="form-control" name="module_title" id="ModuleTitle*"           
   data-validate-type="no-blank" value={values.module_title} onChange={handleChange} onBlur={handleBlur} >
                  <option value="">Select Option</option>
                  <option value="Components">components</option>
                  <option value="Npm base">npm base</option>
                  <option value="core">core</option>
                  <option value="framwork">framwork</option>
                  <option value="library">library</option>
</select>
           { errors.module_title && touched.module_title ? <p style={{color:"red"}} >{errors.module_title}</p>: null}

</div>




<div className="form-group">
  <label for="">Material Title <span style={{color:"red"}}>*</span></label>
  <input type="text" className="form-control" placeholder="" name="material_title" value={values.material_title} onChange={handleChange} onBlur={handleBlur}/>
  { errors.material_title && touched.material_title ? <p style={{color:"red"}} >{errors.material_title}</p>: null}

</div>

<div className="form-group">
  <label for="">Material Details <span style={{color:"red"}}>*</span></label>
  <input type="text" className="form-control" placeholder="" value={values.material_details} onChange={handleChange} onBlur={handleBlur} name="material_details" />
  { errors.material_details && touched.material_details ? <p style={{color:"red"}} >{errors.material_details}</p>: null}
</div>

  <p>{output}</p>
  <br />
<input type="submit" className="btn btn-success"  />
<button type="button" className="btn btn-danger" onClick={handleCancel} style={{margin:"10px"}}  >Cancel</button>

</form>
        </>
    )
}