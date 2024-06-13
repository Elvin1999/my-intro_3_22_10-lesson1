import React, { Component } from 'react'

export default class Navi extends Component {
  age=12;
  name="Elvin Camalzade";
  render() {
    return (
      <div style={{margin:"20px",backgroundColor:"orange"}}>
        <h2>Navi Component</h2>
        <h3>I am {this.age} years old</h3>
        <h3>I am {this.name}</h3>
      </div>
    )
  }
}
