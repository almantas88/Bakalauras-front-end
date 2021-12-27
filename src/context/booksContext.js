import { createContext, useState } from "react";
export const BooksContext = createContext([]);

export const BooksProvider = (props) => {
  const [allBooksList, setAllBooksList] = useState([]);

  const handleDeleteBookContext = (bookID) => {
    const bookListAfterDeletion = allBooksList.filter((element) =>  element.bookID !== bookID  )
    setAllBooksList(bookListAfterDeletion);
  };

  return (
    <BooksContext.Provider
      value={[allBooksList, setAllBooksList, handleDeleteBookContext]}
    >
      {props.children}
    </BooksContext.Provider>
  );
};
