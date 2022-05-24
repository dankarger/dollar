import React, {useState} from 'react';
import myApi from "./api/api";
import './App.css';
import axios from 'axios'
import Meter from "./components/Meter";
import Button from "./components/Button";
import Menu from "./components/Menu";
import Menu2 from "./components/Menu2";
import {fadeIn} from "./animations";
import {motion} from "framer-motion";
import LetterSeparator from "./components/LetterSeparator";

function App() {
    const [rate, setRate] = useState('')

    const handleClick= async ()=> {
        try {
            console.log('gggggggg')
            const response = await myApi.get('/rate');
            if (response.status === 200) {
                await console.log('hhhh',response)
                setRate(response.data)
            }
        } catch (e) {
            console.log(e)
        }
    }
    const handleClick2= async ()=> {
        try {
            console.log('gggggggg')
            const response = await myApi.get('/rate/2');
            if (response.status === 200) {
                await console.log('hhhh',response)
                setRate(response.data.joke)
            }
        } catch (e) {
            console.log(e)
        }
    }

  return (
    <motion.div className="App"
    initial={'initial'}
                variants={fadeIn}
                animate={"animate"}
    >

    <Menu >
        <Button name={'Get Quote'} onClick={handleClick} color={'yellow'}/>
        <Button name={'Get Joke'} onClick={handleClick2} color={'yellow'}/>
    </Menu>
        {/*<div>*/}
        {/*    <Meter rate={rate} />*/}
            {/*<h2>{rate}</h2>*/}
        {/*</div>*/}
        <Menu2 rate={rate} />
    <LetterSeparator string={rate} />
    </motion.div>
  );
}

export default App;
