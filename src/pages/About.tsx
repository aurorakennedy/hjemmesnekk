import "./About.css";
import { useNavigate } from "react-router-dom";
import PhotoGroup from "../components/PhotoGroup";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about">
      <Navbar />
      <header className="about-header">
        <h1 className="about-title">LITT OM MEG</h1>
        <div className="about-intro">
          <p>Hei på deg</p>
          <br />
          <p>Her deler jeg litt om meg selv:D</p>
        </div>
        <img
          className="about-portrait"
          src="/images/about/AuroraGondol.png"
          alt="Aurora ute i naturen"
        />
      </header>

      <section className="about-bio">
        <div className="about-bio-text">
          <p>
            Jeg har en bachelor i informatikk fra NTNU og har gått videre med en
            master, hvor jeg spesialiserer meg innenfor interaksjonsdesign,
            spill- og læringsteknologi. Nå er jeg på sisteåret, og har begynt på
            prosjektoppgaven min som blant annet handler om flyktningers møte
            med det digitale Norge. Masteren min gjør det mulig for meg å
            kombinere problemløsning, design og programmering, som er et
            krysningspunkt jeg trives veldig godt i.
          </p>
          <br />
          <p>
            Utenfor skole og jobb er jeg en aktiv jente som digger å klatre,
            strikke og være sosial! Jeg har akkurat returnert fra utveksling i
            Valencia, hvor jeg fikk kombinert et faglig semester med utforskning
            av Spanias kultur og natur.
          </p>
          <button className="about-cv-link" onClick={() => navigate("/cv")}>
            Vil du se mer om min erfaring? Sjekk ut min{" "}
            <span className="about-cv-badge">CV</span>
          </button>
        </div>
      </section>

      <section className="about-gallery">
        <PhotoGroup
          captionPosition="right"
          captions={["Jeg digger å klatre og buldre"]}
          photos={[
            {
              src: "/images/about/Albaracin.png",
              alt: "Aurora buldrer ute i Albaracin, Spania",
              shape: "portrait",
            },
            {
              src: "/images/about/UteKlatring.png",
              alt: "Ute å klatrer i fjellet",
              shape: "portrait",
            },
          ]}
        />
        <PhotoGroup
          captionPosition="below-right"
          captions={["Strikking er den hobbyen jeg har holdt på med lengst"]}
          photos={[
            {
              src: "/images/about/Strikke.jpeg",
              alt: "Aurora og Tale strikker",
              shape: "square",
            },
            {
              src: "/images/about/StrikkBaby.jpeg",
              alt: "Baby strikke sett",
              shape: "portrait",
            },
          ]}
        />

        <PhotoGroup
          captionPosition="left"
          captions={[
            "Dette er hunden min Kobe.",
            "Jeg er mer glad i å kose enn han...",
          ]}
          photos={[
            {
              src: "/images/about/AuroraKobe.png",
              alt: "Aurora og hunden Kobe",
              shape: "portrait",
            },
          ]}
        />

        <PhotoGroup
          captionPosition="right"
          captions={["Jeg er halvt irsk, og elsker Irland<3"]}
          photos={[
            {
              src: "/images/about/ExIrland.png",
              alt: "Venner på tur i Irland",
              shape: "portrait",
            },
            {
              src: "/images/about/Grannys.png",
              alt: "Rundt middagsbordet til Granny i Irland",
              shape: "portrait",
            },
          ]}
        />

        <PhotoGroup
          captionPosition="above"
          captions={["Naturen gjør meg glad"]}
          photos={[
            {
              src: "/images/about/Sabo.png",
              alt: "Regnbue over fjellene i Sæbø",
              shape: "portrait",
            },
            {
              src: "/images/about/TeltTur.png",
              alt: "Telttur i naturen",
              shape: "portrait",
            },
            {
              src: "/images/about/Topptur.png",
              alt: "Bilde på Rando tur",
              shape: "landscape",
            },
          ]}
        />

        <PhotoGroup
          captionPosition="left"
          captions={["Reise og utforske verden >", "> pakke"]}
          photos={[
            {
              src: "/images/about/Vietnam.png",
              alt: "Bilde i spiel i Vietnam",
              shape: "portrait",
            },
            {
              src: "/images/about/Pakke.png",
              alt: "Pakke ting for reise",
              shape: "portrait",
            },
          ]}
        />

        <PhotoGroup
          captionPosition="right"
          captions={["Sier aldri nei til en bra konsert!"]}
          photos={[
            {
              src: "/images/about/Radiohead.png",
              alt: "Bilde fra konsert med Radiohead",
              shape: "portrait",
            },
          ]}
        />
      </section>

      <button
        className="about-photo-link"
        onClick={() => navigate("/photoAlbum")}
      >
        <span className="about-photo-text">
          Se flere glimt av livet mitt i min
        </span>
        <span className="about-photo-badge">Bildevegg</span>
      </button>

      <Footer />
    </div>
  );
};

export default About;
