import type { Component } from "solid-js";
import { lazy } from "solid-js";
import { Routes, Route, Router } from "@solidjs/router";

import Navbar from "./components/Navbar";
import { Presence } from "@motionone/solid";

const About = lazy(() => import("./pages/About"));
const Landing = lazy(() => import("./pages/Landing"));
const Skills = lazy(() => import("./pages/Skills"));

const App: Component = () => {
    return (
        <>
            <Navbar />
            <Presence exitBeforeEnter>
                <Routes>
                    <Route path="/" component={Landing}></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/skills" component={Skills}></Route>
                </Routes>
            </Presence>
        </>
    );
};

export default App;
