import React from 'react'
import pic09 from '../assets/images/pic09.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const Wunsch = props => (
  <section
    id="two"
    className="spotlight style2 right inactive"
    style={{ backgroundImage: `url(${pic09})` }}
  >
    <span className="image fit main">
      <img src={pic09} alt="" />
    </span>
    <Fade right big>
      <div className="content">
        <header>
          <h2>Geschenk-Wunsch</h2>
        </header>
        <p>
          Da wir bereits von einem kompletten Haushalt umgeben sind, würden wir uns über ein Geldgeschenk sehr freuen.
        </p>
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

export default Wunsch
