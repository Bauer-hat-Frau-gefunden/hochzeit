import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Login from "../components/Login";

const LeftSidebar = props => (
    <Layout>
        <Helmet>
            <title>Right Sidebar - Landed by HTML5 UP</title>
            <meta name="description" content="Right Sidebar Page" />
        </Helmet>

        <div id="main" className="wrapper style1">
            <div className="container">
                <header className="major">
                <h2>Anmeldung</h2>
            </header>

                <section id="content">
                    <Login/>
                </section>
            </div>
        </div>
    </Layout>
);

export default LeftSidebar
