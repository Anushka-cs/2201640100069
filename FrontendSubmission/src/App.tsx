import { useState } from "react";
import UrlForm from "./components/UrlForm";
import UrlList from "./components/UrlList";
import UrlStatsPage from "./components/UrlStats";

type ClickData = {
  timestamp: string;
  source: string;
  location: string;
};

type UrlStats = {
  original: string;
  short: string;
  createdAt: string;
  expiresAt: string;
  clicks: ClickData[];
};

export default function App() {
  const [stats, setStats] = useState<UrlStats[]>([]);

  const handleShorten = (originalUrl: string, shortUrl: string) => {
    const newEntry: UrlStats = {
      original: originalUrl,
      short: shortUrl,
      createdAt: new Date().toLocaleString(),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleString(), // 1 day later
      clicks: []
    };
    setStats((prev) => [...prev, newEntry]);
  };

  return (
    <div className="container">
      <h1>🔗 URL Shortener</h1>
      <UrlForm
        onShorten={(original, short) => handleShorten(original, short)}
      />
      <UrlList urls={stats.map((s) => s.short)} />
      <UrlStatsPage stats={stats} />
    </div>
  );
}
