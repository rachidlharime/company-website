import Testimonial from './includes/Testimonial'
import { Row, Col, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Testimonials(props){
    const jobs = ['Designer', 'Developper', 'Producer'];
    const TestimonialMap = jobs.map((job) => 
        <Testimonial job={job}/>
    );

    return (
        <Row className='p-5' style={{background: '#f2f4fb'}}>
            <Col sm='12'>
              <h1 className='mt-5 mb-3'>Testimonials</h1>
            </Col>
            {TestimonialMap}
            <Col sm='12'>
              <Button tag='a' color='primary' className='mt-3 mb-5'>
                  <FontAwesomeIcon icon={faArrowRight} className='mr-2'></FontAwesomeIcon>
                  See more
              </Button>
            </Col>
        </Row>
          
    );
}

export default Testimonials;