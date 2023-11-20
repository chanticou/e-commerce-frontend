import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ProductAddedPopup } from "../ProductAddedPopup/index";
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

  const { cart, isAdmin, categories, productAddedPopup, offert } = useSelector(
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

  const scrollWelcomeSection = () => {
    const section = document.getElementById("welcome-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {productAddedPopup.show && (
        <ProductAddedPopup
          show={productAddedPopup.show}
          productName={productAddedPopup.productName}
          onHide={() => {}}
        />
      )}
      <Navbar
        bg="dark"
        expand="lg"
        variant="dark"
        fixed="top"
        style={{
          opacity: navbarVisible ? 0.8 : 0,
          transition: "opacity 0.5s ease",
        }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              className="logo"
              src="https://res.cloudinary.com/dg05pzjsq/image/upload/v1699380311/Logo_IA_2_sfzyha.png"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                Servicio Técnico
              </Nav.Link>
              <Nav.Link
                style={{ cursor: "pointer" }}
                as="div"
                onClick={() => scrollWelcomeSection()}
              >
                Nosotros
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              {isAdmin && (
                <Nav.Link as={Link} to="/dashboard">
                  <Button variant="outline-light">Dashboard</Button>
                </Nav.Link>
              )}
              <Nav.Link>
                <Loguin />
              </Nav.Link>
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

        {/* Filtros de búsqueda */}
        <Container>
          <Nav className="me-auto mt-2">
            {categories?.map((category) => (
              <Nav.Link
                key={category.id_Category}
                onClick={() =>
                  dispatch(GetCategoryProduct(category.id_Category))
                }
              >
                {category.type}
              </Nav.Link>
            ))}
            <Nav.Link onClick={() => dispatch(FilterByType("All"))}>
              All
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
