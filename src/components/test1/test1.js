import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './test1.css'

export default class TestPage1 extends Component {
    render() {
        return (
            <div>
                <h1 className="chen">This is Test1 Page</h1>
                <Link to='/'>go to home page</Link>
            </div>
        );
    }
}