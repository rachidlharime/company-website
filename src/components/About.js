import { Row, Col, Button } from 'reactstrap'
import Header from './About/Header'
import Services from './About/Services'
import Testimonials from './About/Testimonials'

function About(){
    return (
        <div className="about">
            <Header />
            <Services />
            <Row className='text-white pt-5 pb-5' style={{background:'#0246d8'}}>
                <Col lg='8' className='p-3'>
                    <h1>
                        sit amet consectetur adipisicing ?
                    </h1>
                </Col>
                <Col lg='4' className='p-3'>
                    <Button tag='a' color='light'>Link</Button>
                </Col>
            </Row>
            <Testimonials />
        </div>
    );
}

export default About;