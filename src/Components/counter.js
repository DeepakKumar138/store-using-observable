import React, { Component } from 'react';
import { counterService } from '../Store/Counter';

export class Counter extends Component {
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
    increase = () =>{
        counterService.increase(this.state.count+1)
    }
    decrease = () =>{
        counterService.decrease(this.state.count-1)
    }
    render() {
        return (
            <div>
                <button onClick={this.increase}>Increase</button>
                <button onClick={this.decrease}>Decrease</button>
                <h2>{this.state.count}</h2>
            </div>
        );
    }
}

export default Counter;
