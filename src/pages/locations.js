import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Naturfreundehaus from "../assets/images/Naturfreundehaus.jpg";
import Kirche from "../assets/images/Kirche.jpg";
import {isLoggedIn} from "../services/auth";
import Auth from "../components/Auth";

const Locations = props => (
    <Auth>
        {isLoggedIn() ? (
            <Layout>
                <Helmet>
                    <title>Locations</title>
                    <meta name="description" content="Locations Page"/>
                </Helmet>

                <div id="main" className="wrapper style1">
                    <div className="container">
                        <header className="major">
                            <h2>Locations</h2>
                        </header>

                        <section id="content">

                            <h4>Bergkirche St. Michael</h4>
                            <div style={{display: "inline-block"}}>
                                <div>
                                    <p>
                        <span className="image left">
                          <img src={Kirche} alt=""/>
                        </span>
                                        Die Bergkirche liegt wunderschön gelegen in der Ortschaft Büsingen am
                                        Hochrhein an der Grenze zur Schweiz. Es handelt sich hierbei um eine
                                        sogenannte Exklave, beachtet daher bei eurer Anreise, dass ein Grenzübertritt
                                        notwendig ist. Diese Kirche ist leider nicht beheizt, daher bitten wir dies bei
                                        eurer Kleiderwahl zu beachten. Der anschließende Sektempfang nach der
                                        Trauung wird beim Naturfreundehaus in Radolfzell-Markelfingen stattfinden.
                                    </p>
                                </div>
                                <div style={{textAlign: "center", marginBottom: "50px", marginTop: "20px"}}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d85838.00403720052!2d8.7965918!3d47.7535653!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a811033d1feab%3A0xc0eb19f070b8f2c7!2sBergkirche%20St.%20Michael!5e0!3m2!1sde!2sde!4v1590237926220!5m2!1sde!2sde"
                                        width="600" height="450"/>
                                </div>
                                <div>
                                    <p>
                                        <h4>Naturfreundehaus Bodensee</h4>
                                        <span className="image right">
                          <img src={Naturfreundehaus} alt=""/>
                        </span>
                                        Die Bergkirche liegt wunderschön gelegen in der Ortschaft Büsingen am
                                        Hochrhein an der Grenze zur Schweiz. Es handelt sich hierbei um eine
                                        sogenannte Exklave, beachtet daher bei eurer Anreise, dass ein Grenzübertritt
                                        notwendig ist. Diese Kirche ist leider nicht beheizt, daher bitten wir dies bei
                                        eurer Kleiderwahl zu beachten. Der anschließende Sektempfang nach der
                                        Trauung wird beim Naturfreundehaus in Radolfzell-Markelfingen stattfinden.
                                    </p>
                                </div>
                                <div style={{textAlign: "center", marginBottom: "50px", marginTop: "20px"}}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d85838.00403720052!2d8.7965918!3d47.7535653!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a60244380d279%3A0x64a0a492bc77c8c2!2sNaturFreundehaus%20Bodensee!5e0!3m2!1sde!2sde!4v1590239067349!5m2!1sde!2sde"
                                        width="600" height="450"/>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </Layout>
        ) : (
            <>
                <div id="main" className="wrapper style1">
                    <div className="container">
                        <header className="major">
                            <h2>You should log in to see restricted
                                content</h2>
                        </header>
                        <p style={{textAlign: "center"}}>
                            <a href="/hochzeit/login">Log in</a>
                        </p>
                    </div>
                </div>
            </>
        )}
    </Auth>
);

export default Locations
