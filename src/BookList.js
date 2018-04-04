import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

class BookList extends Component {
    static propTypes = {
        currReadingBooks: PropTypes.array.isRequired,
        wantToReadBooks: PropTypes.array.isRequired,
        readBooks: PropTypes.array.isRequired,
        handleChange: PropTypes.func.isRequired,
        showModal: PropTypes.func.isRequired,
    };

    render() {
        const { currReadingBooks, wantToReadBooks, readBooks, handleChange, showModal } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <BookShelf 
                        title='Currently Reading' 
                        books={currReadingBooks} 
                        handleChange={handleChange}
                        showInfo={showModal}
                    />
                    <BookShelf 
                        title='Want to Read' 
                        books={wantToReadBooks} 
                        handleChange={handleChange} 
                        showInfo={showModal}
                    />
                    <BookShelf 
                        title='Read' 
                        books={readBooks} 
                        handleChange={handleChange}
                        showInfo={showModal}
                    />
                </div>
                <div className="open-search">
                    <Link
                        to='/search'
                    >Search</Link>
                </div>
                
            </div>
        );
    }
}

export default BookList;