import React from 'react'
import {Helmet} from 'react-helmet'
import Layout from '../components/layout'
import Standesamt1 from "../assets/images/Standesamt1.jpg";
import Standesamt2 from "../assets/images/Standesamt2.jpg";
import Standesamt3 from "../assets/images/Standesamt3.jpg";
import Standesamt4 from "../assets/images/Standesamt4.jpg";
import Standesamt5 from "../assets/images/Standesamt5.jpg";
import {isLoggedIn} from "../services/auth";
import Auth from "../components/Auth";


const LeftSidebar = props => (
    <Auth>
        {isLoggedIn() ? (
            <Layout>
                <Helmet>
                    <title>Left Sidebar - Landed by HTML5 UP</title>
                    <meta name="description" content="Left Sidebar Page"/>
                </Helmet>

                <div id="main" className="wrapper style1">
                    <div className="container">
                        <header className="major">
                            <h2>Standesamt</h2>
                            <p>
                                Hier findet Ihr alle Bilder die während des Standesamt entstanden sind.
                            </p>
                        </header>
                        <div className="box alt">
                            <div className="row gtr-50 gtr-uniform">
                                <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={Standesamt5} alt=""/>
                </span>
                                </div>
                                <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={Standesamt4} alt=""/>
                </span>
                                </div>
                                <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={Standesamt3} alt=""/>
                </span>
                                </div>
                                <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={Standesamt1} alt=""/>
                </span>
                                </div>
                                <div className="col-4 col-6-xsmall">
                <span className="image fit">
                  <img src={Standesamt2} alt=""/>
                </span>
                                </div>
                            </div>
                        </div>
                    </div>
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
);

export default LeftSidebar
