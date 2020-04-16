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

    shouldComponentUpdate(nextProps,nextState){
        return this.state.buttonArray.length != nextState.buttonArray.length;

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


