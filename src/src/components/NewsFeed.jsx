import React, { useEffect, useState } from "react";

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          "https://api.marketaux.com/v1/news/all?api_token=3aou2GeoPdsAsYscejpuIDJW1KsC8LIJOkjK30xGg&language=fr&categories=business,finance"
        );
        const data = await res.json();
        setArticles(data.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des actualités :", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h2>Actualités financières</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.uuid}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
            <p>{new Date(article.published_at).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
