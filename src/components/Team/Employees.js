import Employee from './includes/Employee'
import { Row, Col } from 'reactstrap'
import Img1 from '../../images/employees/1.jpg'
import Img2 from '../../images/employees/2.jpg'
import Img3 from '../../images/employees/3.jpg'

function Employees(props){
    const emps = [
        { img: Img1, job: 'Designer'},
        { img: Img2, job: 'Developper'},
        { img: Img3, job: 'Producer'},
        { img: Img1, job: 'Designer'},
        { img: Img2, job: 'Developper'},
        { img: Img3, job: 'Producer'}
    ];
    const EmployeeMap = emps.map((emp) => 
        <Employee img={emp.img} job={emp.job}/>
    );

    return (
        <Row className='p-5' style={{background: '#f2f4fb'}}>
            {EmployeeMap}
        </Row>
    );
}

export default Employees;