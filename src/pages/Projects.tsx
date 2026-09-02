import { useEffect, useState } from "react";
import "./Projects.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GithubIcon } from "../Icons";

type ProjectEntry = {
  title: string;
  subtitle: string;
  intro: string;
  learned: string;
  tech: string[];
  github?: string;
  demo?: string;
};

const prosjekter: ProjectEntry[] = [
  {
    title: "Interaktiv videostrøm hos Komplett",
    subtitle: "Clave Consulting · 2026",
    intro:
      "Min andre sommer hos Clave Consulting jobbet jeg med en interaktiv strømmingsløsning for Komplett, bygget med WHEP og SignalR. Selve sluttproduktet kan jeg ikke gå i detalj om ennå, men det handlet i bunn og grunn om å få video til å oppleves i sanntid.",
    learned:
      "Dette var mitt første møte med både SignalR og videoteknologi, og jeg lærte mye om hva som skal til for å få video til å strømme i sanntid. Jeg fikk også kjenne på hvordan det er å jobbe i et team der ikke alle sitter samlet, en annen type problemstilling enn jeg var vant til, hvor fokuset var mer teknisk enn tidligere prosjekter.",
    tech: ["C#", ".NET", "TypeScript", "React", "SignalR", "WHEP"],
  },
  {
    title: "Fakturahåndtering hos GTS og Marinetrans",
    subtitle: "Clave Consulting · 2025",
    intro:
      "Min første sommer hos Clave Consulting fikk jeg være med på å hjelpe GTS og Marinetrans med å modernisere en tungvint, manuell fakturahåndteringsprosess. Vi bygde en løsning basert på OCR som automatiserte store deler av arbeidet.",
    learned:
      "Dette var mitt første reelle utviklerprosjekt, og jeg lærte hvor mye det har å si å forstå domenet før man bygger noe, jeg måtte sette meg inn i hvordan shippingbransjen og fakturaflyten fungerte fra bunnen av for å lage noe brukerne faktisk hadde nytte av. Jeg fikk også mitt første møte med smidig utvikling utenfor skolebenken, og fikk mitt første møte med C# og .NET.",
    tech: ["C#", ".NET", "TypeScript", "React", "OCR"],
  },
  {
    title: "OpenEmojiPlatform",
    subtitle: "IT2901 Prosjektarbeid II (bachelor) · 2024",
    intro:
      "OpenEmojiPlatform er en Android-app for å utforske emojier, slå opp betydning, historikk og design, og enkelt kopiere dem. Appen var basert på nettsiden Emojipedia fra Zedge AS og skulle fungere som en forløper til den offisielle Emojipedia-appen, med funksjoner som søk, favoritter, en emoji-quiz og nyhetsfeed.",
    learned:
      "Å få prøve meg som scrum master ble et av høydepunktene i prosjektet – jeg trivdes godt i rollen, og fikk endelig teste smidig utvikling i praksis og ikke bare fra pensum. I tillegg var det mitt første møte med å bygge en Android-app, og første gang jeg jobbet med et reelt kundeprosjekt. Her lærte jeg hvor viktig det er med god kommunikasjon med kunden underveis, slik at vi var på samme side og landet på en løsning som både dekket ønskene deres og var realistisk å få til på tiden og erfaringen vi hadde.",
    tech: ["Kotlin", "Jetpack Compose"],
    github: "https://github.com/ITP2-G15/OpenEmojiPlatform/blob/main/README.md",
  },
  {
    title: "kennedy.no",
    subtitle: "Hobby · 2023",
    intro:
      "kennedy.no er min personlige hobbynettside, laget for å øve på det jeg lærer på studiet og som et sted der kreativiteten kan få utfolde seg uten begrensninger.",
    learned:
      "Her lærte jeg hvordan man setter opp et eget prosjekt helt fra bunnen av, og ble utfordret på alt fra domene til deployment, i tillegg til at det var første gang jeg brukte Vite.",
    tech: ["React", "TypeScript", "Vite"],
    github: "https://github.com/aurorakennedy/matrix",
  },
  {
    title: "greekingout.blog",
    subtitle: "Hobby · 2023",
    intro:
      "greekingout var en reiseblogg jeg lagde sammen med to venninner under utvekslingssemesteret vårt i Athen, som en morsom måte å dele opplevelsene våre på. (Domenet eier vi dessverre ikke lenger, men koden ligger på GitHub.)",
    learned:
      "Her fikk jeg prøvd meg på Astro og Tailwind for første gang, vi valgte Astro fordi en kompis tipset om at det var det nye og kule i IT-verden. Veldig raskt, men kanskje ikke helt nødvendig for en enkel blogg ;) men uansett gøy å prøve nye teknologier.",
    tech: ["Astro", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/klarawust/greekingout",
  },
  {
    title: "Backpacking",
    subtitle: "TDT4140 Programvareutvikling · 2023",
    intro:
      "Backpacking er en nettside hvor reisende kan dele reiseruter og erfaringer, og like, kommentere og rate andres ruter.",
    learned:
      "Her lærte jeg mye om å koble en Java-backend mot en React-frontend, og sette opp et REST-API fra bunnen av. I tillegg handlet faget mye om å jobbe i tverrfaglige team, noe som ga meg nyttig erfaring i å samarbeide på tvers av ulike roller og perspektiver.",
    tech: ["Java", "TypeScript", "CSS", "Spring Boot", "React", "SQLite"],
    github: "https://github.com/aurorakennedy/backpacking",
  },
  {
    title: "Hyttebok",
    subtitle: "IT1901 Prosjektarbeid 1 · 2023",
    intro:
      "Hyttebok er en digital gjestebok for hytteturer, der man skriver inn navn, dato og et kort sammendrag av turen.",
    learned:
      "Dette var mitt første modulære Maven-prosjekt, og jeg lærte mye om hvordan man strukturerer kode i lag, med et klart skille mellom desktop-klienten og REST API-serveren. I gruppeprosjektet fikk jeg også prøve meg på smidig utvikling i praksis, som å bryte ned brukerhistorier til oppgaver og bruke branching og merging i git for å følge dem opp.",
    tech: ["Java", "JavaFX", "Spring Boot", "Maven"],
    github:
      "https://github.com/aurorakennedy/hyttebok/blob/master/hytte/readme.md",
  },
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 700px)").matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    const handleChange = (event: MediaQueryListEvent) =>
      setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isMobile;
};

const Projects = () => {
  const isMobile = useIsMobile();

  const columns = isMobile
    ? [prosjekter]
    : [
        prosjekter.filter((_, index) => index % 2 === 0),
        prosjekter.filter((_, index) => index % 2 === 1),
      ];

  return (
    <div className="projects">
      <Navbar />
      <header className="projects-header">
        <h1 className="projects-title">PROSJEKTER</h1>
        <p className="projects-intro">
          Noen av kodeprosjektene jeg har jobbet med, fra egne sideprosjekter
          til skole- og jobbrelaterte oppgaver.
        </p>
      </header>

      <section className="projects-content">
        <div className="projects-grid">
          {columns.map((column, columnIndex) => (
            <div className="projects-column" key={columnIndex}>
              {column.map((project) => (
                <article className="project-card" key={project.title}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub repo for ${project.title}`}
                      className="project-card-github"
                    >
                      <GithubIcon width={22} height={22} />
                    </a>
                  )}
                  <h2 className="project-card-title">{project.title}</h2>
                  <p className="project-card-subtitle">{project.subtitle}</p>
                  <p className="project-card-description">{project.intro}</p>
                  <p className="project-card-learned">
                    <strong>Hva jeg lærte:</strong> {project.learned}
                  </p>
                  <div className="project-card-tech">
                    {project.tech.map((tech) => (
                      <span className="project-tech-tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card-link project-card-link--demo"
                    >
                      Live demo ↗
                    </a>
                  )}
                </article>
              ))}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
