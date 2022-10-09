import React from 'react'
import './navbar.css'
export default function Navbar() {
  return (
    <div className="Navbar">
<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid navitems">
  
  
   <div className="nav-img"> <img src="./img/CryptoKet.svg" alt="crypto ket" style={{marginLeft:"50px",}}></img></div>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navtogle navbar-collapse" id="navbarNav">

    
      <ul className="navbar-nav ul ">
        <li className="nav-item">
          
          
        </li>
        <li className="nav-item" style={{paddingLeft:"20px",height:"40px"}}>
      
      <form className="nosubmit">
        <input className="nosubmit" type="search" placeholder="Searc Item Here" ></input>
      </form>
           
          {/*   <input type="search" className="form-control me-2" placeholder="Searc Item Here" name="name"  style={{backgroundColor:"rgba(36,37,44)",width:"627px"}}></input>
            */}
  
        </li>
        <li className="nav-item">
          <a className="nav-link explore" style={{marginLeft:"20px"}}>Explore</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >My Items</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{marginLeft:"18px"}}>Following</a>
        </li>
        <li className="">
          <button className="create" style={{marginLeft:"20px"}}>Create</button>
        </li>
    {/*     <li className="" style={{borderRadius:"20px"}}>
          <button className="gradient-border-pseudo" style={{marginLeft:"20px"}}>Contenet</button>
          
        </li> */}
        <li className="">
<a  className="button" href="#"><span>Connect</span></a>
</li>

      </ul>
  
    </div>
   
  </div>
 
</nav>
 <hr className="hr"></hr>

    </div>
  )
}
