import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookGrid from './BookGrid';

class Search extends Component {
    static propTypes = {
        searchResults: PropTypes.array.isRequired,
        searchBook: PropTypes.func.isRequired,
        handleChange: PropTypes.func.isRequired,
        showModal: PropTypes.func.isRequired,
    };

    state = {
        query: ''
    };
    
    updateQuery = (query) => {
        this.setState(()=> ({
            query: query.trim()
        }));
        this.props.searchBook(query);
    }
    
    render() {
        const { query } = this.state;
        const { searchResults, handleChange, showModal } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link 
                        to='/' 
                        className="close-search"
                    >
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"                            
                            value={query}
                            onChange={(event) => (this.updateQuery(event.target.value))}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <BookGrid books={searchResults} handleChange={handleChange} showInfo={showModal} />
                </div>
            </div>
        );
    }
}

export default Search;