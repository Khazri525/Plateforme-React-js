import React from 'react'
import { Link  } from 'react-router-dom';
function SideList() {
  return (
    
    <>
 
   
    {/* Sidebar Menu */}
    <nav class="mt-2">
        {/* <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
             */}
                  <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
   
                {/* 
                <li className="nav-item">
                  <Link to="/coordinateur/acceuil">
                    <i class="nav-icon  fas fa-window-maximize"></i>
                    Acceuil
                  </Link>
                </li><br/>

                <li className="nav-item">
                  <Link to="/coordinateur/profile">
                  <i class="nav-icon   fas fa-user-cog"></i>
                    Profil
                  </Link>
                </li><br/>

                <li className="nav-item">
                  <Link to="/coordinateur/afficher-tous">
                    <i class="nav-icon  fas fa-clipboard-list"></i>
                    Consulter Utilisateurs
                  </Link>
                </li><br/>
                
                <li className="nav-item">
                  <Link to="/coordinateur/ajouter-compte">
                    <i class="nav-icon  fas fa-plus-circle"></i>
                    Ajouter Compte
                  </Link>
                </li><br/>  */}

<li className="nav-item">
                  <Link to="/coordinateur/acceuil"className="nav-link">
                    <i class="nav-icon  far fa-circle"></i>
                    Acceuil
                  </Link>
                </li>
<li className="nav-item " >
                  <Link to="/coordinateur/profile" className="nav-link">
                  <i class="nav-icon fas fa-cog"></i>
                    Profil
                   
                  </Link>
                </li>


<li class="nav-item">
            <a href="" className="nav-link">
              <i class="nav-icon  fas fa-user-alt"></i>
              
               Utilisateurs
                <i class="fas fa-angle-left right"></i>
              
            </a>
            <ul class="nav nav-treeview">
            <li className="nav-item">
                  <Link to="/coordinateur/ajouter-compte" className="nav-link">
                    <i class="nav-icon  fas fa-plus-circle"></i>
                   Ajouter
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/coordinateur/afficher-tous" className="nav-link">
                    <i class="nav-icon  fas fa-clipboard-list"></i>
                    Consulter 
                  </Link>
                </li>
            </ul>
          </li>


{/* 
<li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon far fa-envelope"></i>
              <p>
                Mailbox
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="../mailbox/mailbox.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Inbox</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="../mailbox/compose.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Compose</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="../mailbox/read-mail.html" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Read</p>
                </a>
              </li>
            </ul>
          </li> */}
               

                
      </ul>
    </nav>
    {/* /.sidebar-menu */}
    </>
   
  )
}

export default SideList
