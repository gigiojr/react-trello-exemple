import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import List from "./List";

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            lists: []
        };

        this.showLists = this.showLists.bind(this);
        this.getListsCallBack = this.getListsCallBack.bind(this);
    }

    componentWillMount(){
        axios.get('https://api.trello.com/1/boards/uWtvlXO3/?lists=all')
            .then(this.getListsCallBack);
    }

    getListsCallBack(response){
        console.log(response);
        this.setState({
            lists: response.data.lists
        });
    }

    showLists(){
        return this.state.lists.map((item) => {
            return (
                <div key={item.id}>
                    <List list={item}/>
                </div>
            )
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                {this.showLists()}
            </div>
        );
    }
}

export default App;