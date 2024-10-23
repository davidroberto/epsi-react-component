function Header({ user }) {
  return (
    <header>
      <h1>Epsi React</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Articles</li>
          <li>Contact</li>
        </ul>
      </nav>

      {user ? <p>Bienvenue {user}</p> : <p>Merci de vous connecter</p>}
    </header>
  );
}

export default Header;
