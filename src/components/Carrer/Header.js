import { Row, Col, Button } from 'reactstrap';
import img from '../../images/carrer.jpg'

function Header(){
    return (
        <Row className='headers carrerHeader' 
        style={{background: 'url('+img+') fixed center no-repeat', backgroundSize: 'cover'}}>
            <Col md='8' className='p-5 m-auto text-white'>
                <p>
                   Join our team
                </p>
            </Col>
        </Row>
    );
}

export default Header;