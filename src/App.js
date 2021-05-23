import React from 'react'
import ReactDOM from "react-dom";

import Board from './Board'
import Over from './Over'
import Timer from './Timer'
import './App.css'

var arr = new Array(20);
for (let i = 0; i < 20; i++) {
  arr[i] = new Array(20).fill(0);
}
arr[10][10] = 1;

arr[16][15] = 2;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      board:arr,
      coord:[[10,10]],
      playing:true,
      time:0
    }
    this.direction = "ArrowRight";
    // this.playing = true;
    this.keydownHandler = this.keydownHandler.bind(this)
  }
  keydownHandler(event){
    event.preventDefault();
    if(
    (event.key === this.direction)||
    (event.key === 'ArrowUp' && this.direction === 'ArrowDown') ||
    (event.key === 'ArrowLeft' && this.direction === 'ArrowRight')||
    (event.key === 'ArrowDown' && this.direction==='ArrowUp') ||
    (event.key === 'ArrowRight' && this.direction === 'ArrowLeft')
  ){

      return;
    }
    if(event.key === 'ArrowUp' || event.key === 'ArrowLeft' || event.key === 'ArrowDown' ||  event.key === 'ArrowRight'){
      this.direction = event.key;
    }
    return;
  }
  id = 0;
  move = () => {
    var t = this.state.time;
    t+=1;
    var tboard  = this.state.board;
    var temp = this.state.coord;
    var dir = this.direction;
    var y,x;
    [y,x]  = temp[temp.length - 1];
    if(dir === 'ArrowUp'){
      y-=1;
    }else if(dir ===  'ArrowDown'){
      y+=1;
    }else if(dir ===  'ArrowLeft'){
      x-=1;
    }else if(dir ===  'ArrowRight'){
      x+=1;
    }
    if(x < 0 || y < 0 || x >= 20 || y >= 20 || tboard[y][x] === 1){
      clearInterval(this.id);
      this.setState({
        time:t,
        playing:false
      })
      return;
    }
    if(tboard[y][x] === 2){
      tboard[y][x] = 1;
      temp.push([y,x]);
      var a = Math.floor(Math.random() * 20);
      var b = Math.floor(Math.random() * 20);
      while(tboard[a][b] === 1 ){
        a = Math.floor(Math.random() * 20);
        b = Math.floor(Math.random() * 20);
      }
      tboard[a][b] = 2;
    }else{
      tboard[temp[0][0]][temp[0][1]] = 0;
      tboard[y][x] = 1;
      temp.push([y,x]);
      for(let i = 0;i<temp.length-1;i++){
        temp[i] = temp[i+1];
      }
      temp.pop();

    }


    this.setState({
      board: [...tboard],
      coords: [...temp],
      time:t
    })
  }
  startHandler = (event) => {
    event.preventDefault();
    document.removeEventListener("keydown",this.startHandler);
    document.addEventListener('keydown',this.keydownHandler);
    this.id = setInterval(this.move,150);
  }
  componentDidMount(){
    document.addEventListener('keydown',this.startHandler);
  }

  render () {

    return (<div className = "container">
      <Over playing = {this.state.playing}/>
      <Timer time = {this.state.time} score = {this.state.coord.length}/>
      <Board board = {this.state.board} />
      </div>
    )
  }
}


export default App;
