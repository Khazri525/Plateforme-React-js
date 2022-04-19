import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

import swal from 'sweetalert';

function ListeSujets() {
   
  

  //rechercher
  const[searchTerm,setSearchTerm] = useState("");
  const[loading,setLoading] = useState(true);
  const[sujetlist,setSujetlist] = useState([]);



//afficher sujets stages
  useEffect(()=> {
     axios.get('api/afficher-sujets-stages').then(res=> {
        if(res.status ===200){
          setSujetlist(res.data.sujetStage) 
        }
        setLoading(false);
      }); 
  },[]);
  
     
  
  



  
 

if(loading){
 return <h5>Loading Sujets de Stages...</h5>
}
else{
 var afficher_Sujet_Cards ="";
  afficher_Sujet_Cards =
  sujetlist.filter(val =>{
    if(searchTerm === ""){
      return val;
    }else if( val.sujet.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
  }).map( (item , index) => {
    
     return(
         <>
         {/* Card 1 */}
<div className=" col-md-offset-3 col-md-6  " > 
<div className="card card-orange">
  <div className="card-header">
  
  </div>
  <div className="card-body"    >
    
  
  
    <strong><i className="fas fa-book mr-1" />Sujet{index+1}</strong>
      <p>{item.sujet}</p>
  
  
    <strong><i className="fas fa-book mr-1" />Technologies:</strong>
      <p>{item.technologies}</p>
  
 
    
 


{/* <div>

  
  <div className="text-right py-0 align-middle">
<div class="btn-group btn-group-sm ">
                      
                        < Link to={`/encadrant/modifier-sujet/${item._id}`}   class="btn btn-primary" ><i class="fas fa-pencil-alt"></i></Link>
                        < Link to= "#" class="btn btn-danger" ><i class="fas fa-trash"></i></Link>
</div></div>



</div> */}

</div>
</div>
</div>
{/* .Card 1 */}
         
         
         
         </>
     )
  });

}



return (
  <>
      






    <div class="p-2 bg-light rounded-pill shadow-sm mb-4  col-md-10 mx-auto" >
            <div class="input-group">
              <input type="search" placeholder="Que cherchez-vous?" aria-describedby="button-addon1" class="form-control border-0 bg-light"
               onChange={(e)=> {
                  setSearchTerm(e.target.value);
               }}
              
              />
              <div class="input-group-append">
                <button id="button-addon1" type="submit" class="btn btn-link text-primary"><i class="fa fa-search"></i></button>
              </div>
            </div>
          </div>

         


    <div className="row container mx-auto"> 
 
    {afficher_Sujet_Cards}
    </div>
<br/><br/><br/><br/><br/><br/><br/>



  </>
)
















}
export default ListeSujets

