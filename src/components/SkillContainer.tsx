import type { Component, JSXElement } from "solid-js";
import { Motion } from "@motionone/solid";

const SkillContainer: Component<{ name: string; icon: JSXElement; offset: number }> = (props) => {
    return (
        <Motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: props.offset * 0.1 }}
            class="flex flex-col flex-wrap"
        >
            <div class="bg-white bg-opacity-20 rounded-lg p-4 [&>svg]:text-white [&>svg]:h-8 [&>svg]:sm:h-12 [&>svg]:w-8 [&>svg]:sm:w-12">
                {props.icon}
            </div>
            <p class="hidden sm:block mt-2 text-center">{props.name.toLowerCase()}</p>
        </Motion.div>
    );
};

export default SkillContainer;
