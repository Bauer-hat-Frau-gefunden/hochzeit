import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import RegisterForm from "../components/RegisterForm";
import Auth from "../components/Auth";
import {isLoggedIn} from "../services/auth";

const LeftSidebar = props => (
    <Auth>
        {isLoggedIn() ? (
            <Layout>
                <Helmet>
                    <title>Right Sidebar - Landed by HTML5 UP</title>
                    <meta name="description" content="Right Sidebar Page"/>
                </Helmet>

                <div id="main" className="wrapper style1">
                    <div className="container">
                        <header className="major">
                            <h2>Anmeldung zur Hochzeit</h2>
                        </header>

                        <section id="content">
                            <RegisterForm/>
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

export default LeftSidebar
