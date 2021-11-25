import React, { useState } from "react";

  // constructor(props) {
  //   super(props);
  //   this.state = {date: new Date()};
  // }
const Clock = () =>{
const [state, setState] = useState({
    date: new Date()
  })

const timeUpdate = ()=> {
    setInterval(
      () => tick(),
      1000
    );
  }

  // componentWillUnmount() {
  //   clearInterval(this.timerID);
  // }

const tick = () =>
 {
setState({
      date: new Date()
    });
  }

    return (
      <div>
        <h1>Привет, мир!</h1>
        <h2>Сейчас {state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }


export default Clock
