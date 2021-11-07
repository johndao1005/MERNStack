import React, { useState } from 'react';

const UseStateCounter = () => {
  const complexIncrease =()=>{
    setTimeout(()=>{setValue((prevState)=>{
     return prevState+1
    })},2000)
  }
  const [value,setValue] = useState(0)
  return <React.Fragment>
    <section style={{margin:'4rem 0'}}>
      <h2>Regular Counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={()=>setValue((value +1))}>+</button>
      <button className="btn" onClick={()=>setValue(0)}>reset</button>
      <button className="btn"  onClick={()=>setValue((value -1))}>-</button>
    </section>
    <section style={{margin:'4rem 0'}}>
      <h2>Complex Counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={complexIncrease}>+</button>
      <button className="btn" onClick={()=>setValue(0)}>reset</button>
      <button className="btn"  onClick={()=>setValue((value -1))}>-</button>
    </section>
  </React.Fragment>
};

export default UseStateCounter;
