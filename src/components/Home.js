import { Row, Col, Button } from 'reactstrap'
import Header from './Home/Header'
import Statistics from './Home/Statistics'
import Body from './Home/Body'
import Gallery from './Home/Gallery'

function Home() {
    return (
        <div className="home">
            <Header />
            <Statistics />
            <Body />
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
            <Gallery />
        </div>
    );
}

export default Home;