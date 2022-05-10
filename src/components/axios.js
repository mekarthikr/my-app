import axios from "axios";
import React, { Component } from "react";

export default class Axios extends Component
{
    state = {
        persons: []
      }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users/1').then(res=>{
            const persons = res.data;
            this.setState({ persons });
        })
    }
    render()
    {
        return(
            <ul>
        {
          this.state.persons
            .map(person =>
              <li key={person.id}>{person.name}</li>
            )
        }
      </ul>
        )
    }
}