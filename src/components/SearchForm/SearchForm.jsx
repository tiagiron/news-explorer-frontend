import "./SearchForm.css";

function SearchForm({}) {
  return (
    <div className="search">
      <h1 className="search__title">What's going on in the world?</h1>
      <p className="search__description">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form
        className="search__form"
        //   action="/page"
      >
        <input
          className="search__input"
          type="text"
          placeholder="Enter topic"
          name="search"
        />
        <button className="search__submit-btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
