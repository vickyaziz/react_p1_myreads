import React from 'react';
import Selector from './Selector';

class Book extends React.Component {
    render() {
        const { book } = this.props;
        const image = book.imageLinks && book.imageLinks.thumbnail;
        const author = book.authors ? book.authors : "Unknown";
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
                    <Selector
                        shelfUpdate={this.props.shelfUpdate}
                        book={book}
                        books={this.props.books}
                        selectorCheck={this.props.selectorCheck}
                    />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{author}</div>
            </div>
        )
    }
}

export default Book
