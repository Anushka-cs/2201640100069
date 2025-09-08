import { useState } from "react";

interface UrlFormProps {
  onShorten: (original: string, short: string) => void;
}

export default function UrlForm({ onShorten }: UrlFormProps) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!url) return;

    // generate a fake short link
    const code = Math.random().toString(36).substring(2, 8);
    const short = `http://short.ly/${code}`;

    // pass to parent
    onShorten(url, short);

    setUrl(""); // clear input
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="url"
        placeholder="Enter a URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="border rounded p-2 flex-1"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Shorten
      </button>
    </form>
  );
}
