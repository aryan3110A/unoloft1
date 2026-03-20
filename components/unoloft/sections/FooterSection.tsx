export default function FooterSection() {
  return (
    <footer>
      <div className="ft-main">
        <div>
          <div className="nav-logo">
            <div className="logo-sq">U</div>
            <span
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#fff",
                marginLeft: 10,
              }}
            >
              Unoloft
            </span>
          </div>
          <p className="ft-desc">
            Ahmedabad&apos;s most premium paying guest accommodation for boys
            and girls. Your home, away from home — since 2019.
          </p>
          <div className="ft-socs">
            <a href="#" className="ft-soc">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="#" className="ft-soc">
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a href="#" className="ft-soc">
              <i className="fa-brands fa-whatsapp" />
            </a>
            <a href="#" className="ft-soc">
              <i className="fa-brands fa-youtube" />
            </a>
          </div>
        </div>

        <div className="ft-col">
          <h4>Navigate</h4>
          <ul className="ft-lks">
            <li>
              <a href="#pg-intro">About Us</a>
            </li>
            <li>
              <a href="#facilities">Facilities</a>
            </li>
            <li>
              <a href="#rooms">Rooms</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="ft-col">
          <h4>Our Homes</h4>
          <ul className="ft-lks">
            <li>
              <a href="#pg-intro">Aster Homes (Boys)</a>
            </li>
            <li>
              <a href="#pg-intro">Iris Homes (Girls)</a>
            </li>
            <li>
              <a href="#rooms">Single Room</a>
            </li>
            <li>
              <a href="#rooms">Double Sharing</a>
            </li>
            <li>
              <a href="#rooms">Triple Sharing</a>
            </li>
          </ul>
        </div>

        <div className="ft-col">
          <h4>Contact</h4>
          <ul className="ft-lks">
            <li>
              <a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a>
            </li>
            <li>
              <a href="https://wa.me/91XXXXXXXXXX">WhatsApp Us</a>
            </li>
            <li>
              <a href="mailto:hello@unoloft.com">hello@unoloft.com</a>
            </li>
            <li>
              <a href="#map-sec">Ahmedabad, Gujarat</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-bar">
        <div>© 2025 Unoloft. All rights reserved.</div>
        <div className="ft-bar-lks">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
