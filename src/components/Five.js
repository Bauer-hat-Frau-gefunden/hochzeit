import React from 'react'
import Fade from 'react-reveal/Fade'

const Five = props => (
    <section id="five" className="wrapper style2 special fade inactive">
        <Fade duration={2500}>
            <div className="container">
                <header>
                    <h2>Anmeldung</h2>
                    <p>Wir haben das komplette Haus mit Übernachtungsmöglichkeiten gemietet für eine
                        ausgelassene Feier an diesem schönen Tag. Wir würden uns sehr freuen, wenn ihr
                        über Nacht bleibt und wir somit am nächsten Tag noch ein schönes gemeinsames
                        Frühstück veranstalten dürfen. Für unsere Planung bitten wir um Anmeldung bzw.
                        Abmeldung über den untenstehenden button.</p>
                </header>
                <a href="/hochzeit/anmeldung" className="button primary">
                    Zur Anmeldung
                </a>
            </div>
        </Fade>
    </section>
)
export default Five
