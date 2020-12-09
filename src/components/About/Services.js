import { Row, Col, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Service from './includes/Service'
import img1 from '../../images/about/1.jpg'
import img2 from '../../images/about/2.jpg'
import img3 from '../../images/about/3.jpg'

function Services(props){
    const images = [img1, img2, img3, img1, img2, img3];
    const ServiceMap = images.map((im) => 
        <Service img={im}/>
    );

    return (
        <Row className='p-5' style={{background: '#f2f4fb'}}>
            <Col sm='12' className='mt-5 mb-3'>
              <h1>Lorem ipsum dolor</h1>
            </Col>
            {ServiceMap}
            <Col sm='12'>
              <Button tag='a' color='primary' className='mt-3 mb-5'>
                  <FontAwesomeIcon icon={faArrowRight} className='mr-2'></FontAwesomeIcon>
                  See more
              </Button>
            </Col>
        </Row>
    );
}

export default Services