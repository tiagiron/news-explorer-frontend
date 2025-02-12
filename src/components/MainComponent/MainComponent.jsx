import "./MainComponent.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";
import SearchResultsSection from "../SearchResultsSection/SearchResultsSection";
import NothingFound from "../NothingFound/NothingFound";

function MainComponent({}) {
  return (
    <main>
      <div className="main">
        <SearchForm />
      </div>
      {/* <Preloader /> */}
      <SearchResultsSection />
      {/* searchResults && <SearchResultsContainer results={searchResults} */}
      <About />
    </main>
  );
}

export default MainComponent;
