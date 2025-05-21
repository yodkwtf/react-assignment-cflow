import { LINKS } from '../../utils/constants';

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Created by Durgesh -{' '}
        <a href={LINKS.PORTFOLIO} target="_blank" rel="noreferrer">
          yodkwtf.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
