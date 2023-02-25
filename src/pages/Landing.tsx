import type { Component } from "solid-js";
import { FiMapPin, FiGithub, FiTwitter } from "solid-icons/fi";
import { FaBrandsLinkedinIn } from "solid-icons/fa";
import PinDrop from "../components/PinDrop";
import PageWrapper from "./PageWrapper";

const Landing: Component = () => {
    return (
        <PageWrapper>
            <div class="flex flex-row mx-16 justify-between sm:mx-20 md:mx-12 lg:mx-40 xl:mx-64 2xl:mx-80">
                <div class="flex flex-col my-auto mt-36 sm:mt-56">
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
                <div class="hidden my-24 md:flex float-right">
                    <PinDrop />
                </div>
            </div>
        </PageWrapper>
    );
};

export default Landing;
