import React, { useEffect, useState } from 'react'
import "./Nav.css"
import netf from "./img/netflix2.png"
import avatar from "./img/avatar.png"

function Nav() {
    const [show, handleShow] = useState(false)
        
    const transtionNavbar = ()=>{
        if (window.scrollY>100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    }
      
    useEffect(()=>{
       window.addEventListener("scroll",transtionNavbar);
       return ()=>window.removeEventListener("scroll",transtionNavbar);
    },[]);


  return (
    <div  className={`nav ${ show && "nav_black"}`}>
        <div className='nav_content'>
        <img src={netf}
         alt="netflix"
         className='nav_logo'
         />
        <img src={avatar}
         alt="avatar"
         className='nav_avatar'
         />

        </div>
       
    </div>
  )
}

export default Nav