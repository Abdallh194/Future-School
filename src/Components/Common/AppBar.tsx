import { Container, Navbar, Nav } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function AppBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="Navbar">
      <Container style={{ maxWidth: "1550px" }}>
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Link to="/" className="logo txtDecoration_None">
            <img
              src="/logo.png"
              alt="logo"
              width={50}
              height={30}
              className="img-fluid"
            />
            <div className="page-name">مدرسة المستقبل</div>
          </Link>
        </motion.div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto links">
            <Nav.Link href="#">الرئيسة</Nav.Link>
            <Nav.Link href="#AboutUs">عن المدرسة</Nav.Link>
            <Nav.Link href="#SchoolLife">الحياة المدرسية</Nav.Link>
            <Nav.Link href="#Services">خدماتنا</Nav.Link>
            <Nav.Link href="/#ContactUs">تواصل معنا</Nav.Link>
          </Nav>
          <Nav className="LoginBtns">
            <Link className="loginBtn txtDecoration_None" to="/login">
              دخول
            </Link>
            <Link className="registerBtn txtDecoration_None" to="/register">
              تسجيل
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;
