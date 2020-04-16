import React from 'react';

export const Course =(props) =>{
   
 
        return(
            <tr>
                <button className="ButtonDelete" onClick={()=>props.linkToDeleteParentHandler(props.courseId)}>Delete</button>
                <td>{props.courseId}</td>
                <td>{props.courseName}</td>
                <td>{props.coursePrice}</td>
            </tr>
        )
    
}