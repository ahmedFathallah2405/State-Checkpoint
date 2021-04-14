import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  state ={ Person: {
    fullName:'Ahmed Fathallah',
    bio: 'nothing special',
    imgSrc:'https://raisingchildren.net.au/__data/assets/image/0027/49293/Helping-babies-sleep-narrow.jpg',
    profession:'student'

  }, isShown:false, count:0}
  
  handelClick=()=>this.setState({isShown:!this.state.isShown})
  componentDidMount(){
    setInterval(()=>{
      this.setState({count:this.state.count+1});
    },1000)
  }
  
  render() {
    return (
      <div>
        <button className='btn' onClick={this.handelClick}>{this.state.isShown? "hide":"show"}</button>
        <h1> the necessary time for mounting : {this.state.count}</h1>
        {this.state.isShown ? 
        <div>
        <h1>{this.state.Person.fullName} </h1>
        <h1>{this.state.Person.bio} </h1>
        <h1>{this.state.Person.profession} </h1>
        <img src={this.state.Person.imgSrc} alt=""/>
        </div>
        : null
        }
      </div>
      
    )
  }
}



