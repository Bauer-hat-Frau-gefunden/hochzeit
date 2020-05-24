import React from 'react'
import Fade from 'react-reveal/Fade'

const Five = props => (
    <section id="five" className="wrapper style2 special fade inactive">
        <Fade duration={2500}>
            <div className="container">
                <header>
                    <h2>Anmeldung</h2>
                    <p>Um die Übernachtungsplätze rechtzeitig zu reservieren, bitten wir euch bei uns Anzumelden.
                        Hierfür könnt Ihr direkt die Website benutzen.</p>
                </header>
                <a href="/no-sidebar" className="button primary">
                   Zur Anmeldung
                </a>
            </div>
        </Fade>
    </section>
)
export default Five
