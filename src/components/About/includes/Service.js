import { Col, Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

function Service(props){
    return (
        <Col lg='4' md='6' className='mb-4'>
            <Card className='service'>
                <CardImg className='cardImg' src={props.img} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">Lorem ipsum</CardTitle>
                    <CardText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sunt natus eveniet laudantium repellat sapiente
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    );
}

export default Service;