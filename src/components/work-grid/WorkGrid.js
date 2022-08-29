import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { PortalWithState } from 'react-portal';

import ProjectDetails from '../project-details/ProjectDetails';

import ahitHomepage from '../../assets/images/ahit-homepage-thumbnail.png';
// import ahitSalaryCalculator from '../../assets/images/ahit-salary-calc-thumbnail.png';
// import ahitPricingTable from '../../assets/images/ahit-pricing-table.png';
import liftYourself from '../../assets/images/liftyourself.png';
import quickTrailers from '../../assets/images/quicktrailers-thumbnail.png';
import vl from '../../assets/images/vl-laptop.png';
import newsLetter from '../../assets/images/newsletter.png';

import afexpressVideo from '../../assets/videos/af-express-thumbnail.mov';
import dualsenseVideo from '../../assets/videos/dualsense.mov';

import style from './WorkGrid.module.css';
import ProjectCard from '../project-card/ProjectCard';

export default function WorkGrid() {
    const [selected, setSelected] = useState('all projects');
    const filters = ['all projects', 'Vanilla JS', 'React', 'Figma', 'WordPress', 'APIs', 'Web Design'];

    function handleFilter(selection) {
        setSelected(selection);
    }

    const projects = [
        {
            video: afexpressVideo,
            thumbnail: null,
            brand: 'AF Express',
            title: 'NFT Collection and Gallery',
            skills: ['React', 'APIs'],
            status: 'live',
        },
        {
            thumbnail: ahitHomepage,
            video: null,
            brand: 'AHIT',
            title: 'Homepage Redesign',
            skills: ['Figma', 'Web Design', 'Vanilla JS', 'WordPress', 'Avada'],
            status: 'live',
        },
        // {
        //     thumbnail: ahitPricingTable,
        //     video: null,
        //     brand: 'AHIT',
        //     title: 'TX Pricing Table',
        //     skills: ['Vanilla JS', 'WordPress', 'Avada'],
        //     status: 'live',
        // },
        // {
        //     thumbnail: ahitSalaryCalculator,
        //     video: null,
        //     brand: 'AHIT',
        //     title: 'Salary Calculator',
        //     skills: ['Vanilla JS', 'APIs', 'WordPress', 'Avada'],
        //     status: 'live',
        // },
        {
            thumbnail: liftYourself,
            video: null,
            brand: 'Lift Yourself',
            title: 'Workout Tracker',
            skills: ['React', 'Mantine'],
            status: 'live',
        },
        {
            thumbnail: quickTrailers,
            video: null,
            brand: 'Quick Trailers',
            title: 'Search for Movie Trailers',
            skills: ['React', 'APIs', 'TheMovieDB'],
            status: 'live',
        },
        {
            thumbnail: vl,
            video: null,
            brand: 'Virtual Learning',
            title: 'Online Learning Platform',
            skills: ['Elementor', 'WordPress', 'Woocommerce', 'LearnDash'],
            status: 'offline',
        },
        {
            thumbnail: null,
            video: dualsenseVideo,
            brand: 'Personal Project',
            title: 'Product Page With Color Selection',
            skills: ['Personal Project', 'React'],
            status: 'demo',
        },
        {
            thumbnail: newsLetter,
            video: null,
            brand: 'Interactive Nerd',
            title: 'Multi-step Form',
            skills: ['React', 'Formik'],
            status: 'demo',
        },
    ];

    return (
        <PortalWithState closeOnOutsideClick closeOnEsc>
            {({ openPortal, closePortal, isOpen, portal }) => (
                <React.Fragment>
                    <div className={style.block}>
                        <section id="projects" className={style.workGridContainer}>
                            <div className={style.sectionHeader}>
                                <h2 className={style.hugeText}>welcome</h2>
                                <p className={style.paragraph}>
                                    I'm an experienced <span className={style.underline}> designer</span>{' '}
                                    <span className={style.success}>+</span>{' '}
                                    <span className={style.underline}>developer</span> specializing in pixel-perfect
                                    websites. I'm the guy you need for your <strong>frontend projects</strong>.
                                </p>
                            </div>
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
                                            selected === 'all projects' ? project : project.skills.includes(selected),
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
                                                open={openPortal}
                                            />
                                        ))}
                                </Masonry>
                            </ResponsiveMasonry>
                        </section>
                    </div>
                    {portal(
                        <>
                            <ProjectDetails close={closePortal} />
                        </>,
                    )}
                </React.Fragment>
            )}
        </PortalWithState>
    );
}
