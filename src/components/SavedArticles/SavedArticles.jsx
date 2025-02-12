import "./SavedArticles.css";
import "../NewsCardList/NewsCardList";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedArticles({}) {
  return (
    <div className="saved-articles">
      <div>
        <p className="saved-articles__page">Saved articles</p>
        <h1 className="saved-articles__title">
          Name, you have # saved articles
        </h1>
        <span>
          <p>By keywords:</p>
          <p>keywords</p>
        </span>
      </div>
      <NewsCardList />
    </div>
  );
}

export default SavedArticles;
