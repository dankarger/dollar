import React, {useEffect} from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./Menu2.css";
import "./Meter.css"
import {quoteAnimation,quoteFadeIn, fadeIn} from '../animations'


/**
 * This is an example of scale correction in Framer Motion 2.
 *
 * Usually, when using scale to animate between two layouts of
 * different sizes, visual distortion will be incurred on child
 * elements and styles like borderRadius and boxShadow.
 *
 * Framer Motion 2 corrects for this. To see the distortion you'd
 * see using traditional FLIP techniques:
 *   - Remove `layout` from the child component
 *   - Remove borderRadius: 50 from the parent component and add
 *      border-radius: 50px; to the .parent definition in styles.css
 */
interface Props {
    rate:string;
}

export default function Menu2({rate}:Props) {
    const [isOpen, setIsOpen] = useState(Boolean);

    useEffect(()=>{
        if(rate.length>0) {
            setIsOpen(true)
        }
        else {
            setIsOpen(false)
        }
        // return ()=>{
        //     setIsOpen(false)
        // }
    },[rate])

    return (
        <motion.div
            // layout
            data-testid='menu2'
            data-isopen={isOpen}
            initial={{ borderRadius: 50 }}
            className="parent quotediv"
            onClick={() => setIsOpen(!isOpen)}
            variants={quoteAnimation}
        >
            {rate.length >0 && <motion.div layout className="child"
                        variants={quoteFadeIn}
            initial='initial' animate='animate'/> }
            {rate.length > 0 &&
            <motion.h1 variants={quoteFadeIn} initial={'initial'} animate='animate'> {rate} </motion.h1>
            }
        </motion.div>
    );
}
