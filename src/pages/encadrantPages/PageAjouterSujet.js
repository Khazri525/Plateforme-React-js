import React , { useState} from 'react'
import { useNavigate ,Link , NavLink} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
function PageAjouterSujet() {

  const Swal = require('sweetalert2');
    const navigate = useNavigate();

    //validation erreurs
    const [utiErrsujet,setUtiErrsujet]=useState(false);
    const [utiErrtechnologies,setUtiErrtechnologies]=useState(false);
    const [utiErrdomaine,setUtiErrdomaine]=useState(false);

    const [utiErrstrsujet,setUtiErrstrsujet]=useState(false);
    const [utiErrstrdomaine ,setUtiErrstrdomaine ]=useState(false);
    const [utiErrstrtechnologies,setUtiErrstrtechnologies ]=useState(false);
    
    const [ sujetInput , setSujet] =useState ({
      sujet: '',
      technologies: '',
      description: '',
      domaine: '',
      datedebut:'',
      typestage:'',
      periode:'',
    
      error_list:[],

    });
   
   
   
   
   const handleInput = (e) => {
      e.persist();
     
      setSujet({ ...sujetInput , [e.target.name]: e.target.value})

       //erreur sujet
  
       if(sujetInput.sujet.length > 30){
        setUtiErrsujet(true)
       }
       else{
        setUtiErrsujet(false)
       }
       
          //erreur technologies
  
          if(sujetInput.technologies.length > 30){
            setUtiErrtechnologies(true)
           }
           else{
            setUtiErrtechnologies(false)
           }

           
          //erreur domaine
  
          if(sujetInput.domaine.length > 30){
            setUtiErrdomaine(true)
           }
           else{
            setUtiErrdomaine(false)
           }
        
       
        //erreur étre string  sujet
       if( !(sujetInput.sujet.match('[a-z-A-Z]')) ) {  
        setUtiErrstrsujet(true)
       }
       else{
        setUtiErrstrsujet(false)
       }

        //erreur étre string  technologies
        if( !(sujetInput.technologies.match('[a-z-A-Z]')) ) {  
          setUtiErrstrtechnologies(true)
         }
         else{
          setUtiErrstrtechnologies(false)
         }

          //erreur étre string  domaine
       if( !(sujetInput.domaine.match('[a-z-A-Z]')) ) {  
        setUtiErrstrdomaine(true)
       }
       else{
        setUtiErrstrdomaine(false)
       }

        
      
   }
   
   
   const sujetSubmit = (e) => {
     e.preventDefault();
   
   
     const data = {
       sujet:sujetInput.sujet,
       technologies:sujetInput.technologies,
       description:sujetInput.description,

       domaine:sujetInput.domaine,
       datedebut:sujetInput.datedebut,
       periode:sujetInput.periode,
       typestage:sujetInput.typestage,
   
      

       }

        axios.post('api/ajouter-sujet-stage', data).then(res =>{
             if(res.data.status === 200){
              Swal.fire("Succès" , res.data.message , "success");
              navigate('/encadrant/afficher-sujets-stages');
             }

          else if(res.data.status === 400){
          
           setSujet({...sujetInput  , error_list : res.data.validation_errors});
           
        }
      
   
     });
   } 
   
   
   /* var display_errors = [];
   if(sujetInput.error_list)
   {
       display_errors = [
           sujetInput.error_list.sujet,
           sujetInput.error_list.technologies,
           sujetInput.error_list.description,

       ]

   }
 */
   

  return (
    <>
      
<section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h3>Ajouter Sujet</h3>

         {/*    {
               display_errors.map((item) => {
                  return(<p className='mb-1'>{item}</p>)
               })

            } */}



          </div>

          
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
          

<NavLink className={(ndata) => ndata.isActive && "active" }  to='/encadrant/acceuil'>Acceuil</NavLink>  <span> / </span>
<NavLink className={(ndata) => ndata.isActive && "active" }  to='/encadrant/ajouter-sujet-stage'>Ajouter Sujet</NavLink>

            </ol>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </section>


    <br/>
      <div className="col-md-offset-3 col-md-12">
        <div className="form-container">
    {/* onSubmit={compteSubmit}       */}
<form onSubmit={sujetSubmit} >
  <div className="row">



   {/* Sujet */}
   <div className="wrap-input100   col-lg-6 mb-4  validate-input" >
          <input className="input100" type="text"  name="sujet"  onChange={handleInput} value={sujetInput.sujet}  placeholder="Sujet" />
          <span className="focus-input111" />
          {/* <span className="symbol-input111">
            <i className=" fas fa-copy"  aria-hidden="true" />
          </span> */}
           {utiErrstrsujet ? <span className='text-danger txt00 '><i className="far fa-times-circle" aria-hidden="true" /> Sujet est chaine de caractéres!</span> :""}  
          {utiErrsujet ? <span className='text-danger txt00 '><i className="far fa-times-circle" aria-hidden="true" /> Sujet max 30 caractéres!</span> :""}  
         
        </div>
   {/* Technologies */}
        <div className="wrap-input100   col-lg-6 mb-4  validate-input" >
          <input className="input100" type="text"  name="technologies"  onChange={handleInput} value={sujetInput.technologies}  placeholder="Technologies" />
          <span className="focus-input111" />
         {/*  <span className="symbol-input111">
            <i className=" fas fa-code"  aria-hidden="true" />
          </span> */}
           {utiErrstrtechnologies ? <span className='text-danger txt00 '><i className="far fa-times-circle" aria-hidden="true" /> Technologies est chaine de caractéres!</span> :""}  
          {utiErrtechnologies ? <span className='text-danger txt00 '><i className="far fa-times-circle" aria-hidden="true" /> Technologies max 30 caractéres!</span> :""}  
         
        </div>

 {/*Type de stage */}
        <div className="wrap-input100    col-lg-6 mb-4" >
<select  name="typestage"  onChange={handleInput} value={sujetInput.typestage}  className="input100 border-0 " type="text" >
<option  selected hidden >--Type du stage--</option>
      
<option name="typestage" value="Observation">PFE</option>
  


<option name="typestage" value="Pérfectionnement">Pérfectionnement</option>
    <option name="typestage" value="Observation">Observation</option>
 </select>

        
          <span className="focus-input111" />
          {/* <span className="symbol-input111">
            <i className="fas fa-user-tie" aria-hidden="true" />
          </span> */}
        </div>
{/* Domaine*/}
<div className="wrap-input100   col-lg-6 mb-4  " >
          <input className="input100" type="text"  name="domaine"  onChange={handleInput} value={sujetInput.domaine}  placeholder="Domaine" required/>
          <span className="focus-input111" />
          {/* <span className="symbol-input111">
            <i className="fas fa-calendar"  aria-hidden="true" />
          </span> */}
       {utiErrstrdomaine ? <span className='text-danger txt00 '><i className="far fa-times-circle" aria-hidden="true" />Domaine domaine est chaine de caractéres!</span> :""}  
          {utiErrdomaine ? <span className='text-danger txt00 '><i className="far fa-times-circle" aria-hidden="true" />Domaine max 30 caractéres!</span> :""}  
        </div>


{/* Date*/}
<div className="wrap-input100   col-lg-6 mb-4  " >

          <input className="input100" type="date"  name="datedebut"  onChange={handleInput} value={sujetInput.datedebut}  required/>

          <span className="focus-input111" />
          <span className="symbol-input111">
            {/* <i className="fas fa-calendar"  aria-hidden="true" /> */}
          <span>Début</span>
          </span>
        </div>




        
  {/* Période de stage */}
  <div className="wrap-input100   col-lg-6 mb-4  validate-input" >
          <input className="input100" type="number"  name="periode"  onChange={handleInput} value={sujetInput.periode}  placeholder="Période de stage par mois" />
          <span className="focus-input111" />
          {/* <span className="symbol-input111">
            <i className=" fas fa-copy"  aria-hidden="true" />
          </span> */}
        {/*    {utiErrstrsujet ? <span className='text-danger txt00 '><i className="far fa-times-circle" aria-hidden="true" /> sujet est chaine de caractéres!</span> :""}  
          {utiErrsujet ? <span className='text-danger txt00 '><i className="far fa-times-circle" aria-hidden="true" /> sujet max 50 caractéres!</span> :""}  
          */}
        </div>



















 {/*Description */}
 <div className="wrap-input100   col-lg-12 mb-4  form-group" >
          <textarea className="input100" type="text"  name="description"  onChange={handleInput}  value={sujetInput.description} placeholder="Description"  style={{height: '80px'}}/>
          <span className="focus-input111" />
         {/*  <span className="symbol-input111">
            <i className=" fas fa-file-alt"  aria-hidden="true" /> 
          </span> */}
       
        </div>





 
    {/* Cancel Button */}
    
    <div className="form-group col-lg-2 ">
   
          <button className="persb-btn">

           <Link to="/encadrant/afficher-sujets-stages"  style={{color: 'white'}}>
          Annuler
            </Link> 

          </button>
       
        </div>

    
        <div className="form-group col-lg-3  i">
          <button type="submit" className="login100-form-btn"  style={{color: 'white'}}>
            
          Ajouter Sujet
         
          </button>
  </div>    
  
     </div>


</form>
   
        </div>
      </div>
   <br/><br/><br/> <br/><br/><br/> <br/>



    </>
  )
}

export default PageAjouterSujet

