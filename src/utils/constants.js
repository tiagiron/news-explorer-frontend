export const BASE_URL = "http://localhost:3001";

export const APIkey = "ae32d1dd1c6c4001a330886f24bbf15c";

export const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

// export function request(url, options) {
//   return fetch(url, options).then(handleServerResponse);
// }

export const defaultArticles = [
  {
    id: "66734b38bbfeb5b4c0e35e70",
    source: "Wired",
    author: "Makena Kelly",
    title: "Some news article",
    description:
      "ByteDance now has to show that it's making significant progress on a deal to sell TikTok to a US-based company.",
    url: "https://www.wired.com/story/trump-executive-order-tiktok-ban/",
    urlToImage:
      "https://media.wired.com/photos/678e7e3a51ec285221ab1b51/191:100/w_1280,c_limit/trump-tiktok-ban-1228803154.jpg",
    publishedAt: "2025-01-21T01:57:55Z",
    content:
      "Shortly after Mondays inauguration ceremony, President Donald Trump signed an executive order extending the deadline for ByteDance to sell TikToks US operations, preventing the app from going dark for...",
    keyword: "Tech",
  },
  {
    id: "66734b38bbfeb5b4c0e35e71",
    source: "TechCrunch",

    author: "Lauren Forristal",
    title: "Bye-bye bots...",
    description:
      "Autonomous, AI-based players are coming to a gaming experience near you, and a new startup, Altera, is joining the gray to build this new guard of AI Research company Altera raised $9 million to build AI ...",
    url: "https://techcrunch.com/2024/05/08/bye-bye-bots-alteras-game-playing-ai-agents-get-backing-from-eric-schmidt/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2024/05/Minecraft-keyart.jpg?resize=1200,720",
    publishedAt: "2024-05-08T15:14:57Z",
    content:
      "Autonomous, AI-based players are coming to a gaming experience near you, and a new startup, Altera, is joining the fray to build this new guard of AI agents. The company announces Wednesday that it ...",
    keyword: "Tech",
  },
  {
    id: "66734b38bbfeb5b4c0e35e72",
    source: "The Wall Street Journal",

    author: "Caitlin McCabe",
    title: "Bitcoin Hits Record",
    description:
      "The new peak above $109,000 was reached Monday, and stock futures edged higher. Since Trump was elected, bitcoin has surged more than 50%.",
    url: "https://www.wsj.com/finance/stocks/global-stocks-markets-dow-news-01-20-2025-d809dbee",
    urlToImage:
      "https://s.yimg.com/ny/api/res/1.2/dfwra7CyN_qJVCnDBHalMw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MDA-/https://media.zenfs.com/en/the_wall_street_journal_hosted_996/ce1b3c7cd087166e522ef1e8c67ece37",
    publishedAt: "2025-01-20T14:49:00Z",
    content:
      "The new peak above $109,000 was reached Monday, and stock futures edged higher. Since Trump was elected, bitcoin has surged more than 50%...",
    keyword: "Bitcoin",
  },
  // and have however many you want to show on the saved-news page
  {
    id: "66734b38bbfeb5b4c0e35e73",
    source: "Wired",

    author: "Makena Kelly",
    title: "Some news article",
    description:
      "ByteDance now has to show that it's making significant progress on a deal to sell TikTok to a US-based company.",
    url: "https://www.wired.com/story/trump-executive-order-tiktok-ban/",
    urlToImage:
      "https://media.wired.com/photos/678e7e3a51ec285221ab1b51/191:100/w_1280,c_limit/trump-tiktok-ban-1228803154.jpg",
    publishedAt: "2025-01-21T01:57:55Z",
    content:
      "Shortly after Mondays inauguration ceremony, President Donald Trump signed an executive order extending the deadline for ByteDance to sell TikToks US operations, preventing the app from going dark for...",
    keyword: "Tech",
  },
  {
    id: "66734b38bbfeb5b4c0e35e74",
    source: "Wired",

    author: "Makena Kelly",
    title: "Some news article",
    description:
      "ByteDance now has to show that it's making significant progress on a deal to sell TikTok to a US-based company.",
    url: "https://www.wired.com/story/trump-executive-order-tiktok-ban/",
    urlToImage:
      "https://media.wired.com/photos/678e7e3a51ec285221ab1b51/191:100/w_1280,c_limit/trump-tiktok-ban-1228803154.jpg",
    publishedAt: "2025-01-21T01:57:55Z",
    content:
      "Shortly after Mondays inauguration ceremony, President Donald Trump signed an executive order extending the deadline for ByteDance to sell TikToks US operations, preventing the app from going dark for...",
    keyword: "President",
  },
];

export const savedArticles = [
  {
    id: "66734b38bbfeb5b4c0e35e70",
    source: "Wired",
    author: "Makena Kelly",
    title: "Some news article",
    description:
      "ByteDance now has to show that it's making significant progress on a deal to sell TikTok to a US-based company.",
    url: "https://www.wired.com/story/trump-executive-order-tiktok-ban/",
    urlToImage:
      "https://media.wired.com/photos/678e7e3a51ec285221ab1b51/191:100/w_1280,c_limit/trump-tiktok-ban-1228803154.jpg",
    publishedAt: "2025-01-21T01:57:55Z",
    content:
      "Shortly after Mondays inauguration ceremony, President Donald Trump signed an executive order extending the deadline for ByteDance to sell TikToks US operations, preventing the app from going dark for...",
    keyword: "Tech",
  },
  {
    id: "66734b38bbfeb5b4c0e35e71",
    source: "TechCrunch",

    author: "Lauren Forristal",
    title: "Bye-bye bots...",
    description:
      "Autonomous, AI-based players are coming to a gaming experience near you, and a new startup, Altera, is joining the gray to build this new guard of AI Research company Altera raised $9 million to build AI ...",
    url: "https://techcrunch.com/2024/05/08/bye-bye-bots-alteras-game-playing-ai-agents-get-backing-from-eric-schmidt/",
    urlToImage:
      "https://techcrunch.com/wp-content/uploads/2024/05/Minecraft-keyart.jpg?resize=1200,720",
    publishedAt: "2024-05-08T15:14:57Z",
    content:
      "Autonomous, AI-based players are coming to a gaming experience near you, and a new startup, Altera, is joining the fray to build this new guard of AI agents. The company announces Wednesday that it ...",
    keyword: "Tech",
  },
  {
    id: "66734b38bbfeb5b4c0e35e73",
    source: "Wired",

    author: "Makena Kelly",
    title: "Some news article",
    description:
      "ByteDance now has to show that it's making significant progress on a deal to sell TikTok to a US-based company.",
    url: "https://www.wired.com/story/trump-executive-order-tiktok-ban/",
    urlToImage:
      "https://media.wired.com/photos/678e7e3a51ec285221ab1b51/191:100/w_1280,c_limit/trump-tiktok-ban-1228803154.jpg",
    publishedAt: "2025-01-21T01:57:55Z",
    content:
      "Shortly after Mondays inauguration ceremony, President Donald Trump signed an executive order extending the deadline for ByteDance to sell TikToks US operations, preventing the app from going dark for...",
    keyword: "Tech",
  },
  {
    id: "66734b38bbfeb5b4c0e35e74",
    source: "Wired",

    author: "Makena Kelly",
    title: "Some news article",
    description:
      "ByteDance now has to show that it's making significant progress on a deal to sell TikTok to a US-based company.",
    url: "https://www.wired.com/story/trump-executive-order-tiktok-ban/",
    urlToImage:
      "https://media.wired.com/photos/678e7e3a51ec285221ab1b51/191:100/w_1280,c_limit/trump-tiktok-ban-1228803154.jpg",
    publishedAt: "2025-01-21T01:57:55Z",
    content:
      "Shortly after Mondays inauguration ceremony, President Donald Trump signed an executive order extending the deadline for ByteDance to sell TikToks US operations, preventing the app from going dark for...",
    keyword: "President",
  },
];
