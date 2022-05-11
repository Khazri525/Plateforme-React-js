import React from 'react'
import { Link  } from 'react-router-dom';

function ESideList() {
  return (
    <>
       
   
    {/* Sidebar Menu */}
    <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

           
       {/*  <li className="nav-item">
                  <Link to="/encadrant/acceuil">
                    <i class="nav-icon  fas fa-window-maximize"></i>
                    Acceuil
                  </Link>
                </li><br/>

                <li className="nav-item">
                  <Link to="/encadrant/profile">
                    <i class="nav-icon   fas fa-user-cog"></i>
                    Profil
                  </Link>
                </li><br/>
                 
        <li className="nav-item">
                  <Link to="/encadrant/ajouter-sujet-stage">
                    <i class="nav-icon  fas fa-window-maximize"></i>
                    Ajouter Sujet 
                  </Link>
                </li>   
                


                <li className="nav-item">
                  <Link to="/encadrant/afficher-sujets-stages">
                    <i class="nav-icon  fas fa-window-maximize"></i>
                    Afficher Sujets 
                  </Link>
                </li><br/>   

                
                <li className="nav-item">
                  <Link to="/encadrant/noter-travail">
                    <i class="nav-icon  fas fa-window-maximize"></i>
                    Noter
                  </Link>
                </li><br/>  
                
                <li className="nav-item">
                  <Link to="/encadrant/calendrier">
                    <i class="nav-icon  fas fa-window-maximize"></i>
                    Calendrier
                  </Link>
                </li><br/>   */}

<li className="nav-item">
                  <Link to="/encadrant/acceuil"className="nav-link" >
                    <i class="nav-icon  far fa-circle"></i>
                    Acceuil
                  </Link>
                </li> 
<li className="nav-item nav-link">
                  <Link to="/encadrant/profile">
                    <i class="nav-icon fas fa-cog"></i>
                    Profil
                  </Link>
                </li>

            <li className="nav-item">
            <a href="" className="nav-link">
              <i className="nav-icon  far fa-circle "></i>
              
               Sujet
                <i class="fas fa-angle-left right"></i>
              
            </a>
            <ul className="nav nav-treeview">
            <li className="nav-item">
                  <Link to="/encadrant/ajouter-sujet-stage" className="nav-link">
                    <i class="nav-icon  fas fa-plus-circle"></i>
                    Ajouter 
                  </Link>
                </li>   
                


                <li className="nav-item">
                  <Link to="/encadrant/afficher-sujets-stages" className="nav-link">
                    <i class="nav-icon  fas fa-clipboard-list"></i>
                    Afficher 
                  </Link>
                </li>

            </ul>
          </li>    
        
          <li className="nav-item">
                  <Link to="/encadrant/noter-travail" className="nav-link">
                    <i class="nav-icon   far fa-file"></i>
                    Noter
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link to="/encadrant/calendrier" className="nav-link">
                    <i class="nav-icon   far fa-calendar-alt"></i>
                    Calendrier
                  </Link>
                </li>

                
            

      </ul>
    </nav>
    {/* /.sidebar-menu */}
    </>
  )
}

export default ESideList
