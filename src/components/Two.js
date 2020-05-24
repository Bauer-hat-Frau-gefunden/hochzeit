import React from 'react'
import pic03 from '../assets/images/pic03.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const Two = props => (
  <section
    id="two"
    className="spotlight style2 right inactive"
    style={{ backgroundImage: `url(${pic03})` }}
  >
    <span className="image fit main">
      <img src={pic03} alt="" />
    </span>
    <Fade right big>
      <div className="content">
        <header>
          <h2>Unsere schönen Locations</h2>
        </header>
        <p>
          Da wir zwei unterschiedliche locations haben, haben wir weitere Informationen und
          Wegbeschreibungen für euch vorbereitet. Durch ein Klick auf den Button könnt Ihr diese einsehen.
        </p>
        <ul className="actions">
          <li>
            <a href="/locations" className="button">
              Mehr details
            </a>
          </li>
        </ul>
      </div>
    </Fade>
    <ScrollLink
      to="three"
      className="goto-next"
      activeClass="active"
      smooth={true}
      offset={50}
      duration={1500}
      spy={true}
    >
      Next
    </ScrollLink>
  </section>
)

export default Two
