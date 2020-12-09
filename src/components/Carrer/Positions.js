import Position from './includes/Position'
import { Row, Col } from 'reactstrap'

function Positions(props){
    const poses = ['Designer','Developper','Producer','Designer'];
    const PositionMap = poses.map((pos) => 
        <Position pos={pos}/>
    );

    return (
        <Row className='container m-auto pt-5'>
            {PositionMap}
        </Row>
    );
}

export default Positions;