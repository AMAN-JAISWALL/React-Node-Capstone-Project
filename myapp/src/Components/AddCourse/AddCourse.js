import React,{useState} from "react";
import { apiURL } from "../apiURL";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export const AddCourse = () => {

  var [course_title,setCourse_title] = useState();
  var [course_details,setCourse_details] = useState();
  var [age_group,setAge_group] = useState();
  var [duration_period,setDuration_period] = useState();
  var [introduction,setIntroduction] = useState();
  var [keywords,setKeywords] = useState();
  var [course_effective_price,setCourse_effective_price] = useState();
  // var [course_effective_date,setCourse_effective_date] = useState();
  var [about_course_details,setAbout_course_details] = useState();
  var [course_description,setCourse_description] = useState();
  //show result data insert or not
  var [output,setOutput]= useState();
  
  //for navigate cancel buuton
  var navigate = useNavigate();
  //for validation errors handle
  var [err,setErr] = useState({
    course_title:"",
    course_details:"",
    age_group:"",
    duration_period:"",
    introduction:"",
    keywords:"",
    course_effective_price:"",
    about_course_details:"",
    course_description:"",
  })


  const handleAddCourse=(e)=>{
    e.preventDefault();
    const courseDetails={
    "course_title":course_title,"course_details":course_details,
    "age_group":age_group,"duration_period":duration_period,
    "introduction":introduction,"keywords":keywords,
    "course_effective_price":course_effective_price,
    "about_course_details":about_course_details,
    "course_description":course_description,};

      axios.post(apiURL+"course/insert",courseDetails).then((response)=>{

        // console.log(response)
        
        setOutput("Course Data Insert Successfully");
        navigate('/course');
        setCourse_title("");
        setCourse_details("");
        setAge_group("");
        setDuration_period("");
        setIntroduction("");
        setKeywords("");
        setCourse_effective_price('');
        setAbout_course_details('');
        setCourse_description("");

    }).catch((err)=>{
        setOutput("Data Is Not Insert");
        console.log(err)
    })
}
  // console.log(course_title);
  const handleCancel=()=>{
    navigate("/course");
  }

  return (
    <>
      <div className="container">
        <h1 style={{ fontSize: "30px", textAlign: "center", marginTop: "20px", fontSize: '50px' }}  >Add Course</h1>
        <form>

          <div className="form-group">
            <label for="course_Title">Course Title<span style={{color:"red"}}>*</span></label>
            <input type="text" className="form-control" placeholder="" value={course_title} onChange={(e)=>setCourse_title(e.target.value)}  />
            <span style={{color:"red"}} >{err.course_title}</span>
          </div>


          <div className="form-group">
            <label for="course_details">Course Details<span style={{color:"red"}}>*</span></label>
            <input type="text" className="form-control" placeholder="" value={course_details}  onChange={(e)=>{setCourse_details(e.target.value)}}   />
            <span style={{color:"red"}} >{err.course_details}</span>

          </div>

         
          <div className="form-group">
          <label for="age_group">Age Group<span style={{color:"red"}}>*</span></label>
          <select className="form-control" name="c_duration_period" id="c_duration_period"  value={age_group} onChange={(e)=>setAge_group(e.target.value)} >
                            <option value="">Select Option</option>
                            <option value="10-20">10-20 years</option>
                            <option value="21-30">21-30 years</option>
                            <option value="31-40">31-40 years</option>
                            <option value="41-50">41-50 years</option>
                            <option value="51-60">51-60 years</option>
          </select>
          <span style={{color:"red"}} >{err.age_group}</span>

          </div>


          <div className="form-group">
          <label for="duration_period">Duration Period <span style={{color:"red"}}>*</span></label>
          <select className="form-control" name="c_duration_period" id="c_duration_period"    value={duration_period} onChange={(e)=>setDuration_period(e.target.value)} >
                            <option value="">Select Option</option>
                            <option value="3 months">3 months </option>
                            <option value="6 months">6 months </option>
                            <option value="9 months">9 months </option>
                            <option value="1years">1years</option>

          </select>
          <span style={{color:"red"}} >{err.duration_period}</span>

          </div>

          <div className="form-group">
            <label for="">Introduction<span style={{color:"red"}}>*</span></label>
            <input type="text" className="form-control" placeholder="" value={introduction} onChange={(e)=>setIntroduction(e.target.value)}  />
            <span style={{color:"red"}} >{err.introduction}</span>

          </div>

          <div className="form-group">
            <label for="">Keywords <span style={{color:"red"}}>*</span></label>
           
            <input type="text" className="form-control" placeholder=""  value={keywords} onChange={(e)=>setKeywords(e.target.value)} />
            <span style={{color:"red"}} >{err.keywords}</span>

          </div>

           <div className="form-group">
            <label for="">Course Price (Rs.)<span style={{color:"red"}}>*</span>  </label>
            <input type="text" className="form-control" placeholder="" value={course_effective_price} onChange={(e)=>setCourse_effective_price(e.target.value)} />
            <span style={{color:"red"}} >{err.course_effective_price}</span>

          </div>


          {/* <div className="form-group">
            <label for="">Course Effective Date </label>
            <input type="text" className="form-control" placeholder="" />
          </div> */}

          <div className="form-group">
            <label for="">About Course Details<span style={{color:"red"}}>*</span></label>
            <input type="text" className="form-control" placeholder=""  value={about_course_details} onChange={(e)=>setAbout_course_details(e.target.value)} />
            <span style={{color:"red"}} >{err.about_course_details}</span>

          </div>

          <div className="form-group">
            <label for="">Course Description</label>
            <input type="text" className="form-control" placeholder="" value={course_description} onChange={(e)=>setCourse_description(e.target.value)} />
            <span style={{color:"red"}} >{err.course_description}</span>

          </div>

          {/* <div className="form-group">
            <label for="">Select files</label>
            <input type="file" className="form-control" placeholder="" />
          </div> */}
            <p>{output}</p>
            <br />
          <button type="button" className="btn btn-success" onClick={handleAddCourse}  >Submit</button>
          <button type="button" className="btn btn-danger" onClick={handleCancel} style={{margin:"10px"}}  >Cancel</button>

        </form>
      </div>

    </>
  )
}