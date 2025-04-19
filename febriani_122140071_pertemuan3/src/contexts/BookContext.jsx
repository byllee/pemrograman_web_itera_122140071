import React, { createContext, useContext } from 'react';
import useBooks from '../hooks/useBooks';

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const { books, dispatch } = useBooks();

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => useContext(BookContext);
