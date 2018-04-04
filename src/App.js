import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import Search from './Search';
import BookList from './BookList';
import Modal from 'react-simple-modal';
import Card from './Card';
import './App.css';

class BooksApp extends React.Component {
  state = {
    currReadingBooks: [],
    wantToReadBooks: [],
    readBooks: [],
    searchResults: [],
    show: false,
    bookDetails: [],
  };

  showModal = (bookDetails) => {
      this.setState(()=> ({
          show: true,
          bookDetails,
      }));
  }

  componentWillMount() {
    this.refreshShelves();
  }

  refreshShelves = () => {
    BooksAPI.getAll().then((books) => {
      const currReadingBooks = books.filter((book)=>(book.shelf === 'currentlyReading'));
      const wantToReadBooks = books.filter((book)=>(book.shelf === 'wantToRead'));
      const readBooks = books.filter((book)=>(book.shelf === 'read'));
      this.setState(()=>({
        currReadingBooks,
        wantToReadBooks,
        readBooks,
      }));
    });
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(()=>(this.refreshShelves()));
  }

  searchBook = (query) => {
    BooksAPI.search(query).then((results)=>{
      const searchResults = Array.isArray(results) ? results : [];
      this.setState(()=>({searchResults}));
    });
  }

  handleChange = (bookDetails) => (event) => {
    const newShelf = event.target.value;
    this.updateShelf(bookDetails, newShelf);
  }
  
  render() {
    return (
      <div className="app">
        <div>
          <Modal 
              className='modal-class'
              onClickOverlay={()=>(this.setState(()=>({
                  show: false,
                  bookDetails: []
              })))}
              visible={this.state.show}
          >
              <Card bookDetails={this.state.bookDetails} />
          </Modal>
        </div>
        <Route path='/search' render={() => (<Search 
          searchBook={this.searchBook}
          searchResults={this.state.searchResults}
          handleChange={this.handleChange}
          showModal={this.showModal}
        />)}/>
        <Route exact path='/' render={() => (<BookList 
          currReadingBooks={this.state.currReadingBooks} 
          wantToReadBooks={this.state.wantToReadBooks}
          readBooks={this.state.readBooks}
          handleChange={this.handleChange}
          showModal={this.showModal}
        />)}/>
      </div>
    )
  }
}

export default BooksApp;