import { useState } from "react";

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

export default function UrlStatsPage({ stats }: { stats: UrlStats[] }) {
  return (
    <div>
      <h2>📊 URL Shortener Statistics</h2>
      {stats.length === 0 && <p>No URLs shortened yet.</p>}
      {stats.map((url, i) => (
        <div key={i} style={{ marginBottom: "1.5rem", padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
          <p><strong>Short URL:</strong> <a href={url.short} target="_blank">{url.short}</a></p>
          <p><strong>Original URL:</strong> {url.original}</p>
          <p><strong>Created:</strong> {url.createdAt}</p>
          <p><strong>Expires:</strong> {url.expiresAt}</p>
          <p><strong>Total Clicks:</strong> {url.clicks.length}</p>

          <h4>Click Details:</h4>
          <ul>
            {url.clicks.map((c, j) => (
              <li key={j}>
                {c.timestamp} — {c.source} — {c.location}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
