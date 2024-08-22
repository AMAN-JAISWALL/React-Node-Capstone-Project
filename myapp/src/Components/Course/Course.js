import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import DataTable from 'datatables.net-dt';
// import $ from "jquery";
import axios from "axios";
import { apiURL } from "../apiURL";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Course = () => {

  const [courseData, setCourseData] = useState();
  var[deleteCourseMsg,setDeleteCourseMsg] = useState();
  var[activeMsgCourse,setActiveMsgCourse]= useState();

  // $(document).ready(() => {
  //   $('#myTable').DataTable();
  // });
  const navigate = useNavigate();

  const goAddCourse = () => {
    // alert("hello add course");
    navigate('/addcourse');
  }

  useEffect(() => {

    axios.get(apiURL + "course/fetch").then((response) => {
      // console.log(response.data.CouseData);
      setCourseData(response.data.CouseData);

    }).catch((err) => {
      console.log(err);
    })

  }, [deleteCourseMsg,courseData,activeMsgCourse]);


  const deleteCourseHandler=(id)=>{
    axios.delete(apiURL+"course/delete/"+id).then((response)=>{
      setDeleteCourseMsg(" Course Delete Successfull")
    }).catch((err)=>{
      setDeleteCourseMsg("Course Delete Failed");
      console.log("course delete axios errr",err);
    })
  }

  const CourseStatusHandler=(id,status)=>{
    // console.log(id,status);
    var objaxios ={"course_id":id,"status":status};
    axios.patch(apiURL+"course/active",objaxios).then((response)=>{
      setActiveMsgCourse("Course Status Success");
    }).catch((err)=>{
      setActiveMsgCourse("Course Status Failed");
      console.log("active errors",err);
    })
  }


  const editHandle=(id)=>{
    navigate('/addCourseTwo/'+id);
  }

  const CourseFun1=()=>{
    toast.success(' Deactivated Successfully!', {
      position: toast.POSITION.TOP_CENTER
  });
  }

  const CourseFun2=()=>{
    toast.info(' Activated Successfully!', {
      position: toast.POSITION.TOP_CENTER
  });
  }

  const funTrash=()=>{
    toast.info(' Deleted Successfully!', {
      position: toast.POSITION.TOP_CENTER
  });
  }




  return (
    <>
      <div className="col-sm-12">
        <h1 style={{ fontSize: "30px", textAlign: "center", marginTop: "20px", fontSize: '50px' }}  >Course List</h1>
       <a> <Link className="btn btn-success"  style={{float:'right',marginBottom:"20px",marginRight:"20px",marginTop:"20px"}} onClick={() => goAddCourse()} to="/addcourse" >Add Course</Link></a>
      </div>

      <table class="table table-striped display" id="myTable">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Age Group</th>
            <th scope="col">Duration Period</th>
            <th scope="col">Price Rs.</th>
            <th scope="col">Effective Date</th>
            <th scope="col">About Course Details </th>
            <th scope="col">Course Description </th>
            <th scope="col">Actions </th>
          </tr>
        </thead>
        <tbody>
          {
            courseData ? courseData.map((data1) => {
              return <>
                <tr>
                  <td>{data1.course_id}</td>
                  <td>{data1.course_title}</td>
                  <td>{data1.age_group}</td>
                  <td>{data1.duration_period}</td>
                  <td>{data1.course_effective_price}</td>
                  <td>{data1.course_id}</td>
                  <td>{data1.about_course_details}</td><td>{data1.course_description}</td>
                  <td>
                    <i class="fa-sharp fa-solid fa-pen" style={{ color: "purple", fontSize: "25px",cursor:"pointer" }}  onClick={()=>editHandle(data1.course_id)}  ></i>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {
                      (data1.status === 1) ?
                        <i class="fa-sharp fa-solid fa-check" style={{ color: "green", fontSize: "25px",cursor:"pointer" }} onClick={()=>{CourseStatusHandler(data1.course_id,data1.status);CourseFun1();}}  ></i>
                        : <i class="fa-solid fa-xmark" style={{ color: "red", fontSize: "25px",cursor:"pointer" }} 
                        onClick={()=>{CourseStatusHandler(data1.course_id,data1.status);CourseFun2();}}
                        ></i>
                    }
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i class="fa-solid fa-trash-can"  style={{ color: "red", fontSize: "25px",cursor:"pointer" }} onClick={()=>{deleteCourseHandler(data1.course_id);funTrash()}} ></i>
                  </td>

                </tr>
              </>
            }) : null
          }
        </tbody>
      </table>
          <ToastContainer/>

    </>
  )
}