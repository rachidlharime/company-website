import { Col, Card, CardImg, CardText, CardBody, CardTitle, CardFooter, Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function Position(props){
    return (
        <Col lg='6' md='8' className='m-auto pb-5'>
            <Card body className='text-left position' style={{background: '#f2f4fb'}}>
                <CardTitle tag="h2" className='text-primary mb-4'>{props.pos}</CardTitle>
                <CardText>
                    <div className="aboutPos mb-4">
                        <h5 className='font-weight-bold'>About</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, odio possimus nostrum sit repudiandae illo ea magnam vel harum placeat aut ut at reiciendis qui vero aliquam. Fuga, nemo enim.</p>
                    </div>
                    <div className="reqs mb-4">
                        <h5 className='font-weight-bold mb-3'>Requirements</h5>
                        <p>
                            <FontAwesomeIcon icon={faCheck} className='mr-3'></FontAwesomeIcon>
                            <span>Lorem ipsum</span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faCheck} className='mr-3'></FontAwesomeIcon>
                            <span>Lorem ipsum</span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faCheck} className='mr-3'></FontAwesomeIcon>
                            <span>Lorem ipsum</span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faCheck} className='mr-3'></FontAwesomeIcon>
                            <span>Lorem ipsum</span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faCheck} className='mr-3'></FontAwesomeIcon>
                            <span>Lorem ipsum</span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faCheck} className='mr-3'></FontAwesomeIcon>
                            <span>Lorem ipsum</span>
                        </p>
                    </div>
                </CardText>
                <Button className='col-lg-4 col-md-6'>Apply now</Button>
            </Card>    
        </Col>
    );
}

export default Position;