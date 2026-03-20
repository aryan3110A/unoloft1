export default function ContactSection() {
  return (
    <section id="contact">
      <div className="con-dot" />
      <div className="con-cen rv">
        <div className="s-ey">Contact Us</div>
        <h2 className="s-t">
          Ready to <em>Move In?</em>
        </h2>
        <p className="s-sub">
          Reach out instantly via WhatsApp or call us directly. We&apos;d love
          to welcome you home!
        </p>

        <div className="con-cards">
          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi!%20Interested%20in%20Unoloft%20PG."
            target="_blank"
            className="con-cd"
            rel="noreferrer"
          >
            <div className="cd-ic cd-wa">
              <i className="fa-brands fa-whatsapp" />
            </div>
            <h3>WhatsApp Us</h3>
            <p>Chat instantly — availability, pricing, tour</p>
            <div className="cd-num">+91 XXXXX XXXXX</div>
          </a>

          <a href="tel:+91XXXXXXXXXX" className="con-cd">
            <div className="cd-ic cd-ph">
              <i className="fa-solid fa-phone" />
            </div>
            <h3>Call Us Now</h3>
            <p>Speak with our team, Mon–Sat 9 AM–8 PM</p>
            <div className="cd-num">+91 XXXXX XXXXX</div>
          </a>
        </div>

        <div className="con-ex">
          <div className="con-ext">
            <i className="fa-solid fa-clock" /> Responds within 30 mins
          </div>
          <div className="con-ext">
            <i className="fa-solid fa-eye" /> Virtual tours available
          </div>
          <div className="con-ext">
            <i className="fa-solid fa-language" /> Hindi, English &amp; Gujarati
          </div>
        </div>
      </div>
    </section>
  );
}
