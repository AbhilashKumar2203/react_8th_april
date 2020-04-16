import React from 'react';
import {Course} from './course';

export default class CourseList extends React.Component{
    constructor(){
        super();
        this.state={
            courseList:[]
        }
    }

    addCourse(){
        this.setState(
            {
                courseList:[...this.state.courseList,{
                    id:this.refs.inputId.value,
                    name:this.refs.inputName.value,
                    price:this.refs.inputPrice.value
                }]
            }
        )
    }

    deleteCourse(cId){
        let newCourse= this.state.courseList.filter((course)=>course.id != cId);

        this.setState(
            {
                courseList: newCourse
            }
        )

    }

    render(){
        let courseListArray= this.state.courseList.map((course)=>{ return <Course courseId={course.id} courseName={course.name}
        coursePrice={course.price} linkToDeleteParentHandler={this.deleteCourse.bind(this)}/>

        })
        return(
            <div className="Button">
                Enter Course Id : <input type = "text" ref="inputId"/>
                Enter Course Name : <input type = "text" ref="inputName"/>
                Enter Course Price : <input type = "text" ref="inputPrice"/>
                <input type = "button" className="ButtonAdd" value="Add Course" onClick={()=>this.addCourse()}/>
                <table>
                    <th>Delete</th> <th>Course Id</th> <th>Course Name</th> <th>Course Price</th>
                    {courseListArray}
                    </table>
                </div>
        )
    }

}