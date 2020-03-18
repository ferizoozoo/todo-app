import React from 'react';
import Button from 'react-bootstrap/Button';

class SignUpButton extends React.Component{
    render(){
        return (   
            <div>
                <Button href="#" variant="danger" className="signup">SignUp</Button>
            </div>
        )
    }
}

export default SignUpButton;