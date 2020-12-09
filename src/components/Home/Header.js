import { Row, Col, Button } from 'reactstrap'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import slide1 from '../../images/slides/1.jpg'
import slide2 from '../../images/slides/2.png'
import slide3 from '../../images/slides/3.jpg'
 
const slideImages = [ slide1,slide2,slide3 ];

function Header(){
    return (
        <Row className='headers homeHeader mb-5' >
            <Col className='text-white'>
                <div className="slide-container">
                    <Slide>
                        <div className="each-slide">
                            <div style={{background: `url(${slideImages[0]}) fixed center no-repeat`,
                            backgroundSize: 'cover', height: '100vh', position: 'relative'}}>
                            <span>Sint at temporibus id iste sit velit maiores omnis</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{background: `url(${slideImages[1]}) fixed center no-repeat`,
                            backgroundSize: 'cover', height: '100vh', position: 'relative'}}>
                            <span>Lorem ipsum, dolor sit amet velit maiores omnis</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{background: `url(${slideImages[2]}) fixed center no-repeat`,
                            backgroundSize: 'cover', height: '100vh', position: 'relative'}}>
                            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit</span>
                            </div>
                        </div>
                    </Slide>
                </div>
            </Col>
        </Row>
    );
}

export default Header