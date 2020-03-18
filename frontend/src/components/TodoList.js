import React from 'react';
import {ListGroup} from 'react-bootstrap';

class TodoList extends React.Component {
    render() {
        return (
            <ListGroup style={{ marginTop: '20px' }}>
                {this.props.items.map(item => 
                    (<ListGroup.Item key={item.id}>{item.text}</ListGroup.Item>)
                )}
            </ListGroup>
        )
    }
}

export default TodoList;