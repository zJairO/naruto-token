import logo from './logo.jpeg';
import about from './about-w.jpeg';
import './App.css';
import { Container, Row, Col, Navbar, Nav, Image, h1, h2, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Row className="justify-content-center mt-2">
        <Col>
          <Navbar expand="lg" className="bg-black">
            <Container>
              <Navbar.Brand href="#"><Image src={logo} width={100} roundedCircle/></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto menu">
                  <Nav.Link href="#">Home</Nav.Link>
                  <Nav.Link href="#">About Us</Nav.Link>
                  <Nav.Link href="#">Tokenomics</Nav.Link>
                  <Nav.Link href="#">Buy</Nav.Link>
                  <Nav.Link href="#">Community</Nav.Link>
                  <Nav.Link href="#">Contact Us</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
      <Row className='mt-5' style={{
        backgroundImage: `url(${about})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
        <Col>
          <h1 className='text-white mt-5'>Welcome to $NARUTO</h1>
          <h2 className='text-white mt-5'>Join Naruto on his journey to become the Hokage!</h2>
          <Button className='my-5 btn btn-lg' variant='outline-light'>Buy $NARUTO</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
