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
    const [currentPathname, setCurrentPathname] = createSignal(useLocation().pathname);
    const [oldPathname, setOldPathname] = createSignal(useLocation().pathname);

    useBeforeLeave((e: BeforeLeaveEventArgs) => {
        setOldPathname(currentPathname());
        setCurrentPathname(e.to.toString());
    });

    return (
        <>
            <nav class="flex flex-row gap-24 py-8 ml-24 sticky">
                <Navlink route="/" label="landing" />
                <Navlink route="/about" label="about" />
                <Navlink route="/skills" label="skills" />
                <Navlink route="/projects" label="projects" />
                <Motion.div
                    initial={{ x: indicatorOffsets[oldPathname()] }}
                    animate={{ x: indicatorOffsets[currentPathname()] }}
                    transition={{
                        duration: 0.2,
                        easing: spring({ velocity: 200, damping: 15 }),
                    }}
                    id="page-indicator"
                    class="absolute h-[1px] w-16 mt-14 bg-white"
                ></Motion.div>
            </nav>
            <hr class="opacity-20" />
        </>
    );
};

export default Navbar;
