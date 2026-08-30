import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const menu = [
  { label: "Hjem", path: "/" },
  { label: "Om meg", path: "/about" },
  { label: "Prosjekter", path: "/kniting" },
  { label: "CV", path: "/cv" },
  { label: "Bildekarusell", path: "/photoAlbum" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav className="site-navbar">
      <ul className="site-navbar-menu">
        {menu.map((item) => (
          <li key={item.label}>
            <button
              className={pathname === item.path ? "active" : ""}
              onClick={() => navigate(item.path)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
