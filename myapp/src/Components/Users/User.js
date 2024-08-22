import React, { useEffect, useState } from "react";
import './user.css';
import { useNavigate } from "react-router-dom";
import { apiURL } from "../apiURL";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//data table
// import DataTable from 'datatables.net-dt';
// import $ from "jquery";

//try some things
// import { useRef } from 'react';
// import $ from 'jquery';
// import 'datatables.net'; 
// import 'datatables.net-dt/css/jquery.dataTables.css';


function User(){
    //try data table 
    // const tableRef = useRef(null);
    // useEffect(() => {
    //   setTimeout(()=>{
        // $(document).ready(() => {
        //   $('#myTable').DataTable();
        // });
    //   },10)
      
    // }, []);

  // try data table end
   
  // $(document).ready(() => {
  //   $('#myTable').DataTable();
  // });

    const [data,setData] = useState([]);
    // const [data1,setData1] = useState()
    const [deleteMsg,setDeleteMsg] = useState();
    const [activeMsg,setActiveMsg] = useState();


    //for edit icon navigate to my profile
    const navigate = useNavigate();

    useEffect(()=>{   
    axios.get(apiURL+"user/fetch").then((response)=>{
        setData(response.data.userDetails);
      }).catch((err)=>{
        console.log(err);
      })
    },[deleteMsg,activeMsg,data])


    const deleteHandler=(e)=>{
      // alert(e);
      axios.delete(apiURL+"user/delete/"+e).then((response)=>{
        // console.log("delete success full");
        setDeleteMsg("Delete Successfully!!!")
      }).catch((err)=>{
        console.log("user delete axios errr",err);
        setDeleteMsg("User Delete Failed");
      })

    }

    const statusHandler=(id,status)=>{
      // alert(id,status);
      var objaxios ={"user_id":id,"status":status};
      axios.patch(apiURL+"user/active",objaxios).then((response)=>{
        setActiveMsg("Success");
        // console.log("active succuss");
      }).catch((err)=>{
        setActiveMsg("Failed");
        // console.log("active errors",err);
      })
    }

    const editHandle=(id)=>{
      // console.log(id);
      navigate("/userprofile/"+id);
    }


    const fun1=()=>{
      toast.success(' Deactivated Successfully!', {
        position: toast.POSITION.TOP_CENTER
    });
    }

    const fun2=()=>{
      toast.info(' Activated Successfully!', {
        position: toast.POSITION.TOP_CENTER
    });
    }

    const funTrash=()=>{
      toast.info(' Deleted Successfully!', {
        position: toast.POSITION.TOP_CENTER
    });
    }


    return(
        <>
        <h1 style={{fontSize:"30px",textAlign:"center", marginTop:"20px",fontSize:'50px'}} >Users List</h1>
        { data.length > 0  && 
        <table className="table table-striped center_user display" id="myTable"  >
                <thead> <tr>
                    <th scope="col">#</th>
                    <th scope="col" >Role</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Address</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead> 
                <tbody> 
              
                   {
                    data.map((e,i)=>(
                        <tr key={i} >
                            <td>{e.user_id}</td>
                            <td>{e.role}</td>
                            <td>{e.first_name}</td>
                            <td>{e.email}</td>
                            <td>{e.contact}</td>
                            <td>{e.address1}</td>
                            <td>
                    <i class="fa-sharp fa-solid fa-pen" style={{ color: "purple", fontSize: "25px",cursor:"pointer" }}  onClick={()=>editHandle(e.user_id)}  ></i>
                    &nbsp;&nbsp;&nbsp;
                    
                    {
                      (e.status === 1) ?
                        <i class="fa-sharp fa-solid fa-check" style={{ color: "green", fontSize: "25px",cursor:"pointer" }} onClick={()=>{statusHandler(e.user_id,e.status);fun1()}}  ></i>
                        : <i class="fa-solid fa-xmark" style={{ color: "red", fontSize: "25px",cursor:"pointer" }} 
                        onClick={()=>{statusHandler(e.user_id,e.status);fun2();}}
                        ></i>
                    }
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i class="fa-solid fa-trash-can"  style={{ color: "red", fontSize: "25px",cursor:"pointer" }} onClick={()=>{deleteHandler(e.user_id);funTrash()}} ></i>
                  </td>
                </tr>
                     ))
                    }
                </tbody>
                </table>
                  }
                <ToastContainer />
        </>
    )
}

export default User