import React, { useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";

// Sections
import Blog from "./scenes/Home2/Blog";
import About from "./scenes/Home2/About";
import Intro from "./scenes/Home2/Intro";
import Header from "./scenes/Home2/Header";
import Service from "./scenes/Home2/Service";
import Contact from "./scenes/Home2/Contact";
import Portfolio from "./scenes/Home2/Portfolio";
import SinglePost from "./scenes/Home2/SinglePost";
import PortfolioDetails from "./scenes/Home2/PortfolioDetails";

// Components
import Helmet from "./components/common/Helmet";
import Switch from "./components/common/Switch";
import RedirectAs404 from "./components/common/RedirectAs404";

const routes = [
    {
        path: "/intro",
        component: <Intro />,
    },
    {
        path: "/",
        component: <Intro />,
    },
    {
        path: "/about",
        component: <About />,
    },
    {
        path: "/service",
        component: <Service />,
    },
    {
        path: "/portfolio",
        component: <Portfolio />,
    },
    {
        path: "/portfolio-details",
        component: <PortfolioDetails />,
    },
    {
        path: "/blog",
        component: <Blog />,
    },
    {
        path: "/single-post",
        component: <SinglePost />,
    },
    {
        path: "/contact",
        component: <Contact />,
    },
];

function Home() {
    let { path } = useRouteMatch();

    useEffect(() => {
        document.documentElement.className = "home-2 skin-2";
        return () => {
            document.documentElement.className = "";
        };
    });

    return (
        <div>
            <Helmet title="Home 2" />
            <Header />
            <Switch>
                {routes.map((item, index) => (
                    <Route key={index} path={`${path}${item.path}`} exact>
                        {item.component}
                    </Route>
                ))}
                <Route component={RedirectAs404} />
            </Switch>
        </div>
    );
}



export default Home;
