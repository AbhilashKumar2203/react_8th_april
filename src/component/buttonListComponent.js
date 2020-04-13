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
    render(){        
        let buttonList = this.state.buttonArray.map((button)=>{
                                                            return <ButtonComponent buttonValue={button}/>
                                            })
       return <div>
           Enter New Button : <input type = "text" ref="inputValue"/>
             <input type = "button" value= "ADD" className="ButtonAdd" onClick={this.addButton.bind(this)}/>
            <input type = "button" value= "DELETE" className="ButtonDelete"/> 
           
            {buttonList}
        </div>
       
       
        
    }
}


