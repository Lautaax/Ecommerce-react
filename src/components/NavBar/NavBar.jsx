import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CardWidget from './CartWidget';
import logo from "../../imagenes/logo.png"


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" variant="primary">
        <Container>
        <Link to="/">
          <img src={logo} width="150px" alt="" />
        </Link>
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/category/genderFluid">Fluid  </Nav.Link>
            <Nav.Link href="/category/male">Male  </Nav.Link>
            <Nav.Link href="/category/female">Female  </Nav.Link>

            
          </Nav>
          <Link to="/cart"> <CardWidget /></Link>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
