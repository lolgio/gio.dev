import { A } from "@solidjs/router";
import { Component } from "solid-js";

interface NavlinkProps {
    route: string;
    label: string;
    activePath: string;
}

const Navlink: Component<NavlinkProps> = (props) => {
    const isActive = () => {
        return props.activePath === props.route;
    };

    return (
        <A
            class={`text-center text-white py-8 ${isActive() ? "opacity-100" : "opacity-80"}`}
            href={props.route}
        >
            {props.label}
        </A>
    );
};

export default Navlink;
