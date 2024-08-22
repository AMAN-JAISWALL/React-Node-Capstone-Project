import Connection from '../Connection/dbConnection.js';


export var fetchMaterialData=(req,res)=>{
    // res.send("material fetch");
    let sql = "select * from material";

    Connection.query(sql,(err,result)=>{
        
        // res.send({statu :"true"})
        if(result){
            res.status(200).json({"status":true,"materialData":result})
        }else{
            res.status(500).json({"status":false})
            console.log("this is a materialFetchData error",err);
        }

    });


}

export var deleteMaterialData=(req,res)=>{
    var material_id = req.params.material_id;
    // req.params.user_id;
    console.log(material_id)
    var sql = "delete from material where material_id=?";

    var sqlData = [material_id];

    Connection.query(sql,sqlData,(err,result)=>{

        if(result.affectedRows == 0){
            return  res.status(500).json({"status":false})
        }else{
            return res.status(201).json({"status":true})
        }

    })
}

export var insertMaterialData=(req,res)=>{
    // res.send("material insert");
    var materialDetails = req.body
    // console.log(userDetails);

    var sql = "insert into material (material_id ,course_title,module_title, material_title, material_details) values(NULL,?,?,?,?)";


    var values = [materialDetails.course_title,materialDetails.module_title, materialDetails.material_title, materialDetails.material_details];

    
    console.log(values);
    Connection.query(sql,values,(err,result)=>{

        if(err){
            console.log(err);
            return res.status(500).json({"status":false});
        }else{
            return res.status(201).json({"status":true})
        }
    })
}


export var updateMaterialData=(req,res)=>{
    var materialDataUpdate = req.body;

        // "material_id": 1,
        // "course_title": "php",
        // "module_title": "gvjhgu",
        // "material_title": "ghjggj",
        // "material_details": "vfedgrt"

    var sql = "update material set course_title=?, module_title=?, material_title=?, material_details=? where material_id=?";

  
var values = [ materialDataUpdate.course_title, materialDataUpdate.module_title ,materialDataUpdate.material_title, materialDataUpdate.material_details,materialDataUpdate.material_id];


Connection.query(sql,values,(err,result)=>{
    // console.log(result);
    if(err){
        return res.status(500).json({"status":false})
    }else{
        return res.status(201).json({"status":true})

    }
})
}


export var materialActive = (req, res) => {
    // console.log(req.params)
    // res.send("hello delete")

    var material_id = req.body.material_id;
    // console.log(user_id);
    let status = req.body.status;
    let val = 0;
    status ==1? val=0:val=1;
    let sql = `update material set status = ${val} where material_id =${material_id}`;
    let values = [material_id];

    // //var sql = "active from user where user_id=?";

    // var sqlData = [user_id];

    Connection.query(sql, values, (err, result) => {

        if (err) {
            console.log('active inactive error',err);
             return res.status(500).json({ "status": false })
        } else {
            console.log(result);
            return res.status(201).json({ "status":200,"msg":"status updated successfully","data":result })
        }

    })

}


export var fetchOne = (req, res) => {
    var material_id = req.params.material_id;
    var sql = "select * from material where material_id=?";
    var values = [material_id];
    Connection.query(sql, values, (err, result) => {
        // console.log(result);
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