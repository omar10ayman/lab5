import React from 'react'
import imgFill  from "../images/icons8-favourite-50.png"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function NavBar() {
    let listLength=useSelector((state)=>state.favourite)

 return (
    <nav className=" px-5 navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">4YOU</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/favourite">Favourites</Link>
      </li>
    
    </ul>
    <div  style={{
              backgroundImage:`url(${imgFill})`,
                width:"50px",
                height:"50px",
                position:"absolute",
                right:"100px",
                zIndex:"1"
             }}/>
             <div style={{
                position:"absolute",
                right:"75px",
                zIndex:"1",
                color:"white",
                fontSize:"25px"
             }}>{listLength.length}</div>
  </div>
</nav>
 )
}
