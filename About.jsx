const About = () => (
  <section id="about">
    <div className="container about-grid">
      <div className="about-text">
        <div className="eyebrow">ABOUT</div>
        <h2>Transforming Broadcast Technology</h2>
        <p>
          As Senior AV Technician at <strong>Fin</strong> (previously Intercom) in Dublin, I'm pushing the
          boundaries of what's possible in live production and broadcast technology.
        </p>
        <p>
          My expertise spans studio production equipment mastery, advanced software like
          vMix, and pioneering AI-enhanced broadcast capabilities. I bring dynamic, engaging
          visual experiences to life while exploring the cutting edge of media innovation.
        </p>
        <p>
          From vision mixing to livestream direction, my passion extends beyond work —
          constantly refining media strategies and developing new technological solutions.
        </p>
        <div className="about-cards">
          <div className="feature-card">
            <div className="ic"><Icon name="tower" size={18}/></div>
            <h4>Vision Mixing</h4>
            <p>Expert live production and seamless multi-camera switching.</p>
          </div>
          <div className="feature-card">
            <div className="ic"><Icon name="film" size={18}/></div>
            <h4>Livestream Direction</h4>
            <p>Dynamic content creation for global audiences.</p>
          </div>
          <div className="feature-card">
            <div className="ic"><Icon name="sparkles" size={18}/></div>
            <h4>AI Innovation</h4>
            <p>Next-gen broadcast capabilities, powered by agents.</p>
          </div>
        </div>
      </div>
      <div className="about-photo">
        <img src="./assets/james-mckenna.png" alt="James McKenna"/>
        <div className="caption">
          <span>DUBLIN&nbsp;·&nbsp;2025</span>
          <span>JM-001</span>
        </div>
      </div>
    </div>
  </section>
);

window.About = About;
