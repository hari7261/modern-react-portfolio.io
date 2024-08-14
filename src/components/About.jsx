import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, fadeIn } from '../utils/motion';

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.para}>
      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.text}>
        Hey there! I&apos;m
        {' '}
        <a
          href="https://in.linkedin.com/in/hariom-kumar-pandit-2k3"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Hariom Kumar (Hari),
        </a>
        {' '}
        a passionate software devloper specializing in React and python framworks. I thrive on delivering state-of-the-art software solutions. When I&apos;m not coding, you&apos;ll find me exploring the fascinating worlds of Tech, Movies, and Music.
      </motion.p>
      <motion.p variants={fadeIn('', '', 1, 1)} className={style.text}>
        My journey into software development was anything but ordinary. As a former third-year student at Excel engineering college, I made a big decision to focus on extra curricular activities like coding and learing new tech stacks. That led me to Microverse, where I honed my skills through pair programming and real-world projects. I completed most of the projects in my acadimic itself alone, amassing over
        {' '}
        <a
          href="https://github.com/hari7261"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          {' '}
          2+ contributions on GitHub"as begginer".
        </a>
        {' '}
        in just one year. My experience in the Students&apos; Union further sharpened my problem-solving and communication abilities.
      </motion.p>
      <motion.p variants={fadeIn('', '', 1.25, 1)} className={style.text}>
        Ready to bring your project to life? Reach out—I&apos;m excited to collaborate!
        {' '}
        <a
          href="https://drive.google.com/file/d/1tlBiXU9CAqDBXoHL7S8Bq8YFsehES3m5/view?usp=sharing"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Check out my resume
        </a>
        {' '}
        for more insights into my journey and qualifications.
      </motion.p>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');
