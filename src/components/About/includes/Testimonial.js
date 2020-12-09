import { Col, Card, CardText, CardBody, CardFooter } from 'reactstrap'

function Testimonial(props){
    return (
        <Col lg='4' md='7' className='m-auto pb-4'>
            <Card className='testimonial'>
                <CardBody>
                    <CardText>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sunt natus eveniet laudantium repellat sapiente"
                    </CardText>
                </CardBody>
                <CardFooter className='text-left'>
                    <p style={{fontSize:'130%',fontWeight:'bolder',margin:'0'}}>Lorem ipsum</p>
                    <span className="muted-text">{props.job}</span>
                </CardFooter>
            </Card>
        </Col>
    );
}

export default Testimonial;