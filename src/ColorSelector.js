import React, { Component } from 'react';

export default class ColorSelector extends Component {
  

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch" onClick={(e) => this.changeColor(str, e)} style={{backgroundColor: str}}/>
    })
  )

  changeColor = (str) => {
    this.props.selectColor(str)
  }

  render() {

    return (
      <div id="colorSelector" >
        {this.makeColorSwatches()}
      </div>
    )
  }

}
