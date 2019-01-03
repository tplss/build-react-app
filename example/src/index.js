// import 'antd/dist/antd.css';

// import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'antd/es/button';

class App extends React.Component{
    render(){
        return <h1><Button>hello react</Button></h1>;
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

