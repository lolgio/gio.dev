import { FiGithub, FiLink } from "solid-icons/fi";
import { SiJavascript, SiTypescript } from "solid-icons/si";
import { Component, JSXElement } from "solid-js";

const Project: Component<{
    name: string;
    description: string;
    language: string;
    github?: string;
    link?: string;
}> = (props) => {
    const languageIcons: Record<string, JSXElement> = {
        typescript: <SiTypescript />,
        javascript: <SiJavascript />,
    };

    return (
        <div class="flex flex-col pl-4 sm:pl-8 pt-8 max-w-sm xl:max-w-md">
            <div class="flex flex-row justify-between [&>svg]:w-7 [&>svg]:h-7">
                <h3 class="mb-2">{props.name}</h3>
                {languageIcons[props.language.toLowerCase()]}
            </div>
            <p class="mb-5">{props.description}</p>
            <div class="flex flex-row gap-8 mt-auto">
                {props.github && (
                    <a href={props.github} target="_blank">
                        <FiGithub class="text-3xl" />
                    </a>
                )}
                {props.link && (
                    <a href={props.link} target="_blank">
                        <FiLink class="text-3xl" />
                    </a>
                )}
            </div>
        </div>
    );
};

export default Project;
