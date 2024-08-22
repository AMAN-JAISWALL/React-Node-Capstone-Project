import './App.css';
// import { About } from './Components/About/About';
import { Banner } from './Components/Banner/Banner';
import { Head } from './Components/Headers/Head';
// import { Service } from './Components/Service/Service';
import {Footer} from './Components/footer/Footer'
import {  Route,Routes } from 'react-router-dom';
import { NoPage } from './Components/NoPage/NoPage';
import { Conatact } from './Components/Contact/Contact';
import { Login } from './Components/Login/Login';
import { Register } from './Components/Register/Register';
import { UserProfile } from './Components/UserProfile/UserProfile';
import {Course} from './Components/Course/Course';
import { Module } from "./Components/Module/Module";
import {Material} from './Components/Material/Material'
import User from './Components/Users/User';
import {AddMaterial2} from './Components/AddMaterial/AddMaterial2';
import { AddCourse } from './Components/AddCourse/AddCourse';
import { AddModule } from './Components/AddModule/AddModule';
import { AddMaterial } from './Components/AddMaterial/AddMaterial';
import { ForgotPass } from './Components/ForgotPass/ForgotPass';
import { MyProfile } from './Components/MyProfile/MyProfile';
import { AddModuleTwo } from './Components/AddModule/AddModuleTwo';
import { AddCourseTwo } from './Components/AddCourse/AddCourseTwo';
function App() {
  return (
    <>
<div className="main-layout" >
   <Head/>
   <Routes>
      <Route path='/home' element={<Banner/>} />
      <Route path='/contact' element={<Conatact/>} />
      <Route path='/' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='*' element={<NoPage/>} /> 
      <Route path="/myprofile" element={ <MyProfile/> } />
      <Route path='/userprofile/:id' element={<UserProfile/>} /> 
      <Route path='/course' element={<Course/>} /> 
      <Route path='/module' element={<Module/>} /> 
      <Route path='/material' element={<Material/>} /> 
      <Route path='/users' element={<User/>} /> 
      <Route path='/addcourse' element={<AddCourse/>} /> 
      <Route path='/addmodule' element={<AddModule/>} />
      <Route path='/addmaterial' element={<AddMaterial/>} /> 
      <Route path='/addmaterialTwo/:id' element={<AddMaterial2/>} /> 
      <Route path='/addModuleTwo/:id' element={<AddModuleTwo/>} />
      <Route path='/addCourseTwo/:id' element={<AddCourseTwo/>} />
      <Route path='/forgotpass' element={<ForgotPass/>} /> 


   </Routes>  
   <Footer/>
   
</div>
  </>
  


  );
}

export default App;
