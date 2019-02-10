import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

class BookList extends Component {
  displayBooks = () => {
    const { books = [], loading } = this.props.data;
    if (loading) {
      return <div>Loading books</div>;
    } else {
      return books.map(book => {
        return <li key={book.id}>{book.name}</li>;
      });
    }
  };

  render() {
    return (
      <div>
        <ul id="book-list">{this.displayBooks()}</ul>
      </div>
    );
  }
}

export default graphql(getBookQuery)(BookList);
