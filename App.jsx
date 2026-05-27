const { useState, useEffect, useRef } = React;

const App = () => {
  const [active, setActive] = useState('hero');

  // Scroll-spy
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const jump = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <>
      <Nav activeSection={active} onJump={jump}/>
      <main>
        <Hero onJump={jump}/>
        <About/>
        <Work/>
        <Services onJump={jump}/>
        <Expertise/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
