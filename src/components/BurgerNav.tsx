import { Component, createEffect, createMemo, createSignal, Show } from "solid-js";
import { HiOutlineMenu } from "solid-icons/hi";
import { CgClose } from "solid-icons/cg";
import Navlink from "./Navlink";
import { useIsRouting } from "@solidjs/router";
import { Motion } from "@motionone/solid";
import { createEventListener } from "@solid-primitives/event-listener";

const indicatorOffsets: Record<string, number> = {
    "/": 33,
    "/about": 120,
    "/skills": 207,
    "/projects": 297,
};

const BurgerNav: Component<{ activePath: string }> = (props) => {
    const [isOpen, setIsOpen] = createSignal(false);
    const isRouting = useIsRouting();

    createMemo(() => {
        if (isRouting()) setIsOpen(false);
    });

    createEventListener(document.body, "click", (e) => {
        if (isOpen() && !e.composedPath().some((el) => el === document.querySelector("nav"))) {
            setIsOpen(false);
        }
    });

    return (
        <>
            <div class="sm:hidden flex flex-col gap-3 py-5 ml-5">
                <button onclick={() => setIsOpen(!isOpen())}>
                    <Show when={!isOpen()} fallback={<CgClose class="w-12 h-12 text-white" />}>
                        <HiOutlineMenu class="w-12 h-12" />
                    </Show>
                </button>
            </div>
            <Show when={isOpen()}>
                <Motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    class="sm:hidden absolute left-0 z-10 bg-black/80 backdrop-blur-sm mt-[1px]"
                >
                    <div class="flex flex-col py-5">
                        <Navlink route="/" label="landing" activePath={props.activePath} />
                        <Navlink route="/about" label="about" activePath={props.activePath} />
                        <Navlink route="/skills" label="skills" activePath={props.activePath} />
                        <Navlink route="/projects" label="projects" activePath={props.activePath} />
                        <Motion.div
                            initial={{ y: 0 }}
                            animate={{ y: indicatorOffsets[props.activePath] }}
                            class="absolute w-[1px] h-6 bg-white"
                        ></Motion.div>
                    </div>
                </Motion.div>
            </Show>
        </>
    );
};

export default BurgerNav;
