import React,{useState,useEffect} from 'react';


export const HooksHandsOn = ()=>{
    const [initialValue,updateValue] = useState({
        id:1,
        name:'Abhilash'
    });

    useEffect(()=> console.log("Use effect method is called")
            ,[initialValue.name]
    )
   const handleButtonClick =()=>{
        updateValue({
            id:1,
            name:"Abhilash New Value"
        });
    }
    return (<div>
            <h1> This is hooks exmaple</h1>
            <input type = "button" onClick={()=>handleButtonClick()}/>
            <h1>{initialValue.name}</h1>

        </div>
    
    )
}