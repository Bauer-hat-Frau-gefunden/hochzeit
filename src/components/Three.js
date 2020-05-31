import React from 'react'
import pic04 from '../assets/images/pic04.jpg'
import {Link as ScrollLink} from 'react-scroll'
import Fade from 'react-reveal/Fade'

const Three = props => (
    <section
        id="three"
        className="spotlight style3 left inactive"
        style={{backgroundImage: `url(${pic04})`}}
    >
    <span className="image fit main bottom">
      <img src={pic04} alt=""/>
    </span>
        <Fade left big>
            <div className="content">
                <header>
                    <h2>Tagesablauf</h2>
                </header>
                <b>12.12.2020</b>
                <ul>
                    <li>13:00 Uhr - Trauung Bergkirche</li>
                    <li>14:00 Uhr - Gruppenbild vor der Bergkirche</li>
                    <li>15:00 Uhr - Stehempfang beim Naturfreundehaus</li>
                    <li>16:30 Uhr - Beziehen der Zimmer</li>
                    <li>18:00 Uhr - Abendessen</li>
                    <li>00:00 Uhr - Mitternachtssnack</li>
                </ul>
                <b>13.12.2020</b>
                <ul>
                    <li>08:00 - 10:00 Uhr - Gemeinsames Frühstück im Naturfreundehaus</li>
                </ul>
            </div>
        </Fade>
        <ScrollLink
            to="wunsch"
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
