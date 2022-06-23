import React from 'react'
import { Nav, Navbar, NavDropdown ,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const FullName = () => {
  return (
    <Navbar  expand="lg"  >
    <Container >

    <Navbar.Collapse className="justify-content-space-between">
       
          <Navbar.Text className="justify-content-end">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="اشهر الروايات" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1"> </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2"> الاسود يليق بك   </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">ذاكرة الجسد</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4"> com نسيان   </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5"> عابر سرير </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.6"> شهياً كـالفراق    </NavDropdown.Item>   
          </NavDropdown>
          <Nav.Link href="#link5">مجتمع المدني </Nav.Link>
          <Nav.Link href="#link4"> ديوان الشعر</Nav.Link>
          <Nav.Link href="#link3">ندوات </Nav.Link>
          <Nav.Link href="#link2">معرض الصور </Nav.Link>
            <Nav.Link href="#link">نبذه عنها</Nav.Link>
          <Nav.Link href="#home">الرئيسية</Nav.Link>  
        </Nav>
      </Navbar.Collapse>
      </Navbar.Text>
   </Navbar.Collapse>
        <Navbar.Brand href="#home" className="App">أحلام مستغانمي </Navbar.Brand>
    </Container>
  </Navbar>
  );
}

export default FullName