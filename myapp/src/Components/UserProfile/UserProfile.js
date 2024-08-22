import React,{useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
// import {  } from " ";
import axios from "axios";
import { apiURL } from "../apiURL";

export const UserProfile = () => {

  var[data,setData] = useState({});

  var[oldPassword,setOldPassword] = useState();

  var [newPassword,setNewPassword] = useState();
  var [repeatPassword,setRepeatPassword] = useState();
  var [outPut,setOutPut] = useState();
  var [match,setMatch]= useState();
  //param se user_id get krne ke liye
  const params=useParams();
  var navigate = useNavigate();

  // const [firstName,setFirstName]=useState();

  // console.log(params);

  useEffect(()=>{   
    axios.get(apiURL+"user/fetchOne/"+params.id).then((response)=>{
        console.log(response.data.response[0]);
        setData(response.data.response[0])
      }).catch((err)=>{
        console.log(err);
      })
    },[])


    const handleChange=(e)=>{
      setData({...data, [e.target.name]:e.target.value})
    }


    const handleUpdate=()=>{
      console.log(data);
      axios.post(apiURL+"user/update/",data).then((response)=>{
        // console.log(response.data.response[0]);
        // setData(response.data.response[0])

        console.log("update successfully!!!");
        navigate('/users');
     
      }).catch((err)=>{
        console.log("update failed",err);
      })
    }

    const ChangePasswordHandler=()=>{
      let current_admin_password = data.password;
      let current_admin_email = data.email;
      let newPass = newPassword;
      // console.log("currebt admin pass",current_admin_password);
      // console.log("current admin email",current_admin_email);
      // console.log("new pass ", newPass);
      // console.log(repeatPassword);
      if (newPass===repeatPassword){
      let obj = { newpass : newPass,
        oldpass : current_admin_password,
        email : current_admin_email }
      // console.log(obj);
      axios.patch(apiURL+"user/ChangePassword",obj).then((response)=>{
        setOutPut("Change Password Successfulluy!!!")
      }).catch((err)=>{
        setOutPut("Password Doesn't Change!!!!")
        console.log("Password doesn't Change Please Fill Currect Old Password ",err);
        // setChangePassword("")
  
      })
    }else{
      console.log("new or repeat not match")
      setMatch("NewPassword or Repeat Password Does Not Match")
    }
  }

  return (
    <>
      <div class="container">
      <h1 style={{fontSize:"30px",textAlign:"center", marginTop:"20px",fontSize:'50px'}}  >User Profile </h1>
        <form >
          <div class="form-group">
            <label for="Role">Role</label>
            <input onChange={handleChange} type="text" class="form-control"  name="role" disabled value={data.role}   />
          </div>

          <div class="form-group">
            <label for="First_name">First Name</label>
            <input onChange={handleChange} type="text" class="form-control"  name="first_name" value={data.first_name} />
          </div>


          <div class="form-group">
            <label for="Middle_name">Middle Name</label>
            <input onChange={handleChange} type="text" class="form-control"   name="middle_name" value={data.middle_name}  />
          </div>

          <div class="form-group">
            <label for="Last_name">Last Name</label>
            <input onChange={handleChange} type="text" class="form-control"  name="last_name" value={data.last_name} />
          </div>


          <div class="form-group">
            <label for="email">Email</label>
            <input onChange={handleChange} type="email" class="form-control" name="email" value={data.email} />
          </div>


          <div class="form-group">
            <label for="contact">Contact Number</label>
            <input onChange={handleChange} type="number" class="form-control"  name="contact"   value={data.contact} />
          </div>

          <div class="form-group">
            <label for="Address1">Address_1</label>
            <input onChange={handleChange} type="text" class="form-control"   name="address1" value={data.address1}   />
          </div>

          
          <div class="form-group">
            <label for="Address2">Address_2</label>
            <input onChange={handleChange} type="text" class="form-control"  name="address2" value={data.address2} />
          </div>

          <div className="form-group">
          <label for="Country">Country</label>
          <select className="form-control" name="country" onChange={handleChange} value={data.country} >
          <option value=""  >Select</option>
              <option value="india">India</option>
              <option value="Australia">Australia</option>
              <option value="shreeLanka">Shree Lanka</option>
              <option value="canada">Canada</option>
          </select>
          </div>


          <div class="form-group">
              <label for="">State</label>
              <select  class="form-control" name="state" id="state_id" onChange={handleChange} value={data.state} >
                <option value="">Select State</option>
                                <option  value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                <option  value="Andhra Pradesh">Andhra Pradesh</option>
                                <option  value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option  value="Assam">Assam</option>
                                <option  value="Bihar">Bihar</option>
                                <option  value="Chandigarh">Chandigarh</option>
                                <option  value="Chhattisgarh">Chhattisgarh</option>
                                <option  value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                                <option  value="Daman and Diu">Daman and Diu</option>
                                <option  value="Delhi">Delhi</option>
                                <option  value="Goa">Goa</option>
                                <option  value="Gujarat">Gujarat</option>
                                <option  value="Haryana">Haryana</option>
                                <option  value="Himachal Pradesh">Himachal Pradesh</option>
                                <option  value="Jammu and Kashmir">Jammu and Kashmir</option>
                                <option  value="Jharkhand">Jharkhand</option>
                                <option  value="Karnataka">Karnataka</option>
                                <option  value="Kenmore">Kenmore</option>
                                <option value="Kerala">Kerala</option>
                                <option  value="Lakshadweep">Lakshadweep</option>
                                <option  selected="selected"  value="Madhya Pradesh">Madhya Pradesh</option>
                                <option  value="Maharashtra">Maharashtra</option>
                                <option  value="Manipur">Manipur</option>
                                <option  value="Meghalaya">Meghalaya</option>
                                <option  value="Mizoram">Mizoram</option>
                                <option  value="Nagaland">Nagaland</option>
                                <option  value="Narora">Narora</option>
                                <option  value="Natwar">Natwar</option>
                                <option  value="Odisha">Odisha</option>
                                <option  value="Paschim Medinipur">Paschim Medinipur</option>
                                <option  value="Pondicherry">Pondicherry</option>
                                <option  value="Punjab">Punjab</option>
                                <option  value="Rajasthan">Rajasthan</option>
                                <option  value="Sikkim">Sikkim</option>
                                <option  value="Tamil Nadu">Tamil Nadu</option>
                                <option  value="Telangana">Telangana</option>
                                <option  value="Tripura">Tripura</option>
                                <option  value="Uttar Pradesh">Uttar Pradesh</option>
                                <option  value="Uttarakhand">Uttarakhand</option>
                                <option  value="Vaishali">Vaishali</option>
                                <option  value="West Bengal">West Bengal</option>
                              </select>
            </div>

          
            <div class="form-group">
              <label for="">City</label>
              <select class="form-control" name="city" onChange={handleChange} value={data.city} >
                <option value="">Select City</option>
                                <option  value="Adimaly">Adimaly</option>
                                <option  value="Adoor">Adoor</option>
                                <option  value="Adur">Adur</option>
                                <option  value="Akathiyur">Akathiyur</option>
                                <option  value="Alangad">Alangad</option>
                                <option  value="Alappuzha">Alappuzha</option>
                                <option  value="Aluva">Aluva</option>
                                <option  value="Ancharakandy">Ancharakandy</option>
                                <option  value="Angamaly">Angamaly</option>
                                <option  value="Aroor">Aroor</option>
                                <option  value="Arukutti">Arukutti</option>
                                <option  value="Attingal">Attingal</option>
                                <option  value="Avinissery">Avinissery</option>
                                <option  value="Azhikode">Azhikode North</option>
                                <option  value="Azhikode South">Azhikode South</option>
                                <option  value="Azhiyur">Azhiyur</option>
                                <option  value="Balussery">Balussery</option>
                                <option  value="Bangramanjeshwar">Bangramanjeshwar</option>
                                <option  value="Beypur">Beypur</option>
                                <option  value="Brahmakulam">Brahmakulam</option>
                                <option  value="Chala">Chala</option>
                                <option  value="Chalakudi">Chalakudi</option>
                                <option  value="Changanacheri">Changanacheri</option>
                                <option  value="Chauwara">Chauwara</option>
                                <option  value="Chavakkad">Chavakkad</option>
                                <option  value="Chelakkara">Chelakkara</option>
                                <option  value="Chelora">Chelora</option>
                                <option  value="Chendamangalam">Chendamangalam</option>
                                <option  value="Chengamanad">Chengamanad</option>
                                <option  value="Chengannur">Chengannur</option>
                                <option  value="Cheranallur">Cheranallur</option>
                                <option  value="Cheriyakadavu">Cheriyakadavu</option>
                                <option  value="Cherthala">Cherthala</option>
                                <option  value="Cherukunnu">Cherukunnu</option>
                                <option  value="Cheruthazham">Cheruthazham</option>
                                <option  value="Cheruvannur">Cheruvannur</option>
                                <option  value="Cheruvattur">Cheruvattur</option>
                                <option  value="Chevvur">Chevvur</option>
                                <option  value="Chirakkal">Chirakkal</option>
                                <option  value="Chittur">Chittur</option>
                                <option  value="Chockli">Chockli</option>
                                <option  value="Churnikkara">Churnikkara</option>
                                <option  value="Dharmadam">Dharmadam</option>
                                <option  value="Edappal">Edappal</option>
                                <option  value="Edathala">Edathala</option>
                                <option  value="Elayavur">Elayavur</option>
                                <option  value="Elur">Elur</option>
                                <option  value="Eranholi">Eranholi</option>
                                <option  value="Erattupetta">Erattupetta</option>
                                <option  value="Ernakulam">Ernakulam</option>
                                <option  value="Eruvatti">Eruvatti</option>
                                <option  value="Ettumanoor">Ettumanoor</option>
                                <option  value="Feroke">Feroke</option>
                                <option  value="Guruvayur">Guruvayur</option>
                                <option  value="Haripad">Haripad</option>
                                <option  value="Hosabettu">Hosabettu</option>
                                <option  value="Idukki">Idukki</option>
                                <option  value="Iringaprom">Iringaprom</option>
                                <option  value="Irinjalakuda">Irinjalakuda</option>
                                <option  value="Iriveri">Iriveri</option>
                                <option  value="Kadachira">Kadachira</option>
                                <option  value="Kadalundi">Kadalundi</option>
                                <option  value="Kadamakkudy">Kadamakkudy</option>
                                <option  value="Kadirur">Kadirur</option>
                                <option  value="Kadungallur">Kadungallur</option>
                                <option  value="Kakkodi">Kakkodi</option>
                                <option  value="Kalady">Kalady</option>
                                <option  value="Kalamassery">Kalamassery</option>
                                <option  value="Kalliasseri">Kalliasseri</option>
                                <option  value="Kalpetta">Kalpetta</option>
                                <option  value="Kanhangad">Kanhangad</option>
                                <option  value="Kanhirode">Kanhirode</option>
                                <option  value="Kanjikkuzhi">Kanjikkuzhi</option>
                                <option  value="Kanjikode">Kanjikode</option>
                                <option  value="Kanjirappalli">Kanjirappalli</option>
                                <option  value="Kannadiparamba">Kannadiparamba</option>
                                <option  value="Kannangad">Kannangad</option>
                                <option  value="Kannapuram">Kannapuram</option>
                                <option  value="Kannur">Kannur</option>
                                <option  value="Kannur Cantonment">Kannur Cantonment</option>
                                <option  value="Karunagappally">Karunagappally</option>
                                <option  value="Karuvamyhuruthy">Karuvamyhuruthy</option>
                                <option  value="Kasaragod">Kasaragod</option>
                                <option  value="Kasargod">Kasargod</option>
                                <option  value="1927">Kattappana</option>
                                <option  value="1928">Kayamkulam</option>
                                <option  value="1929">Kedamangalam</option>
                                <option  value="1930">Kochi</option>
                                <option  value="1931">Kodamthuruthu</option>
                                <option  value="1932">Kodungallur</option>
                                <option  value="1933">Koduvally</option>
                                <option  value="1934">Koduvayur</option>
                                <option  value="1935">Kokkothamangalam</option>
                                <option  value="1936">Kolazhy</option>
                                <option  value="1937">Kollam</option>
                                <option  value="1938">Komalapuram</option>
                                <option  value="1939">Koothattukulam</option>
                                <option  value="1940">Koratty</option>
                                <option  value="1941">Kothamangalam</option>
                                <option  value="1942">Kottarakkara</option>
                                <option  value="1943">Kottayam</option>
                                <option  value="1944">Kottayam Malabar</option>
                                <option  value="1945">Kottuvally</option>
                                <option  value="1946">Koyilandi</option>
                                <option  value="1947">Kozhikode</option>
                                <option  value="1948">Kudappanakunnu</option>
                                <option  value="1949">Kudlu</option>
                                <option  value="1950">Kumarakom</option>
                                <option  value="1951">Kumily</option>
                                <option  value="1952">Kunnamangalam</option>
                                <option  value="1953">Kunnamkulam</option>
                                <option  value="1954">Kurikkad</option>
                                <option  value="1955">Kurkkanchery</option>
                                <option  value="1956">Kuthuparamba</option>
                                <option  value="1957">Kuttakulam</option>
                                <option  value="1958">Kuttikkattur</option>
                                <option  value="1959">Kuttur</option>
                                <option  value="1960">Malappuram</option>
                                <option  value="1961">Mallappally</option>
                                <option  value="1962">Manjeri</option>
                                <option  value="1963">Manjeshwar</option>
                                <option  value="1964">Mannancherry</option>
                                <option  value="1965">Mannar</option>
                                <option  value="1966">Mannarakkat</option>
                                <option  value="1967">Maradu</option>
                                <option  value="1968">Marathakkara</option>
                                <option  value="1969">Marutharod</option>
                                <option  value="1970">Mattannur</option>
                                <option  value="1971">Mavelikara</option>
                                <option  value="1972">Mavilayi</option>
                                <option  value="1973">Mavur</option>
                                <option  value="1974">Methala</option>
                                <option  value="1975">Muhamma</option>
                                <option  value="1976">Mulavukad</option>
                                <option  value="1977">Mundakayam</option>
                                <option  value="1978">Munderi</option>
                                <option  value="1979">Munnar</option>
                                <option  value="1980">Muthakunnam</option>
                                <option  value="1981">Muvattupuzha</option>
                                <option  value="1982">Muzhappilangad</option>
                                <option  value="1983">Nadapuram</option>
                                <option  value="1984">Nadathara</option>
                                <option  value="1985">Narath</option>
                                <option  value="1986">Nattakam</option>
                                <option  value="1987">Nedumangad</option>
                                <option  value="1988">Nenmenikkara</option>
                                <option  value="1989">New Mahe</option>
                                <option  value="1990">Neyyattinkara</option>
                                <option  value="1991">Nileshwar</option>
                                <option  value="1992">Olavanna</option>
                                <option  value="1993">Ottapalam</option>
                                <option  value="1994">Ottappalam</option>
                                <option  value="1995">Paduvilayi</option>
                                <option  value="1996">Palai</option>
                                <option  value="1997">Palakkad</option>
                                <option  value="1998">Palayad</option>
                                <option  value="1999">Palissery</option>
                                <option  value="2000">Pallikkunnu</option>
                                <option  value="2001">Paluvai</option>
                                <option  value="2002">Panniyannur</option>
                                <option  value="2003">Pantalam</option>
                                <option  value="2004">Panthiramkavu</option>
                                <option  value="2005">Panur</option>
                                <option  value="2006">Pappinisseri</option>
                                <option  value="2007">Parassala</option>
                                <option  value="2008">Paravur</option>
                                <option  value="2009">Pathanamthitta</option>
                                <option  value="2010">Pathanapuram</option>
                                <option  value="2011">Pathiriyad</option>
                                <option  value="2012">Pattambi</option>
                                <option  value="2013">Pattiom</option>
                                <option  value="2014">Pavaratty</option>
                                <option  value="2015">Payyannur</option>
                                <option  value="2016">Peermade</option>
                                <option  value="2017">Perakam</option>
                                <option  value="2018">Peralasseri</option>
                                <option  value="2019">Peringathur</option>
                                <option  value="2020">Perinthalmanna</option>
                                <option  value="2021">Perole</option>
                                <option  value="2022">Perumanna</option>
                                <option  value="2023">Perumbaikadu</option>
                                <option  value="2024">Perumbavoor</option>
                                <option  value="2025">Pinarayi</option>
                                <option  value="2026">Piravam</option>
                                <option  value="2027">Ponnani</option>
                                <option  value="2028">Pottore</option>
                                <option  value="2029">Pudukad</option>
                                <option  value="2030">Punalur</option>
                                <option  value="2031">Puranattukara</option>
                                <option  value="2032">Puthunagaram</option>
                                <option  value="2033">Puthuppariyaram</option>
                                <option  value="2034">Puzhathi</option>
                                <option  value="2035">Ramanattukara</option>
                                <option  value="2036">Shoranur</option>
                                <option  value="2037">Sultans Battery</option>
                                <option  value="2038">Sulthan Bathery</option>
                                <option  value="2039">Talipparamba</option>
                                <option  value="2040">Thaikkad</option>
                                <option  value="2041">Thalassery</option>
                                <option  value="2042">Thannirmukkam</option>
                                <option  value="2043">Theyyalingal</option>
                                <option  value="2044">Thiruvalla</option>
                                <option  value="2045">Thiruvananthapuram</option>
                                <option  value="2046">Thiruvankulam</option>
                                <option  value="2047">Thodupuzha</option>
                                <option  value="2048">Thottada</option>
                                <option  value="2049">Thrippunithura</option>
                                <option  value="2050">Thrissur</option>
                                <option  value="2051">Tirur</option>
                                <option  value="2052">Udma</option>
                                <option  value="2053">Vadakara</option>
                                <option  value="2054">Vaikam</option>
                                <option  value="2055">Valapattam</option>
                                <option  value="2056">Vallachira</option>
                                <option  value="2057">Varam</option>
                                <option  value="2058">Varappuzha</option>
                                <option  value="2059">Varkala</option>
                                <option  value="2060">Vayalar</option>
                                <option  value="2061">Vazhakkala</option>
                                <option  value="2062">Venmanad</option>
                                <option  value="2063">Villiappally</option>
                                <option  value="2064">Wayanad</option>
                              </select>
            </div>

            <div class="form-group">
            <label for="pincode">Pin Code</label>
            <input onChange={handleChange} type="text" class="form-control"  name="pincode"  value={data.pincode}  />
          </div>

          <button  type="button" class="btn btn-success" onClick={handleUpdate}>Submit</button>
        </form>
      </div>
      <br/>
      <br/>
      <br/>

        <div class="container">
        <h1 style={{fontSize:"30px", marginTop:"20px",fontSize:'50px'}}  >Change Password</h1>

        <form >
          <div class="form-group">
            <label for="password">Old Password</label>
            <input type="text" class="form-control"  name="Old Password"  value={oldPassword} onChange={(e)=> setOldPassword(e.target.value) } />
            {/* <span>{oldPassword}</span> */}
            </div>

          <div class="form-group">
            <label for="New Password">New Password</label>
            <input   type="text" class="form-control" value={newPassword} onChange={(e)=>{setNewPassword(e.target.value)}} />
            {/* <span>{newPassword}</span> */}
          </div>


          <div class="form-group">
            <label for="Repeat Password" >Repeat Password</label>
            <input type="text" class="form-control" value={repeatPassword} onChange={(e)=>{setRepeatPassword(e.target.value)}}    />
            {/* <span>{repeatPassword}</span> */}
          </div>

          <p style={{color:"green"}} >{outPut}</p>
          <p style={{color:"green"}} >{match}</p>
          <button type="button" class="btn btn-success" onClick={ChangePasswordHandler} >Submit</button>
        </form>
      </div>

    </>
  )
}
