import { Navbar, NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";

function Header() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const history = useHistory();
  function logOut() {
    localStorage.clear();
    history.push("/login");
  }
  console.warn(user);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">e-Commerce</Navbar.Brand>
          <Nav className="me-auto navbar_wrapper">
            {localStorage.getItem("user-info") ? (
              <>
                <Link className="navbar_link" to="/">
                  Product List
                </Link>
                <Link className="navbar_link" to="/add">
                  Add Product
                </Link>

                <Link className="navbar_link" to="/search">
                  Search Product
                </Link>
              </>
            ) : (
              <>
                <Link className="navbar_link" to="/login">
                  Login
                </Link>
                <Link className="navbar_link" to="/register">
                  Register
                </Link>
              </>
            )}
          </Nav>
          {localStorage.getItem("user-info") ? (
            <Nav>
              <NavDropdown title={user && user.name}>
                <NavDropdown.ItemText onClick={logOut}>
                  Logout
                </NavDropdown.ItemText>
              </NavDropdown>
            </Nav>
          ) : null}
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
