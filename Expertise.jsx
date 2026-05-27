const Expertise = () => {
  const skills = [
    { name: 'vMix', pct: 95 },
    { name: 'Studio Equipment', pct: 90 },
    { name: 'Live Production', pct: 95 },
    { name: 'AI Integration', pct: 85 },
    { name: 'Media Management', pct: 90 },
    { name: 'Broadcast Software', pct: 92 },
  ];

  const fillsRef = React.useRef([]);

  React.useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const w = e.target.dataset.width;
          requestAnimationFrame(() => { e.target.style.width = w + '%'; });
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    fillsRef.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="expertise">
      <div className="container">
        <div className="eyebrow">EXPERTISE</div>
        <h2>Technical Capabilities</h2>
        <p className="section-sub">
          A mix of hardware mastery, broadcast-software fluency, and ongoing exploration of
          AI-driven production tooling.
        </p>
        <div className="skills-grid">
          {skills.map((s, i) => (
            <div className="skill" key={s.name}>
              <div className="skill-header">
                <span>{s.name}</span>
                <span className="pct">{s.pct}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill"
                     ref={(el) => (fillsRef.current[i] = el)}
                     data-width={s.pct}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Expertise = Expertise;
