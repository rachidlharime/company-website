import { Row, Col, Button } from 'reactstrap'
import img from '../../images/team.png'

function Header(){
    return (
        <Row className='headers teamHeader' 
            style={{background: `url('${img}') fixed center no-repeat`, backgroundSize: 'cover'}}>
            <Col md='8' className='p-5 m-auto text-white'>
                <p >
                    We have a team of creative people
                </p>
            </Col>
        </Row>
    );
}

export default Header;