import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/components/Header.css';

export default function Header () {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="tittle" href="#home">Mi aplicación de venta de productos para Izertis</Navbar.Brand>
      </Container>
    </Navbar>
  );
}