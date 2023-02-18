import type { Component } from "solid-js";
import Project from "../components/Project";
import PageWrapper from "./PageWrapper";

const Projects: Component = () => {
    return (
        <PageWrapper>
            <div class="flex flex-col h-full justify-center ml-48">
                <h2 class="mb-2">solo</h2>
                <div class="flex flex-row flex-wrap gap-8 my-6 divide-white divide-x-[1px] divide-opacity-20">
                    <Project
                        name="kinpatsu"
                        description={`a granblue fantasy service scraper, api, and discord bot to interact with ingame data.
                            currently work in progress.`}
                        language="TypeScript"
                        github="https://github.com/lolgio/giothree-tentative-bot"
                        link="https://github.com/lolgio/giothree-tentative-bot"
                    />
                    <Project
                        name="this website"
                        description="my personal portfolio built using Solid and Tailwind."
                        language="TypeScript"
                        github="https://github.com/lolgio/new-lolgio.dev"
                    />
                </div>
                <h2 class="mt-4 mb-2">team</h2>
                <div class="flex flex-row flex-wrap gap-8 my-6 divide-white divide-x-[1px] divide-opacity-20">
                    <Project
                        name="terramagotchi"
                        description={`an interactive art project that promotes the importance of natural ecosystems.
                            built for Terrestrial Assemblages as a computer science capstone project.`}
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
