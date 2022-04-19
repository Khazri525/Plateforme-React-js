import React , { useEffect, useState } from 'react'
import { useNavigate ,Link , NavLink ,useParams} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
function PageModifierSujet() {

  const Swal = require('sweetalert2');
    const navigate = useNavigate();

    //validation erreurs
    const [utiErrsujet,setUtiErrsujet]=useState(false);
    const [utiErrtechnologies,setUtiErrtechnologies]=useState(false);
    const [utiErrstrsujet,setUtiErrstrsujet]=useState(false);
    const [utiErrdomaine,setUtiErrdomaine]=useState(false);

    const [utiErrstrdomaine ,setUtiErrstrdomaine ]=useState(false);
    const [utiErrstrtechnologies,setUtiErrstrtechnologies ]=useState(false);
    

    const params=useParams();   
     const [ sujetInput , setSujet] =useState ([]);
     const [ error , setError] =useState ([]);
     const[loading,setLoading] = useState(true);
  
  

     useEffect(() => {
     
        const sujetId = params.id;
         
        axios.get(`api/find-sujet/${sujetId}`).then(res =>{
           if(res.data.status === 200 ){
            setSujet(res.data.sujet);
           }
           else if(res.data.status === 404){
            Swal.fire("Erreur",res.data.message,"error");
             navigate('/encadrant/afficher-sujets-stages');
           }
            setLoading(false);
         });
      }, [params]);
     
   
   
   
   
   const handleInput = (e) => {
      e.persist();
     
      setSujet({ ...sujetInput , [e.target.name]: e.target.value})

       //erreur sujet
  
       if(sujetInput.sujet.length > 50){
        setUtiErrsujet(true)
       }
       else{
        setUtiErrsujet(false)
       }
       
          //erreur technologies
  
          if(sujetInput.technologies.length > 50){
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
   
   
 
   const updateSujet = (e) => {
    e.preventDefault();
 
    const sujetId = params.id;
    const data = sujetInput;
 
 
 
    axios.put(`api/modifier-sujet/${sujetId}` , data).then( res => {
      if(res.data.status === 200){
        Swal.fire("Succès" , res.data.message , "success");
        navigate('/encadrant/afficher-sujets-stages');
        setError([]);
 
      }
       else if(res.data.status === 422){
             setError(res.data.validation_errors);
             swal("Erreur dans les champs" , "Vérifier les champs!", "error");
      }
      else if(res.data.status === 404){
        Swal.fire("Erreur" , res.data.message , "error");
       navigate('/encadrant/afficher-sujets-stages');
      }
    });
 
 }
 

 
 if(loading){
   return <h5>Loading Modifier Sujet...</h5>
 }




  return (
    <>
          
<section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h3>Modifier Sujet</h3>

          </div>

          
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
          

<NavLink className={(ndata) => ndata.isActive && "active" }  to='/encadrant/acceuil'>Acceuil</NavLink>  <span> / </span>
<NavLink className={(ndata) => ndata.isActive && "active" }  to='/encadrant/modifier-sujet'>Modifier Sujet</NavLink>

            </ol>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </section>


    <br/>
      <div className="col-md-offset-3 col-md-12">
        <div className="form-container">
    {/* onSubmit={compteSubmit}       */}
<form onSubmit={updateSujet} >
  <div className="row">



   {/* Sujet */}
   <div className="wrap-input100   col-lg-6 mb-4  validate-input" >
          <input className="input100" type="text"  name="sujet"  onChange={handleInput} value={sujetInput.sujet}  placeholder="Sujet" />
          <span className="focus-input111" />
          <span className="symbol-input111">
            <i className=" fas fa-copy"  aria-hidden="true" />
          </span>
           {utiErrstrsujet ? <span className='text-danger txt00 '><i className="far fa-times-circle" aria-hidden="true" /> sujet est chaine de caractéres!</span> :""}  
          {utiErrsujet ? <span className='text-danger txt00 '><i className="far fa-times-circle" aria-hidden="true" /> sujet max 50 caractéres!</span> :""}  
         
        </div>

        <div className="wrap-input100   col-lg-6 mb-4  validate-input" >
          <input className="input100" type="text"  name="technologies"  onChange={handleInput} value={sujetInput.technologies}  placeholder="Technologies" />
          <span className="focus-input111" />
          <span className="symbol-input111">
            <i className=" fas fa-code"  aria-hidden="true" />
          </span>
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



















{/* Etat */}
<div className="wrap-input100   col-lg-6 mb-4 " >
<select  name="etatsujet"  onChange={handleInput} value={sujetInput.etatsujet}  className="input100 border-0 " type="text" >
{/* <option  selected hidden>--Etat--</option> */}
  
        <option selected  name="etatsujet"  value="Publié">Publier</option>
        <option  name="etatsujet"  value="Dépublié">Dépublier</option> 
 </select>


</div>







 {/*Description */}
 <div className="wrap-input100   col-lg-6 mb-4  form-group" >
          <textarea className="input100" type="text"  name="description"  onChange={handleInput}  value={sujetInput.description} placeholder="Description"  style={{height: '80px'}}/>
          <span className="focus-input111" />
          <span className="symbol-input111">
            <i className=" fas fa-file-alt"  aria-hidden="true" /> 
          </span>
       
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
            
          Modifier Sujet
         
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

export default PageModifierSujet
