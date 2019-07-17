import React, { Component } from 'react';
import chromeBoi from './data.js';
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()

    this.state = {
      color: null
    }
  }

  setColor = (col) => {
    this.setState({
      color: col
    })
  }


  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} setColor={this.setColor} color={val} newColor={this.state.color}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector setColor={this.setColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
