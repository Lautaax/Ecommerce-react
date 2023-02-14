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
          <Nav className="me-auto ">
            <Link className="nav-link" to="/">Inicio</Link>
            <Link className="nav-link" to="/category/genderFluid"> Fluid  </Link>
            <Link className="nav-link" to="/category/male">Male  </Link>
            <Link className="nav-link" to="/category/female">Female  </Link>
          </Nav>
          <Link className="nav-link" to="/cart"> <CardWidget /></Link>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
