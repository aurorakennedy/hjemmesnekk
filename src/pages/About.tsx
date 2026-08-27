import "./About.css";
import PhotoGroup from "../components/PhotoGroup";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="about">
      <header className="about-header">
        <a className="about-home-link" href="/">
          gå til hjem
        </a>
        <h1 className="about-title">LITT OM MEG</h1>
        <div className="about-intro">
          <p>Hei på deg!</p>
          <p>Håper du koser deg på nettsiden min;)</p>
          <p>Her kan du lære litt om meg!</p>
        </div>
        <img
          className="about-portrait"
          src="/images/about/AuroraGondol.png"
          alt="Aurora ute i naturen"
        />
      </header>

      <section className="about-bio">
        <p>Jeg heter Aurora og er 26 år og kommer fra Bærum.</p>
        <p>
          Jeg har en bachelor i informatikk fra NTNU og tar nå en master også
          hos NTNU, med spesialisering i interaksjonsdesign, spill- og
          læringsteknologi. Jeg har akkurat kommet hjem fra
          utvekslingssemesteret mitt i Valencia og skal begynne på siste året
          mitt på masteren.
        </p>
        <p>
          Masteren min gjør det mulig for meg å kombinere problemløsning, design
          og programmering — et krysningspunkt jeg trives veldig godt i. Les mer
          om erfaringen min under CV-siden.
        </p>
        <p>
          Utenom studie og jobb er jeg en jente som liker å finne på mye og har
          mange hobbyer.
        </p>
        <p>Her kan du få ett inblikk i hva jeg liker å bruke tiden min på :)</p>
      </section>

      <section className="about-gallery">
        <PhotoGroup
          captionPosition="right"
          captions={["Jeg syns det er veldig gøy å buldre og klatre"]}
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
          captionPosition="overlay"
          captions={[
            "Dette er hunden min Kobe.",
            "Jeg er mer glad i å kose enn han.",
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
          captions={["Jeg er halvt irsk! Og elsker Irland<3"]}
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
          captionPosition="below-right"
          captions={["Jeg elsker å være i naturen"]}
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
          captions={["Reise og utforske verden", "Ikke like glad i å pakke"]}
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

      <Footer />
    </div>
  );
};

export default About;
