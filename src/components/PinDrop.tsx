import type { Component } from "solid-js";
import { Motion } from "@motionone/solid";

const PinDrop: Component = () => {
    return (
        <svg width="100" height="161" viewBox="0 0 100 161" xmlns="http://www.w3.org/2000/svg">
            <Motion.g
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4, easing: "ease-out" }}
                fill="#6BABF5"
                stroke="#6BABF5"
            >
                <path d="M59 97H69L64 115.5L59 97Z" />
                <circle cx="64" cy="88" r="12" />
            </Motion.g>
            <Motion.g
                initial={{ opacity: 0, y: -50, x: -50, scale: 1.5 }}
                animate={{ opacity: 0.8, y: 0, x: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4, easing: "ease-out" }}
                fill="black"
                stroke="black"
            >
                <path d="M46.9686 129.609L54.5685 136.109L62.7923 118.799L46.9686 129.609Z" />
                <circle
                    cx="12"
                    cy="12"
                    r="12"
                    transform="matrix(0.759989 0.649935 0.649935 -0.759989 28 141.02)"
                />
            </Motion.g>
        </svg>
    );
};

export default PinDrop;
