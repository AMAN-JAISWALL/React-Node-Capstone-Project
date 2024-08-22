import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './Module.css';
import { apiURL } from "../apiURL";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import DataTable from 'datatables.net-dt';
// import $ from "jquery";

export const Module = () => {


  var [moduleData, setModuleData] = useState([]);
  var[deleteModuleMsg,setDeleteModuleMsg] = useState();
  var [activeMsgModule,setActiveMsgModule]=useState();

  // $(document).ready(() => {
  //   $('#myTable').DataTable();
  // });

  const navigate = useNavigate();

  const goAddModule = () => {
    navigate('./addmodule')
  }



  useEffect(() => {
    axios.get(apiURL + "module/fetch").then((response) => {
      // console.log(response.data.moduleData);
      setModuleData(response.data.moduleData);

    }).catch((err) => {
      console.log("module error",err);
    })

  }, [deleteModuleMsg,activeMsgModule,moduleData]);

  const deleteModuleHandler=(id)=>{
    // console.log("delete Material Handler");
    // console.log(e);
    axios.delete(apiURL+"module/delete/"+id).then((response)=>{
      setDeleteModuleMsg("Module Delete Successfull")
    }).catch((err)=>{
      setDeleteModuleMsg("Module Delete Failed");
      console.log("material delete axios errr",err);
    })
  }

  const ModuleStatusHandler=(id,status)=>{
    // alert(id,status);
    console.log(id,status);
    var objaxios ={"module_id":id,"status":status};
    axios.patch(apiURL+"module/active",objaxios).then((response)=>{
      setActiveMsgModule("Module Status Success");
    }).catch((err)=>{
      setActiveMsgModule("Module Status Failed");
      console.log("active errors",err);
    })
  }


  const editHandle=(id)=>{
    // console.log(id);
    navigate('/addModuleTwo/'+id);
    // navigate('/addmaterialTwo/'+id)

    // "/userprofile/"+id
  }
  const ModuleFun1=()=>{
    toast.success('Deactivated Successfully!!!', {
      position: toast.POSITION.TOP_CENTER
  });
  }

  const ModuleFun2=()=>{
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
        <h1 style={{ fontSize: "30px", textAlign: "center", marginTop: "20px", fontSize: '50px' }}  >Module List</h1>
        <Link className="btn btn-success" onClick={() => goAddModule()} to="/addmodule" style={{ float: 'right', marginBottom: "20px" }}  >Add Module</Link>
      </div>

      <table class="table table-striped display" id="myTable">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Module Title</th>
            <th scope="col">Course Title</th>
            <th scope="col">Module Details</th>
            <th scope="col">Number of Questions</th>
            <th scope="col">Number of Chapters</th>
            <th scope="col">Actions</th>



          </tr>
        </thead>
        <tbody>
          {
            moduleData ? moduleData.map((data1) => {
              return <>
                <tr key={data1.module_id} ><td>{data1.module_id}</td><td>{data1.module_title}</td><td>{data1.course_title}</td>
                  <td>{data1.module_details}</td>  <td>{data1.number_of_questions}</td> <td>{data1.number_of_chapters}</td>
                  <td>
                    <i class="fa-sharp fa-solid fa-pen" style={{ color: "purple", fontSize: "25px",cursor:"pointer" }}  onClick={()=>editHandle(data1.module_id)}  ></i>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {
                      (data1.status === 1) ?
                        <i class="fa-sharp fa-solid fa-check" style={{ color: "green", fontSize: "25px",cursor:"pointer" }} onClick={()=>{ModuleStatusHandler(data1.module_id,data1.status);ModuleFun1();}}  ></i>
                        : <i class="fa-solid fa-xmark" style={{ color: "red", fontSize: "25px",cursor:"pointer" }} 
                        onClick={()=>{ModuleStatusHandler(data1.module_id,data1.status);ModuleFun2();}}
                        ></i>
                    }
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i class="fa-solid fa-trash-can"  style={{ color: "red", fontSize: "25px",cursor:"pointer" }} onClick={()=>{deleteModuleHandler(data1.module_id);funTrash()}} ></i>
                  </td>

                </tr>
                </>
            }) : null

          }
        </tbody>
      </table>
      <ToastContainer />



    </>


  )
}