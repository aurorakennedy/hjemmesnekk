import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import Footer from "../components/Footer";
import { photoAlbumData, shuffleArray } from "../data/photoAlbumData";
import { prosjekter } from "../data/projects";

const LandingPage = () => {
  const navigate = useNavigate();

  const menu: { label: string; path?: string }[] = [
    { label: "Om meg", path: "/about" },
    { label: "Prosjekter", path: "/projects" },
    { label: "CV", path: "/cv" },
    { label: "Bildevegg", path: "/photoAlbum" },
  ];

  const [previewPhotos] = useState(() =>
    shuffleArray(photoAlbumData).slice(0, 3),
  );
  const latestProject = prosjekter[0];

  return (
    <div className="landing">
      <div className="collage">
        <img
          className="grid-band"
          src="/images/landingPage/backgroundGrid.png"
          alt=""
        />

        <h1 className="title title--aurora">Aurora</h1>
        <h1 className="title title--kennedy">Kennedy</h1>

        <img
          className="fly"
          src="/images/landingPage/auroraFly.png"
          alt="Aurora dancing on the rocks by the sea"
        />

        <ul className="menu">
          {menu.map((m) => (
            <li key={m.label}>
              {m.path ? (
                <button onClick={() => navigate(m.path!)}>{m.label}</button>
              ) : (
                <span className="menu-disabled">{m.label}</span>
              )}
            </li>
          ))}
        </ul>

        <div className="intro">
          <p>
            <span>Hei, mitt navn er Aurora:D</span>
          </p>
          <p>
            <span>
              Jeg er en nysgjerrig informatiker som <br /> digger teknologi og
              mennesker.
            </span>
          </p>
          <p>
            <span>Velkommen til min hjemmeside!</span>
          </p>
        </div>

        <img
          className="portrait"
          src="/images/landingPage/aurora.png"
          alt="Aurora outdoors"
        />
      </div>

      <section className="creative-preview">
        <img
          className="creative-preview-img"
          src="/images/about/Strikke.jpeg"
          alt="Aurora og Tale strikker"
        />
        <div className="creative-preview-text">
          <p className="creative-preview-quote">
            <span>
              Jeg elsker å være kreativ! Derfor bruker jeg denne nettsiden
              til å uttrykke meg litt fritt!
            </span>
          </p>
          <button onClick={() => navigate("/about")}>Mer om meg</button>
        </div>
      </section>

      <section className="project-preview">
        <span className="section-tag">Mitt siste prosjekt</span>
        <article className="project-preview-card">
          <h2>{latestProject.title}</h2>
          <p className="project-preview-subtitle">{latestProject.subtitle}</p>
          <p className="project-preview-intro">{latestProject.intro}</p>
        </article>
        <button
          className="project-preview-cta"
          onClick={() => navigate("/projects")}
        >
          Se flere prosjekter
        </button>
      </section>

      <section className="photos-preview">
        <div className="photos-preview-grid">
          {previewPhotos.map((photo) => (
            <img key={photo.bilde} src={photo.bilde} alt={photo.navn} />
          ))}
        </div>
        <button onClick={() => navigate("/photoAlbum")}>
          Gå til bildeveggen
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
