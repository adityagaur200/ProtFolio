import React, { useEffect } from 'react';
import './TechStack.css';
import gsap from 'gsap';
import {useGSAP} from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(ScrollTrigger, Draggable);

const TechStack = () => {
  useEffect(() => {
    const scrollingElement = document.querySelector('.scrolling');
    const clone = scrollingElement.innerHTML;
    scrollingElement.innerHTML += clone;

    gsap.to('.scrolling', {
      xPercent: -50,
      ease: 'none',
      duration: 25, 
      repeat: -1, 
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0),
      }
    });
  }, []);

  useGSAP(()=>{
    gsap.from(".maindiv",{
        opacity:0,
        delay:1,
        duration:1,
        scrollTrigger:{
            trigger:".tech",
            scrub:true,
            ease:"none",
        }
    })
  })

  return (
  <>
  <div className='backgrounddiv'>
      <img src='./background.jpg'/>
    </div>
    <div className='maindiv'>
      <div className='intro'>
      <div className='introdiv'>
        <h2 className='introh2'>Hi I'm Aditya.!!</h2>
        <h2 className='tag9'>&lt;About&gt;</h2>
        <p className='introtag'>
          I'm a Java Full Stack Developer with expertise in building scalable applications using Java, Spring Boot, and React. 
          I specialize in creating seamless user experiences and efficient back-end systems. With hands-on experience in cloud technologies like AWS and Azure.
           I design and deploy robust solutions for the cloud.!</p>
           <h2 className='tag91'>&lt;/About&gt;</h2>
      </div>
      </div>
      <h1 className='tech'>TECH STACK</h1>
      <div className='scrolling'>
        <img className='pic' src='./Java.png' alt="Java" />
        <img className='pic' src='./Python.png' alt="Python" />
        <img className='pic' src='./Js.png' alt="JavaScript" />
        <img className='pic' src='./React.png' alt="React" />
        <img className='pic' src='./SpringBoot.png' alt="SpringBoot" />
        <img className='pic' src='./Django.png' alt="Django" />
        <img className='pic' src='./MongoDb.png' alt="MongoDB" />
        <img className='pic' src='./SQL.png' alt="SQL" />
      </div>
    </div>
    
  </>
    
  );
};

export default TechStack;
