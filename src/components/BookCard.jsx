import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({book}) => { 
    return (
        <div>
            <Link to={`../book/${book.isbn13}`}>
            <div className="overflow-hidden relative transition duration-200 transform hover:translate-y-2 shadow-lg hover:shadow-2xl font-bold rounded-md">
                        <img src={book.image} alt="book cover" className='object-cover w-full h-56 md:h-64 xl:h-80' />
                        <div className="px-6 py-4 bg-blue-300 bg-opacity-75 opacity-0 hover:opacity-100 absolute inset-0 transition-opacity duration-200 flex flex-col text-center">
                            <p>{book.title}</p>
                            <br></br>
                            <p>{book.subtitle.substring(0, 45)}...</p>
                            <br></br>
                            <p className='mt-auto'>Price: {book.price}</p>
                        </div>
                      </div>
            </Link>
        </div>
    );
};

export default BookCard;