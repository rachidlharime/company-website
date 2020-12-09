import { Row, Col } from 'reactstrap'
import img from '../../images/about.jpg'

function Header(){
    return (
        <Row className='headers aboutHeader' 
            style={{background: 'url('+img+') fixed center no-repeat', backgroundSize: 'cover'}}>
            <Col md='8' className='p-5 m-auto text-white'>
                <p>
                    About us <br/>
                    <span className='span'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </p>
            </Col>
        </Row>
    );
}

export default Header