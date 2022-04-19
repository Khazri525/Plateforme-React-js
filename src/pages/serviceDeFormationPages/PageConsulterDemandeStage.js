import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

import swal from 'sweetalert';

function PageConsulterDemandeStage() {
   
  

  //rechercher
  const[searchTerm,setSearchTerm] = useState("");
  const[loading,setLoading] = useState(true);


  //Demande de stage
  const[demandelist,setDemandelist] = useState([]);

  useEffect(()=> {
     axios.get('api/afficher-demandes-stages').then(res=> {
        if(res.status ===200){
          setDemandelist(res.data.demandeStage) 
        }
        setLoading(false);
      }); 
  },[]);
  
     
  //Stagiaire
  const[userlist,setUserlist] = useState([]);

  useEffect(()=> {
    axios.get('api/afficher-stagiaire').then(res=> {
      if(res.status ===200){
        setUserlist(res.data.stagiaire)
      }
      setLoading(false);
    });
},[]);




 

if(loading){
 return <h5>Loading Demandes de Stages...</h5>
}



/* else{
 var afficher_Demande_Cards ="";
  afficher_Demande_Cards =
  demandelist.filter(val =>{
    if(searchTerm === ""){
      return val;
    }else if( val.typestage.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
  }).map( (item , index) => { */



   else{
 var afficher_Demande_Cards ="";
  afficher_Demande_Cards =
    demandelist.filter(val =>{
    if(searchTerm === ""){
      return val;
    }else if( val.niveauetude.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
  }).map( (dm , index) => { 

  

 if(dm.cin == '12345678')        





 return(
         <>







         {/* Card 1 */}
<div className="col-md-offset-3 col-md-3" > 
<div className="card card-primary  bg-light">
  <div className="card-header">
    <h3 className="card-title">Demande{index+1}</h3>
  </div>
  <div className="card-body"    >
    <strong><i className="fas fa-book mr-1" />Nom et Prénom:</strong>
      <p>Khalil Khazri</p>
  
  
    {/* <strong><i className="fas fa-book mr-1" />Niveau d'étude:</strong>
      <p>{dm.niveauetude}</p> */}
  
  
    <strong><i className="fas fa-book mr-1" />Type de stage:</strong>
      <p>{dm.typestage}</p>
  
 
    <strong><i className="fas fa-book mr-1" />CV:</strong>
      <p>{dm.cv}</p>

      <strong><i className="fas fa-book mr-1" />:CIN</strong>
      <p>{dm.cin}</p>
 


{/* Afficher détails   */}
<div>
  {/* Button trigger modal */}
  
  <div className="text-right py-0 align-middle">
<div class="btn-group btn-group-sm ">
                        <a href="#" class="btn btn-info" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-eye"></i></a>
                        <a href="#" class="btn btn-danger" ><i class="fas fa-trash"></i></a> 
                       

                        
</div></div>

  {/* Modal */}
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
       Nom: <br/>
        Prénom: <br/>
        Date de naissance:<br/>
        Email:<br/> 
        Cin: <br/>
        Niveau étude:<br/>
        Spécialite:<br/>
        Filiére:<br/>
        Adresse:<br/>
        Télephone:<br/>
        Type de stage:<br/>
        Nom département:<br/>
        Le CV:
       
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</div>

{/* .Afficher détails   */}
</div>
</div>
</div>
{/* .Card 1 */}
         
         






         </>
     )






     
//exp

    
   


  //exp        












  
    
    
  });
 
}


  

return (
  <>
         <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">

          <div className="col-sm-6">
            <h3>Demandes Stages</h3>
    

          </div>


          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
            

              


<NavLink className={(ndata) => ndata.isActive && "active" }  to='/service-de-formation/acceuil'>Acceuil </NavLink> <span> / </span>
<NavLink className={(ndata) => ndata.isActive && "active" }  to='/service-de-formation/afficher-demandes-stages'>Demandes Stages</NavLink>


            
            
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

          
      
    <div className="row container"> 
    {afficher_Demande_Cards}
    </div>
<br/><br/><br/><br/><br/><br/><br/>


</div>
</div>
    </div>











  
  </>
)
















}
export default PageConsulterDemandeStage
