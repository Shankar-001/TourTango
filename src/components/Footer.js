import './FooterStyles.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>TourTango</h1>
          <p>Discover Your Favorite Destination.</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/_.witch3r/" target="_blank">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/praveen-shankar-ba289a212/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/Shankar-001" target="_blank">
            <i className="fa-brands fa-github-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="https://github.com/Shankar-001" target="_blank">
            GitHub
          </a>

          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/"> Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
