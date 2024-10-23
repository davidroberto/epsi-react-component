function ListArticles() {
  const articles = [
    { id: 1, title: "React" },
    { id: 2, title: "Angular" },
    { id: 3, title: "Vue" },
  ];

  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>{article.title}</li>
      ))}
    </ul>
  );
}

export default ListArticles;
