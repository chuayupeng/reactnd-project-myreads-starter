import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
    static propTypes = {
        bookDetails: PropTypes.object.isRequired,
        handleChange: PropTypes.func.isRequired,
        showInfo: PropTypes.func,
    };
    
    render() {
        const { bookDetails, handleChange, showInfo } = this.props;
        const image = bookDetails.imageLinks ? bookDetails.imageLinks.thumbnail : "http://lorempixel.com/128/193/nature/No-Image-Found/";
        return bookDetails.length !== 0 ? (
            <div className="book">
                <div className="book-top">
                    <div 
                        className="book-cover" 
                        style={{ 
                            width: 128, 
                            height: 193, 
                            backgroundImage: `url(${image})` 
                        }}
                        onClick={() => (showInfo(bookDetails))}
                    >
                    </div>
                    <div className="book-shelf-changer">
                        <select onChange={handleChange(bookDetails)} defaultValue={bookDetails.shelf ? bookDetails.shelf : 'none'}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{bookDetails.title}</div>
                <div className="book-authors">{bookDetails.authors ? bookDetails.authors.map((author)=>(<span key={author}>{author}<br/></span>)) : (<div></div>)}</div>
            </div>
        ) : (
            <div className="book"></div>
        );
    }
}

export default Book;