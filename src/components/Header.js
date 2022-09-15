import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import '../styles/components/Header.css';

export default function Header () {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="tittle"><Link to="/">Mi aplicación de venta de productos para Izertis</Link></Navbar.Brand>
      </Container>
    </Navbar>
  );
}