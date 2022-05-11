import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate ,Link} from 'react-router-dom';
import swal from 'sweetalert';
import Swal from 'sweetalert2';

function Header() {
  const Swal = require('sweetalert2');
    const navigate = useNavigate();
//profile

//const [ userInput , setUser] =useState ([]);


/* useEffect(()=> {
  axios.get('api/profile').then(res=> {
    if(res.status ===200){
      setUser(res.user)
      // console.log(userInput._id)
     
      
    }
   
  });
},[]);
 */




//deconnexion


  const logoutSubmit = (e) =>{
    e.preventDefault();
  

    axios.post(`api/logout`).then(res =>{
           if(res.data.status === 200){
            localStorage.removeItem('auth_token');
            localStorage.removeItem('auth_name');
            localStorage.removeItem('role');
            Swal.fire ("Succès" , res.data.message ,"success");
           navigate('/');
           }
    });
  }
  
  var msg= "";
  if(localStorage.getItem('dossiervalideSt') == 'oui'){
    msg=<p className="dropdown-item-title"> 
    <span className="float-right text-sm  text-success  "><i className="fas fa-check" /></span>
    Votre Dossier est Complet 
    {/* <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span> */}
  </p>
  }
  else if(localStorage.getItem('dossiervalideSt') == 'non'){
    msg=<p className="dropdown-item mt-100">
       <span className="float-right text-sm  text-danger "><i className="fas fa-ban " /></span>
    Votre Dossier est Incomplet
    {/* <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span> */}
  </p>
  }






  var ntf = "" ;
  if(localStorage.getItem('dossiervalideSt') == 'oui'  || localStorage.getItem('dossiervalideSt') == 'non' ){
    ntf =  <span className="badge bg-danger rounded-pill  ">1</span>
  }
    
 var notification = "" ;
if(localStorage.getItem('role')== 'stagiaire'){
 
  notification =  <li className="nav-item dropdown">
    <a className="nav-link" data-toggle="dropdown" href="#">
      <i className="far fa-comments" />
      {ntf}
    </a>
    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
  
      <div className="dropdown-divider" />
      <a href="#" className="dropdown-item">
        <div className="media">
         
          <div className="media-body">
           {msg}
            {/* <p className="text-sm">I got your message bro</p> */}
         {/* <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p> */}
          </div>
        </div>
      </a></div></li>
  
}

  
  return (
    <>


     {/* Left navbar links */}
     <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <li className="nav-item d-none d-sm-inline-block">
        <Link to="/" className="nav-link">Home </Link> 
        </li>
         <ul className="navbar-nav ml-auto ">
       {/*  <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
        </li> */}
       


{/* ////////////////////// */}

{notification}


{/* //////////////////////// */}




















        <li className="nav-item">
 <button  onClick ={logoutSubmit}   className=" btn btn-secondary ">
                    <i className="fa-solid fa-cloud-exclamation"> </i>
                    Deconnexion
      </button>
 </li>

        <li className="nav-item float-end">
          <a className="nav-link" data-widget="fullscreen" href="#" role="button">
            <i className="fas fa-expand-arrows-alt" />
          </a>
        </li>

   
      </ul>
      <br/>

           
 
 
     
        
      {/*   <ul className="navbar-nav ml-auto">
  

  {userInput.nom ? <span>{userInput.nom}</span> : localStorage.getItem('auth_name')}  */}
       
    {/*         <div class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">{userInput.nom ? <span>{userInput.nom}</span> : localStorage.getItem('auth_name')} </a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Mon Profile</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item"  onClick ={logoutSubmit} >Deconnexion</a>
    </div>
  </div>
      </ul> */}

  
    </nav>
    
    </>
  )
}

export default Header
