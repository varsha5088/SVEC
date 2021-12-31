import React, { Component } from 'react'
import './States.css'

export default class StatesinClassComponent extends Component {

     constructor(props) {
         super(props)
     
         this.state = {
              name:"varsha",
              count:0
         }
     }
     
    render() {

        setTimeout(()=>{
               this.setState({
                   name:"ammu"
               })
        },5000)
        return (
            <div className="demo">
               <h1 className="main">Welcome {this.state.name} </h1> 
               <h1 className="in"> Count : {this.state.count}</h1>
               <button onClick={()=>{
                   this.setState({
                       count:this.state.count+1
                   })
               }}>Increment count</button>
               <br/>
               <br/>
               <button onClick={()=>{
                   this.setState({
                       count:this.state.count-1
                   })
               }}>Decrementcount</button>
                  <br/>
                  <br/>
                  <button onClick={()=>{
                   this.setState({
                       count:this.state.count=0
                   })
               }}>Reset</button>
            </div>
        )
    }
}
