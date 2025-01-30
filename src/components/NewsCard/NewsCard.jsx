import "./NewsCard.css";
import inactive_save_button from "../../assets/Rectangle8.png";

export default function NewsCard({ article, cardSave, cardDelete }) {
  // const currentUser = useContent(CurrentUserContext);
  // const isSaved = article.saved.some((id) => id === currentUser._id);

  const handleCardSave = () => {
    cardSave({ id: article._id, isSaved });
  };

  //   const handleCardDelete = () => {
  //     cardDelete({ id: card._id, isSaved });
  //   };

  //   url: article.url, // Use the properties the newsAPI gives you, I just made these up
  //       title: article.title,
  //       publishedAt: article.publishedAt,
  //       description: article.description,
  //       urlToImage: article.urlToImage,
  //       name: article.source,

  return (
    <li className="card">
      <div className="card__container">
        <img
          //   src={article.urlToImage}
          //   alt={article.title}
          className="card__image"
        />
        <div className="save-button-background">
          <img
            className="card__save-button"
            type="button"
            aria-label="save"
            onClick={handleCardSave}
            src={
              inactive_save_button
              // isSaved ? active_save_button : inactive_save_button
            }
            alt={
              "not saved"
              // isSaved ? "saved" : "not saved"
            }
          />
        </div>
        {/* <img
          className="card__delete-button"
          type="button"
          aria-label="delete"
          onClick={handleCardDelete}
          src={delete_button}
        /> */}
        <div className="card__info">
          {/* <p>{article.publishedAt}</p>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <p>{article.source}</p> */}
        </div>
      </div>
    </li>
  );
}
