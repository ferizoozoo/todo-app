import React from 'react';
import Button from 'react-bootstrap/Button';

class LoginButton extends React.Component{
    render(){
        return (   
            <div>
                <Button href="#" variant="light" className="login">Login</Button>
            </div>
        )
    }
}

export default LoginButton;