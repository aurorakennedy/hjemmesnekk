import "./Cv.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

type CvEntry = {
  title: string;
  meta: string;
  detail?: string;
};

type TechEntry = {
  name: string;
  tag: string;
};

const intro =
  "Jeg er nysgjerrig problemløser som liker å bryne meg på oppgaver hvor det er rom for kreativitet. Med en strukturert og pliktoppfyllende tilnærming ønsker jeg å forstå det reelle problemet før jeg angriper en løsning. Jeg trives godt når jeg får bevege meg mellom mennesker, teknologi og funksjonalitet, og er opptatt av å lytte, lære og skape gode løsninger sammen med andre. Utenfor jobb finner du meg gjerne i naturen, med et strikkeprosjekt eller sammen med venner og familie!";

const utdanning: CvEntry[] = [
  {
    title: "NTNU - Master i Informatikk",
    meta: "Trondheim, aug '25 - jun '27",
    detail: "Interaksjonsdesign, spill og læringsteknologi",
  },
  {
    title: "UPV - Master i Informatikk",
    meta: "Valencia, jan '26 - jun '26",
  },
  {
    title: "NTNU - Bachelor i Informatikk",
    meta: "Trondheim, aug '21 - jun '24",
  },
  {
    title: "AUEB - Informatikk",
    meta: "Athen, okt '23 - feb '24",
  },
  {
    title: "Møre Folkehøgskule - Friluftsliv",
    meta: "Ørsta, aug '20 - mai '21",
  },
];

const erfaring: CvEntry[] = [
  {
    title: "Clave Consulting - Utvikler",
    meta: "Oslo, sommer '26",
    detail:
      "Utplassert hos Komplett hvor vi utviklet en løsning for videostrømming basert på WHEP Url og SignalR. (Har taushetsplikt rundt innholdet)",
  },
  {
    title: "Clave Consulting - Utvikler",
    meta: "Oslo, sommer '25",
    detail:
      "Utplassert hos Global Transport Solutions og Marinetrans hvor vi effektiviserte fakturahåndtering med fokus på brukervennlighet og bruk av OCR.",
  },
  {
    title: "Bekkestua Sko - Butikkmedarbeider",
    meta: "Bærum, nov '19 - aug '20",
  },
];

const prosjekter: CvEntry[] = [
  {
    title: "kennedy.no",
    meta: "Trondheim, sommer '23",
    detail: "Egen nettside",
  },
  {
    title: "Studentersamfundet i Trondheim",
    meta: "Trondheim, aug '21 - '24",
    detail: "Barista og Kaféansvarlig",
  },
  {
    title: "Bachelorprosjektet",
    meta: "Trondheim, jan '24 - jun '24",
    detail: "For Zedge hvor vi laget OpenEmojiPlatform",
  },
  {
    title: "Online Linjeforening",
    meta: "Trondheim, jan '22 - aug '23",
    detail: "Bedriftkomiteen",
  },
  {
    title: "Øyafestivalen",
    meta: "Oslo, aug '22 & aug '25",
    detail: "Opprigg og nedrigg",
  },
];

const teknologier: TechEntry[] = [
  { name: "TypeScript", tag: "Clave, NTNU" },
  { name: "C#", tag: "Clave" },
  { name: ".NET", tag: "Clave" },
  { name: "CSS", tag: "Clave, NTNU, Fritid" },
  { name: "React.js", tag: "Clave, Fritid" },
  { name: "Kotlin", tag: "Bachelorprosjekt" },
  { name: "Java", tag: "NTNU" },
  { name: "Python", tag: "NTNU" },
  { name: "HTML", tag: "NTNU" },
  { name: "SQL", tag: "NTNU" },
  { name: "JavaScript", tag: "NTNU" },
  { name: "Tailwind", tag: "Fritid" },
  { name: "Astro", tag: "Fritid" },
];

const CvSection = ({
  title,
  entries,
}: {
  title: string;
  entries: CvEntry[];
}) => (
  <section className="cv-section">
    <h2 className="cv-section-title">{title}</h2>
    {entries.length === 0 && <p className="cv-empty">Kommer snart.</p>}
    {entries.map((entry) => (
      <div className="cv-entry" key={entry.title}>
        <h3 className="cv-entry-title">{entry.title}</h3>
        <span className="cv-entry-meta">{entry.meta}</span>
        {entry.detail && <p className="cv-entry-detail">{entry.detail}</p>}
      </div>
    ))}
  </section>
);

const Cv = () => {
  return (
    <div className="cv">
      <Navbar />
      <header className="cv-header">
        <div className="cv-header-text">
          <h1 className="cv-title">CV</h1>
          <p className="cv-name">Aurora Kennedy, 15.06.2000</p>
          <p className="cv-intro">{intro}</p>
        </div>
        <div className="cv-img-frame">
          <img
            className="cv-img"
            src="/images/cv/cv.jpeg"
            alt="CV bilde av Aurora"
          />
        </div>
      </header>

      <section className="cv-content">
        <div className="cv-columns">
          <CvSection title="Utdanning" entries={utdanning} />
          <CvSection title="Erfaring" entries={erfaring} />
        </div>

        <div className="cv-columns">
          <CvSection title="Prosjekter og verv" entries={prosjekter} />

          <section className="cv-section">
            <h2 className="cv-section-title">Teknologier</h2>
            <div className="cv-tech-list">
              {teknologier.map((tech) => (
                <span className="cv-tech-item" key={tech.name}>
                  <strong>{tech.name}</strong> <em>{tech.tag}</em>
                </span>
              ))}
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cv;
