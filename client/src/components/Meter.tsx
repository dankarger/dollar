import React from "react";
import './Meter.css'
import { motion } from "framer-motion";
import {quoteAnimation} from '../animations'

interface Props {
    rate: string;
}

const Meter = ({rate}:Props)=>{
    return (
        <motion.div className='quotediv'
        //             animate={(rate.length>0)?{
        //     scale:2
        //
        // }:''}
        variants={quoteAnimation}
                    initial='initial'
                    animate='animate'>
            {/*<motion.div className='quote-div' animate={{*/}
            {/*    scale: [1, 2, 2, 1, 1],*/}
            {/*    rotate: [0, 0, 270, 270, 0],*/}
            {/*    borderRadius: ["20%", "20%", "50%", "50%", "20%"],*/}
            {/*}}*/}
            {/*            transition={{*/}
            {/*                duration: 2,*/}
            {/*                ease: "easeInOut",*/}
            {/*                times: [0, 0.2, 0.5, 0.8, 1],*/}
            {/*                repeat: Infinity,*/}
            {/*                repeatDelay: 1*/}
            {/*            }}>*/}
            <h1>Quote :</h1>
            <motion.h3
                initial={{opacity: 0}}
            // animate={{opacity:1}}
            >  {rate}</motion.h3>
        </motion.div>
    )
}
export default Meter