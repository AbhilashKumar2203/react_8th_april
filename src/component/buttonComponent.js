import React from 'react';

export class ButtonComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count:this.props.buttonValue
        }
        this.handleClick=this.handleClick.bind(this)
        
    }

    handleClick(){
        console.log("Insile handleClick method");
        this.setState(
            {
               count:this.state.count+1 
            }
        )
    }
    

render(){
    return <button className="Button" onClick={this.handleClick}>{this.state.count}</button>
}
}