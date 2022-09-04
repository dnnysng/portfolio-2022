import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import ahitHomepage from "../../assets/images/ahit-homepage-thumbnail.png";
import liftYourself from "../../assets/images/liftyourself.png";
import quickTrailers from "../../assets/images/quicktrailers-thumbnail.png";
import vl from "../../assets/images/vl-laptop.png";
import newsLetter from "../../assets/images/newsletter.png";
import reactDocs from "../../assets/images/react-docs-thumbnail.png";
import salaryCalc from "../../assets/images/ahit-salary-calc-thumbnail.png";
import psCountdown from "../../assets/images/ps-countdown-thumbnail.png";
import fakeinvestor from "../../assets/images/fakeinvestor-thumbnail.png";

import afexpressVideo from "../../assets/videos/af-express-thumbnail.mov";
import dualsenseVideo from "../../assets/videos/dualsense.mov";
import animatedPage from "../../assets/videos/animated-homepage.mov";

import style from "./WorkGrid.module.css";
import ProjectCard from "../project-card/ProjectCard";

export default function WorkGrid() {
    const [selected, setSelected] = useState("all projects");
    const filters = ["all projects", "Vanilla JS", "React", "WordPress", "APIs", "Design"];

    function handleFilter(selection) {
        setSelected(selection);
    }

    const projects = [
        {
            video: afexpressVideo,
            thumbnail: null,
            brand: "AF Express",
            title: "NFT Collection and Gallery",
            skills: ["React", "APIs", "Framer Motion", "Design"],
            status: "live",
            summary:
                "This react web application serves as the hub for the AF Express NFT collection on Solana. Its pages are routed with react-router, animated using framer motion, and provide an NFT dashboard to retrieve token data fetched from the Magiceden API.",
            url: "https://afexpress.art",
        },
        {
            thumbnail: ahitHomepage,
            video: null,
            brand: "AHIT",
            title: "Homepage Redesign",
            skills: ["Figma", "Vanilla JS", "WordPress", "Avada"],
            status: "live",
            summary:
                "AHIT is the leading national home inpsection school and I was tasked with building a new homepage. I learned a lot during this project while working cross-functionally with designers, content specialists, and SEM teams.",
            url: "https://www.ahit.com",
        },
        {
            thumbnail: salaryCalc,
            video: null,
            brand: "AHIT",
            title: "Home Inspector Salary Calculator",
            skills: ["Vanilla JS", "WordPress", "APIs", "Avada", "Design"],
            status: "live",
            summary:
                "This home inspection salary calculator allows potential students to see their earning potential. Built with vanilla javascript, this calc uses data from HomeAdvisor to calculate salaries based on location and anticipated workload.",
            url: "https://www.ahit.com/how-much-does-a-home-inspector-make/",
        },
        {
            thumbnail: liftYourself,
            video: null,
            brand: "Lift Yourself",
            title: "Workout Tracker",
            skills: ["React", "Mantine"],
            status: "live",
            summary:
                "This responsive web application is built using React and styled using the Mantine UI library. It allows users to track their progress and stay motivated while unlocking daily badges!",
            url: "https://liftyourself.app",
        },
        {
            thumbnail: quickTrailers,
            video: null,
            brand: "QuickTrailers",
            title: "Search for Movie Trailers",
            skills: ["React", "APIs", "TheMovieDB"],
            status: "live",
            summary:
                "This react web application is connected to The Movie Database API and provides users with quick access to movie trailers by name. Results are displayed in a grid with the movie title and rating at a glance.",
            url: "https://thirsty-boyd-4fd3cf.netlify.app/",
        },
        {
            thumbnail: vl,
            video: null,
            brand: "Virtual Learning Online",
            title: "Online Learning Platform",
            skills: ["Elementor", "WordPress", "Woocommerce", "LearnDash", "Design"],
            status: "offline",
            summary:
                "This online learning platform was built using WordPress, Woocommerce, and LearnDash. Features CRM integration for forms, registrations, and subscriptions. Has automated processes for emails, certificates, and blog posts.",
        },
        {
            thumbnail: null,
            video: dualsenseVideo,
            brand: "DualSense",
            title: "Product Page w/ Color Select",
            skills: ["Personal Project", "React"],
            status: "demo",
            summary:
                "This project is a fullscreen featured product section showcasing a wireless gaming controller with the option to select colors with an updated preview.",
            url: "https://dazzling-villani-5961ae.netlify.app/",
        },
        {
            thumbnail: newsLetter,
            video: null,
            brand: "Interactive Nerd",
            title: "Multi-step Form",
            skills: ["React", "Formik"],
            status: "demo",
            summary:
                "I built this multi-step form during an internship and learned how to use Formik to build a form complete with validation.",
            url: "",
        },
        {
            thumbnail: null,
            video: animatedPage,
            brand: "Personal Project",
            title: "GSAP Animated Homepage",
            skills: ["Vanilla JS", "GSAP"],
            status: "demo",
            summary:
                "Inspired by the intro to the Final Fantasy XV start menu, I built and animated this homepage using the GreenSock JavaScript animation library.",
            url: "https://dnnysng.github.io/animated-hompage/",
        },
        {
            thumbnail: psCountdown,
            video: null,
            brand: "Practice Project",
            title: "Playstation 5 Countdown",
            skills: ["Vanilla JS"],
            status: "demo",
            summary:
                "I couldn't get my hands on a preorder, but that didn't stop me from bringing the hype. This promo page features the DualSense controller with a timer counting down to the official release date.",
            url: "https://dnnysng.github.io/playstation-countdown/",
        },
        {
            thumbnail: reactDocs,
            video: null,
            brand: "Study Guide",
            title: "Lightweight React Docs",
            skills: ["React"],
            status: "live",
            summary:
                "This project is a lightweight ReactJS documentation used mainly as a personal study guide and reference. The official React docs can be very verbose at times so I broke concepts down in a way that made it easier for me to understand.",
            url: "https://shimmering-chebakia-26105d.netlify.app/",
        },
        {
            thumbnail: fakeinvestor,
            video: null,
            brand: "FakeInvestor",
            title: "Amazon Merch T-Shirt Designs",
            skills: ["Design"],
            status: "live",
            summary:
                "FakeInvestor is a brand geared towards investors who aren't afraid to flex their gains. These T-Shirts allow them to do just that.",
            url: "https://www.amazon.com/s?i=fashion&rh=n%3A7141123011%2Cp_4%3AFake+Investor&s=review-rank&ds=v1%3AJc5aXjAYYFwRd%2FmBWv0tlproBu5Q0m3QUBatMPmY3vA&qid=1662253615&ref=sr_st_review-rank",
        },
    ];

    return (
        <div className={style.block}>
            <section className={style.workGridContainer}>
                <div className={style.filterContainer}>
                    <ul className={style.filters}>
                        {filters.map((filter, id) => (
                            <li key={id}>
                                <button
                                    onClick={() => handleFilter(filter)}
                                    className={`${style.filter} ${selected === filter && style.selected}`}
                                >
                                    {filter}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{
                        460: 1,
                        720: 2,
                        1280: 3,
                        1660: 4,
                    }}
                >
                    <Masonry className={style.cardGrid}>
                        {projects
                            .filter((project) =>
                                selected === "all projects" ? project : project.skills.includes(selected),
                            )
                            .map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    thumbnail={project.thumbnail}
                                    video={project.video}
                                    brand={project.brand}
                                    title={project.title}
                                    skills={project.skills}
                                    status={project.status}
                                    summary={project.summary}
                                    url={project.url}
                                />
                            ))}
                    </Masonry>
                </ResponsiveMasonry>
            </section>
        </div>
    );
}
