import React, { useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";

// Sections
import Blog from "./Blog";
import About from "./About";
import Intro from "./Intro";
import Header from "./Header";
import Service from "./Service";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import SinglePost from "./SinglePost";
import PortfolioDetails from "./PortfolioDetails";

// Components
import Helmet from "../../components/common/Helmet";
import Switch from "../../components/common/Switch";
import RedirectAs404 from "../../components/common/RedirectAs404";

const routes = [
    {
        path: "/intro",
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
        document.documentElement.className = "home-3 skin-3";
        return () => {
            document.documentElement.className = "";
        };
    });

    return (
        <div>
            <Helmet title="Home 3" />
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
