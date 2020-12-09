import { Container, Row, Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import SocialMedia from './SocialMedia'

function Footer(props){
    return (
        <footer className="text-white">
          <Container fluid className="text-center text-md-left">
            <Row>
              <Col md='7' className='mb-5'>
                <p className='col-lg-6'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores deserunt,
                  doloribus laborum . 
                </p>
              </Col>
              <Col md='5' className='mb-5'>
                <Row>
                  <Col md='12'>
                    <h3>Contact us</h3>
                  </Col>
                  <Col lg='6' className='mb-2'>
                    <FontAwesomeIcon icon={faLocationArrow} className='mr-2'></FontAwesomeIcon>
                    Lorem 127, Lorem ipsum 27090 , Lorem
                  </Col>
                  <Col lg='6' className='mb-2'>
                    <FontAwesomeIcon icon={faMailBulk} className='mr-2'></FontAwesomeIcon>
                    Lorem@ipsum.com
                  </Col>
                  <Col md='12' className='mt-4'>
                    <SocialMedia animation='bounce' animationDur={1} width={'1.6em'} defColor='#fff'/>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <div className="footer-copyright text-center py-3">
            <Container fluid>
              &copy; {new Date().getFullYear()} Copyright: <a href="#!"> Rachid L'harime </a>
            </Container>
          </div>
        </footer>
    );
}

export default Footer;