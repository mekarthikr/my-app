import React, { Component } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export class PostList extends Component
{
    constructor()
    {
        super()
        this.state={
            posts:[]
        }
    }
    componentDidMount()
    {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(Response=>{
            console.log(Response)
            this.setState({posts:Response.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }
    render()
    {
        const {posts}=this.state
        return(
            <div>
                List of post
                {
                    posts.length?
                    posts.map((post)=><li key={post.id} >{post.id} {post.title}</li>):null
                }
            </div>
        )
    }
}