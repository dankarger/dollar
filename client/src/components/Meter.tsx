import React from "react";
import './Meter.css'
import { motion } from "framer-motion";

interface Props {
    rate: string;
}

const Meter = ({rate}:Props)=>{
    return (
        // <motion.div className='quote-div' animate={(rate.length>0)?{scale:2}:''}>
            <motion.div className='quote-div' animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 1
                        }}>
            <h1>Quote :</h1>
            <h3>  {rate}</h3>
        </motion.div>
    )
}
export default Meter