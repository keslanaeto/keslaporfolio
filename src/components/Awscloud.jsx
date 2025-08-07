import React from 'react'

const CloudJourney = () => {
  return (
    <div>
      <section id="cloud" className="cloud-section">
  <h2 className="section-title">My Cloud Journey</h2>
  <p className="cloud-description">
    I'm currently learning AWS Cloud Computing and documenting my journey. I work on projects, complete certifications, and share lessons along the way.
  </p>

  {/* YouTube Sub-section */}
  <div className="youtube-subsection">
    <h3 className="subsection-title">Follow My Journey on YouTube</h3>
    <p className="youtube-description">
      I share bite-sized videos about Cloud basics, AWS, projects, and tips for beginners. Subscribe and join the journey!
    </p>

    <a
      href="https://www.youtube.com/@yourchannel"
      target="_blank"
      rel="noopener noreferrer"
      className="btn"
    >
      Visit YouTube Channel
    </a>
  </div>
</section>

    </div>
  )
}

export default CloudJourney
