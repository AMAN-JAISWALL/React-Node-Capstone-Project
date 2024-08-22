import React,{useState,useEffect} from "react";
import { apiURL } from "../apiURL";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
// import { param } from "jquery";
export const AddCourseTwo = () => {

    var [data,setData]=useState({});
    // var[msg,setMsg] = useState();
    var params = useParams();
    var navigate= useNavigate();

    console.log("course params",params);
   
    useEffect(()=>{   
        axios.get(apiURL+"course/fetchOne/"+params.id).then((response)=>{
            // console.log(response.data.response[0]);
            setData(response.data.response[0])
            // navigate('/course');
          }).catch((err)=>{
            console.log(err);
          })
        },[])


    const handleChange=(e)=>{
        setData({...data, [e.target.name]:e.target.value})
      }
  
  
      const handleUpdate=()=>{
        // console.log(data);
        axios.post(apiURL+"course/update",data).then((response)=>{
            setData(response.data.response[0])
            
          }).catch((err)=>{
            console.log("update failed",err);
            navigate("/course")
        })
      }

  return (
    <>
      <div className="container">
        <h1 style={{ fontSize: "30px", textAlign: "center", marginTop: "20px", fontSize: '50px' }}  >Add Course</h1>
        <form>

          <div className="form-group">
            <label for="course_Title">course title<span style={{color:"red"}}>*</span></label>
            <input type="text" className="form-control" placeholder="" name="course_title" value={data.course_title} onChange={handleChange}/>
          </div>


          <div className="form-group">
            <label for="course_details">course details<span style={{color:"red"}}>*</span></label>
            <input type="text" className="form-control" placeholder="" name="details" value={data.details} onChange={handleChange}/>
          </div>

         
          <div className="form-group">
          <label for="age_group">age group<span style={{color:"red"}}>*</span></label>
          <select className="form-control" name="age_group" id="c_duration_period"              data-validate-type="no-blank" value={data.age_group} onChange={handleChange} >
                            <option value="">Select Option</option>
                            <option value="10-20">10-20 years</option>
                            <option value="21-30">21-30 years</option>
                            <option value="31-40">31-40 years</option>
                            <option value="41-50">41-50 years</option>
                            <option value="51-60">51-60 years</option>
          </select>
          </div>


          <div className="form-group">
          <label for="duration_period">Duration Period <span style={{color:"red"}}>*</span> </label>
          <select className="form-control" name="duration_period" id="duration_period"            data-validate-type="no-blank" value={data.duration_period} onChange={handleChange} >
                            <option value="">Select Option</option>
                            <option value="3 months">3 months </option>
                            <option value="6 months">6 months </option>
                            <option value="9 months">9 months </option>
                            <option value="1years">1years</option>
          </select>
          </div>

          <div className="form-group">
            <label for="">Introduction<span style={{color:"red"}}>*</span></label>
            <input type="text" className="form-control" placeholder="" name="introduction" value={data.introduction} onChange={handleChange}  />
          </div>

          <div className="form-group">
            <label for="">Keywords<span style={{color:"red"}}>*</span> </label>
            <input type="text" className="form-control" placeholder="" name="keywords" value={data.keywords} onChange={handleChange} />
          </div>

           <div className="form-group">
            <label for="">Course Price (Rs.) <span style={{color:"red"}}>*</span> </label>
            <input type="text" className="form-control" placeholder="" name="course_effective_price" value={data.course_effective_price} onChange={handleChange} />
          </div>


          {/* <div className="form-group">
            <label for="">Course Effective Date </label>
            <input type="text" className="form-control" placeholder="" />
          </div> */}

          <div className="form-group">
            <label for="">About Course Details<span style={{color:"red"}}>*</span></label>
            <input type="text" className="form-control" placeholder="" name="about_course_details" value={data.about_course_details} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label for="">Course Description<span style={{color:"red"}}>*</span></label>
            <input type="text" className="form-control" placeholder="" name="course_description" value={data.course_description} onChange={handleChange} />
          </div>

          {/* <div className="form-group">
            <label for="">Select files</label>
            <input type="file" className="form-control" placeholder="" />
          </div> */}
            {/* <p>{output}</p> */}
            <br />
          <button type="button" className="btn btn-success" onClick={handleUpdate}  >Submit</button>
        </form>
      </div>

    </>
  )
}