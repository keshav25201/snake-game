import React from 'react'


import './Cell.css'
class Cell extends React.Component {

  render () {
    const getcell = () => {
      switch(this.props.val){
        case 0:
          return <div className="cell"></div>
        case 1:
          return <div className="acell"></div>
        case 2:
          return <div className="bcell"></div>
        default:
        return <div className="cell"></div>
      }
    }
    return getcell()
  }
}

export default Cell;
