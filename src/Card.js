import React, { Component } from 'react';

export default class Card extends Component {
    constructor(props){
        super(props);
        this.state = {
            card: props.card
        }
    }

    render() {
        return (
            <div className="card"  style={{backgroundColor: "#FFFFFF"}}>
                <p>{"Nome do cartão: " + this.state.card.name}</p>
            </div>
        );
    }
}