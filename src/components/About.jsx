/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import {Tilt} from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../style.js';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion.js';
import { SectionWrapper } from '../HOC';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full '>
      <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)} 
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options={{ max: 45, scale: 1, speed: 450}}
          className='bg-tertiary hover:bg-gray-400 hover:bg-clip-padding hover:backdrop-filter hover.backdrop-blur-sm hover:bg-opacity-10 rounded-[20px] py-5 transition duration-1000 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[16px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        In the realm of software development, I wield the powers of TypeScript and JavaScript, harnessing their magic to craft extraordinary digital experiences. 
        With my expertise in renowned frameworks such as React, Node.js, and Three.js, I forge dynamic realms where ideas come alive.
        Step into the enchanting world of my creations, where captivating user interfaces dance with seamless functionality. Together, we will embark on a journey to transform your visions into awe-inspiring realities. Join me, and let our collaboration unveil the true potential of your dreams!
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')