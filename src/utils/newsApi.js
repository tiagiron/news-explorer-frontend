import { handleServerResponse, APIkey } from "./constants";
const currentDate = new Date();
const currentDateString = currentDate.toLocaleDateString("sv-SE");
const lastWeekDateString = new Date(
  currentDate.getTime() - 7 * 24 * 60 * 60 * 1000,
).toLocaleDateString("sv-SE");

export const getNewsResult = ({ keyword, APIkey }) => {
  return fetch(
    `https://nomoreparties.co/news/v2/everything?q=${keyword}&from=${lastWeekDateString}&to=${currentDateString}&sortBy=popularity&pageSize=100&apiKey=${APIkey}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  ).then(handleServerResponse);
};
