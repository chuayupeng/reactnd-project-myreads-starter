import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookGrid extends Component {
    static propTypes = {
        books: PropTypes.array,
        handleChange: PropTypes.func.isRequired,
        showInfo: PropTypes.func,
    };

    render() {
        const { books, handleChange, showInfo } = this.props;
        return (
            <ol className="books-grid">
                {books.map((book)=>(
                    <li key={book.id}>
                        <Book 
                            bookDetails={book} 
                            handleChange={handleChange} 
                            showInfo={showInfo}
                        />
                    </li>
                ))}
            </ol>
        );
    }
}

export default BookGrid;