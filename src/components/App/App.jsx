import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CurrentUserProvider from "../../contexts/CurrentUserContext";
import "./App.css";
import Header from "../Header/Header";
import MainComponent from "../MainComponent/MainComponent";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import RegisterConfirmationModal from "../RegisterConfirmationModal/RegisterConfirmationModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SavedArticles from "../SavedArticles/SavedArticles";
import AppContext from "../../contexts/AppContext";

function App() {
  //States
  const [activeModal, setActiveModal] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  //Modal open and close
  const openLoginModal = () => {
    setActiveModal("login");
  };

  const openRegisterModal = () => {
    setActiveModal("register");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  //login logout register

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setCurrentUser({});
  };

  //Effects
  useEffect(() => {
    function handleCloseMethods(evt) {
      if (evt.key === "Escape" || evt.key === "esc" || evt.keyCode === 27) {
        closeActiveModal();
      }

      if (evt.type === "click" && evt.target.classList.contains("modal")) {
        closeActiveModal();
      }
    }

    if (activeModal !== "") {
      document.addEventListener("keydown", handleCloseMethods);
      document.addEventListener("click", handleCloseMethods);
    }

    return () => {
      document.removeEventListener("keydown", handleCloseMethods);
      document.removeEventListener("click", handleCloseMethods);
    };
  }, [activeModal]);

  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <CurrentUserProvider value={{ currentUser }}>
        <div className="page">
          <div className="page__content">
            <Header
              openLoginModal={openLoginModal}
              handleLogout={handleLogout}
            />
            <Routes>
              <Route path="/" element={<MainComponent />} />

              <Route
                path="/saved-news"
                element={
                  // <ProtectedRoute>
                  <SavedArticles />
                  // </ProtectedRoute>
                }
              />
            </Routes>

            <Footer />
          </div>
          <LoginModal
            isOpen={activeModal === "login"}
            buttonText={"Sign in"}
            onClose={closeActiveModal}
            openRegisterModal={openRegisterModal}
          />
          <RegisterModal
            isOpen={activeModal === "register"}
            buttonText={"Sign up"}
            onClose={closeActiveModal}
            openLoginModal={openLoginModal}
          />

          <RegisterConfirmationModal
            activeModal={activeModal}
            onClose={closeActiveModal}
            openLoginModal={openLoginModal}
          />
        </div>
      </CurrentUserProvider>
    </AppContext.Provider>
  );
}

export default App;
