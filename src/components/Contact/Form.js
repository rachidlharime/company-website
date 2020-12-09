import { Row, Col, Button } from 'reactstrap'
import { AvForm, AvField } from 'availity-reactstrap-validation'

function Form() {
    const send = (e) => {
        window.location.reload();
    }
    return (
        <Row className='p-5' style={{background: '#f2f4fb'}}>
            <Col md='12' className='mb-3'>
                <h1>Send us a message</h1>
            </Col>
            <Col lg='6' md='8' className='m-auto text-left'>
                <AvForm onValidSubmit={send}>
                    <AvField type="text" name="name" label="Your name *" autocomplete='off' validate={{
                        required: {value: true, errorMessage: 'This field is required'}
                    }} />
                    <AvField type="email" name="email" label="Your email *" autocomplete='off' errorMessage="Invalid email" validate={{
                        required: {value: true, errorMessage: 'This field is required'}
                    }} />
                    <AvField type="textarea" name="message" label="Your message *" rows='5' validate={{
                        required: {value: true, errorMessage: 'This field is required'}
                    }} />
                    <Button color="success" type='submit' className='form-control'>Send message</Button>
                </AvForm>
                
            </Col>
        </Row>
    );
}

export default Form;