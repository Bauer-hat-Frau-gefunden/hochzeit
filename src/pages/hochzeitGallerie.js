import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Auth from "../components/Auth";
import {isLoggedIn} from "../services/auth";

const HochzeitGallerie = props => (
    <Auth>
        {isLoggedIn() ? (
            <Layout>
                <Helmet>
                    <title>Gallerie - Hochzeit</title>
                    <meta name="description" content="Hochzeit Gallerie Page"/>
                </Helmet>

                <div id="main" className="wrapper style1">
                    <div className="container">
                        <header className="major">
                            <h2>Hochzeit Galerie</h2>
                            <p>
                                Hier entsteht eine Galerie mit allen Bildern, die während der Hochzeit
                                entstanden sind. Wir bitten um etwas Geduld bis diese erstellt ist.
                            </p>
                        </header>
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
)

export default HochzeitGallerie
