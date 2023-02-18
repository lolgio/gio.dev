import type { Component } from "solid-js";
import Project from "../components/Project";
import PageWrapper from "./PageWrapper";

const Projects: Component = () => {
    return (
        <PageWrapper>
            <div class="flex flex-col h-full justify-center ml-48">
                <h2 class="mb-2">Solo</h2>
                <div class="flex flex-row flex-wrap gap-8 my-6 divide-white divide-x-[1px] divide-opacity-20">
                    <Project
                        name="Kinpatsu"
                        description={`A Granblue Fantasy service scraper, api, and discord bot to interact with ingame  data.
                            Currently work in progress.`}
                        language="TypeScript"
                        github="https://github.com/lolgio/giothree-tentative-bot"
                        link="https://github.com/lolgio/giothree-tentative-bot"
                    />
                    <Project
                        name="This website"
                        description="My personal portfolio built using Solid and Tailwind"
                        language="TypeScript"
                        github="https://github.com/lolgio/new-lolgio.dev"
                    />
                </div>
                <h2 class="mt-4 mb-2">Team</h2>
                <div class="flex flex-row flex-wrap gap-8 my-6 divide-white divide-x-[1px] divide-opacity-20">
                    <Project
                        name="Terramagotchi"
                        description={`An interactive art project that promotes the importance of natural ecosystems.
                            Built for Terrestrial Assemblages as a Computer Science Capstone Project.`}
                        language="JavaScript"
                        github="https://github.com/generatively/terramagotchi"
                        link="https://terramagotchi.web.app/"
                    />
                </div>
            </div>
        </PageWrapper>
    );
};

export default Projects;
