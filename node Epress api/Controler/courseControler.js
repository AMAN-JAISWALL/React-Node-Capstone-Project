import  Connection  from "../Connection/dbConnection.js";
import jwt from 'jsonwebtoken';
import rs from 'randomstring';



export var insertData =(req,res)=>{
     // res.send("Hello sing up page")    
     var courseDetails = req.body;
    //  console.log(courseDetails);
 
     var sql = "insert into course (course_id ,course_title,course_details, age_group,duration_period,introduction ,keywords,course_effective_price,about_course_details,course_description) values(NULL,?,?,?,?,?,?,?,?,?)";
 
 
     var values = [courseDetails.course_title,courseDetails.course_details,courseDetails.duration_period, courseDetails.age_group,courseDetails.introduction ,courseDetails.keywords,courseDetails.course_effective_price,courseDetails.about_course_details,courseDetails.course_description];
 
     
     
     Connection.query(sql,values,(err,result)=>{
 
         if(err){
             // console.log(err);
             return res.status(500).json({"status":false});
         }else{
             console.log("successfull course data insert");
             return res.status(201).json({"status":true})
         }
     })
}



export var fetchCourseData = (req,res)=>{

    // var userDetails = req.body;
    let sql = "select * from course";

    Connection.query(sql,(err,result)=>{
        
        // res.send({statu :"true"})
        if(result){
            res.status(200).json({"status":true,"CouseData":result})
        }else{
            res.status(500).json({"status":false})
            console.log("this is a CourseFetchData error",err);
        }

    });
}



export var fetchOne = (req, res) => {
    var course_id = req.params.course_id;
    var sql = "select * from course where course_id=?";
    var values = [course_id];
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

export var deleteCourseData = (req,res)=>{

    // res.send("hello course delete");
    var course_id =req.params.course_id;
    // console.log("hello cour5tyryey")
    console.log(course_id);
        var sql="delete from course where course_id=?";
        var sqlData=[course_id];

        Connection.query(sql,sqlData,(err,result)=>{

            if(result.affectedRows==0){
                return res.status(500).json({"status": false});
            }else{
                return res.status(201).json({"status":true});
            }
        });

}

export var updateCourseData=(req,res)=>{
    var courseDataUpdate = req.body;

    var sql = "update course set course_title=?,course_details=?, age_group=?, duration_period=?, introduction=?,keywords=?,    course_effective_price=?, about_course_details=?,course_description=? where course_id=? ";


var values = [courseDataUpdate.course_title,courseDataUpdate.course_details, courseDataUpdate.age_group, courseDataUpdate.duration_period, courseDataUpdate.introduction,courseDataUpdate.course_effective_price,courseDataUpdate.about_course_details, courseDataUpdate.keywords, courseDataUpdate.course_description,courseDataUpdate.course_id];


Connection.query(sql,values,(err,result)=>{

    if(err){
        return res.status(500).json({"status":false})
    }else{
        return res.status(201).json({"status":true})

    }
})
}


export var courseActive = (req, res) => {
    // console.log(req.params)
    // res.send("hello delete")

    var course_id = req.body.course_id;
    // console.log(user_id);
    let status = req.body.status;
    let val = 0;
    status ==1? val=0:val=1;
    let sql = `update course set status = ${val} where course_id =${course_id}`;
    let values = [course_id];

    // //var sql = "active from user where user_id=?";

    // var sqlData = [user_id];

    Connection.query(sql, values, (err, result) => {

        if (err) {
            console.log(' course active inactive error',err);
             return res.status(500).json({ "status": false })
        } else {
            console.log(result);
            return res.status(201).json({ "status":200,"msg":"course status updated successfully","data":result })
        }

    })

}