import React from 'react';


export default class FirstComponent extends React.Component{
    render(){
        return <div>
                    <h1>{this.props.textValue}}</h1>
                   
                    
                </div>
    }
}



//React.createElement("h1",null,"Very first Component");