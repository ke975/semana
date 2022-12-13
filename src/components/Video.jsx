import React from 'react'
import '@vime/core/themes/default.css'
import { DefaultUi, Player, Youtube,DefaultControls } from '@vime/react'
import {gql, useQuery} from"@apollo/client"
import {DiscordLogo} from 'phosphor-react'
import {Lightning} from 'phosphor-react'

const  GET_LESSON_BY_SLUG_QUERY = gql`
query GET_LESSON_BY_SLUG($slug:String) {
  lesson(where: {slug: $slug}) {
    title
    videoId
    description
    teacher {
      avatarURL
      bio
      name
    }
  }
}
`




export function Video(props) {
  const {data} = useQuery(GET_LESSON_BY_SLUG_QUERY,{
    variables:{
      slug:props.lessonSlug
    }
  })


  
console.log(data)



if(!data){
  return(
    <div className='flex-1'> <p>Carregando</p></div>
  )
}

  return (
    <div className='col-sm-12 col-md-12 order-sm-last '>
  <Player>
      <Youtube
videoId={data.lesson.videoId}    

/>
<DefaultControls hideOnMouseLeave activeDuration={2000} />
      <DefaultUi/>
    </Player>



    
    <section className="container mt-5">
      <div className="row">

      <div className="col-md-9 mb-3">
        <h1 className="text-white">{data.lesson.title}</h1>
        <p className="text-white">{data.lesson.description}</p>
        <img src={data.lesson.teacher.avatarURL} alt="" className="rounded-circle" width="80px" />
        <span className="text-white mx-2"> <strong>{data.lesson.teacher.name} </strong>
       {data.lesson.teacher.bio}
        </span>
      </div>

      <div className="col-md-3 mb-3 mx-auto col-sm-12">
      <div className="d-grid gap-2 col-md-12 ">
       
  <button className="btn btn" style={{ backgroundColor:"#996DFF"}} type="button">

<a  target="_blank" href="https://discord.gg/kVqqkwuY" style={{textDecoration:"none"}}>  <DiscordLogo size={40} 
color="white"
/> <strong className="text-white">
Discord</strong></a></button>




<button className="btn btn-outline-warning " style={{ backgroundColor:"#F75A68" }} type="button">
  <Lightning size={40} 
color="white"

/><a  target="_blank" href="https://classroom.google.com/c/NDkwMjg3NzEwNjY5?cjc=qjfkxjr" style={{textDecoration:"none"}}>  <strong className="text-white">
Desafió</strong></a></button>
</div>
      </div>
      </div>
    </section>
    </div>
    

  )
}
