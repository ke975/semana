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
    <main className="container-fluid">
      <div >
        <div className="row">
     
          <div className="col-md-8 mt-5 col-lg-8 order-md-first">
          
              {
                slug? 
                <Link to="event/lesson/fundamentos-de-react-js">Accecese a la clases </Link>:
                <Video  lessonSlug={slug}/> 
              }

      
        
          </div>
          <div className="col-md-4 col-lg-4 order-sm-first order-xs-first mt-5 ">
            <Sidebar/>
          </div>
        </div>
      </div>
    </main>



<footer>
<div className="container-fluid mt-5 bg-dark">
  <img src={Logo} alt="Logo de la empresa" width="80" height="80"/>

</div>

</footer>


    </div>
  )
}
