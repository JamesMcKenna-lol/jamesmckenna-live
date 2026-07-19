const Work = () => {
  const projects = [
    {
      img: './assets/vision-mixing.png',
      title: 'Vision Mixing & Live Production',
      blurb: 'Professional vision mixing for live broadcasts, managing multi-camera setups and real-time switching with precision and creativity.',
      tags: [['Vision Mixing'], ['Live Production'], ['Broadcast']],
    },
    {
      img: './assets/robotic-tape.jpg',
      title: 'Robotic LTO4 PetaSite',
      blurb: 'Spearheaded media transfer operations, enhancing storage efficiency and data integrity across enterprise-scale robotic tape systems.',
      tags: [['Media Transfer'], ['Data'], ['Enterprise']],
    },
    {
      img: './assets/home-studio.jpg',
      title: 'Home Studio Innovation Lab',
      blurb: 'Personal media management exploration. Constantly refining asset strategies and testing cutting-edge broadcast technologies.',
      tags: [['Media Management'], ['R&D'], ['Innovation']],
    },
  ];

  const featured = {
    img: './assets/wayfarer-hero.png',
    title: 'way-farer.io',
    blurb: 'AI-powered travel itinerary planner. Calendar-first design with drag-and-drop blocks, real-time timezone awareness, AI co-pilot suggestions, and a native touch experience built for iPhone.',
    tags: [['Agentic AI', 'cool'], ['way-farer.io', 'cool'], ['Featured', 'hot']],
    href: 'projects.html',
  };

  return (
    <section id="work">
      <div className="container">
        <div className="eyebrow">SELECTED WORK</div>
        <h2>Featured Projects</h2>
        <p className="section-sub">
          A showcase of technical expertise and creative vision across broadcast technology
          and media production — including a few experiments where AI joins the gallery.
        </p>
        <div className="projects-grid">
          {[featured, ...projects].map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-img">
                <img src={p.img} alt={p.title}/>
                {p.href
                  ? <a className="project-link" href={p.href}><Icon name="arrowUR" size={16}/></a>
                  : <a className="project-link"><Icon name="arrowUR" size={16}/></a>}
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.blurb}</p>
                <div className="tags">
                  {p.tags.map(([t, cls], j) => <span key={j} className={cls || ''}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a className="btn btn-secondary" href="projects.html">
            View Projects <Icon name="arrowUR" size={16}/>
          </a>
        </div>
      </div>
    </section>
  );
};

window.Work = Work;
