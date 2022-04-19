import React from 'react';
import {Routes,Route, Link, BrowserRouter  } from 'react-router-dom';


import EProtectedRoute from './components/EProtectedRoute';


import Login from './pages/Authentification/Login';
import UForgotPassword from './pages/Authentification/UForgotPassword';
import TResetPassword from './pages/Authentification/TResetPassword';
import Deconnexion  from './pages/Authentification/Deconnexion';
import RegisterLogin from './pages/Authentification/RegisterLogin';


import Dashboard from './pages/Dashboard';
import Acceuil from './components/Acceuil';
import Profile from './components/Profile';
import CrudTable from './components/CrudTable';
import DeptCrudTable from './components/DeptCrudTable';
import PageAjouterCompte from './pages/coordinateurPages/PageAjouterCompte';
import PageModifierCompte from './pages/coordinateurPages/PageModifierCompte';
import PageConsulterProfile from './pages/coordinateurPages/PageConsulterProfile';


import EDashboard from './pages/EDashboard';
import ChDashboard from './pages/ChDashboard';
import SDashboard from './pages/SDashboard';
import StDashboard from './pages/StDashboard';


import axios from 'axios';
import Home from './components/Home';
import PageAjouterDepartement from './pages/serviceDeFormationPages/PageAjouterDepartement';
import PageModifierDepartement from './pages/serviceDeFormationPages/PageModifierDepartement';
import Page404 from './pages/Authentification/Page404';
import Page403 from './pages/Authentification/Page403';
import RegisterStagiaire from './pages/Authentification/RegisterStagiaire';
import LoginStagiaire from './pages/Authentification/LoginStagiaire';
import TForgotPassword from './pages/Authentification/TForgotPassword';

import Landing from './components/Landing';
import DemandeStage from './components/DemandeStage';
import PageConsulterDemandeStage from './pages/serviceDeFormationPages/PageConsulterDemandeStage';
import PageAjouterSujet from './pages/encadrantPages/PageAjouterSujet';
import PageConsulterSujetStage from './pages/encadrantPages/PageConsulterSujet';
import PageModifierSujet from './pages/encadrantPages/PageModifierSujet';
import ListeSujets from './components/ListeSujets';
import ChProtectedRoute from './components/ChProtectedRoute';
import SProtectedRoute from './components/SProtectedRoute';


axios.defaults.baseURL="http://localhost:8000/";
axios.defaults.headers.post['Content-type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

//logout  vérifier Barear Token
axios.interceptors.request.use(function (config){
  const token = localStorage.getItem(`auth_token`);
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});





 function App() {
  return (
     <>
       <Routes>
       
          
       {/* <Route path="/Landing"  exact element={< Landing/>}></Route> */}
          <Route path="/Page404"  exact element={<Page404/>}></Route>
          <Route path="/Page403"  exact element={<Page403/>}></Route>
         {/*  <Route path="/register-stagiaire"  exact element={<RegisterStagiaire/>}></Route>
          <Route path="/login-stagiaire"  exact element={<LoginStagiaire/>}></Route>
 */}
          
         <Route path="/" exact element={ <Landing/>}>
             <Route path="login" exact element={<Login/>} />
             <Route path="U-forgot"  exact element={<TForgotPassword/>}/>
             <Route path="U-reset"  exact element={<TResetPassword/>}/>
             <Route path="register-stagiaire"  exact element={<RegisterStagiaire/>}/>
             <Route path="login-stagiaire"  exact element={<LoginStagiaire/>}/>
             {/* <Route path="S-forgot"  exact element={<SForgotPassword/>}/> */}
             {/*   <Route path="S-reset"  exact element={< SResetPassword/>}/> */}
           <Route path="demande-stage" exact element={<DemandeStage/>} />
           <Route path="liste-sujets" exact element={<ListeSujets/>} />
         </Route>


         
   {/* public routes */}
        {/* Authentification*/}
          <Route path="/register-login" exact element={<RegisterLogin/>} />
          {/* <Route path="/login" exact element={<Login/>} /> */}
          {/* <Route path="/reset-password" exact element={<ResetPassword/>} /> */}
          <Route path="/deconnexion" exact element={<Deconnexion/>} />
          {/* <Route path="/forgot"  exact element={<UForgotPassword/>}/> */}
          {/* <Route path="/reset"  exact element={<UResetPassword/>}/> */}






   {/* to protected routes Stagiaire*/}    
   {/* <Route path="/" element={<SProtectedRoutes/> }> */}
   
       {/* Interface Stagiaire */}
         <Route path="/etudiant/acceuil"  exact element={<Acceuil/>} ></Route> 
          <Route path="/stagiaire/" element={<StDashboard/>} > 
            <Route path="acceuil"  element={<Acceuil/>} />
            <Route path="profile"  element={< Profile  />} />
          </Route>
  {/* </Route>   */}


  
   {/* to protected routes Coordinateur*/}  
        {/* Interface Coordinateur */}


    
        <Route path="/coordinateur/" element={<Dashboard/>} > 
          <Route path="acceuil"  element={<Acceuil/>} />
          <Route path="afficher-tous" element={<CrudTable/>} />
          <Route path="ajouter-compte" element={<PageAjouterCompte/>} /> 
          <Route path="modifier-compte/:id" exact element={<PageModifierCompte/>} />
        </Route>
 
 
 
 
 {/* <Route path="/" element={<UProtectedRoutes/>}   >   */}
{/* <Route path="/" exact element={<EPrivateRoute />} >   </Route>  */}
        {/* Interface Encadrant */}
   {/* 
        <Route path="/encadrant/" element={<EDashboard/>} > 
             <Route path="acceuil"  element={<Acceuil/>} />
              <Route path="profile"  element={< Profile  />} />
              <Route path="ajouter-sujet-stage" element={<PageAjouterSujet/>} /> 
              <Route path="afficher-sujets-stages" element={<PageConsulterSujetStage/>} /> 
              <Route path="modifier-sujet/:id" exact  element={<PageModifierSujet/>} /> 
        </Route> */}

         {/* Interface Chef departement */}
{/* 
 <Route path="/" element={< ChProtectedRoute />}>  */}
         <Route path="chef-departement/" element={<ChDashboard/>} > 
             <Route path="acceuil"  element={<Acceuil/>} />
             <Route path="profile"  element={< Profile  />} /> 
        </Route>
{/* </Route>  */}


 
 <Route path="/" element={<EProtectedRoute   />}>   

        <Route path="encadrant/" element={<EDashboard/>} >  
             <Route path="acceuil"  element={<Acceuil/>} />
              <Route path="profile"  element={< Profile  />} />
              <Route path="ajouter-sujet-stage" element={<PageAjouterSujet/>} /> 
              <Route path="afficher-sujets-stages" element={<PageConsulterSujetStage/>} /> 
              <Route path="modifier-sujet/:id" exact  element={<PageModifierSujet/>} /> 
        </Route> 
</Route>  




{/* <Route path="/" element={< SProtectedRoute />}   >  */}
        {/* Interface Service de formation */}
      <Route path="service-de-formation/" element={<SDashboard/>} > 
          <Route path="acceuil"  element={<Acceuil/>} />
          <Route path="profile"  element={< Profile  />} />
          <Route path="ajouter-departement" element={<PageAjouterDepartement/>} /> 
          <Route path="afficher-departements" element={<DeptCrudTable/>} /> 
          <Route path="modifier-departement/:id" exact  element={<PageModifierDepartement/>} /> 
          <Route path="afficher-demandes-stages"  element={< PageConsulterDemandeStage  />} />
      </Route>

{/* </Route>  */}
  
{/* </Route> */}
        



 





       </Routes> 
     </>
  );
  }
  
  export default App;