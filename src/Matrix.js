import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      backgroundColor: null
    }
  }

  genBackgroundColor = (event) => {
    this.setState({
      backgroundColor: event.target.style.backgroundColor
    })
    // console.log(this.state.backgroundColor)
  }

  // genCellColor = () => {
  //   console.log(this.state.backgroundColor)
  // }
  
  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} bgColor={this.state.backgroundColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector genBackgroundColor={this.genBackgroundColor}/>
        <div id="matrix ">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
