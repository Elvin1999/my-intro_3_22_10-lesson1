import React, { Component } from 'react'

export default class CategoryList extends Component {

    // constructor(props){
    //     super(props)
    // }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <strong>{this.props.info}</strong>
        <ul>
            <li>
                Apple
            </li>
            <li>
                Samsung
            </li>
            <li>
                Rolex
            </li>
        </ul>
      </div>
    )
  }
}
