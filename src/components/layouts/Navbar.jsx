import { LINKS } from '../../utils/constants';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="navbar-title">Linked Post Dashboard</div>
        <div className="navbar-links">
          <a
            href={LINKS.GITHUB_REPO}
            target="_blank"
            rel="noreferrer"
            className="navbar-button"
          >
            Source Code
          </a>
          <a
            href={LINKS.LIVE_DEMO}
            target="_blank"
            rel="noreferrer"
            className="navbar-button"
          >
            Live Demo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
