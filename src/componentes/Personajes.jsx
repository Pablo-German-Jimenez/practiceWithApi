import Card from "react-bootstrap/Card";
import "../index.css";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";

function Personajes() {
  const [datoPersonaje, setDatoPersonaje] = useState({});

   // 1 esta expresión sirve para que se inicie con un objeto vacio, y se ejecute en montaje
    useEffect(()=>{
        consultaApi();
    },[])


    const consultaApi=async()=>{
        try{
            
            //2 solicita lectura de la api de la url y lo guarda en la variable respuestaDeApi 
            const respuestaDeLaApi = await fetch('https://dragonball-api.com/api/characters/'+ personajeAleatorio())
            console.log(respuestaDeLaApi)
            if(respuestaDeLaApi.status ===200){
            //metodo json(), no JSON(), es para solicitar información del body de las api
            const datos = await respuestaDeLaApi.json()
            console.log(datos)
        setDatoPersonaje(datos)}
            
                 }catch(error){
            console.error(error)
        }
    }

    const personajeAleatorio = ()=>{
        return Math.floor(Math.random()*(40-1+1)+1);
    }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header className="text-center">GOKU</Card.Header>
      <Card.Img
        className="card-img"
        variant="top"
        src="https://dragonball-api.com/characters/goku_normal.webp"
      />
      <Card.Body className="text-center ">
        <Card.Title>Descripcion</Card.Title>
        <ul className="list-unstyled">
          <li>Raza: Saiyan</li>
          <li>Ki: 60.000.000</li>
          <li>Crew:Quilombero</li>
        </ul>
        <Button variant="danger">Obtener personaje</Button>
      </Card.Body>
    </Card>
  );
}

export default Personajes;
