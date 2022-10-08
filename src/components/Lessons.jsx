import {Link, useParams} from 'react-router-dom'



export  function Lessons(props) {

const {slug} = useParams();



  return (
    <div>
    <div className="text-center  ">
        <div className="row">
            <div className="col-md-12 mb-2 mt-2 ">

            <div className="card mx-auto col-sm-6 bg-transparent  border-success" style={{width: "18rem"}}>
  <div className="card-body ">
  <Link style={{textDecoration:"none" , color:"white", }} to={`/event/lesson/${props.slug}`} className="mx-auto "> 
          
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text text-justify">  {props.description}.</p>
    </Link>
          
  </div>
  
</div>

              
           
            </div>
        
    </div>
    </div>
        


    </div>
  )
}