import React , { useState} from 'react'
import { useNavigate ,Link , NavLink} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Swal from 'sweetalert2';



function  PageDeposerDossierStage() {

  const Swal = require('sweetalert2');

    const navigate = useNavigate();

    //validation erreurs
    const [utiErrnomdept,setUtiErrnomdept]=useState(false);
    const [utiErrnomchefdept,setUtiErrnomchefdept]=useState(false);
    const [utiErrstrdept,setUtiErrstrdept]=useState(false);
    const [utiErrstrchefdept,setUtiErrstrchefdept]=useState(false);

    const [ error , setError] =useState ([]);
  
    const [ dossierInput , setDossier] =useState ({});
   
   
   
   
   const handleInput = (e) => {
      e.persist();
     
      setDossier({ ...dossierInput , [e.target.name]: e.target.value})

      
      
   }
   
   
   const [ filedata , setFiledata] = useState([]);

  const handleFile  = (e) =>{
    setFiledata({ cinfile:e.target.files[0] , convfile:e.target.files[1]  , cvfile:e.target.files[2]  ,lettfile:e.target.files[3] });
   }

   const dossierSubmit = (e) => {
     e.preventDefault();
   
   
     const data = {
        
        cinfile:filedata.cinfile,
        convfile:filedata.convfile,
        cvfile:filedata.cvfile,
        lettfile:filedata.lettfile,
       }







   
       const StId =   localStorage.getItem('id'); 
  
        axios.post(`api/ajouter-dossier-stage/${StId}`, data).then(res =>{
             if(res.data.status === 200){
              Swal.fire ("Succès" , res.data.message ,"success");
              //navigate('/service-de-formation/afficher-departements');
             
             }

          else if(res.data.status === 400){
            // Swal.fire("Erreur dans les champs" , "Vérifier les champs!", "error");
          
           //setDept({...deptInput  , error_list : res.data.validation_errors});
           setError(res.data.validation_errors);
           
        }
      
   
     });
   } 
   
   
   /* var display_errors = [];
   if(deptInput.error_list)
   {
       display_errors = [
           deptInput.error_list.nom_dept,
           deptInput.error_list.nom_chef_dept,

       ]

   } */

   

  return (
    <>
      
<section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h3>Ajouter le Dossier de stage</h3>

         



          </div>

          
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
          

<NavLink className={(ndata) => ndata.isActive && "active" }  to='/stagiaire/acceuil'>Acceuil</NavLink>  <span> / </span>
<NavLink className={(ndata) => ndata.isActive && "active" }  to='/stagiaire/deposer-dossier-stage'>Ajouter dossier</NavLink>

            </ol>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </section>


    <br/>
      <div className="col-md-offset-3 col-md-12">
        <div className="form-container">
    {/* onSubmit={compteSubmit}       */}
<form onSubmit={dossierSubmit} >
  <div className="row">







        <div className="wrap-input100   col-lg-3 mb-3  form-group " >   
<p className=" text-center text-secondary"> Déposer votre copie de CIN</p>
  <div className="frame">
  <div className="d-flex justify-content-center ">
         <div className="dropzone">
             <img src="http://100dayscss.com/codepen/upload.svg" className="upload-icon  " />
             <input type="file" name="cinfile"   onChange={handleFile}   className="upload-input " />
      </div>  
    </div> 

   
 </div>
</div>





<div className="wrap-input100   col-lg-3 mb-3  form-group " >   
<p className=" text-center text-secondary"> Déposer votre convention de stage</p>
  <div className="frame">
  <div className="d-flex justify-content-center ">
         <div className="dropzone">
             <img src="http://100dayscss.com/codepen/upload.svg" className="upload-icon  " />
             <input type="file" name="convfile" onChange={handleFile}   className="upload-input " />
      </div>  
    </div> 

   
 </div>
</div>



<div className="wrap-input100   col-lg-3 mb-3  form-group " >   
<p className=" text-center text-secondary"> Déposer votre CV</p>
  <div className="frame">
  <div className="d-flex justify-content-center ">
         <div className="dropzone">
             <img src="http://100dayscss.com/codepen/upload.svg" className="upload-icon  " />
             <input type="file" name="cvfile"  onChange={handleFile}   className="upload-input " />
      </div>  
    </div> 

   
 </div>
</div>



<div className="wrap-input100   col-lg-3 mb-3  form-group " >   
<p className=" text-center text-secondary"> Déposer votre lettre d'affectation</p>
  <div className="frame">
  <div className="d-flex justify-content-center ">
         <div className="dropzone">
             <img src="http://100dayscss.com/codepen/upload.svg" className="upload-icon  " />
             <input type="file" name="lettfile"  onChange={handleFile}   className="upload-input " />
      </div>  
    </div> 

   
 </div>
</div>


   
    
 





 
    {/* Cancel Button */}
    
    <div className="form-group col-lg-2 ">
   
          <button className="persb-btn">

           <Link to="/service-de-formation/afficher-departements"  style={{color: 'white'}}>
          Annuler
            </Link> 

          </button>
       
        </div>

    
        <div className="form-group col-lg-3  i">
          <button type="submit" className="login100-form-btn"  style={{color: 'white'}}>
            
          Ajouter Dossier
         
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

export default PageDeposerDossierStage
