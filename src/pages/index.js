// import React from 'react'
// import {Helmet} from 'react-helmet'
// import Layout from '../components/layout'
// import Banner from '../components/Banner'
// import One from '../components/One'
// import Two from '../components/Two'
// import Three from '../components/Three'
// import Four from '../components/Four'
// import Five from '../components/Five'
// import Wunsch from "../components/Wunsch";
// import Auth from "../components/Auth";
// import { isLoggedIn } from "../services/auth"
// import Login from "../components/Login";

// class Home extends React.Component {
//     render() {
//         return (
//             <Auth>
//                 {isLoggedIn() ? (
//                 <Layout location="/">
//                     <Helmet
//                         htmlAttributes={{lang: 'en'}}
//                         title="Hochzeit Bianca und Elias Bauer"
//                         meta={[
//                             {name: 'description', content: 'Hochzeit Bianca und Elias Bauer'},
//                         ]}
//                     ></Helmet>
//                     <Banner/>
//                     <One/>
//                     <Two/>
//                     <Three/>
//                     <Wunsch/>
//                     <Four/>
//                     <Five/>
//                 </Layout>
//                 ) : (
//                     <>
//                         <div id="main" className="wrapper style1">
//                             <div className="container">
//                                 <header className="major">
//                                     <h2>You should log in to see restricted
//                                         content</h2>
//                                 </header>
//                                 <p style={{textAlign: "center"}}>
//                                     <a href="/hochzeit/login">Log in</a>
//                                 </p>
//                             </div>
//                         </div>
//                     </>
//                 )}
//             </Auth>
//         )
//     }
// }

// export default Home
