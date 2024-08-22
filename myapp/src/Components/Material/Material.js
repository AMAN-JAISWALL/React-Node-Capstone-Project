import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiURL } from "../apiURL";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Material = () => {

  const [materialData, setMaterialData] = useState([]);
  const navigate = useNavigate();
  const [deleteMaterialMsg,setDeleteMaterialMsg] = useState();
  const [activeMsgMaterial,setActiveMsgMaterial] = useState();

  const goAddMaterial = () => {
    navigate('/addmaterial');
  }

  useEffect(() => {

    axios.get(apiURL + "material/fetch").then((response) => {
      // console.log(response.data.materialData);
      setMaterialData(response.data.materialData);
    }).catch((err) => {
      console.log("material error", err);
    })
  }, [deleteMaterialMsg,activeMsgMaterial,materialData])


  const deleteMaterialHandler=(id)=>{

    axios.delete(apiURL+"material/delete/"+id).then((response)=>{
      setDeleteMaterialMsg(" material delete successfull")
    }).catch((err)=>{
      setDeleteMaterialMsg("material delete failed");
      // console.log("material delete axios errr",err);
    })
  }

  const MaterialStatusHandler=(id,status)=>{
    // alert(id,status);
    console.log(id,status);
    var objaxios ={"material_id":id,"status":status};
    axios.patch(apiURL+"material/active",objaxios).then((response)=>{
      setActiveMsgMaterial("material status success");
    }).catch((err)=>{
      setActiveMsgMaterial("material status faild");
      console.log("active errors",err);
    })
  }
  const editHandle=(id)=>{
    // console.log(id);
    navigate('/addmaterialTwo/'+id)
    // "/userprofile/"+id
  }
  const materialFun1=()=>{
    toast.success(' Deactivated Successfully!!!', {
      position: toast.POSITION.TOP_CENTER
  });
  }

  const materialFun2=()=>{
    toast.info(' Activated Successfully!!!', {
      position: toast.POSITION.TOP_CENTER
  });
  }

  const funTrash=()=>{
    toast.info(' Deleted Successfully!!!', {
      position: toast.POSITION.TOP_CENTER
  });
  }


  return (
    <>
      <h1 style={{ fontSize: "30px", textAlign: "center", marginTop: "20px", fontSize: '50px' }}  >Material List</h1>
      <Link style={{ float: "right", margin: "10px" }} className="btn btn-success" onClick={() => goAddMaterial()} to='/addmaterial' >Add Material</Link>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Course Title</th>
            <th scope="col">Module Title</th>
            <th scope="col">Material Title</th>
            <th scope="col">Material Details</th>
            <th scope="col">Actions</th>

          </tr>
        </thead>
        <tbody>
          {
            materialData.map((data2, i) => (
                <tr key={i} >
                <td>{data2.material_id}</td>
                <td>{data2.course_title}</td>
                <td>{data2.module_title}</td>
                <td>{data2.material_title}</td>
                <td>{data2.material_details}</td>
                <td>
                    <i class="fa-sharp fa-solid fa-pen" style={{ color: "purple", fontSize: "25px",cursor:"pointer" }}  onClick={()=>editHandle(data2.material_id)}  ></i>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {
                      (data2.status === 1) ?
                        <i class="fa-sharp fa-solid fa-check" style={{ color: "green", fontSize: "25px",cursor:"pointer" }} onClick={()=>{MaterialStatusHandler(data2.material_id,data2.status);materialFun1();}}  ></i>
                        : <i class="fa-solid fa-xmark" style={{ color: "red", fontSize: "25px",cursor:"pointer" }} 
                        onClick={()=>{MaterialStatusHandler(data2.material_id,data2.status);materialFun2();}}
                        ></i>
                    }
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i class="fa-solid fa-trash-can"  style={{ color: "red", fontSize: "25px",cursor:"pointer" }} onClick={()=>{deleteMaterialHandler(data2.material_id);funTrash()}} ></i>
                  </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <ToastContainer />
    </>
  )
}