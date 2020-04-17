import React from 'react';
import {ButtonComponent} from './buttonComponent';

export class ButtonListComponent extends React.Component{

    constructor(){
        super();
        this.state={
            buttonArray:[10,20,30,40,50]
        }
    }

    addButton(){
    
        this.setState(
            {
                buttonArray:[...this.state.buttonArray,this.refs.inputValue.value]
            }
        )
    }

    deleteButton(){

        let newArray= this.state.buttonArray.filter((button)=>button != this.refs.inputValue.value);

        this.setState({
            buttonArray:newArray
        })

    }
    componentWillMount(){
        console.log("Compnt will mount is called");
    }

    componentDidMount(){
        console.log("Did mount is called");
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("Should component update is called");
        return this.state.buttonArray.length != nextState.buttonArray.length;

    }
    componentWillUpdate(nextProps,nextState){
        this.setState(
            {
                buttonArray:["a","b"]
            }
        )
        console.log("Component will update is called");

    }

    componentDidUpdate(){

    }
    render(){        
        let buttonList = this.state.buttonArray.map((button)=>{
                                                            return <ButtonComponent buttonValue={button} key={Math.random()}/>
                                            })
       return <div>
           Enter New Button : <input type = "text" ref="inputValue"/>
             <input type = "button" value= "ADD" className="ButtonAdd" onClick={this.addButton.bind(this)}/>
            <input type = "button" value= "DELETE" className="ButtonDelete" onClick={()=>this.deleteButton()}/> 
           
            {buttonList}
        </div>
       
       
        
    }
}


