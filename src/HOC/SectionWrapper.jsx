/* eslint-disable no-unused-vars */
import React from "react";
import { styles } from '../style';
import { staggerContainer } from "../utils/motion";
import { motion } from 'framer-motion';

const SectionWrapper = (Component, idName) => function HOC(props) {
    
    return (
        <motion.section
            variants={staggerContainer()}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
            
            <span className="hash-span" id={idName}>&nbsp;</span>
            <Component {...props}/>
        </motion.section>
    )
}
export default SectionWrapper;