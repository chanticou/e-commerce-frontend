import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  GetCategory,
  GetCategoryProduct,
  FilterByType,
} from "../../redux/actions/index";
import { Loguin } from "../Loguin";
import "./index.css";

export const NavBar = () => {
  const dispatch = useDispatch();
  const [navbarVisible, setNavbarVisible] = useState(true);

  const { allProducts, cart, isAdmin, categories } = useSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(GetCategory());
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setNavbarVisible(
        prevScrollPos > currentScrollPos || currentScrollPos < 50
      );
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  return (
    <>
      <Navbar
        bg="dark"
        expand="lg"
        variant="dark"
        fixed="top"
        style={{
          opacity: navbarVisible ? 0.7 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              className="logo"
              src="https://res.cloudinary.com/dg05pzjsq/image/upload/v1698490564/58483029cef1014c0b5e4a91_gqpik4.png"
              alt="Logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* First link */}
              <Nav.Link as={Link} to="/">
                <Button variant="outline-light">Home</Button>
              </Nav.Link>

              {categories?.map((el) => (
                <>
                  {/* Second link */}
                  <Nav.Link>
                    <Button
                      variant="outline-light"
                      onClick={() =>
                        dispatch(GetCategoryProduct(el.id_Category))
                      }
                    >
                      {el.type}
                    </Button>
                  </Nav.Link>
                </>
              ))}
              {/* Thrist link */}
              <Nav.Link>
                <Button
                  variant="outline-light"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(FilterByType("All"));
                  }}
                >
                  All
                </Button>
              </Nav.Link>

              {/* cuarto link */}
              {isAdmin && (
                <Nav.Link as={Link} to="/dashboard">
                  <Button variant="outline-light">Dashboard</Button>
                </Nav.Link>
              )}

              {/* login link */}
              <Nav.Link>
                <Loguin />
              </Nav.Link>

              {/* cart link */}
              <Nav.Link as={Link} to="/cart">
                <AiOutlineShoppingCart
                  className="cart-icon"
                  size={35}
                  style={{ color: "white" }}
                />
                <span className="quantity">{cart.length}</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Navbar
        bg="dark"
        expand="lg"
        variant="dark"
        fixed="top"
        style={{
          opacity: navbarVisible ? 0.7 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <Container>
 
          <Navbar.Brand href="#home">
      
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="collapse-navBar" id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              {categories?.map((el) => (
                <ul key={el.id_Category}>
                  <Nav.Link>
                    <Button
                      variant="outline-light"
                      onClick={() =>
                        dispatch(GetCategoryProduct(el.id_Category))
                      }
                    >
                      {el.type}
                    </Button>
                  </Nav.Link>
                </ul>
              ))}
              <ul>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(FilterByType("All"));
                  }}
                >
                  All
                </Button>
              </ul>
              {isAdmin && (
                <Nav.Link as={Link} to="/dashboard">
                  Dashboard
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>


          <Navbar.Brand as={Link} to="/">
            <div className="navbar-loguin_cart">
              <Nav.Link as={Link} to="/cart">
                <AiOutlineShoppingCart
                  className="cart-icon"
                  size={35}
                  style={{ color: "white" }}
                />
              </Nav.Link>
              <span className="quantity">{cart.length}</span>
            </div>
          </Navbar.Brand>
          <Nav.Link>
            <Loguin />
          </Nav.Link>
   
        </Container>
      </Navbar> */}
    </>
  );
};
