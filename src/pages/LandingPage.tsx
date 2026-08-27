import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import Footer from "../components/Footer";

const LandingPage = () => {
  const navigate = useNavigate();

  const menu: { label: string; path?: string }[] = [
    { label: "Litt om meg", path: "/about" },
    { label: "Ting jeg har laget", path: "/kniting" },
    { label: "CV" },
    { label: "Mine reiser", path: "/photoAlbum" },
  ];

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
            <span>Hei jeg heter Aurora.</span>
          </p>
          <p>
            <span>
              Jeg er på sisteåret mitt på informatikk master ved NTNU.
            </span>
          </p>
          <p>
            <span>Velkommen til min hjemmeside!</span>
          </p>
          <p>
            <span>Her lar jeg kreativiteten spire...</span>
          </p>
        </div>

        <img
          className="portrait"
          src="/images/landingPage/aurora.png"
          alt="Aurora outdoors"
        />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
