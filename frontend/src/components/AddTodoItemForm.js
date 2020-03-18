import React from 'react';
import {Form, Button, Col} from 'react-bootstrap';

class AddTodoItemForm extends React.Component {
    render(props){
        return (
            <Form onSubmit={this.props.submit}>
                <Form.Row>
                    <Col>
                        <Form.Control onChange={this.props.change} value={this.props.text} placeholder="Write your todo item" />
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit">Add Item</Button>
                    </Col>
                </Form.Row>
            </Form>
        )
    }
}

export default AddTodoItemForm;