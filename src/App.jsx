import React, { Component } from 'react';

import Example from '@C/Example.jsx'

import logo from 'Img/icon.png';


class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Example base={ 5 }></Example>
                </header>
            </div>
        );
    }
}


export default App;
