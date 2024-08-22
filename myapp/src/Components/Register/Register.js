import React from "react";

export const Register=()=>{
    return(
        <>
          <br/><br/>
<h1>Register here</h1>

<form action="/action_page.php">
    <div class="form-group">
      <input type="text" class="form-control"  placeholder="Enter Name" name="name"/>
    </div>
    <div class="form-group">
      <input type="text" class="form-control"  placeholder="Enter Middle Name" name="Middle_Name"/>
    </div>

    
    <div class="form-group">
        <input type="text" class="form-control"  placeholder="Enter Last Name" name="number"/>
      </div>

      
    <div class="form-group">
        <input type="text" class="form-control"  placeholder="Enter Email" name="Email"/>
      </div>

      
    <div class="form-group">
        <input type="number" class="form-control"  placeholder="Enter Mobile Number" name="number"/>
      </div>

      
    <div class="form-group">
        <label for="Gender">Gender :</label>
        {/* <input type="text" class="form-control"  placeholder="Enter Mobile Number" name="number"/> --> */}
        <input type="radio" name="gender" id="male" value="male" /> male
        <input type="radio" name="gender" id="female" value="female" /> female
        <input type="radio" name="gender" id="other" value="other" /> other
      </div>

      <div >
        <label for="">hobbies :</label>
      <input type="checkbox" name="hobbies" value="play cricket" /> Cricket
      <input type="checkbox" name="hobbies" value='WorkOut' /> WorkOut
      <input type="checkbox" name="hobbies" value="play free fire" /> Play Online Game
      <input type="checkbox" name="hobbies" value="reading novels" /> reading novels



      </div>
      
    <div >
      <label><input type="checkbox" name="remember"/> Remember me</label>
    </div>
    <button type="submit" class="btn btn-success">Submit</button>
  </form>
  
        </>
    )
}
