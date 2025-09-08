export default function UrlList({ urls }: { urls: string[] }) {
  return (
    <ul>
      {urls.map((u, i) => (
        <li key={i}>
          <span>Shortened:</span>
          <a href={u} target="_blank" rel="noopener noreferrer">
            {u}
          </a>
        </li>
      ))}
    </ul>
  );
}
