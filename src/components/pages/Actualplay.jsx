import React, { Component } from 'react'
import Game from '../Game'
export default class Actualplay extends Component {
    state={
        visible:true
    };
    render() {
    return (
        <div>
            {this.state.visible? <button onClick={()=>{this.setState({visible:false});}}> Play </button>:<Game/> }
        </div>
    )
}
}
