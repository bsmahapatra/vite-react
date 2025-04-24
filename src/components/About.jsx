function About() {

    const name = "Karma Kumar Rout";
    const profession = "Fullstack Developer (Reactjs+NodeJs)";

  return (
    <section id="about" className="about-section">
      <h2>About me</h2>
      <p>
        Hello! I am <b>{name}</b>, a passionate {profession}. I love to built
        web application that solves real world problems
      </p>
    </section>
  );
}

export default About