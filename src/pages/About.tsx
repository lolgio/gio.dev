import type { Component } from "solid-js";
import PageWrapper from "./PageWrapper";

const About: Component = () => {
    return (
        <PageWrapper>
            <div class="flex flex-col my-12 w-[80%] mx-10 xl:w-[32%] lg:w-[50%] lg:my-24 lg:mx-36 md:w-[50%] md:mx-28 sm:w-[70%] sm:mx-20">
                <h2 class="mb-3">about</h2>
                <p class="mb-5">
                    I am a fullstack web developer with a passion for learning new frameworks and
                    technologies.
                    <br />I design software for the modern web using simplicity and elegance. With
                    the ever-increasing complexity of the web, simplicity is a dying art.
                </p>
                <h3 class="mb-2">me</h3>
                <p class="mb-5">
                    I have a bachelor's of science in computer science from the University of
                    Auckland.
                    <br />
                    Throughout my studies, I gained invaluable experience in software development
                    and design. I have worked on a variety of projects, from small personal
                    projects, to large production applications for clients.
                </p>
                <h3 class="mb-2">site</h3>
                <p>
                    This site was built using&nbsp;
                    <a href="https://www.solidjs.com/" class="text-highlight hover:underline">
                        SolidJS
                    </a>
                    , a reactive framework for building user interfaces with similar syntax and
                    state management to React. I originally built this site using Astro and React,
                    but Astro is a MPA framework and I didn't like how navigation felt. Check out
                    the source code at the&nbsp;
                    <a
                        href="https://github.com/lolgio/new-lolgio.dev"
                        class="text-highlight hover:underline"
                    >
                        Github repo
                    </a>
                    .
                </p>
            </div>
        </PageWrapper>
    );
};

export default About;
