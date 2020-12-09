import { Col, Card, CardImg, CardText, CardBody, CardTitle, CardFooter } from 'reactstrap'
import SocialMedia from '../../SocialMedia'

function Employee(props){
    return (
        <Col lg='4' md='6' sm='9' className='pb-5 m-auto'>
            <Card className='employee pt-2' style={{background: '#fbf9fa'}}>
                <CardImg className='cardImg' src={props.img} />
                <CardBody >
                    <CardTitle tag="h3">Lorem ipsum</CardTitle>
                    <CardText style={{marginTop: '-10px'}}>{props.job}</CardText>
                </CardBody>
                <CardFooter style={{background: 'none',borderTop: 'none'}}>
                  <SocialMedia animation='float' animationDur={.5} width={'1.6em'} defColor='#000'/>
                </CardFooter>
            </Card>
        </Col>
    );
}

export default Employee;