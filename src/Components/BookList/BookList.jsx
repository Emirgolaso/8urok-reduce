import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchAllBooks from '../../store/reducers/booklistCreator';
import BooklistItem from './BooklistItem';

const BookList = () => {
    const { books, booksError, booksStatus } = useSelector((state) => state.booklist);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllBooks());

    }, []);

    const booksCase = {
        pending: 'loading...',
        fullfilled: books?.map((book) => (
            <BooklistItem key={`books-item-${book.id}`} book={book} addToCart={(id) => console.log(id)} />
        )),
        rejevted: booksError,
    }

    return (
        <ul>{booksCase[booksStatus]}</ul>
    )
}

export default BookList