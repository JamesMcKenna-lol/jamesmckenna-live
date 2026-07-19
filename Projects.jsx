const projectsData = [
  {
    name: 'way-farer.io',
    tagline: 'AI-powered travel planning',
    status: 'Now live',
    accent: 'cool',
    href: 'https://way-farer.io',
    image: './assets/wayfarer-hero.png',
    summary: [
      'Way-farer is an AI travel planner that turns a rough idea into a real, day-by-day itinerary. Instead of juggling tabs, spreadsheets and screenshots, you describe the trip you want and an AI co-pilot helps shape it — suggesting places to stay, things to do, and a sensible order to do them in.',
      'The whole experience is calendar-first: your trip is a timeline of drag-and-drop blocks you can rearrange in seconds, with real-time timezone awareness so flights, check-ins and plans always line up. It is designed to feel native and effortless on an iPhone.',
    ],
    features: [
      { icon: 'sparkles', title: 'AI Co-Pilot', body: 'Suggests activities, restaurants and stays, then builds a day-by-day plan around them.' },
      { icon: 'sliders', title: 'Calendar-first', body: 'Drag-and-drop time blocks make reshaping a trip fast and visual.' },
      { icon: 'radio', title: 'Timezone-aware', body: 'Flights, transfers and plans stay in sync across time zones in real time.' },
      { icon: 'zap', title: 'Airport transfers', body: 'Co-pilot plans the door-to-door legs, not just the headline destinations.' },
      { icon: 'monitor', title: 'Native feel', body: 'A polished, touch-first experience built for the phone in your pocket.' },
      { icon: 'cpu', title: 'Smart organisation', body: 'Trips, flights and stays kept tidy in one place, ready when you travel.' },
    ],
    tech: ['Next.js', 'TypeScript', 'Supabase', 'AI', 'Vercel'],
  },
];

const ProjectCard = ({ p }) => (
  <article className="proj">
    {p.image
      ? <a className="proj-shot" href={p.href} target="_blank" rel="noopener">
          <img src={p.image} alt={p.name + ' — landing page'} loading="lazy"/>
        </a>
      : <div className={'proj-preview ' + p.accent}>
          <span className="proj-preview-name">{p.name}</span>
        </div>}
    <div className="proj-body">
      <div className="proj-status">
        <span className="proj-dot"></span>{p.status}
      </div>
      <h2 className="proj-name">{p.name}</h2>
      <p className="proj-tagline">{p.tagline}</p>
      {p.summary.map((para, i) => <p className="proj-summary" key={i}>{para}</p>)}

      <div className="feature-grid">
        {p.features.map((f, i) => (
          <div className="feature" key={i}>
            <div className="feature-icon"><Icon name={f.icon} size={20}/></div>
            <div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="proj-foot">
        <div className="tags">
          {p.tech.map((t, i) => <span className="cool" key={i}>{t}</span>)}
        </div>
        {p.href && (
          <a className="btn btn-primary" href={p.href} target="_blank" rel="noopener">
            Visit {p.name} <Icon name="arrowUR" size={16}/>
          </a>
        )}
      </div>
    </div>
  </article>
);

const Projects = () => (
  <>
    <Nav activeSection="projects" onJump={() => {}} home={false}/>
    <main className="subpage">
      <section className="subpage-head">
        <div className="container">
          <div className="eyebrow">CURRENTLY BUILDING</div>
          <h1 className="subpage-title">Projects</h1>
          <p className="section-sub">
            Things I'm actively building outside the broadcast gallery — where AI, product
            design and a lot of late nights meet. Live and evolving.
          </p>
        </div>
      </section>

      <section className="subpage-body">
        <div className="container proj-list">
          {projectsData.map((p, i) => <ProjectCard p={p} key={i}/>)}
        </div>
      </section>
    </main>
    <Footer/>
  </>
);

ReactDOM.createRoot(document.getElementById('root')).render(<Projects/>);
