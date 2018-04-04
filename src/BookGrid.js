import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookGrid extends Component {
    static propTypes = {
        books: PropTypes.array,
        handleChange: PropTypes.func.isRequired,
    };
    render() {
        const { books, handleChange } = this.props;
        return (
            <ol className="books-grid">
                {books.map((book)=>(
                    <li key={book.infoLink}>
                        <Book bookDetails={book} handleChange={handleChange}/>
                    </li>
                ))}
            </ol>
        );
    }
}

export default BookGrid;