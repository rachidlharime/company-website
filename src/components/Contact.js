import { Row, Col, Card, CardBody, CardTitle, CardText, Button } from 'reactstrap'
import img from '../images/contact.jpg'
import Body from './Contact/Body'
import Form from './Contact/Form'

function Contact() {
    return (
        <div className="contact">
            <Row className='contactHeader mb-5' 
            style={{background: `url(${img}) fixed center no-repeat`, backgroundSize: 'cover'}}>
            </Row>
            <Body />
            <Form />
        </div>
    );
}

export default Contact;