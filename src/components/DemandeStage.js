import React , { useState} from 'react'
import { useNavigate ,Link , NavLink} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function DemandeStage() {


    const navigate = useNavigate();
  
     //validation erreurs
     const [ error , setError] =useState ([]);


    const [ userInput , setUser] =useState ({
        niveauetude: '',
        typestage:'',
        nom_dept:'', 
        cin:'', 
        error_list:[],
     
      
     
      });
     
      const handleInput = (e) => {
        e.persist();
       
        setUser({ ...userInput , [e.target.name]: e.target.value})
     
      }     

   

      const demandeSubmit = (e) => {
        e.preventDefault();
      
      
        const data = {
          niveauetude:userInput.niveauetude,
          typestage:userInput.typestage,
          nom_dept:userInput.nom_dept,
          cv:userInput.cv,
          cin:userInput.cin,
          
          }
      
      
       
           axios.post('api/ajouter-demande-stage', data).then(res =>{
                if(res.data.status === 200){
                  swal ("Success" , res.data.message);
                  navigate('/test-psychotéchnique');
                  setError([]);
                  
                 }
              
                else if(res.data.status === 400){
                  setError(res.data.validation_errors);
                  swal("erreur dans champs" , " ", "error");
           }
         
      
        });
     
      
      }
      

  return (
    <>







<div className="mx-auto form-container col-md-offset-3 col-md-8 ">
      
      <form  onSubmit={demandeSubmit}>
        
        
<div className="row">


   <div className="wrap-input100   col-lg-12 mb-4  ">
          <input className="input100" type="number"  name="cin"  onChange={handleInput} value={userInput.cin}  placeholder="  Votre CIN" />
          <span className="focus-input111" />
          <span className="symbol-input111">
            <i className=" fas fa-building"  aria-hidden="true" />
          </span>
         
        </div>


<div className="wrap-input100   col-lg-12 mb-4  " >
<select name="niveauetude"  onChange={handleInput} value={userInput.niveauetude}  className="input100 border-0 " type="text" >

    <option selected hidden>--Niveau d'étude--</option>
    <option name="niveauetude" value="Licence">Licence</option>
    <option name="niveauetude" value="Mastére">Mastére</option>
    <option name="niveauetude" value="Ingénieurie">Ingénieurie</option>

 </select>
<span className="focus-input111" />
<span className="symbol-input111">
<i className=" fas fa-book-reader" aria-hidden="true" />
</span>
</div>




<div className="wrap-input100   col-lg-12 mb-4  " >
<select  name="typestage"  onChange={handleInput} value={userInput.typestage} className="input100 border-0 " type="text" >
<option  selected hidden>--Type de stage--</option>
    <option name="typestage" value="PFE">PFE</option>
    <option name="typestage" value="Pérfectionnement">Pérfectionnement</option>
    <option name="typestage" value="Observation">Observation</option>
 </select>
<span className="focus-input111" />
<span className="symbol-input111">
<i className="fas fa-user-graduate" aria-hidden="true" />
</span>
</div>




<div className="wrap-input100   col-lg-12 mb-4  " >
<select name="nom_dept" onChange={handleInput} value={userInput.nom_dept} className="input100 border-0 " type="text" >
<option   selected hidden>--Nom Département--</option>
    <option name="nom_dept" value="IT">IT</option>
    <option name="nom_dept" value="Marketing">Marketing</option>
    <option name="nom_dept" value="BI"> BI</option>
    <option name="nom_dept" value="Développement web">Développement web</option>
 </select>
<span className="focus-input111" />
<span className="symbol-input111">
<i className=" fas fa-building"  aria-hidden="true" />
</span>
</div>


       
<div  className="input100 border-0 text-center">
      <i className="fas fa-upload" />
    <span>   Votre CV   </span>
        <input type="file"  name="cv" onChange={handleInput} value={userInput.cv} />
      </div>
   
      
        <div className="container-login100-form-btn col-md-6 ">
          <button type="submit" className="login100-form-btn">
          Envoyer
          </button>
        </div>

     

        <div className="container-login100-form-btn col-md-6 ">
        <Link className="login100-form-btn " to="/">Annuler</Link>
        </div>
 
 

 </div>

      </form>
   </div>





































































 {/*  <section className="content"> */}
{/*

                
<div className="form-group">                       
  <select name="niveauetude"  onChange={handleInput} value={userInput.niveauetude}  className="form-control"  >
    <option disabled selected>--Niveau d'étude--</option>
    <option name="niveauetude" value="Licence">Licence</option>
    <option name="niveauetude" value="Mastére">Mastére</option>
    <option name="niveauetude" value="Ingénieurie">Ingénieurie</option>
  </select>     
 </div>



<div className="form-group">                       
  <select name="typestage"  onChange={handleInput} value={userInput.typestage} className="form-control"   >
    <option disabled selected>--Type de stage--</option>
    <option name="typestage" value="PFE">PFE</option>
    <option name="typestage" value="Pérfectionnement">Pérfectionnement</option>
    <option name="typestage" value="Observation">Observation</option>
  </select>     
 </div>

 <div  className="form-group">           
  <select name="nom_dept" onChange={handleInput} value={userInput.nom_dept} className="form-control" >
    <option disabled selected>--Nom Département--</option>
    <option name="nom_dept" value="IT">IT</option>
    <option name="nom_dept" value="Marketing">Marketing</option>
    <option name="nom_dept" value="BI"> BI</option>
    <option name="nom_dept" value="Développement web">Développement web</option>
  </select>
</div>

 
        
      <div className="btn btn-primary btn-sm float-left waves-effect waves-light">
      <i className="fas fa-upload" />
    <span>   Votre CV   </span>
        <input type="file"  name="cv" onChange={handleInput} value={userInput.cv}  />
      </div>
   
  





              </div>
              
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">Envoyer</button>
              </div>
            </form>
          </div>
         
       </div>
        </div>
   </div>  */}
   {/* </section> */}
    </>
  )
}

export default DemandeStage
