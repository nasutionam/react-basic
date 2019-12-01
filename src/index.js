import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Stateless Component
const Hello = () => {
    return (
        <p>Hello</p>
    )
}

// StateFul Component

class StateFulComponent extends React.Component
{
    render() 
    {
        return (
            <p>StateFul Component</p>
        )
        
    }
}

ReactDOM.render(<StateFulComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
