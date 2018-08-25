import React, { Component } from 'react';
import axios from "axios";
import Card from "./Card";

export default class List extends Component {
    constructor(props){
        super(props);

        this.state = {
            list: props.list,
            cards: []
        };

        this.showCards = this.showCards.bind(this);
        this.getCardsCallback = this.getCardsCallback.bind(this);
    }

    componentWillMount(){
        let url = "https://api.trello.com/1/lists/" + this.state.list.id + "/cards";
        axios.get(url).then(this.getCardsCallback);
    }

    getCardsCallback(response){
        console.log(response);
        this.setState({
            cards: response.data
        });
    }

    showCards(){
        return this.state.cards.map((item) => {
            return (
                <div key={item.id}>
                    <Card card={item}/>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="list" style={{backgroundColor: "#a6a6a6"}}>
                <p>{this.state.list.name}</p>
                {this.showCards()}
            </div>
        );
    }
}