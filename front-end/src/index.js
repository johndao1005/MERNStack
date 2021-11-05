import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'

const books =[{
  img:'https://',
  title:'Love you',
  author:'mommy'
},{
  author: 'John Doe',
  title: 'Unknown',
  img: 'http://'
}]

function BookList(){
  return <section>
    {books}
  </section>
}

const Book = ({img,title,author})=>{
  return <article className="book">
    <img src={img} alt='book'/>
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>
}

ReactDOM.render(<BookList/>, document.getElementById('root'));