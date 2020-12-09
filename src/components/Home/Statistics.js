import { Row } from 'reactstrap'
import { faUsers, faProjectDiagram, faBrain } from '@fortawesome/free-solid-svg-icons'
import Statistic from './includes/Statistic'

function Statistics(props) {
    const icons = [faUsers, faBrain, faProjectDiagram];

    const statsMap = icons.map((ic) => 
        <Statistic icon={ic} number={2000 + Math.random() * 3000} />
    );

    return (
        <Row className='container m-auto pt-5 pb-5'>
            {statsMap}
        </Row>
    );
}

export default Statistics;