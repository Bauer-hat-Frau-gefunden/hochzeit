import React from 'react'
import Layout from '../components/layout'
import Auth from "../components/Auth";
import {isLoggedIn} from "../services/auth";

const NotFoundPage = () => (
    <Auth>
        {isLoggedIn() ? (
            <Layout>
                <div id="main" className="alt">
                    <section id="one">
                        <div className="inner">
                            <h1>NOT FOUND</h1>
                            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
                        </div>
                    </section>
                </div>
            </Layout>
        ) : (
            <>
                <div id="main" className="wrapper style1">
                    <div className="container">
                        <header className="major">
                            <h2>You should <a href="/hochzeit-homepage/login">log in</a> to see restricted
                                content</h2>
                        </header>
                        <p style={{textAlign: "center"}}>
                            <a href="/hochzeit-homepage/login">Log in</a>
                        </p>
                    </div>
                </div>
            </>
        )}
    </Auth>
)

export default NotFoundPage
