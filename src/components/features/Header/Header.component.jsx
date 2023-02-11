import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/" style={{ color: "#cd2134" }}>
          <b style={{ color: "#fff" }}>DATA</b>THAT
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link style={{color:'#fff', textDecoration: 'none'}} to="dashboard">UserInfo</Link>
          </Nav>
          <Nav className="me-auto">
            <Link style={{color:'#fff', textDecoration: 'none'}} to="dashboard2">Add User</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
