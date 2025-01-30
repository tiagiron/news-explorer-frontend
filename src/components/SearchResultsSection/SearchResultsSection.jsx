import "./SearchResultsSection.css";
import NewsCardList from "../NewsCardList/NewsCardList";

export default function SearchResultsSection({}) {
  return (
    <div className="search-results">
      <h2 className="search-results__title">Search results</h2>
      <NewsCardList />
    </div>
  );
}
