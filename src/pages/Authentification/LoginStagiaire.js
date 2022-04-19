import React , { useState} from 'react'
import { useNavigate ,Link} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
function LoginStagiaire() {




    const navigate = useNavigate();
     //validation erreurs
    const [stgErremail,setStgErremail]=useState(false);
    const [stgErrmtpasse,setStgErrmtpasse]=useState(false);

    //Login
 
    const [ loginInput , setLogin] =useState ({
     
     email: '',
     password:'',
     error_list:[],
   
  
   });
   const handleInput = (e) => {
     e.persist();
     //Login
     setLogin({ ... loginInput , [e.target.name]: e.target.value})


       //erreur e-mail
       if(!loginInput.email.includes('@')){
        setStgErremail(true)
       }
       else{
        setStgErremail(false)
       }
  
        //erreur mot de passe 
        if(loginInput.password.length <4  ){
          setStgErrmtpasse(true)
         }
         else{
          setStgErrmtpasse(false)
         }
  
 
 
     
  }
 
 
  const loginSubmit = (e) => {
    e.preventDefault();
 
 
    const data = {
     
      email:loginInput.email,
      password:loginInput.password,
      
    }
 
 
    axios.get('/sanctum/csrf-cookie').then(response => {
       axios.post( 'api/login-stagiaire', data).then(res =>{
            if(res.data.status === 200){
                localStorage.setItem('auth_token' , res.data.access_token);
                localStorage.setItem('auth_name' , res.data.username);
               swal ("Success" , res.data.message);
               
              
                 navigate('/stagiaire/acceuil' );
              
 
 
            }
            else if(res.data.status === 401){
              swal ("Warning " , res.data.message);
            } 
               
           /*  else{
            
               swal("Error",res.data.message);
               setLogin({...loginInput  , error_list :res.data.validation_errors});
             
            } */
 
    });
  });
  
   }


  return (
    <>
      
  {/*     <div className="container-login100">

<div className="row"> */}

        <div className="wrap-login102">
      <form onSubmit={loginSubmit}>
        
        <div className="wrap-input100 " >
          <input className="input100" type="text"  name="email"  onChange={handleInput} value={loginInput.email}  placeholder="Email" />
         
          <span className="focus-input100" />
          <span className="symbol-input100">
            <i className="fa fa-envelope" aria-hidden="true" />
          </span>
        </div>
        {stgErremail ? <span className='text-warning txt00 '><i className="far fa-times-circle" aria-hidden="true" /> email doit contenir symbol @ </span> :""}  

        

        <div className="wrap-input100 " >
          <input className="input100" type="password" name="password"  onChange={handleInput} value={loginInput.password}  placeholder="Password" />
          <span className="focus-input100" />
          <span className="symbol-input100">
            <i className="fa fa-lock" aria-hidden="true" />
          </span>
        </div>
        {stgErrmtpasse ? <span className='text-warning txt00 '><i className="far fa-times-circle" aria-hidden="true" />le mot de passe doit contenir au minimum  5 caractères </span> :""}  


        <div className="container-login100-form-btn ">
          <button type="submit" className="login100-form-btn">
            
          Connecter
         
          </button>
        </div>
        <br/>

        <br/>

<div className="text-center p-t-136">
<Link to="/S-forgot " className="text-decoration-none" > Oublier le mot de passe ?</Link>  
</div>

<div className="text-center p-t-136">
<Link to="/register-stagiaire" className="text-decoration-none"> S'inscrire</Link>  
</div>





      </form>
    </div>
     
{/*     </div>


</div> */}

      
    </>
  )
}

export default LoginStagiaire
