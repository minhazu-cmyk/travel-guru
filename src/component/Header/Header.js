import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    
    <div className="d-flex flex-wrap flex-column">
    <div style={{paddingTop:'5px',paddingBottom:'5px',maxWidth:"100%"}} className="navbar-nav " >      <ul className="ml-auto d-flex flex-wrap justify-content-center flex-row"  style={{display: 'flex',flexDirection: 'row', listStyle: 'none',margin:'auto'}} >
         <li style={{margin:'auto'}}>
          <img className="img-responsive ml-auto" style={{width:'35%'}} src="https://i.ibb.co/JCfzhQy/Logo.png" alt=""></img>
 
         </li>
           <li>
             <Link to="/home">Home</Link>
           </li>
           <li>
             <Link to="/login">Login</Link>
           </li>
        
           
            
 </ul>
         </div>
         </div>
       

  );
};

export default Header;