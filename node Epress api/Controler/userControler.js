import Connection from "../Connection/dbConnection.js";
import jwt from 'jsonwebtoken';
import rs from 'randomstring';

export var signUp = (req, res, next) => {

    // res.send("Hello sing up page")    
    var userDetails = req.body;
    // console.log(userDetails);

    var sql = "insert into user (user_id ,first_name,middle_name, last_name, email, password, contact ,gender, info,status,role) values(NULL,?,?,?,?,?,?,?,?, 1, 'user')";


    var values = [userDetails.first_name, userDetails.middle_name, userDetails.last_name, userDetails.email, userDetails.password, userDetails.contact, userDetails.gender, Date()];


    console.log(values);
    Connection.query(sql, values, (err, result) => {

        if (err) {
            console.log(err);
            return res.status(500).json({ "status": false });
        } else {
            return res.status(201).json({ "status": true })
        }
    })
}


export var logIn = (req, res) => {
    // console.log()
    // console.log("hello login")
    // res.send("Hello login")

    var userDetails = req.body;

    var sql = "select * from user where email = ? and password = ? and status = 1";

    var values = [userDetails.email, userDetails.password];

    Connection.query(sql, values, (err, result) => {

        if (err) {
            return res.status(500).json({ "status": false });
        } else {

            if (result.length != 0) {
                let payload = { "subject": result[0].email };
                let key = rs.generate();
                let token = jwt.sign(payload, key);
                return res.status(201).json({ "status": true, "token": token, "userDetails": result[0] });
            } else {
                return res.status(500).json({ "status": false, "token": "some error"})
            }

        }

    })

}


export var fetchData = (req, res) => {

    // var userDetails = req.body;
    let sql = "select * from user where role='user' ";

    Connection.query(sql, (err, result) => {

        // res.send({statu :"true"})
        if (result) {
            res.status(200).json({ "status": true, "userDetails": result })
        } else {
            res.status(500).json({ "status": false })
            console.log("this is a userFetchData error", err);
        }

    });
}



export var fetchOne = (req, res) => {
    var user_id = req.params.user_id;
    var sql = "select * from user where user_id=?";
    var values = [user_id];
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

export var fetchEmail = (req, res) => {
    var email = req.params.email;
    var sql = "select * from user where email=?";
    var values = [email];
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


export var userDelete = (req, res) => {
    // console.log(req.params)
    // res.send("hello delete")

    var user_id = req.params.user_id;
    // console.log(user_id);
    var sql = "delete from user where user_id=?";

    var sqlData = [user_id];

    Connection.query(sql, sqlData, (err, result) => {

        if (result.affectedRows == 0) {
            return res.status(500).json({ "status": false })
        } else {
            return res.status(201).json({ "status": true })
        }

    })

}




export var userUpdate = (req, res) => {

    //  res.send("user update"); 


    var updateUserDetails = req.body;

    var sql = "update user set first_name=?,middle_name=?, last_name=?, password=?, contact=?,address1=?,address2=?, country=?,state=?,city=?,pincode=?,profile_icon=?,gender=? where email=? ";
    var values = [updateUserDetails.first_name, updateUserDetails.middle_name, updateUserDetails.last_name, updateUserDetails.password, updateUserDetails.contact, updateUserDetails.address1, updateUserDetails.address2, updateUserDetails.country, updateUserDetails.state, updateUserDetails.city, updateUserDetails.pincode, updateUserDetails.profile_icon, updateUserDetails.gender,updateUserDetails.email];

    console.log(values);
    Connection.query(sql, values, (err, result) => {
        // console.log(sql);
        if (err) {

            return res.status(500).json({ "status": false })
        } else {
            return res.status(201).json({ "status": true  })

        }
    })
}


export var userActive = (req, res) => {
    var user_id = req.body.user_id;
    // console.log(user_id);
    let status = req.body.status;
    let val = 0;
    status ==1? val=0:val=1;
    let sql = `update user set status = ${val} where user_id =${user_id}`;
    let values = [user_id];
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

export const userForgetPass = (req,res,next) =>{
    let data = req.body;
    let sql = "update user set password = ? where email = ? ";
    let values =  [data.password , data.email ];
    console.log(data);
    // console.log();
  
    Connection.query(sql,values , (err , result)=>{
      if(err){
        return res.status(500).json({ status: false }); 
      }
      else{
        return res.status(201).json({ status: true ,"msg" : "Password updated Successfully","Data" : result});
      }
    })
  }



  export const ChangePassword = (req,res,next) =>{
    let data = req.body;
    let sql = "update user set password = ? where email = ? && password = ?";
    let values =  [data.newpass , data.email , data.oldpass];
    // let values = [upData.newpassword,upData.email , upData.oldpassword] ;

    Connection.query(sql,values , (err , result)=>{
        // console.log(err)
        console.log(values)
      if(err){
        return res.status(500).json({ status: false }); 
      }
      else{
        if(result.affectedRows == 0){
          return res.status(500).json({ status: false }); 
        }
        else{
          return res.status(201).json({ status: true ,"msg" : "Password updated Successfully","Data" : result});
        }
      }
    })
}

