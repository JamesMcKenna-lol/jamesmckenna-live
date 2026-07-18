const Contact = () => (
  <section id="contact">
    <div className="container contact-inner">
      <div className="eyebrow" style={{ justifyContent: 'center', display: 'flex' }}>LET'S CONNECT</div>
      <h2>Ready to Create Something Exceptional?</h2>
      <p>
        Whether you're looking for expert AV production, innovative broadcast solutions, or
        collaborative opportunities in AI-enhanced media technology.
      </p>
      <div className="contact-links">
        <a className="btn btn-primary" href="mailto:hi@jamesmckenna.live">
          <Icon name="mail" size={16}/> hi@jamesmckenna.live
        </a>
        <a className="btn btn-secondary" href="https://www.linkedin.com/in/james-mckenna-99a0468a/" target="_blank" rel="noopener">
          <Icon name="linkedin" size={16}/> LinkedIn
        </a>
      </div>
      <p className="contact-note">
        BASED IN DUBLIN, IRELAND&nbsp;·&nbsp;AVAILABLE FOR FREELANCE
      </p>
    </div>
  </section>
);

window.Contact = Contact;
