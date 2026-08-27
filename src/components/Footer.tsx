import "./Footer.css";
import { GithubIcon, LinkedinIcon, MailIcon } from "../Icons";

const Footer = () => {
  return (
    <footer className="footer">
      <svg
        className="footer-wave"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,30 C150,60 350,0 600,20 C850,40 1050,0 1200,25 L1200,60 L0,60 Z"
          fill="var(--color-cosmicLatte)"
        />
      </svg>

      <div className="footer-links">
        <a
          href="mailto:aurora.kennedy@icloud.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Mail"
          className="footer-email"
        >
          <MailIcon />
        </a>

        <a
          href="https://github.com/aurorakennedy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="footer-icon"
        >
          <GithubIcon />
        </a>

        <a
          href="https://www.linkedin.com/in/aurora-kennedy-42208b290/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="footer-icon"
        >
          <LinkedinIcon />
        </a>
      </div>

      <p className="footer-copyright">
        © {new Date().getFullYear()} Aurora Kennedy
      </p>
    </footer>
  );
};

export default Footer;
