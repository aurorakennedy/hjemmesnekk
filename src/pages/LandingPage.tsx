import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

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
      {/* Full-width collage — one layout for every screen size */}
      <div className="collage">
        {/* Orange grid band behind the middle */}
        <img
          className="grid-band"
          src="/images/landingPage/backgroundGrid.png"
          alt=""
        />

        {/* Titles */}
        <h1 className="title title--aurora">Aurora</h1>
        <h1 className="title title--kennedy">Kennedy</h1>
        {/* Hero cut-out photo */}
        <img
          className="fly"
          src="/images/landingPage/auroraFly.png"
          alt="Aurora dancing on the rocks by the sea"
        />
        {/* Menu, right-aligned under the title */}
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

        {/* Intro text boxes */}
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

        {/* Wall portrait, tilted */}
        <img
          className="portrait"
          src="/images/landingPage/aurora.png"
          alt="Aurora outdoors"
        />
      </div>
    </div>
  );
};

export default LandingPage;
