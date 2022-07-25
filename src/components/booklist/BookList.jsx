import React from 'react';
import { useGlobalContext } from '../context/context';
import Loading from '../loader/Loader';
import coverImg from '../../assets/logo.svg';
import './BookList.css';
import Book from '../book/Book';
import Header from '../header/Header';

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // removing /works/ to get only id
      id: singleBook.id.replace('/works/', ''),
      cover_img: singleBook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
        : coverImg,
    };
  });

  if (loading) return <Loading />;

  return (
    <div>
      <Header />
      <section className='booklist'>
        <div className='container'>
          <div className='section-title'>
            <h2>{resultTitle}</h2>
          </div>
          <div className='booklist-content grid'>
            {booksWithCovers.slice(0, 30).map((item, index) => {
              return <Book key={index} {...item} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookList;
