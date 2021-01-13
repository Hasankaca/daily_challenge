import React, { useState } from "react";

export default function Counter(props) {
  let [timer, settimer] = useState(null);
  const onOdd = () => {
    if (props.counter % 2 !== 0) {
      props.onIncrement();
    }
  };
  const inTimeDelay = () => {
    setTimeout(() => {
      props.onIncrement();
    }, 2000);
  };
  const deTimeDelay = () => {
    setTimeout(() => {
      props.onDecrement();
    }, 2000);
  };

  const onInfinitive = () => {
    if (timer) {
      clearInterval(timer);
      settimer(null);
    } else {
      const timerTemp = setInterval(() => {
        props.onIncrement();
      }, 1000);
      settimer(timerTemp);
    }

    /*
    let intervelID = setInterval(() => {
      props.onIncrement();
    }, 1000);
    return () => {
      clearInterval(intervelID);
    };
    */
  };
  console.log(timer);
  return (
    <div className="container">
      <h1>{props.counter}</h1>
      <button onClick={props.onIncrement}>INCREMENT + </button>
      <button onClick={props.onDecrement}> - DECREMENT</button>
      <br />
      <button onClick={onOdd}>Odd </button>
      <br />
      <button onClick={inTimeDelay}>Time Delay Inc</button>
      <button onClick={deTimeDelay}>Time Delay Dec </button>
      <br />
      <button onClick={onInfinitive}>Start Infinitive </button>
    </div>
  );
}
