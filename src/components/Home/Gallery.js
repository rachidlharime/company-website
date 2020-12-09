import { Row, Col } from 'reactstrap'
import img1 from '../../images/home/2.jpg'
import img2 from '../../images/home/3.jpg'
import img3 from '../../images/home/4.jpg'
import img4 from '../../images/home/5.jpg'

function Gallery() {
    return (
        <Row className="container m-auto pt-5 pb-5">
            <Col md='12' className='mb-3'>
                <h1>Lorem ipsum</h1>
            </Col>
            <Col lg='7' className='mb-3 text-left text-white'>
                <div className="gallery">
                    <div className="imgHover">
                        <div className="galleryContent p-3">
                            <h4>Lorem ipsum dolor sit amet</h4>
                            <span>consectetur adipisicing elit Dolor atque aperiam iure mollitia dolorum.</span>
                        </div>
                    </div>
                    <img src={img1} width='100%' height='100%' alt=""/>
                </div>
            </Col>
            <Col lg='5' className='mb-3 text-left text-white'>
                <div className="gallery">
                    <div className="imgHover">
                        <div className="galleryContent p-3">
                            <h4>Lorem ipsum dolor sit amet</h4>
                            <span>consectetur adipisicing elit Dolor atque aperiam iure mollitia dolorum.</span>
                        </div>
                    </div>
                    <img src={img3} width='100%' height='100%' alt=""/>
                </div>
            </Col>
            <Col lg='5' className='mb-3 text-left text-white'>
                <div className="gallery">
                    <div className="imgHover">
                        <div className="galleryContent p-3">
                            <h4>Lorem ipsum dolor sit amet</h4>
                            <span>consectetur adipisicing elit Dolor atque aperiam iure mollitia dolorum.</span>
                        </div>
                    </div>
                    <img src={img2} width='100%' height='100%' alt=""/>
                </div>
            </Col>
            <Col lg='7' className='mb-3 text-left text-white'>
                <div className="gallery">
                    <div className="imgHover">
                        <div className="galleryContent p-3">
                            <h4>Lorem ipsum dolor sit amet</h4>
                            <span>consectetur adipisicing elit Dolor atque aperiam iure mollitia dolorum.</span>
                        </div>
                    </div>
                    <img src={img4} width='100%' height='100%' alt=""/>
                </div>
            </Col>
        </Row>
    );
}

export default Gallery