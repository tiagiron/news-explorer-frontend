import "./MainComponent.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";

function MainComponent({}) {
  return (
    <main>
      <div className="main">
        <SearchForm />
      </div>
      <About />
    </main>
  );
}

export default MainComponent;
