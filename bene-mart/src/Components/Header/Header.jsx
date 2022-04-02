import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar className="header" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Link to="#signin" className="nav-link">
            Sign In
          </Link>

          <Link to="#signup" className="nav-link">
            Create an Account
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
