import React, { useState } from 'react';

const UseStateObject = () => {
  const changeMessage = ()=>{
    setPerson({...person, message:'hello world'});
  }
  const [person,setPerson] = useState(
    {name:'peter',
    age:24,
    message:'hello'})

    return <React.Fragment>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </React.Fragment>
};

export default UseStateObject;
