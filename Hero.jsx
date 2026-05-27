const Hero = ({ onJump }) => (
  <section id="hero">
    <div className="hero-grid"></div>
    <div className="hero-sun"></div>
    <div className="hero-scanlines"></div>

    <div className="hero-live"><span className="d"></span>ON&nbsp;AIR</div>

    <div className="hero-inner">
      <div className="hero-location">DUBLIN, IRELAND · 53.34° N</div>
      <h1 className="hero-name">James McKenna</h1>
      <h2 className="hero-title">
        Senior AV Technician &amp; <strong>Broadcast Innovator</strong>
      </h2>
      <p className="hero-bio">
        Pioneering AI-enhanced broadcast technologies at Fin (previously Intercom). Vision mixing, livestream
        direction, and cutting-edge production expertise — including agentic broadcast tooling
        at <a href="https://way-farer.io" target="_blank" rel="noopener" style={{ color: 'var(--neon-cyan)' }}>way-farer.io</a>.
      </p>
      <div className="hero-ctas">
        <a className="btn btn-primary" onClick={() => onJump('contact')}>
          Get in Touch <Icon name="arrowUR" size={16}/>
        </a>
        <a className="btn btn-secondary" onClick={() => onJump('work')}>View Work</a>
      </div>
    </div>

    <div className="hero-scroll-hint">
      <span>SCROLL</span>
      <Icon name="chevronDown" size={16}/>
    </div>
  </section>
);

window.Hero = Hero;
