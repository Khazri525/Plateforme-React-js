import React , { useState} from 'react'
import { useNavigate ,Link , NavLink} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function PageAjouterSujet() {


    const navigate = useNavigate();

    //validation erreurs
    const [utiErrsujet,setUtiErrsujet]=useState(false);
    const [utiErrtechnologies,setUtiErrtechnologies]=useState(false);
    const [utiErrstrsujet,setUtiErrstrsujet]=useState(false);
    
  
    const [ sujetInput , setSujet] =useState ({
      sujet: '',
      technologies: '',
      description: '',
      error_list:[],

    });
   
   
   
   
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
        
       
        //erreur étre string  sujet
       if( !(sujetInput.sujet.match('[a-z-A-Z]')) ) {  
        setUtiErrstrsujet(true)
       }
       else{
        setUtiErrstrsujet(false)
       }

        
      
   }
   
   
   const sujetSubmit = (e) => {
     e.preventDefault();
   
   
     const data = {
       sujet:sujetInput.sujet,
       technologies:sujetInput.technologies,
       description:sujetInput.description,
      

       }

        axios.post('api/ajouter-sujet-stage', data).then(res =>{
             if(res.data.status === 200){
              swal ("Success" , res.data.message);
              navigate('/encadrant/afficher-sujets-stages');
             }

          else if(res.data.status === 400){
          
           setSujet({...sujetInput  , error_list : res.data.validation_errors});
           
        }
      
   
     });
   } 
   
   
   var display_errors = [];
   if(sujetInput.error_list)
   {
       display_errors = [
           sujetInput.error_list.sujet,
           sujetInput.error_list.technologies,
           sujetInput.error_list.description,

       ]

   }

   

  return (
    <>
      
<section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h3>Ajouter Sujet</h3>

            {
               display_errors.map((item) => {
                  return(<p className='mb-1'>{item}</p>)
               })

            }



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
          <span className="symbol-input111">
            <i className=" fas fa-building"  aria-hidden="true" />
          </span>
           {utiErrstrsujet ? <span className='text-danger txt00 '><i className="far fa-times-circle" aria-hidden="true" /> sujet est chaine de caractéres!</span> :""}  
          {utiErrsujet ? <span className='text-danger txt00 '><i className="far fa-times-circle" aria-hidden="true" /> sujet max 50 caractéres!</span> :""}  
         
        </div>

        <div className="wrap-input100   col-lg-6 mb-4  validate-input" >
          <input className="input100" type="text"  name="technologies"  onChange={handleInput} value={sujetInput.technologies}  placeholder="Technologies" />
          <span className="focus-input111" />
          <span className="symbol-input111">
            <i className=" fas fa-building"  aria-hidden="true" />
          </span>
           {utiErrstrsujet ? <span className='text-danger txt00 '><i className="far fa-times-circle" aria-hidden="true" /> sujet est chaine de caractéres!</span> :""}  
          {utiErrtechnologies ? <span className='text-danger txt00 '><i className="far fa-times-circle" aria-hidden="true" /> sujet max 50 caractéres!</span> :""}  
         
        </div>



 
    {/* Cancel Button */}
    
    <div className="form-group col-lg-2 ">
   
          <button className="persb-btn">

           <Link to="/encadrant/afficher-sujets-stages">
          Annuler
            </Link> 

          </button>
       
        </div>

    
        <div className="form-group col-lg-3  i">
          <button type="submit" className="login100-form-btn">
            
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

