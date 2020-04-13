import React from 'react';


export class FirstComponent extends React.Component{
    render(){
        return <div>
                    <h1>My first comonent using JSX</h1>
                    <h1>Again added a heading</h1>
                    <PankajComponent/>
                </div>
    }
}

export class PankajComponent extends React.Component{
    render(){
        return <h1>Hi pankaj</h1>
    }
}


//React.createElement("h1",null,"Very first Component");