import { Motion } from "@motionone/solid";
import { Title } from "@solidjs/meta";
import { Component, JSXElement } from "solid-js";

const PageWrapper: Component<{
    children: JSXElement;
    title?: string;
}> = (props) => {
    return (
        <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            class="min-h-[calc(100vh-8rem)] overflow-hidden"
        >
            <Title>{props.title ?? "gio.dev"}</Title>
            {props.children}
        </Motion.div>
    );
};

export default PageWrapper;
