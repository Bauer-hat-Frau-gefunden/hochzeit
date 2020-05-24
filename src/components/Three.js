import React from 'react'
import Kirche from '../assets/images/Kirche.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const Three = props => (
  <section
    id="three"
    className="spotlight style3 left inactive"
    style={{ backgroundImage: `url(${Kirche})` }}
  >
    <span className="image fit main bottom">
      <img src={Kirche} alt="" />
    </span>
    <Fade left big>
      <div className="content">
        <header>
          <h2>Tagesablauf</h2>
        </header>
          <ul>
            <li>13:00 Uhr - Trauung Bergkirche</li>
            <li>14:00 Uhr - Gruppenbild vor der Bergkirche</li>
            <li>15:00 Uhr - Stehempfang beim Naturfreundehaus</li>
            <li>16:30 Uhr - Beziehen der Zimmer</li>
            <li>18:00 Uhr - Abendessen</li>
          </ul>
      </div>
    </Fade>
    <ScrollLink
      to="four"
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

export default Three
