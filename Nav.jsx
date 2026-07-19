const Nav = ({ activeSection, onJump, home = true }) => {
  const [open, setOpen] = React.useState(false);
  const links = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'services', label: 'Services' },
    { id: 'expertise', label: 'Expertise' },
  ];
  // On the home page, section links smooth-scroll. On sub-pages, they jump
  // back to the corresponding anchor on the home page.
  const go = (id) => {
    setOpen(false);
    if (home) onJump(id);
    else window.location.href = 'index.html#' + id;
  };
  const logo = () => { home ? onJump('hero') : (window.location.href = 'index.html'); };
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="nav-logo" onClick={logo} style={{ cursor: 'pointer' }}>
          <img src="./assets/jm-logo.svg" alt="JM"/>
          <span>JAMES&nbsp;MCKENNA</span>
        </a>
        <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen(o => !o)}>
          <Icon name="menu" size={22}/>
        </button>
        <ul className={'nav-links' + (open ? ' open' : '')}>
          {links.map(l => (
            <li key={l.id}>
              <a className={home && activeSection === l.id ? 'active' : ''} onClick={() => go(l.id)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a className={activeSection === 'projects' ? 'active' : ''} href="projects.html">Projects</a>
          </li>
          <li><a className="nav-cta" onClick={() => go('contact')}>Get in Touch</a></li>
        </ul>
      </div>
    </nav>
  );
};

window.Nav = Nav;
