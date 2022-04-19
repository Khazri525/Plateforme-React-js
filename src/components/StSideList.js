import React from 'react'
import { Link  } from 'react-router-dom';
function StSideList() {
  return (
    <>
      
    {/* Sidebar Menu */}
    <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            
   
          

        <li className="nav-item">
                  <Link to="/stagiaire/acceuil">
                    <i class="nav-icon  fas fa-window-maximize"></i>
                    Acceuil
                  </Link>
                </li><br/><br/>


                <li className="nav-item">
                  <Link to="/stagiaire/profile">
                    <i class="nav-icon   fas fa-user-cog"></i>
                    Profile
                  </Link>
                </li><br/>
       
      </ul>
    </nav>
    {/* /.sidebar-menu */}
    </>
  )
}

export default StSideList