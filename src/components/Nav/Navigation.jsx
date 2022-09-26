import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';

function Navigation() {
  const favorites = useSelector((state) => state.cart);

  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/countriesReact">🌎</Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to="/countriesReact">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="countries">
              <Nav.Link>Countries</Nav.Link>
            </LinkContainer>
            <LinkContainer to="favorites">
              <Nav.Link>
                Favorites
                {favorites.length > 0 ? `(${favorites.length})` : ''}
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
