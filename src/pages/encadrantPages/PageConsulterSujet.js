import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

import swal from 'sweetalert';

function PageConsulterSujetStage() {
   
  

  //rechercher
  const[searchTerm,setSearchTerm] = useState("");
  const[loading,setLoading] = useState(true);
  const[sujetlist,setSujetlist] = useState([]);



//afficher sujets stages
  useEffect(()=> {
     axios.get('api/afficher-sujets-stages').then(res=> {
        if(res.status ===200){
          setSujetlist(res.data.sujetStage) 
        }
        setLoading(false);
      }); 
  },[]);
  
     
  
  



  
 

if(loading){
 return <h5>Loading Sujets de Stages...</h5>
}
else{
 var afficher_Sujet_Cards ="";
  afficher_Sujet_Cards =
  sujetlist.filter(val =>{
    if(searchTerm === ""){
      return val;
    }else if( val.sujet.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
  }).map( (item , index) => {
    
     return(
         <>
         {/* Card 1 */}
<div className="col-md-offset-3 col-md-6" > 
<div className="card card-primary bg-light" >
  <div className="card-header">
  
  </div>
  <div className="card-body"    >
    
  
  
    <strong><i className="fas fa-book mr-1" />Sujet{index+1}</strong>
      <p>{item.sujet}</p>
  
  
    <strong><i className="fas fa-book mr-1" />Technologies:</strong>
      <p>{item.technologies}</p>
  
 
    
 


{/* Afficher détails   */}
<div>
  {/* Button trigger modal */}
  
  <div className="text-right py-0 align-middle">
<div class="btn-group btn-group-sm ">
                        {/* <a href="#" class="btn btn-info" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-pencil-alt"></i></a> */}
                        < Link to={`/encadrant/modifier-sujet/${item._id}`}   class="btn btn-primary" ><i class="fas fa-pencil-alt"></i></Link>
                        {/* < Link to= "#" class="btn btn-danger" ><i class="fas fa-trash"></i></Link> */}


                        <Link to="#" class="btn btn-danger" ><i class="fas fa-ban"></i></Link> 
                        <Link to="#" class="btn btn-success" > <i class="fas fa-chevron-circle-down"></i></Link> 
</div></div>



</div>

</div>
</div>
</div>
{/* .Card 1 */}
         
         
         
         </>
     )
  });

}



return (
  <>
         <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">

          <div className="col-sm-6">
            <h3>Sujets Stages</h3>
 
          </div>


          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
            

              


<NavLink className={(ndata) => ndata.isActive && "active" }  to='/encadrant/acceuil'>Acceuil </NavLink> <span> / </span>
<NavLink className={(ndata) => ndata.isActive && "active" }  to='/encadrant/afficher-sujets-stages'>Sujets Stages</NavLink>


            
            
            </ol>
          </div>


        </div>
      </div>
    </section> 


    <div className="container ">
   <div className="card mt-4">
     <div className="card-header">




    <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
            <div class="input-group">
              <input type="search" placeholder="Que cherchez-vous?" aria-describedby="button-addon1" class="form-control border-0 bg-light"
               onChange={(e)=> {
                  setSearchTerm(e.target.value);
               }}
              
              />
              <div class="input-group-append">
                <button id="button-addon1" type="submit" class="btn btn-link text-primary"><i class="fa fa-search"></i></button>
              </div>
            </div>
          </div>

          
          <Link to="/encadrant/ajouter-sujet-stage" className="btn btn-primary btn-sm float-right mb-2 ">
           <i className="fas fa-plus"> </i>Ajouter Sujet</Link> 
      


    <div className="row container "> 
 
    {afficher_Sujet_Cards}
    </div>
<br/><br/><br/><br/><br/><br/><br/>


</div>
</div>
    </div>

  </>
)
















}
export default PageConsulterSujetStage
