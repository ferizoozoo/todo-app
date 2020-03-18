import React from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import TodoListCard from './components/TodoListCard';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App-body">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossorigin="anonymous"
      />
        <div className="header">
        <NavBar />
          <Container fluid>
            <Row className="Card">
              <TodoListCard width="600px" />      
            </Row>
          </Container>  
        </div>
    </div>
  );
}

export default App;
