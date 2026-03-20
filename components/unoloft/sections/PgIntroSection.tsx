export default function PgIntroSection() {
  return (
    <section id="pg-intro">
      <div className="sh rv">
        <div className="s-ey">Who We Are</div>
        <h2 className="s-t">
          Two Homes, <em>One Family</em>
        </h2>
        <p className="s-sub">
          Safe, premium, and vibrant co-living spaces crafted for
          Ahmedabad&apos;s young professionals and students.
        </p>
      </div>

      <div className="pg-grid">
        <div
          className="pg-item boys-only rv"
          style={{ transitionDelay: ".05s" }}
        >
          <div className="pg-tag tb pg-tag-above">
            <i className="fa-solid fa-mars" /> For Boys
          </div>

          <div className="pg-card">
            <img
              src="/rooms/IMG-20260201-WA0025.jpg"
              alt="Aster Homes Boys PG"
            />
            <div className="pg-ov" />
            <div className="pg-con">
              <div className="pg-name">Aster Homes</div>
              <p className="pg-desc">
                A modern haven built for the ambitious man. Structured,
                comfortable, and packed with everything you need to thrive.
              </p>
              <div className="pg-feats">
                <span className="pg-feat">Single &amp; Sharing Rooms</span>
                <span className="pg-feat">Gym</span>
                <span className="pg-feat">Study Lounge</span>
                <span className="pg-feat">24/7 Access</span>
              </div>
              <a href="#contact" className="pg-link">
                Book a Visit <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>

        <div
          className="pg-item girls-only rv"
          style={{ transitionDelay: ".12s" }}
        >
          <div className="pg-tag tg pg-tag-above">
            <i className="fa-solid fa-venus" /> For Girls
          </div>

          <div className="pg-card">
            <img
              src="/rooms/IMG-20260201-WA0022.jpg"
              alt="Iris Homes Girls PG"
            />
            <div className="pg-ov" />
            <div className="pg-con">
              <div className="pg-name">Iris Homes</div>
              <p className="pg-desc">
                Elegantly designed for safety and sisterhood. A warm, secure
                sanctuary where women grow and belong.
              </p>
              <div className="pg-feats">
                <span className="pg-feat">Lady Warden</span>
                <span className="pg-feat">Premium Interiors</span>
                <span className="pg-feat">CCTV</span>
                <span className="pg-feat">Meals Included</span>
              </div>
              <a href="#contact" className="pg-link">
                Book a Visit <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
