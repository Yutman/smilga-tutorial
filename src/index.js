import React from 'react';
import ReactDom from 'react-dom';

// CSS
import './index.css';

// books
import {data} from './books';
import SpecificBook from './book';
import {greeting} from './testing/testing';


function BookList () {
    console.log(greeting);
    return (
        <section className='booklist'>
            {data.map((book, index)=>{
            return (
                <SpecificBook key={book.id} {...book}></SpecificBook>
            );  
            })}
        </section>
    );
};


ReactDom.render(<BookList/>, document.getElementById('root'));