import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCard from './BookCard';

const Books = () => {
    // const [books, setBooks] = useState([])
    
    // useEffect (() =>{
    //      fetch ('https://api.itbook.store/1.0/new')
    //      .then(res => res.json())
    //      .then (data => console.log(data))
    // },[])
    const {books} = useLoaderData()
    console.log(books)
    return (
        <div className='my-container'>
            <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2">
                {
                    books.map(book => (
                      <BookCard
                      key={book.isb13} book ={book}
                      ></BookCard>
                      
                    ))}
            </div>
        </div>
    );
};

export default Books;