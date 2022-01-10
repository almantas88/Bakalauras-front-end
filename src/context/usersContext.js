import { createContext, useState } from "react";
export const UsersContext = createContext([]);

export const UsersProvider = (props) => {
  const [allUserslist, setAllUsersList] = useState([]);

  const handleDeleteUserContext = (cardID) => {
    console.log(allUserslist);
    const userListAfterDeletion = allUserslist.filter((element) =>  element.cardID !== cardID  )
    setAllUsersList(userListAfterDeletion);
  };

  // cia padaryt update funkcija

  return (
    <UsersContext.Provider
      value={{allUserslist, setAllUsersList, handleDeleteUserContext}}
    >
      {props.children}
    </UsersContext.Provider>
  );
};
