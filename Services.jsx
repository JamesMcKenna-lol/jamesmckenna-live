const Services = ({ onJump }) => {
  const services = [
    { icon: 'camera', title: '9x Broadcast Cameras', blurb: 'Professional-grade multi-camera setup for dynamic, cinematic coverage of any event or production.' },
    { icon: 'mic', title: 'Studio Audio Suite', blurb: 'Complete microphone array delivering pristine audio capture for every voice and sound.' },
    { icon: 'sliders', title: 'vMix & Vision Mixing', blurb: 'Real-time live switching, mixing, and streaming with professional vision mixer expertise.' },
    { icon: 'radio', title: 'Creative Live Streams', blurb: 'Engaging, interactive broadcast experiences that captivate audiences and elevate your content.' },
  ];
  return (
    <section id="services">
      <div className="container">
        <div className="eyebrow">BROADCAST SERVICES</div>
        <h2>Drumgeeny Lane Productions</h2>
        <p className="section-sub">
          A complete broadcast service delivering professional, creative live streaming and
          event production with cutting-edge equipment and expertise.
        </p>
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="ic"><Icon name={s.icon} size={20}/></div>
              <h4>{s.title}</h4>
              <p>{s.blurb}</p>
            </div>
          ))}
        </div>
        <div className="services-cta">
          <h3>Elevate Your Live Production</h3>
          <p>
            From corporate events to creative broadcasts, Drumgeeny Lane Productions brings
            professional-grade equipment, technical expertise, and creative vision to transform
            your live content into an unforgettable experience.
          </p>
          <a className="btn btn-primary" onClick={() => onJump('contact')}>
            Discuss Your Project <Icon name="arrowUR" size={16}/>
          </a>
        </div>
      </div>
    </section>
  );
};

window.Services = Services;
