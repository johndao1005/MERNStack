import React from 'react';

const data = [
  {id:1,name:'john'},
  {id:2,name:'ken'},
  {id:3,name:'peter'},
  {id:4,name:'johan'},
]
const UseStateArray = () => {
  const [people,setPeople] = React.useState(data)
  const removeItem = (id)=>{
    let newPeople = people.filter((person)=>person.id !== id)
    setPeople(newPeople) 
  }
  return (<React.Fragment> 
    {people.map((person)=>{
      const {id,name}= person
      return <div key={id} className="item">
        <h4>{name}</h4>
        <button onClick={()=>removeItem(id)}>delete</button>
        </div>
    })}
    <button className="btn" onClick={()=>setPeople([])}>
      clear items
    </button>
  </React.Fragment>)
};

export default UseStateArray;
