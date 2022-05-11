import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import _ from "lodash";
import swal from 'sweetalert';
import Swal from 'sweetalert2';

function PageConsulterBilan() {


    
  
   const[loading,setLoading] = useState(true);


   //rechercher
   const[searchTerm,setSearchTerm] = useState("");

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
     






   //
  /* const deleteDept = (e, id) => {
      e.preventDefault();

   const thisClicked = e.currentTarget;
   thisClicked.innerText = "Effacé";

 


  axios.delete(`api/supprimer-departement/${id}`).then(res =>{
       if(res.data.status === 200){
        swal("Sucess" , res.data.message , "success"); 
        thisClicked.closest("tr").remove();
        <i className=" fas fa-trash-alt  text-danger"></i>
       }
       else{
        swal("Error" , res.data.message , "Error");
        // thisClicked.innerText ="Delete"
        <i className=" fas fa-trash  text-danger"></i>
       }
  });

 } */
//

//////////////////////////////////confirmation
const Swal = require('sweetalert2');
const deleteDept = (e ,id) => {
  const thisClicked = e.currentTarget;
  e.preventDefault();

  Swal.fire({
    title: 'Confirmer?',
    text: "Vous étes sur vous voulez supprimer département!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui,Supprimer!',
    cancelButtonText: 'Annuler',

  }).then((result) =>  {
    if (result.isConfirmed) {
      
      axios.delete(`api/supprimer-departement/${id}`).then(res =>{
        if(res.data.status === 200){
          Swal.fire("Succès" , res.data.message , "success"); 
         thisClicked.closest("tr").remove();
         //<i className=" fas fa-trash-alt  text-danger"></i>
        }
        else{
          Swal.fire("Erreur" , res.data.message , "error");
         // thisClicked.innerText ="Delete"
         //<i className=" fas fa-trash  text-danger"></i>
        }
   });
     
      // Swal.fire(
      //   'Deleted!',
      //   'Your file has been deleted.',
      //   'success'
      // )
    }
  })
}

///////////////////////.confirmation


var afficher_Bilan_Table ="";

if(loading){
  return <div class="d-flex justify-content-center "
 style={{marginTop: '.150' ,  position: 'absolute',
 height: '100px',
 width: '100px',
 top:' 50%',
 left: '50%',
}}>
 <div class="spinner-grow spinner-grow-sm " role="status"> </div>
 <div class="spinner-grow spinner-grow-sm " role="status"> </div>
 <div class="spinner-grow spinner-grow-sm " role="status"> </div>
</div>
}
else{
    
  afficher_Bilan_Table =
 userlist.filter(val =>{
   if(searchTerm === ""){
     return val;
   }else if( val.nom_dept.toLowerCase().includes(searchTerm.toLowerCase()) ||   val.nom_chef_dept.toLowerCase().includes(searchTerm.toLowerCase())) {
     return val;
   }
 }).map( (item , index) => {
     
    if(item.Bilan !==null  ){  
    return(
          
          <tr key={item._id}>

             <td>{index+1}</td>
             <td>
              <a href="#" className="btn" data-toggle="modal" data-target="#exampleModal"> <i className="fas fa-eye" style={{color: '#f4901e'}}></i></a>
              </td>
             <td>{item.Bilan.bfife}</td>
             
              {/*  <td>
                <Link to={`/service-de-formation/modifier-departement/${item._id}`}>
                  <i className="fas fa-pencil-alt  text-success"></i></Link>
             </td>
           <td>  
                  <i onClick={ (e) => deleteDept(e , item._id)}  className=" fas fa-trash  text-danger"></i>
             </td>
          */}




          

{/* Afficher détails   */}
<div>


  {/* Modal */}
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Stagiaire</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">

  <div className="col-md-offset-3 col-md-12">
       <strong> Nom   </strong> {item.name} <br/>
       <strong>Prénom  </strong>  {item.prenom} <br/>
       <strong>Date de naissance   </strong>  {item.datenaissance} <br/>
       <strong> Email   </strong>{item.email} <br/> 
       <strong>Cin ou Passport , </strong> {item.cinoupassport_stagiaire} <br/>
       <strong>Niveau étude   </strong> {item.niveauetude} <br/>
       <strong>Spécialite   </strong>{item.specialite} <br/>
       <strong>Filiére   </strong> {item.filiere} <br/>
       <strong>Adresse   </strong>{item.adresse} <br/>
       <strong>Télephone  </strong>{item.telephone} <br/>
       
      {/*  <strong>Type de stage:</strong> {dm.demandeStages[0][0]}<br/>
       <strong>Nom département:</strong>  {dm.demandeStages[0][1]}<br/>
       <strong>CV</strong> {dm.demandeStages[0][2]} */}
{/* 
       <form>
               {/* utilisateur matricule 
            <strong >Matricule Encadrant </strong> 
          <div className="wrap-input100   col-lg-6 mb-4" >
        <input className="input100" type="number" placeholder="Matricule" name="Matricule" />
          <span className="focus-input111" />
          <span className="symbol-input111">
            
          </span>
          </div>
       </form> */}
  </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
          {/* <button type="button" className="btn btn-primary">Save changes</button> */}
        </div>
      </div>
    </div>
  </div>
</div>

{/* .Afficher détails   */}
            
          </tr>
    )}
 });
}



  return (
    <>
      
      <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">

          <div className="col-sm-6">
            <h3>Bilans</h3>
    

          </div>


          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
            

              


<NavLink className={(ndata) => ndata.isActive && "active" }  to='/service-de-formation/acceuil'>Acceuil </NavLink> <span> / </span>
<NavLink className={(ndata) => ndata.isActive && "active" }  to='/service-de-formation/afficherBilans'>Bilans</NavLink>


            
            
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

     
        {/*   <Link to="/service-de-formation/ajouter-departement" className="btn btn-primary btn-sm float-right">
           <i className="fas fa-plus"> </i>Ajouter Département</Link> 
    */}

     <div className="card-body mt-4"> 
         <br/>
         <table className="table table-striped projects ">
           <thead>
             <tr>
               <th>ID</th>
               <th>Stagiaire</th>
               <th>Bilan</th>
             </tr>
           </thead>

           <tbody >

                {afficher_Bilan_Table}

           </tbody>
         </table>
            

     </div>

   </div>
  </div>

</div>

<br/><br/><br/><br/><br/><br/><br/>




    </>
  )
}

export default PageConsulterBilan
