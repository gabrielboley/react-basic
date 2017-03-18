import React, { Component } from 'react';
import {
    Col,
    Row,
    Well,
    Button
} from 'react-bootstrap';

import '../../less/counter.css';

export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }

    onCounterClick = (event, action) => {
        const currentNumber = this.state.count;
        const newNumber = currentNumber + action;
        this.setState({
            count: newNumber
        });
    }

    render(){
        const numberClass = this.state.count >= 0 ? ' positive' : ' negative';
        return (
            <div className="counter-wrapper">
                <Well bsSize="large">
                    <h3 className="counter-title">Let's do some fucking math!</h3>
                    <Row>
                        <Col xs={6}>
                            <div className="counter-btn-wrapper">
                                <Button
                                    bsStyle="primary"
                                    bsSize="large"
                                    block
                                    onClick={event => this.onCounterClick(event, 1)}
                                >
                                    Fucking Add One!
                                </Button>
                                <Button
                                    bsSize="large"
                                    block
                                    onClick={event => this.onCounterClick(event, -1)}
                                >
                                    Fucking Minus One!
                                </Button>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <div className={`current-count ${numberClass}`}>
                                {this.state.count}
                            </div>
                        </Col>
                    </Row>
                </Well>
            </div>
        );
    }
}
