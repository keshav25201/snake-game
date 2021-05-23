import React from "react";
import PropTypes from "prop-types";

import "./Board.css";
import Cell from "./Cell";

class Board extends React.Component {
  render() {
    var  board = this.props.board;
    return (
      <div className="board">
        {board.map((row,r) => {
          return (
            <div className="row">
              {row.map((col,c) => {
                return <Cell val = {col}/>;
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Board;
