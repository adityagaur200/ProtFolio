import React, { useEffect } from 'react';
import "./Projects.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Divider, Stack } from '@mui/material';
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useGSAP(() => {
    gsap.from(".projects", {
      opacity: 0,
      delay: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".h1pro",
        scrub: true,
        ease: "none",
      }
    });
  });

  return (
    <>
      <div className='projects'>
        <h1 className='h1pro'>PROJECTS</h1>
        
        
       
        <section className="cards">
          
          <article className="card card--4">
            <div className="card__img"></div>
            <a href="https://github.com/adityagaur200/SynQ" className="card_link">
              <div className="card__img--hover"></div>
            </a>
            <div className="card__info">
              <h3 className="card__title">SYNQ</h3>
              <span className="card__by">
                Developed a real-time team collaboration tool using React.js and Spring Boot, enabling seamless communication, task management, and live updates across team members.
                <a href="https://github.com/adityagaur200/SynQ"></a>
              </span>
            </div>
          </article>
           <article className="card card--2">
            <div className="card__img"></div>
            <a href="https://github.com/adityagaur200/closhopv" className="card_link">
              <div className="card__img--hover"></div>
            </a>
            <div className="card__info">
              <h3 className="card__title">E-COMMERCE WEBSITE</h3>
              <span className="card__by">
                Developed in React and Java. Includes payment gateways and more.
                <a href="https://github.com/adityagaur200/closhopv"></a>
              </span>
            </div>
          </article>
          <article className="card card--1">
            <div className="card__img"></div>
            <a href="https://github.com/adityagaur200/ExpenseTrackerApp" className="card_link">
              <div className="card__img--hover"></div>
            </a>
            <div className="card__info">
              <h3 className="card__title">EXPENSE TRACKER</h3>
              <span className="card__by">
                Developed in React and Java. Includes graphs to ease monitoring.
                <a href="https://github.com/adityagaur200/ExpenseTrackerApp"></a>
              </span>
            </div>
          </article>

          <article className="card card--3">
            <div className="card__img"></div>
            <a href="https://github.com/adityagaur200/insta-clone" className="card_link">
              <div className="card__img--hover"></div>
            </a>
            <div className="card__info">
              <h3 className="card__title">INSTAGRAM CLONE</h3>
              <span className="card__by">
                Developed in React and Firebase. Allows sharing posts and chatting.
                <a href="https://github.com/adityagaur200/insta-clone"></a>
              </span>
            </div>
          </article>

          
        </section>
        <div className='divider'>
        <Divider sx={{ backgroundColor: "#b2aeaa"}} mr={2}/>
        </div>
        <div className='stackdiv'>
          <Stack direction={"row"} gap={2} mt={6}>
            <a href='https://github.com/adityagaur200/'> <FaGithub size={"30px"} /></a>
            <a href='https://x.com'> <FaXTwitter size={"30px"} /></a>
            <a href='www.linkedin.com/in/adityagaur2004'> <CiLinkedin size={"30px"} /></a>
            <a href='mailto:gauraditya200@gmail.com'> <IoMailUnreadOutline size={"30px"} /></a>
          </Stack>
        </div>
      </div>
    </>
  );
};

export default Projects;
