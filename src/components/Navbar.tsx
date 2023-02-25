import { Component, createEffect, createSignal } from "solid-js";
import { useLocation } from "@solidjs/router";
import { Motion } from "@motionone/solid";
import { spring } from "motion";
import Navlink from "./Navlink";
import BurgerNav from "./BurgerNav";

const indicatorOffsets: Record<string, number> = {
    "/": -4,
    "/about": 142,
    "/skills": 278,
    "/projects": 424,
};

const Navbar: Component = () => {
    const location = useLocation();

    return (
        <div class="w-full sticky z-10 bg-black top-0">
            <nav class="ml-6 sm:ml-24">
                <BurgerNav activePath={location.pathname} />
                <div class="hidden sm:flex flex-row gap-24">
                    <Navlink route="/" label="landing" activePath={location.pathname} />
                    <Navlink route="/about" label="about" activePath={location.pathname} />
                    <Navlink route="/skills" label="skills" activePath={location.pathname} />
                    <Navlink route="/projects" label="projects" activePath={location.pathname} />
                    <Motion.div
                        initial={{ x: indicatorOffsets[location.pathname] }}
                        animate={{ x: indicatorOffsets[location.pathname] }}
                        transition={{
                            duration: 0.2,
                            easing: spring({ velocity: 200, damping: 15 }),
                        }}
                        id="page-indicator"
                        class="absolute h-[1px] w-16 mt-[88px] bg-white"
                    ></Motion.div>
                </div>
            </nav>
            <hr class="opacity-20" />
        </div>
    );
};

export default Navbar;
