import React, {useEffect, useState} from "react";
import './LetterSeparator.css'
import {motion, MotionConfig} from "framer-motion";

interface Props {
    string: string,
    // children:JSX.Element | JSX.Element[]
}

const LetterSeparator = ({string}:Props)=> {
    // const [letters,setLetters] =useState('');

    useEffect(()=>{

        // for(let i=0;i<string.length;i++){
        //     console.log(string[i])
        //     // setLetters( (prev)=>prev +string[i])
        //     setTimeout(()=>{
        //         const letter = letters
        //         setLetters( (prev)=>prev + string[i])
        //         // setLetters(string[i])
        //     },500);
        //     console.log('letters-g', letters)

        // }

    },[string])

    const showLetters=(string:string)=>{
       const stringArray =string.split('')
       return  stringArray.map((letter:string,index:number)=>{

            return (
                <motion.p className={'span'} key={index} >{letter}</motion.p>
            )
        })

    }

    return (
        <div className={'letters'}>
            {/*{letters}*/}
            {/*{string}*/}

            <MotionConfig transition={{ duration: 1 }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                />
                {showLetters(string)}
            </MotionConfig>
        </div>
    )
}
export default LetterSeparator