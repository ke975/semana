import React from "react";
import Logo from "../assets/Logo.svg";
import {gql, useMutation} from '@apollo/client'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import '../styles/fondo.css'


const CREATE_SUBSCRIBER_MUTATION=gql`
mutation CreateSubscriber($name:String!, $email:String!) {
  createSubscriber(data: {name: $name, email:$email}) {
    id
  }
}

`



export function Home() {

const navigate =useNavigate()


const [name ,setName ] = useState('');
const [email ,setEmail ] = useState('');

const [  createSubscriber] = useMutation(CREATE_SUBSCRIBER_MUTATION)

async function handleSubscribe(e){
  e.preventDefault();
  try {
    await createSubscriber({
      variables:{
        name, email
      }
    })
    navigate('/event/lesson/fundamentos-de-react-js')
  } catch (error) {
    alert("Los datos estan vacios por favor llene los campos")
  }
  
  
  
  
  
  console.log(name, email)
  
  }

  return (
    <div id="Home">

    
    <div className="container">
      <div className="row align-items-center mt-5 ">
        <div className="col col-sm-12 col-md-6 mt-5 m-5 d-none d-sm-block ">
        <img src={Logo} className="img-fluid " width="500px"  alt="" />
          <h2 className="text-white ">Aprendé a crear una <span style={{color:"#81D8F7"}}>aplicación completa</span> desde cero, <span style={{color:"#81D8F7"}}>con React js</span></h2>
          <p className="text-white mt-4 text-justify">En tan solo una semana dominarás en la práctica una de las tecnologías más <br/> utilizadas y con alta demanda para acceder a las mejores oportunidades del mercado.</p>
    
        </div>

        <div
          className="col-md-4 me-2 mt-5 mb-5 rounded-start "
          style={{ backgroundColor: "#0099CC" }}
        >
          <h4 className="text-center text-white mt-3">Regístrate Gratis</h4>
          <form onSubmit={handleSubscribe} className="mt-5">
            <div className="mb-3 mt-4 col-md-9 mx-auto">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Nombre Completo"
                onChange={event => setName(event.target.value)}
              />
            </div>
            <div className="mb-3 mt-4 col-md-9 mx-auto">
              <input
                type="Email"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Correo Electronico"
                onChange={event => setEmail(event.target.value)}
              />
            </div>
            <div className="d-grid gap-2 col-md-6 mx-auto mb-3 mt-4">

               
              <button
                type="submit"
                className="btn btn-primary mx-auto col-md-12 "
                style={{ backgroundColor: "#9933CC" }}
              >
                Asegura tu participación
              </button>
      
            </div>
          </form>
        </div>
      </div>
    </div>


    </div>
  );
}
