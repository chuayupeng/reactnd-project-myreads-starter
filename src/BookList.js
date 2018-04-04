import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import Modal from 'react-simple-modal';
import Card from './Card';

class BookList extends Component {
    static propTypes = {
        currReadingBooks: PropTypes.array.isRequired,
        wantToReadBooks: PropTypes.array.isRequired,
        readBooks: PropTypes.array.isRequired,
        handleChange: PropTypes.func.isRequired,
    };

    state = {
        show: false,
        bookDetails: [],
    };

    showModal = (bookDetails) => {
        console.log(this.state);
        this.setState(()=> ({
            show: true,
            bookDetails,
        }));
    }

    render() {
        const { currReadingBooks, wantToReadBooks, readBooks, handleChange } = this.props;
        const { show, bookDetails } = this.state;
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
                        showInfo={this.showModal}
                    />
                    <BookShelf 
                        title='Want to Read' 
                        books={wantToReadBooks} 
                        handleChange={handleChange} 
                        showInfo={this.showModal}
                    />
                    <BookShelf 
                        title='Read' 
                        books={readBooks} 
                        handleChange={handleChange}
                        showInfo={this.showModal}
                    />
                </div>
                <div className="open-search">
                    <Link
                        to='/search'
                    >Search</Link>
                </div>
                <div>
                    <Modal 
                        className='modal-class'
                        onClickOverlay={()=>(this.setState(()=>({
                            show: false,
                            bookDetails: []
                        })))}
                        visible={show}
                    >
                        <Card bookDetails={bookDetails} />
                    </Modal>
                </div>
            </div>
        );
    }
}

export default BookList;