import  Connection  from "../Connection/dbConnection.js";
import jwt from 'jsonwebtoken';
import rs from 'randomstring';



export var fetchModuleData=(req,res)=>{
    // res.send("module fetch");
    let sql = "select * from module";

    Connection.query(sql,(err,result)=>{
        
        // res.send({statu :"true"})
        if(result){
            res.status(200).json({"status":true,"moduleData":result})
        }else{
            res.status(500).json({"status":false})
            console.log("this is a moduleFetchData error",err);
        }

    });


}


export var deleteModuleData=(req,res)=>{
    // res.send("module delete");



    var module_id = req.params.module_id;
    // console.log(module_id)
    var sql = "delete from module where module_id=?";

    var sqlData = [module_id];

    Connection.query(sql,sqlData,(err,result)=>{

        if(result.affectedRows == 0){
            return  res.status(500).json({"status":false})
        }else{
            return res.status(201).json({"status":true})
        }

    })



}


export var insertModuleData=(req,res)=>{
    // res.send("insert module  data ");

    var moduleDetails = req.body
    // console.log(userDetails);

    var sql = "insert into module (module_id ,module_title,course_title, module_details, number_of_questions, number_of_chapters) values(NULL,?,?,?,?,?)";


    var values = [moduleDetails.module_title,moduleDetails.course_title, moduleDetails.module_details, moduleDetails.number_of_questions, moduleDetails.number_of_chapters];

    
    console.log(values);
    Connection.query(sql,values,(err,result)=>{
        console.log(err);
        if(err){
            // console.log(err);
            return res.status(500).json({"status":false});
        }else{
            return res.status(201).json({"status":true})
        }
    })
}

export var updateModuleData=(req,res)=>{
        var moduleDataUpdate = req.body;
    
        var sql = "update module set module_title=?, course_title=?, module_details=?, number_of_questions=?,number_of_chapters=? where module_id=?";

      
    var values = [moduleDataUpdate.module_title, moduleDataUpdate.course_title, moduleDataUpdate.module_details, moduleDataUpdate.number_of_questions,moduleDataUpdate.number_of_chapters,moduleDataUpdate.module_id];
    
    // console.log("module",values);
    Connection.query(sql,values,(err,result)=>{
        console.log(result);
        console.log(err);
        if(err){
            return res.status(500).json({"status":false})
        }else{
            return res.status(201).json({"status":true})
    
        }
    })

    }


    export  var moduleActive=(req,res)=>{   
        // res.send("active module");
        var module_id = req.body.module_id;
        // console.log(user_id);
        let status = req.body.status;
        let val = 0;
        status ==1? val=0:val=1;
        let sql = `update module set status = ${val} where module_id =${module_id}`;
        let values = [module_id];
    
        // //var sql = "active from user where user_id=?";
    
        // var sqlData = [user_id];
    
        Connection.query(sql, values, (err, result) => {
            if (err) {
                console.log(' module active inactive error',err);
                 return res.status(500).json({ "status": false })
            } else {
                console.log(result);
                return res.status(201).json({ "status":200,"msg":"status updated successfully","data":result })
            }
        })
    }

    export var fetchOne = (req, res) => {
        var module_id = req.params.module_id;
        var sql = "select * from module where module_id=?";
        var values = [ module_id ];
        Connection.query(sql, values, (err, result) => {
            // console.log(result);
            console.log(err);
            console.log(result);
           if (err) {
                return res.status(500).json({ "status": false})
            }else {
                if(result.length != 0){
               return res.status(200).json({ "status": true , response:result})
            }else{
                return res.status(500).json({"status":false});
            }
            }
        })
    }