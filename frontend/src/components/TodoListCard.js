import React from 'react';
import {Card} from 'react-bootstrap';
import AddTodoItemForm from './AddTodoItemForm';
import TodoList from './TodoList';

class TodoListCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
            text: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
      }
    
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
          return;
        }
        const newItem = {
          text: this.state.text,
          id: Date.now()
        };
        this.setState(state => ({
          items: state.items.concat(newItem),
          text: ''
        }));
    }

    render(){
        return (
            <div>
                <Card>
                    <Card.Header className="text-center">Todo Items</Card.Header>
                    <Card.Body>
                        <AddTodoItemForm 
                            change={this.handleChange} 
                            submit={this.handleSubmit}
                            text={this.state.text}
                        /> 
                        <TodoList items={this.state.items} />
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default TodoListCard;