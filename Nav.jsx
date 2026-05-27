const Nav = ({ activeSection, onJump }) => {
  const [open, setOpen] = React.useState(false);
  const links = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'services', label: 'Services' },
    { id: 'expertise', label: 'Expertise' },
  ];
  const click = (id) => { setOpen(false); onJump(id); };
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="nav-logo" onClick={() => onJump('hero')} style={{ cursor: 'pointer' }}>
          <img src="./assets/jm-logo.svg" alt="JM"/>
          <span>JAMES&nbsp;MCKENNA</span>
        </a>
        <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen(o => !o)}>
          <Icon name="menu" size={22}/>
        </button>
        <ul className={'nav-links' + (open ? ' open' : '')}>
          {links.map(l => (
            <li key={l.id}>
              <a className={activeSection === l.id ? 'active' : ''} onClick={() => click(l.id)}>{l.label}</a>
            </li>
          ))}
          <li><a className="nav-cta" onClick={() => click('contact')}>Get in Touch</a></li>
        </ul>
      </div>
    </nav>
  );
};

window.Nav = Nav;
