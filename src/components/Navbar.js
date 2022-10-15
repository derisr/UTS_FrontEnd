import react from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const navbar = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="home">JAJALINE</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="aboutme">ABOUT ME</Nav.Link>
                <Nav.Link href="contact">CONTACT</Nav.Link>
                <NavDropdown title="PRODUCTS" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="shirt">SHIRT</NavDropdown.Item>
                    <NavDropdown.Item href="pants">PANTS</NavDropdown.Item>
                    <NavDropdown.Item href="accessories">ACCESSORIES</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="allproducts">ALL PRODUCTS</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="signup">SIGN UP</Nav.Link>
                <Nav.Link eventKey={2} href="login">
                    LOG IN
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default navbar