import React from 'react';
import axios from 'axios';



export default class AllPosts extends React.Component{

    constructor(){
        console.log("Constructor is called");
        super();
        this.state={
            allPosts:[]
        }
    }

    componentWillMount(){
        console.log("Component will mount method is called");
    }

    componentDidMount(){
        console.log("Component did mount method is called");
        let postsFromEndPoint=axios.get("https://jsonplaceholder.typicode.com/posts");
        postsFromEndPoint.then((response)=>{
            
            this.setState(
                {
                    allPosts:response.data
                }
            )
        },
    (err)=>{
        console.log(err)
    })  
        
    }

    render(){
        console.log("Render methos is called");
        let posts= this.state.allPosts.map((post)=>{return <li key={post.id}>{post.title}</li>})
        return (
            <div>
                <h1>All Posts Titles</h1>
                {posts}
                </div>
        )
    }

}