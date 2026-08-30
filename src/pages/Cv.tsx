import "./Cv.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

type CvEntry = {
  title: string;
  detail?: string;
  meta: string;
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
    detail: "Interaksjonsdesign, spill og læringsteknologi",
    meta: "Trondheim, aug '25 - jun '27",
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
    detail:
      "Utplassert hos Komplett hvor vi utviklet en løsning for videostrømming basert på WHEP Url og SignalR. (Har taushetsplikt rundt innholdet)",
    meta: "Oslo, sommer '26",
  },
  {
    title: "Clave Consulting - Utvikler",
    detail:
      "Utplassert hos Global Transport Solutions og Marinetrans hvor vi effektiviserte fakturahåndtering med fokus på brukervennlighet og bruk av OCR.",
    meta: "Oslo, sommer '25",
  },
  {
    title: "Bekkestua Sko - Butikkmedarbeider",
    meta: "Bærum, nov '19 - aug '20",
  },
];

const prosjekter: CvEntry[] = [
  {
    title: "kennedy.no",
    detail: "Egen nettside",
    meta: "Trondheim, sommer '23",
  },
  {
    title: "Studentersamfundet i Trondheim",
    detail: "Barista og Kaféansvarlig",
    meta: "Trondheim, aug '21 - '24",
  },
  {
    title: "Bachelorprosjektet",
    detail: "For Zedge hvor vi laget OpenEmojiPlatform",
    meta: "Trondheim, jan '24 - jun '24",
  },
  {
    title: "Online Linjeforening",
    detail: "Bedriftkomiteen",
    meta: "Trondheim, jan '22 - aug '23",
  },
  {
    title: "Øyafestivalen",
    detail: "Opprigg og nedrigg",
    meta: "Oslo, aug '22 & aug '25",
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
        {entry.detail && <p className="cv-entry-detail">{entry.detail}</p>}
        <span className="cv-entry-meta">{entry.meta}</span>
      </div>
    ))}
  </section>
);

const Cv = () => {
  return (
    <div className="cv">
      <Navbar />
      <header className="cv-header">
        <h1 className="cv-title">CV</h1>
        <p className="cv-name">Aurora Kennedy, 15.06.2000</p>
        <p className="cv-intro">{intro}</p>
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
