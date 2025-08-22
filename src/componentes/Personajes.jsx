import Card from "react-bootstrap/Card";
import "../index.css";
import { Button } from "react-bootstrap"

function Personajes() {
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
        <Card.Text>
          <ul className="list-unstyled">
            <li>Raza: Saiyan</li>
            <li>Ki: 60.000.000</li>
            <li>Crew:Quilombero</li>
          </ul>
        </Card.Text>
        <Button variant="danger" >Obtener personaje</Button>
      </Card.Body>
    </Card>
  );
}

export default Personajes;
