"use client";
import { useState, useEffect } from "react";
import Loading from './Loading';
import Error from './Error';

interface FeedItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
}

const BlogFeed = () => {
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const API_KEY = process.env.NEXT_PUBLIC_RSS2JSON_API_KEY || "";
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dmostoller&api_key=${API_KEY}`,
        );

        if (!response.ok) setError("Failed to fetch blog feed");
        const data = await response.json();

        const getExcerpt = (html: string) => {
          const div = document.createElement("div");
          div.innerHTML = html;
          const firstP = div.querySelector("p");
          return firstP
            ? firstP.innerHTML
                .replace(/&nbsp;/g, " ")
                .replace(/\s+/g, " ")
                .trim()
            : "";
        };

        const feedData = data.items.map((item: FeedItem) => ({
          title: item.title,
          link: item.link,
          description: getExcerpt(item.description),
          pubDate: item.pubDate,
        }));

        setFeedItems(feedData);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to fetch blog feed" + err);
        setIsLoading(false);
      }
    };

    fetchFeed();
  }, []);

  if (isLoading) return <Loading message="Fetching blog posts..." />;
  if (error) return <Error message={error} code="FEED_ERR" />;

    return (
      <div className="bg-terminal-color font-dos min-h-screen max-w-5xl mx-auto p-4">
        <div className="text-center">
          <div className="ascii-border mb-4 hidden md:block">
            ║ BLOG DIRECTORY ║
          </div>
        </div>
        <div className="space-y-8 px-0 md:px-6">
          {feedItems.map((item, index) => (
            <div key={index} className="mb-8 pb-4 border-b border-[var(--terminal-color)]">
              <div className="mb-2">
                └─► {new Date(item.pubDate).toLocaleDateString()}
              </div>
              <div className="mb-4">{`C:\\>${item.title}`}</div>
              <div className="mb-4 leading-relaxed">{item.description}</div>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2  hover:bg-[var(--button-bg)] hover:text-terminal-color"
              >
                [READ MORE]
              </a>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://medium.com/@dmostoller"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2  hover:bg-[var(--button-bg)] hover:text-terminal-color"
          >
            [READ MORE ON MY MEDIUM PAGE]
          </a>
        </div>
      </div>
  );
};

export default BlogFeed;
