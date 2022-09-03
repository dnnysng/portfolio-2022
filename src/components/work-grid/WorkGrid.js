import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import ahitHomepage from "../../assets/images/ahit-homepage-thumbnail.png";
import liftYourself from "../../assets/images/liftyourself.png";
import quickTrailers from "../../assets/images/quicktrailers-thumbnail.png";
import vl from "../../assets/images/vl-laptop.png";
import newsLetter from "../../assets/images/newsletter.png";

import afexpressVideo from "../../assets/videos/af-express-thumbnail.mov";
import dualsenseVideo from "../../assets/videos/dualsense.mov";

import style from "./WorkGrid.module.css";
import ProjectCard from "../project-card/ProjectCard";

export default function WorkGrid() {
    const [selected, setSelected] = useState("all projects");
    const filters = ["all projects", "Vanilla JS", "React", "Figma", "WordPress", "APIs", "Web Design"];

    function handleFilter(selection) {
        setSelected(selection);
    }

    const projects = [
        {
            video: afexpressVideo,
            thumbnail: null,
            brand: "AF Express",
            title: "NFT Collection and Gallery",
            skills: ["React", "APIs"],
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
            skills: ["Figma", "Web Design", "Vanilla JS", "WordPress", "Avada"],
            status: "live",
            summary:
                "AHIT is the leading national home inpsection school and I was tasked with building a new homepage. I learned a lot during this project while working cross-functionally with designers, content specialists, and SEM teams.",
            url: "https://www.ahit.com",
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
            skills: ["Elementor", "WordPress", "Woocommerce", "LearnDash"],
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
            url: "dazzling-villani-5961ae.netlify.app/",
        },
        {
            thumbnail: newsLetter,
            video: null,
            brand: "Interactive Nerd",
            title: "Multi-step Form",
            skills: ["React", "Formik"],
            status: "demo",
            summary: "",
            url: "",
        },
    ];

    return (
        <div className={style.block}>
            <section id="projects" className={style.workGridContainer}>
                <div className={style.filterContainer}>
                    <ul className={style.filters}>
                        {filters.map((filter, id) => (
                            <li
                                onClick={() => handleFilter(filter)}
                                className={`${style.filter} ${selected === filter && style.selected}`}
                                key={id}
                            >
                                {filter}
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
