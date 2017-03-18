import React, { Component } from 'react';
import {
    Col,
    Row,
    Well,
    Button
} from 'react-bootstrap';

import { dbzQuotes } from '../constants/quotes';
import '../../less/quote.css';

export default class QuoteGen extends Component {
    constructor(props){
        super(props);
        // since we are setting a new index before react renders this component,
        // we have to have a default one for it compare to in the `generateRandomNumber()` function.
        // Setting it to 0 means that the first item in the array will never be the one loaded on page load.
        this.state = {
            quoteIndex: 0
        };
    }

    componentWillMount = () => {
        // React provides a few default functions that we can use
        // when certain actions action. One of this is `componentWillMount`.
        // This function is called by react right before it renders the component,
        // so it gives us a chance to update things before anything happens.

        // since our default state listed about is `quoteIndex: 0`, lets go ahead
        // and generate a new random one so it's different on every page load.
        // The cool thing about `componentWillMount` is that we can update our
        // state before react renders anything. This will save react from having
        // to re-render on load, since react normally re-renders on state change
        this.setState({
            quoteIndex: this.generateRandomNumber()
        });
    }

    generateRandomNumber = () => {
        // Get the number of quotes available
        // minus 1 because arrays start with index 0
        const numberOfQuotes = dbzQuotes.length - 1;
        // generate a random number within range of of total quotes
        const newIndex = Math.floor(Math.random() * numberOfQuotes);
        // if the newIndex is the same as our currently displayed one then start over
        // This is why the `quoteIndex: 0` means it will never render the 0 index on load.
        if (this.state.quoteIndex === newIndex) {
            // returning a function call to itself is recursive, so it
            // allows us to try again to get a new different number
            return this.generateRandomNumber();
        }
        return newIndex;
    }

    onAnotherClick = () => {
        // get a new index
        const newIndex = this.generateRandomNumber();
        // update our state so react knows to re-render
        this.setState({
            quoteIndex: newIndex
        });
    }

    render(){
        const quoteIndex = this.state.quoteIndex;
        return (
            <div className="quote-generator-wrapper">
                <Well bsSize="large">
                    <Row>
                        <Col xs={6}>
                            <img alt={dbzQuotes[quoteIndex].author} src={dbzQuotes[quoteIndex].image}/>
                        </Col>
                        <Col xs={6} className="quote-text-wrapper">
                            <div className="quote-text">
                                "{dbzQuotes[quoteIndex].quote}"
                            </div>
                            <div className="quote-author">
                                - {dbzQuotes[quoteIndex].author}
                            </div>
                        </Col>
                    </Row>
                    <div className="button-wrapper">
                        <Button
                            bsStyle="primary"
                            bsSize="large"
                            onClick={this.onAnotherClick}
                        >
                            Another!
                        </Button>
                    </div>
                </Well>
            </div>
        );
    }
}
