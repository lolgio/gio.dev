import { A } from "@solidjs/router";
import type { Component } from "solid-js";

const Navlink: Component<{ route: string; label: string }> = ({ route, label }) => {
    return (
        <A class="text-center" href={route}>
            {label}
        </A>
    );
};

export default Navlink;
