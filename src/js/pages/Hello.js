import React, { Component } from 'react';
import { Well } from 'react-bootstrap';

export default class Hello extends Component {
    render(){
        return (
            <div className="hello-world-wrapper">
                <Well bsSize="large">Hello, World! I'm in a fuckin well!</Well>
            </div>
        );
    }
}
