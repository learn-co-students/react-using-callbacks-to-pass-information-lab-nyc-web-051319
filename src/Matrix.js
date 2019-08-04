import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()

    this.state = {
      selectedColor: "#FFF"
    }
  }



  genRow = (vals) => (
    vals.map((val, idx) => <Cell getSelected={this.getSelected} key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  selectColor = (color) => {
    this.setState ({
      selectedColor: color
    }, ()=> {
      console.log(this.state.selectedColor, "this is a swatch!")
    })
  }

  getSelected = () => {
    console.log('hello!')
    this.state.selectedColor
  }


  render() {
    return (
      <div id="app">
        <ColorSelector selectColor={this.selectColor} />
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
