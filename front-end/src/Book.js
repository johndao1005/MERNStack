import React from 'react'

const Book = ({img,title,author}) =>{
    const clickHandler = ()=>{
      alert('hello world')
    }
    return <article className="book">
      <img src={img} alt='book'/>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>example</button>
    </article>
  }

export default Book
