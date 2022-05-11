import React from 'react'
import { Link  } from 'react-router-dom';
function SSideList() {
  return (
    <>
      
    {/* Sidebar Menu */}
    <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            
   
          
{/* 
        <li className="nav-item">
                  <Link to="/service-de-formation/acceuil">
                  <i class="nav-icon  fas fa-window-maximize"></i>
                    Acceuil
                  </Link>
                </li><br/>

                

                <li className="nav-item">
                  <Link to="/service-de-formation/profile">
                    <i class="nav-icon   fas fa-user-cog"></i>
                    Profil
                  </Link>
                </li><br/>

                

                <li className="nav-item">
                  <Link to="/service-de-formation/ajouter-departement">
                  <i class="nav-icon  fas fa-plus-circle"></i>
                    Ajouter Département
                  </Link>
                </li><br/>
                <li className="nav-item">
                  <Link to="/service-de-formation/afficher-departements">
                  <i class="nav-icon  fas fa-clipboard-list"></i>
                    Afficher Départements
                  </Link>
                </li><br/>
                

                <li className="nav-item">
                  <Link to="/service-de-formation/afficher-demandes-stages">
                  <i class="nav-icon  fas fa-clipboard-list"></i>
                    Afficher Demandes de stages
                  </Link>
                </li><br/>

  
                <li className="nav-item">
                  <Link to="/service-de-formation/afficherQuestionReponse">
                  <i class="nav-icon  fas fa-clipboard-list"></i>
                    Afficher Question/Reponse
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/service-de-formation/paramQuiz">
                  <i class="nav-icon  fas fa-clipboard-list"></i>
                     Paramètres Quiz
                  </Link>
                </li><br/> */}

              
                <li className="nav-item">
                  <Link to="/service-de-formation/acceuil" className="nav-link">
                  <i class="nav-icon   far fa-circle"></i>
                    Acceuil
                  </Link>
                </li>


               <li className="nav-item">
                  <Link to="/service-de-formation/profile"  className="nav-link">
                    <i class="nav-icon fas fa-cog"></i>
                    Profil
                  </Link>
                </li>



                <li className="nav-item">
            <a href="" className="nav-link">
              <i className="nav-icon  far fa-circle "></i>
              
               Dossier de stages
                <i class="fas fa-angle-left right"></i>
              
            </a>
            <ul className="nav nav-treeview">
            <li className="nav-item">
                  <Link to="/service-de-formation/afficher-dossies-stage" className="nav-link">
                  <i class="nav-icon  fas fa-clipboard-list"></i>
                    Afficher 
                  </Link> 
                </li>

            </ul>
          </li>             


      

<li className="nav-item">
            <a href="" className="nav-link">
              <i class="nav-icon  far fa-circle "></i>
              
               Département
                <i class="fas fa-angle-left right"></i>
              
            </a>
            <ul class="nav nav-treeview">
            <li className="nav-item">
                  <Link to="/service-de-formation/ajouter-departement"  className="nav-link">
                  <i class="nav-icon  fas fa-plus-circle"></i>
                    Ajouter 
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/service-de-formation/afficher-departements" className="nav-link">
                  <i class="nav-icon  fas fa-clipboard-list"></i>
                    Afficher 
                  </Link>
                </li>
            </ul>
          </li>

          <br/>             





          
<li className="nav-item">
            <a href="" className="nav-link">
              <i className="nav-icon  far fa-circle "></i>
              
               Demandes de stages
                <i class="fas fa-angle-left right"></i>
              
            </a>
            <ul className="nav nav-treeview">
            <li className="nav-item">
                  <Link to="/service-de-formation/afficher-demandes-stages" className="nav-link">
                  <i class="nav-icon  fas fa-clipboard-list"></i>
                    Afficher 
                  </Link> 
                </li>

            </ul>
          </li>    
          <br/>    








          <li className="nav-item">
            <a href="" className="nav-link">
              <i class="nav-icon  far fa-circle "></i>
              
              Test psychotéchnique
                <i class="fas fa-angle-left right"></i>
              
            </a>
            <ul className="nav nav-treeview">
            <li className="nav-item">
                  <Link to="/service-de-formation/afficherQuestionReponse" className="nav-link">
                  <i class="nav-icon  fas fa-clipboard-list"></i>
                    Afficher Question/Reponse
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/service-de-formation/paramQuiz" className="nav-link">
                  <i class="nav-icon  fas fa-clipboard-list"></i>
                     Paramètrer Quiz
                  </Link>
                </li>
               
            </ul>
          </li>    
            
                          
<li className="nav-item">
                  <Link to="/service-de-formation/afficherRapports" className="nav-link">
                  <i class="nav-icon   far fa-circle"></i>
                    Rapports
                  </Link>
</li>

                                
<li className="nav-item">
                  <Link to="/service-de-formation/afficherBilans" className="nav-link">
                  <i class="nav-icon   far fa-circle"></i>
                    Bilans
                  </Link>
 </li>      
      </ul>
    </nav>
    {/* /.sidebar-menu */}
    </>
  )
}

export default SSideList
