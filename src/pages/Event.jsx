import React from 'react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Video } from '../components/Video'
import Logo from'../assets/Logo.svg'
import {Link} from'react-router-dom'
import { useParams } from 'react-router-dom'



import '../styles/event.css'
export  function Event() {



  const {slug} = useParams();
  return (
    <div id="event" >
        <header className="mx-auto">
<Header/>
        </header>
    <main className="container">
      <div >
        <div className="row">
     
          <div className="col-md-12 mt-5 col-lg-8 order-md-first">
          {slug?  <Video  lessonSlug={slug} /> :<div className='flex-1'></div> }
          </div>
        
        </div>
      </div>
    </main>



<footer>
<div className="container-fluid mt-5 bg-dark">
  <img src={Logo} alt="Logo de la empresa" width="50" height="50"/>

</div>

</footer>


    </div>
  )
}
