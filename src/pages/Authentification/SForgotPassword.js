import React from 'react'
import { useNavigate ,Link} from 'react-router-dom';
function SForgotPassword() {
  return (
    <>
      

 
  {/* <div className="container-login100"> */}
        <div className="wrap-login102">
      <form  className="login100-form validate-form"  >
      {/* {message} onSubmit={this.handleSubmit}*/}
      
        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
          <input className="input100" type="email" name="email" placeholder="Email" onChange={(e) =>this.email = e.target.value} />
          <span className="focus-input100" />
          <span className="symbol-input100">
            <i className="fa fa-envelope" aria-hidden="true" />
          </span>
        </div>



        <div className="container-login100-form-btn">
          <button type="submit" className="login100-form-btn">

           Envoyer 
           
          </button>
        </div>

        <br/>
        <div className="text-center p-t-136 ">
        <Link to="/login-stagiaire"  className="text-decoration-none">Connecter</Link>  
        </div>

      
      


   {/*      <div className="container-login100-form-btn">
          <button className="login100-form-btn">

           <Link to="/reset-password">
        
           Réinintialiser Mot de passe
            </Link> 

          </button>
        </div>
        <br/>
        <div className="text-center p-t-136">
        
          <Link to="/login"  className="txt2">
          Connecter
            </Link> 
        </div>
 */}


      </form>
    </div>

{/* </div> */}
    
    </>
  )
}

export default SForgotPassword
