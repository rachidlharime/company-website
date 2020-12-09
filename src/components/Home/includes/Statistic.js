import { Col } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CountUp from 'react-countup'

function Statistic(props) {
    
    return (
        <Col md='4' className='mt-3 mb-3'>
            <FontAwesomeIcon icon={props.icon} size='5x' className='mb-3 text-secondary'></FontAwesomeIcon>
            <h1>
                <CountUp end={props.number} duration={5}/>
            </h1>
            <span className='font-weight-bold statSpan'>Lorem ipsum dolor</span>
        </Col>
    );
}

export default Statistic;