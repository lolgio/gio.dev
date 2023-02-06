import type { Component } from "solid-js";
import PageWrapper from "./PageWrapper";

const About: Component = () => {
    return (
        <PageWrapper>
            <div class="flex flex-col h-full justify-center ml-48 w-[32%]">
                <h2 class="mb-5">about</h2>
                <p>
                    I am a fullstack web developer with a passion for learning new frameworks and
                    technologies.
                    <br />I design software for the modern web using simplicity and elegance. With
                    the ever-increasing complexity of the web, simplicity is a dying art.
                </p>
                <br />
                <h3 class="mb-3">me</h3>
                <p>
                    I have a bachelor's of science in computer science from the University of
                    Auckland.
                    <br />
                    Throughout my studies, I gained invaluable experience in software development
                    and design. I have worked on a variety of projects, from small personal
                    projects, to large production applications for clients.
                </p>
                <br />
                <h3 class="mb-3">site</h3>
                <p>
                    This site was built using&nbsp;
                    <a href="https://www.solidjs.com/" class="text-highlight">
                        SolidJS
                    </a>
                    , a reactive framework for building user interfaces with similar syntax and
                    state management to React. I originally built this site using Astro and React,
                    but Astro is a MPA framework and I didn't like how navigation felt.
                    <br />
                    Other technologies used include: Tailwind, Vite, and MotionOne.
                    <br />
                    Check out the source code at the&nbsp;
                    <a href="https://github.com/lolgio/new-lolgio.dev" class="text-highlight">
                        Github repo
                    </a>
                    .
                </p>
            </div>
        </PageWrapper>
    );
};

export default About;
