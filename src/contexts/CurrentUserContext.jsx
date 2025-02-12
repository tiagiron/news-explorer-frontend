import React, { useState } from "react";
import { savedArticles as initialSavedArticles } from "../utils/constants";

const CurrentUserContext = React.createContext();

export { CurrentUserContext };

const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    name: "Tia",
    savedArticles: initialSavedArticles,
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const removedSavedArticle = (id) => {
  //   setCurrentUser((prev) => ({
  //     ...prev,
  //     savedArticles: prev.savedArticles.filter((article) => article.id !== id),
  //   }));
  // };

  return (
    <CurrentUserContext.Provider
      value={{
        ...currentUser,
        isLoggedIn,
        // removedSavedArticle
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
