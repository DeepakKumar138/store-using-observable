import React, { Component } from 'react';
import {counterService} from './../Store/Counter'

export class Display extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        this.subscription = counterService.getCount().subscribe(value => {
            this.setState({count: value.value})
        })
    }
    componentWillUnmount(){
        this.subscription.unsubscribe()
    }
    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
            </div>
        );
    }
}

export default Display;
