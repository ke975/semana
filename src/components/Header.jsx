import React from 'react'
import { gql, useQuery } from '@apollo/client'
import {Link } from 'react-router-dom'
import { Lessons } from './Lessons'


const GET_lESSONS_QUERY = gql`
query {
  lessons( stage: PUBLISHED) {
    id
    lessonType
    availableAt
    title
    slug
    description
  }
}
`
export  function Header() {

  const {data} = useQuery(GET_lESSONS_QUERY)
  console.log(data)
  return (
    <div>
    <nav className="navbar navbar-light bg-dark ">
  <div className="container-fluid justify-content-center ">
    <a className="navbar-brand " href="#">
      <h4 className="text-white">React JS</h4>

    </a>
    <div className=' '>
    <button className="btn btn-outline-succes text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Contenido del WDW</button>

    <div className="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div className="offcanvas-header">
    <h5 id="offcanvasRightLabel">Clases de Reactjs</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
  {data?.lessons.map(item=>{
          return(
            <Lessons
            key={item.id}
            title={item.title}
            slug={item.slug}
            description={item.description}
            />
          )
          
        })}
  </div>
</div>
    </div>
    

  </div>
  
</nav>

    </div>
  )
}