import { Row, Col } from 'reactstrap'
import {CircleProgress} from 'react-gradient-progress'
import img from '../../images/home/1.jpg'

function Body() {
    return (
        <Row className='p-5' style={{background: '#f2f4fb'}}>
            <Col lg='6' className='mb-3'>
                <img src={img} width='100%' height='100%' />
            </Col>
            <Col lg='6' className='mt-3 mb-3 p-2'>
                <Row className='mb-4'>
                    <Col lg='6' className='mb-3'>
                        <CircleProgress percentage={90} primaryColor={['blue','lightblue']}></CircleProgress>
                    </Col>
                    <Col lg='6'>
                        <h4>Lorem ipsum</h4>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum aspernatur consequuntur, eveniet cum ipsam unde ad inventore, atque asperiores at et, culpa voluptate eos aperiam aliquam accusantium nesciunt nemo expedita!
                    </Col>
                </Row>
                <Row>
                    <Col lg='6' className='mb-3'>
                        <CircleProgress percentage={78} primaryColor={['green','lightgreen']}></CircleProgress>
                    </Col>
                    <Col lg='6'>
                        <h4>Lorem ipsum</h4>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum aspernatur consequuntur, eveniet cum ipsam unde ad inventore, atque asperiores at et, culpa voluptate eos aperiam aliquam accusantium nesciunt nemo expedita!
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Body