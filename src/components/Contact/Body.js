import { Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'
import SocialMedia from '../SocialMedia'

function Body(){
    return (
        <Row className='pb-5 container m-auto'>
            <Col lg='4'>
                <Card className='contactCards pt-2' style={{border: 'none'}}>
                    <CardBody >
                        <CardTitle tag="h3" className='font-weight-bold mb-4'>Our adress</CardTitle>
                        <CardText>
                            <FontAwesomeIcon icon={faLocationArrow} className='mr-2'></FontAwesomeIcon>
                            <span>Lorem ipsum, dolor sit amet consectetur</span>
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col lg='4'>
                <Card className='contactCards pt-2' style={{border: 'none'}}>
                    <CardBody >
                        <CardTitle tag="h3" className='font-weight-bold mb-4'> Get in touch</CardTitle>
                        <CardText>
                            <p>
                                <FontAwesomeIcon icon={faMailBulk} className='mr-2'></FontAwesomeIcon>
                                <span>Loremipsum@dolor.sit</span>
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faPhone} className='mr-2'></FontAwesomeIcon>
                                <span>00 1100 2000 2020</span>
                            </p>
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col lg='4'>
                <Card className='contactCards pt-2' style={{border: 'none'}}>
                    <CardBody >
                        <CardTitle tag="h3" className='font-weight-bold mb-4'>Follow us</CardTitle>
                        <CardText>
                            <SocialMedia animation='grow' animationDur={.2} width={'2em'} defColor='#000'/>
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}

export default Body;