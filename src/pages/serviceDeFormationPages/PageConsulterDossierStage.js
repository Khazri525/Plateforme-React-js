import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import _ from "lodash";
import swal from 'sweetalert';
import Swal from 'sweetalert2';

function PageConsulterDossierStage() {


    
  
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
 




  const valideDoss = (e, id) => {
      e.preventDefault();

   const thisClicked = e.currentTarget ;
  /*   thisClicked.innerText = "Effacé"; */

 


  axios.put(`api/valide-dossier/${id}`).then(res =>{
       if(res.data.status === 200){
        swal("Sucess" , res.data.message , "success"); 
        thisClicked.closest("tr").remove();
        //<i className=" fas fa-trash-alt  text-danger"></i>
       }
       else{
        swal("Error" , res.data.message , "Error");
        // thisClicked.innerText ="Delete"
       // <i className=" fas fa-trash  text-danger"></i>
       }
  });

 }

 


 const invalideDoss = (e, id) => {
  e.preventDefault();

//const thisClicked = e.currentTarget ;
/*   thisClicked.innerText = "Effacé"; */




axios.put(`api/invalide-dossier/${id}`).then(res =>{
   if(res.data.status === 200){
    swal("Sucess" , res.data.message , "success"); 
    //thisClicked.closest("tr").remove();
    //<i className=" fas fa-trash-alt  text-danger"></i>
   }
   else{
    swal("Error" , res.data.message , "Error");
    // thisClicked.innerText ="Delete"
   // <i className=" fas fa-trash  text-danger"></i>
   }
});

}





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


var afficher_Dossier_Table ="";

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
  var afficher_Dossier_Table ="";
  afficher_Dossier_Table=
 userlist.filter(val =>{
   if(searchTerm === ""){
     return val;
   }else if( val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||   val.prenom.toLowerCase().includes(searchTerm.toLowerCase())) {
     return val;
   }
 }).map( (doss, index) => {
     
      if(doss.DossierStage !==null  ){    
    return(
   <>
          <tr key={doss._id}>
             <td>{index+1}</td>
             <td>{doss.name}</td>
             <td>{doss.prenom}</td>
             <td>{doss.DossierStage.cinfile}</td>
             <td>{doss.DossierStage.convfile}</td>
             <td>{doss.DossierStage.cvfile}</td>
             <td>{doss.DossierStage.lettfile}</td>
             
             {/* <td>
                <Link to={`/service-de-formation/modifier-departement/${item._id}`}>
                  <i className="fas fa-pencil-alt  text-success"></i></Link>
             </td> 
            <td>  
                  <i onClick={ (e) => deleteDept(e , item._id)}  className=" fas fa-trash  text-danger"></i>
             </td>

             <td>{DeptEtat}</td>*/}
             <td>
             <button type="button" className="btn btn-success btn-sm  mt-2 rounded-pill " onClick={ (e) => valideDoss(e , doss._id)}   ><i className="fas fa-check "></i>Valide</button>
             <button type="button" className="btn btn-danger btn-sm  mt-2  ml-2 rounded-pill" onClick={ (e) => invalideDoss(e , doss._id)}  ><i className="fas  fas fa-ban "></i>Invalide</button> 
             </td>
          </tr>
   </> )}
 });
}



  return (
    <>
      
      <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">

          <div className="col-sm-6">
            <h3>Dossiers de  stage</h3>
        

          </div>


          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
            

              


<NavLink className={(ndata) => ndata.isActive && "active" }  to='/service-de-formation/acceuil'>Acceuil </NavLink> <span> / </span>
<NavLink className={(ndata) => ndata.isActive && "active" }  to='/service-de-formation/afficher-dossies-stage'>Dossiers de  stage</NavLink>


            
            
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
               <th>Nom</th>
               <th>Prénom</th>
               <th>convention de stage</th>
               <th>lettre d’affectation </th>
               <th>proposition de stage </th>
               <th>CV</th>
             </tr>
           </thead>

           <tbody >

                { afficher_Dossier_Table}

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

export default PageConsulterDossierStage
