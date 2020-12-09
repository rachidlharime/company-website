import { Row, Col, Button } from 'reactstrap'
import Header from './Team/Header'
import Employees from './Team/Employees'

function Team() {
    return (
        <div className="team">
            <Header />
            <Employees />
            <Row className='text-white pt-5 pb-5' style={{background:'#0246d8'}}>
                <Col lg='8' className='p-3'>
                    <h1>
                        sit amet consectetur adipisicing ?
                    </h1>
                </Col>
                <Col lg='4' className='p-3'>
                    <Button tag='a' color='light'>Link</Button>
                </Col>
            </Row>
        </div>
    );
}

export default Team;