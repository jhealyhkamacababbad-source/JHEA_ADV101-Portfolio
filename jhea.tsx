import Image from "next/image";

const nav = ["Home", "About", "Work", "Skills", "Reviews", "Contact"];

const projects = [
  { num: "01", title: "Personal Portfolio", type: "Portfolio Website" },
  { num: "02", title: "E-commerce Store", type: "Online Store" },
  { num: "03", title: "Food Store", type: "Online Food Store" },
];

const skills = [
  { name: "HTML & CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React / Next.js", level: 75 },
  { name: "UI/UX Design", level: 80 },
];

const tools = ["next.js", "VS Code", "Git",];

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <nav className="menu">
          {nav.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`}>{n}</a>
          ))}
        </nav>
        <a href="#contact" className="pill">Let’s connect</a>
      </header>

      {/* Slide dots */}
      <nav className="dots" aria-label="Slides">
        {nav.map((n) => (
          <a key={n} href={`#${n.toLowerCase()}`} aria-label={n} />
        ))}
      </nav>

      <main>
        {/* 1. HOME */}
        <section id="home" className="slide hero">
          <div>
           <h1>
             JHEA&apos;S
            <br />
            <span className="script">PORTFOLIO.</span>
           </h1>
            <p className="lead">
              I’m a student at Holy Cross of Davao College who loves building
              beautiful, functional and meaningful web experiences.
            </p>
            <div className="actions">
              <a href="#work" className="btn">View my work →</a>
            </div>
          </div>
          <div className="photo">
            <Image src="/jeyya.jpg" alt="Jhea" width={500} height={400} priority />
          </div>
        </section>

        {/* 2. ABOUT */}
        <section id="about" className="slide about">
          <div className="photo">
            <Image src="/jhea.jpg" alt="Jhea" width={500} height={500} />
          </div>
          <div>
            <div>
  <p className="eyebrow">A BIT ABOUT ME!</p>
  <h2>
    Hi, I'm Jhea lyhka Macababbad, a <em>BSIT student</em> who builds
    websites that look <em>good</em> and feel right.
  </h2>
  <p className="lead">
    I want to learn more about coding and creativity. I design simple to make it easy,
    then build with Next.js.
  </p>
  <a href="#skills" className="link">More about me! →</a>
</div>
          </div>
        </section>


        {/* 4. WORK */}
        <section id="work" className="slide">
          <div className="head">
            <p className="eyebrow">SELECTED WORK </p>
            <h2>Projects I’m <em>proud of</em></h2>
          </div>
          <div className="cards work">
            {projects.map((p) => (
              <div key={p.title} className="card">
                <div className="mock">
                  <span className="num">{p.num}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.type}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. SKILLS */}
        <section id="skills" className="slide two">
          <div>
            <p className="eyebrow">MY SKILLS </p>
            <h2>
              Tools and skills I <em>use</em>
            </h2>
            <p className="lead">
              I’m always learning and improving, one project at a time.
            </p>
            <div className="tags">
              {tools.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
          <div>
            {skills.map((s) => (
              <div key={s.name} className="bar">
                <div className="bar-top">
                  <span>{s.name}</span>
                  <span>{s.level}%</span>
                </div>
                <div className="track">
                  <div className="fill" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. REVIEWS */}
        <section id="reviews" className="slide">
          <div className="head">
            <p className="eyebrow">KIND WORDS </p>
            <h2>What people <em>say</em></h2>
          </div>
          <div className="quote">
            <div className="mark">“</div>
            <p>
              Jhea is creative, dedicated and amazing to work with. She
              delivers ideas that are not just beautiful, but truly impactful.
            </p>
          </div>
        </section>

        {/* 7. CONTACT */}
        <section id="contact" className="slide contact two">
          <div>
            <h2>
              Let’s create something
              <br />
              <span className="script">beautiful together.</span>
            </h2>
            <p className="lead">
              I’m currently available for freelance projects and collaborations.
            </p>
            <a href="mailto:hello@jhea.net" className="btn">Let’s connect →</a>
          </div>
          <ul>
            <li>✉ hello@jhea@gmail.com</li>
            <li>⌖ Davao City, Philippines</li>
            <li>  09560756241</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        Thank you!
      </footer>
    </>
  );
}