function App() {
  const articles = [
    { id: 1, title: "React" },
    { id: 2, title: "Angular" },
    { id: 3, title: "Vue" },
  ];

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
