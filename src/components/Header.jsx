function Header() {

    const name = "Karma Kumar Rout";
    const profession = "Fullstack Developer (Reactjs+NodeJs)";

  return (
    <header className="header">
      <h1>{name}</h1>
      <p>{profession}</p>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contacts</a>
      </nav>
    </header>
  );
}

export default Header