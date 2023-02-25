import { Component, For, JSXElement } from "solid-js";
import {
    SiTypescript,
    SiTailwindcss,
    SiSolid,
    SiAstro,
    SiTrpc,
    SiPrisma,
    SiGo,
    SiJavascript,
    SiPython,
    SiReact,
    SiMongodb,
    SiPostgresql,
    SiNotion,
    SiGit,
    SiExpress,
    SiMiro,
    SiP5dotjs,
    SiCsharp,
    SiCplusplus,
    SiDjango,
    SiJinja,
    SiFirebase,
    SiJira,
    SiDocker,
    SiDotnet,
    SiObsidian,
} from "solid-icons/si";
import { RiFinanceVipDiamondLine } from "solid-icons/ri";
import { FaBrandsJava } from "solid-icons/fa";
import PageWrapper from "./PageWrapper";
import SkillContainer from "../components/SkillContainer";

const Skills: Component = () => {
    interface Skill {
        name: string;
        icon: JSXElement;
    }

    const skills: Record<number, Skill[]> = {
        1: [
            // Primary
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "Go", icon: <SiGo /> },
            { name: "TailwindCSS", icon: <SiTailwindcss /> },
            { name: "React", icon: <SiReact /> },
            { name: "SolidJS", icon: <SiSolid /> },
            { name: "Astro", icon: <SiAstro /> },
            { name: "trpc", icon: <SiTrpc /> },
            { name: "Prisma", icon: <SiPrisma /> },
            { name: "zod", icon: <RiFinanceVipDiamondLine /> },
            { name: "obsidian", icon: <SiObsidian /> },
        ],
        2: [
            // Secondary
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "Java", icon: <FaBrandsJava /> },
            { name: "Python", icon: <SiPython /> },
            { name: "Firebase", icon: <SiFirebase /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "Git", icon: <SiGit /> },
        ],
        3: [
            // Tertiary
            { name: "C++", icon: <SiCplusplus /> },
            { name: "C#", icon: <SiCsharp /> },
            { name: "ASP.NET", icon: <SiDotnet /> },
            { name: "Express", icon: <SiExpress /> },
            { name: "Django", icon: <SiDjango /> },
            { name: "Jinja", icon: <SiJinja /> },
            { name: "p5.js", icon: <SiP5dotjs /> },
            { name: "Docker", icon: <SiDocker /> },
            { name: "Notion", icon: <SiNotion /> },
            { name: "Jira", icon: <SiJira /> },
            { name: "Miro", icon: <SiMiro /> },
        ],
    };

    return (
        <PageWrapper>
            <div class="flex flex-col mx-10 my-12 lg:my-24 lg:mx-36 md:mx-28 sm:mx-14">
                <h3 class="mb-2">primary</h3>
                <p>
                    technologies I <span class="text-highlight">enjoy</span> and use often
                </p>
                <div class="flex flex-row gap-8 mt-4 mb-8 max-w-screen-xl flex-wrap">
                    <For each={skills[1]}>
                        {(skill, i) => (
                            <SkillContainer name={skill.name} icon={skill.icon} offset={i()} />
                        )}
                    </For>
                </div>
                <h3 class="mb-2">secondary</h3>
                <p>
                    technologies I am <span class="text-highlight">proficient</span> with
                </p>
                <div class="flex flex-row gap-8 mt-4 mb-8 max-w-screen-xl flex-wrap">
                    <For each={skills[2]}>
                        {(skill, i) => (
                            <SkillContainer name={skill.name} icon={skill.icon} offset={i()} />
                        )}
                    </For>
                </div>
                <h3 class="mb-2">tertiary</h3>
                <p>
                    technologies I have <span class="text-highlight">used</span> in the past
                </p>
                <div class="flex flex-row gap-8 mt-4 mb-8 max-w-screen-xl flex-wrap">
                    <For each={skills[3]}>
                        {(skill, i) => (
                            <SkillContainer name={skill.name} icon={skill.icon} offset={i()} />
                        )}
                    </For>
                </div>
            </div>
        </PageWrapper>
    );
};

export default Skills;
