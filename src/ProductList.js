import React, { Component } from 'react'

export default class ProductList extends Component {
  render() {
    return (
      <div style={{backgroundColor:"deeppink",padding:"20px"}}>
        <h1>Product List Component</h1>
        <h3>This is title {this.props.product.title}</h3>
        <h2>You have {this.props.product.count} items</h2>
      </div>
    )
  }
}
