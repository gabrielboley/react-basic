// Import external dependencies first
import React, { Component } from 'react';
import {
    Nav,
    Navbar,
    NavItem,
    PageHeader
} from 'react-bootstrap';

// Then import local dependencies
import '../less/App.css';
import Hello from './pages/Hello';
import Counter from './pages/Counter';
import QuoteGen from './pages/QuoteGen';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'Hello'
        };
    }

    onNavClick = (event, page) => {
        event.preventDefault();
        this.setState({
            currentPage: page
        });
    }

    renderPage = () => {
        switch (this.state.currentPage) {
            case 'QuoteGen': {
                return <QuoteGen />
            }
            case 'Counter': {
                return <Counter />
            }
            default: {
                return <Hello />;
            }
        }
    }

    render() {
        return (
            <div className="container">
                <PageHeader>A Basic React App!
                    <small> with a few little additions...</small>
                </PageHeader>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a onClick={event => this.onNavClick(event, 'Home')} href="#">Homepage!</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem onClick={event => this.onNavClick(event, 'QuoteGen')} href="#">Fuckin' Quote Generator!</NavItem>
                    </Nav>
                    <Nav>
                        <NavItem onClick={event => this.onNavClick(event, 'Counter')} href="#">Fuckin' Counter!</NavItem>
                    </Nav>
                </Navbar>
                {this.renderPage()}
            </div>
        );
    }
}
