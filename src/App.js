import logo from './logo.jpeg';
import about from './about-w.jpeg';
import narutogif from './naruto.gif';
import wall from './wall.jpg';
import x from './logo-white.png';
import telegram from './telegram-32.png';
import './App.css';
import { Container, Row, Col, Navbar, Nav, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <Row className="justify-content-center mt-2">
        <Col>
          <Navbar expand="lg" className="bg-black">
            <Container>
              <Navbar.Brand href="#"><Image src={logo} width={80} roundedCircle /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto menu">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about">About Us</Nav.Link>
                  <Nav.Link href="#tokenomics">Tokenomics</Nav.Link>
                  <Nav.Link href="#">Contact Us</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
      <Row className='mt-5' id='home' style={{
        backgroundImage: `url(${about})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
        <Col>
          <h1 className='text-white mt-5 shadow'>Welcome to NARUTO</h1>
          <h2 className='text-white mt-5 shadow'>Join Naruto on his journey to become the Hokage!</h2>
          <h2 className='text-white mt-5 shadow'>0xad8d0de33c43eefe104a279cdb6ae250c12e6214</h2>
          <div className="d-grid gap-2">
            <Button href="https://app.uniswap.org/explore/tokens/ethereum/0xad8d0de33c43eefe104a279cdb6ae250c12e6214" className='my-5 btn btn-lg shadow' size='lg' variant='light'>Buy NARUTO</Button>
          </div>
        </Col>
      </Row>
      <Row className='mt-5 align-items-center justify-content-center'>
        <Col>
          <Image src={narutogif} fluid rounded/>
        </Col>
        <Col className='text-center'>
          <h4 className='text-white'>Naruto, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.</h4>
        </Col>
      </Row>
      <Row className='mt-5 rounded align-items-center justify-content-center' id='tokenomics'>
        <Col className='p-5'>
          <h1 className='text-white text-center'>
            Tokenomics
          </h1>
        </Col>
        <Col className='p-5'>
          <h1 className='text-white text-center'>
          MAX TOTAL SUPPLY <br/> 
          110,000,000,000 <br/>
          LIQUIDITY <br/>
          Locked for 100 years
          <div className="d-grid gap-2 mt-5">
            <Button className='btn btn-lg' variant='outline-light' href=''>View on DexTools</Button>
          </div>
          </h1>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col className='text-center text-white'>
          <h1>Community</h1>
        </Col>
      </Row>
      <Row className='mt-5 mb-5'>
        <Col className='text-center text-white'>
          <a href="https://x.com/narutoerc?s=21" target="_blank" rel="noopener noreferrer">
            <Image src={x} width={32} className='mr-5' alt="x" />
          </a>
          <span className='mx-3'></span>
          <a href="https://t.me/Naruto_ERC" target="_blank" rel="noopener noreferrer">
            <Image src={telegram} width={32} alt="telegram" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
