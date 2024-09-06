import React, { useEffect, useState } from "react";
import { ArticleCard } from "./ui/ArticleCard";
import Link from "next/link";

interface Article {
  author: string;
  title: string;
  link: string;
  content: string;
  thumbnail: string;
  date: string;
  // Add other fields as needed from the API response
}

const extractThumbnail = (content: string): string => {
  const imgTagRegex = /<img.*?src="(.*?)"/;
  const match = content.match(imgTagRegex);
  return match ? match[1] : "";
};

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zuhayersiddique162"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.items));
  }, []);

  console.log(articles);

  return (
    <div id="Articles">
      <div className="mx-auto w-full flex-col justify-center items-center container p-10">
        <p className="text-5xl font-bold text-gradient mb-[1em] text-center xl:text-left">
          My Blogs
        </p>
        <div className="w-full flex justify-center">
          <div className="w-full md:w-1/2 flex-col container items-center justify-center">
            {articles.map((article, index) => (
              <a href={article.link} target="/blank">
                <ArticleCard
                  key={index}
                  name={article.author}
                  title={article.title}
                  background={extractThumbnail(article.content)}
                  date={article.date}
                  link={article.link}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
