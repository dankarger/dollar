import React from "react";
import './Button.css'
import {motion} from "framer-motion";

interface Props {
    name: string,
    onClick:  React.MouseEventHandler<HTMLButtonElement> | undefined;
    color?: string;
}


const Button:React.FC<Props>=({name, onClick,color})=>{

    return (
        <div>
            <motion.button onClick={onClick} className={color??"red"}
                           whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
            >
                <h3>{name}</h3>
            </motion.button>
        </div>
    )
}
export default Button