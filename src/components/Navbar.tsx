import { Component, createSignal } from "solid-js";
import { useLocation, useBeforeLeave, BeforeLeaveEventArgs } from "@solidjs/router";
import { Motion } from "@motionone/solid";
import { spring } from "motion";
import Navlink from "./Navlink";

const indicatorOffsets: Record<string, number> = {
    "/": -4,
    "/about": 142,
    "/skills": 278,
    "/projects": 424,
};

const Navbar: Component = () => {
    const location = useLocation();
    const [pathHistory, setPathHistory] = createSignal({
        current: location.pathname,
        previous: location.pathname,
    });

    useBeforeLeave((e: BeforeLeaveEventArgs) => {
        setPathHistory({
            current: e.to.toString(),
            previous: pathHistory().current,
        });
    });

    return (
        <div class="w-full sticky z-10 bg-black top-0">
            <nav class="flex flex-row gap-24 ml-24">
                <Navlink route="/" label="landing" activePath={pathHistory().current} />
                <Navlink route="/about" label="about" activePath={pathHistory().current} />
                <Navlink route="/skills" label="skills" activePath={pathHistory().current} />
                <Navlink route="/projects" label="projects" activePath={pathHistory().current} />
                <Motion.div
                    initial={{ x: indicatorOffsets[pathHistory().previous] }}
                    animate={{ x: indicatorOffsets[pathHistory().current] }}
                    transition={{
                        duration: 0.2,
                        easing: spring({ velocity: 200, damping: 15 }),
                    }}
                    id="page-indicator"
                    class="absolute h-[1px] w-16 mt-[88px] bg-white"
                ></Motion.div>
            </nav>
            <hr class="opacity-20" />
        </div>
    );
};

export default Navbar;
