import type { Component } from "solid-js";
import { FiMapPin, FiGithub, FiTwitter } from "solid-icons/fi";
import { FaBrandsLinkedinIn } from "solid-icons/fa";
import PinDrop from "../components/PinDrop";
import PageWrapper from "./PageWrapper";

const Landing: Component = () => {
    return (
        <PageWrapper>
            <div class="flex flex-row mx-16 h-full justify-between 2xl:mx-80 xl:mx-64 lg:mx-46 md:mx-20 sm:mx-40">
                <div class="flex flex-col justify-center my-auto mt-56">
                    <h1 class="text-6xl font-bold">
                        hi,
                        <br />
                        I'm Gio
                    </h1>
                    <h3 class="font-light mt-4">
                        fullstack web developer.
                        <br />
                        22 m.
                        <br />
                        <FiMapPin class="inline-block stroke-highlight" /> auckland, nz.
                    </h3>
                    <br />
                    <div id="socials" class="flex gap-8 mt-8">
                        <a href="https://github.com/lolgio" target="_blank">
                            <FiGithub class="text-3xl" />
                        </a>
                        <a href="https://twitter.com/lolgio73" target="_blank">
                            <FiTwitter class="text-3xl" />
                        </a>
                        <a
                            href="https://nz.linkedin.com/in/giovanni-glendining-7334b9248"
                            target="_blank"
                        >
                            <FaBrandsLinkedinIn class="text-3xl" />
                        </a>
                    </div>
                </div>
                <div class="mt-32 my-auto hidden md:flex">
                    <PinDrop />
                </div>
            </div>
        </PageWrapper>
    );
};

export default Landing;
