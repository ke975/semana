import React from 'react'

import { gql, useQuery } from '@apollo/client'
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

export  function Sidebar() {
 
  const {data} = useQuery(GET_lESSONS_QUERY)
  console.log(data)


  return (
    <div>

      <div >
      <div class="accordion" id="accordionExample mt-5">
  <div class="accordion-item bg-dark">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
     Clases de React JS
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       
</div>
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






    </div>
  )
}