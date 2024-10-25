import React from 'react'
import { FaJava } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { SiReact } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    }
})

const Technologies = () => {
  return (
    <div className='pb-24'>
        <motion.h1 
        whileInView={{opacity:1 ,y: 0}}
        initial={{opacity: 0,y: -100}}
        transition={{duration: 1.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0,x: -100}}
        transition={{duration: 1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-xl border-4 border-neutral-800 p-4'>
                <FaJava className='text-6xl text-yellow-400'/>
            </motion.div>

            <motion.div  
            variants={iconVariants(3.5)}
            initial= "initial"
            animate= "animate"
            className='rounded-xl border-4 border-neutral-800 p-4'>
                <SiSpringboot className='text-6xl text-cyan-400'/>
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-xl border-4 border-neutral-800 p-4'>
                <FaAws className='text-6xl text-yellow-400'/>
            </motion.div>
            <motion.div  
            variants={iconVariants(3.5)}
            initial= "initial"
            animate= "animate"
            className='rounded-xl border-4 border-neutral-800 p-4'>
                <FaPython className='text-6xl text-cyan-400'/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2.5)}
            initial= "initial"
            animate= "animate"
            className='rounded-xl border-4 border-neutral-800 p-4'>
                <SiMysql className='text-6xl text-cyan-400'/>
            </motion.div>
            
            <motion.div 
            variants={iconVariants(2.5)}
            initial= "initial"
            animate= "animate"
            className='rounded-xl border-4 border-neutral-800 p-4'>
                <SiReact className='text-6xl text-cyan-400'/>
            </motion.div>
            
            <motion.div  
            variants={iconVariants(1)}
            initial= "initial"
            animate= "animate"
            className='rounded-xl border-4 border-neutral-800 p-4'>
                <FaGitAlt className='text-6xl text-orange-500'/>
            </motion.div>
            <motion.div  
            variants={iconVariants(1.5)}
            initial= "initial"
            animate= "animate"
            className='rounded-xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-6xl text-green-500'/>
            </motion.div>
            
            <motion.div  
            variants={iconVariants(2)}
            initial= "initial"
            animate= "animate"
            className='rounded-xl border-4 border-neutral-800 p-4'>
                <IoLogoJavascript className='text-6xl text-yellow-400'/>
            </motion.div>
            <motion.div  
            variants={iconVariants(3)}
            initial= "initial"
            animate= "animate"
            className='rounded-xl border-4 border-neutral-800 p-4'>
                <SiTailwindcss className='text-6xl text-cyan-400'/>
            </motion.div>
            
        </motion.div>
    </div>
  )
}

export default Technologies