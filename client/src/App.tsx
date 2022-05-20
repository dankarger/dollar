import React, {useState} from 'react';
import myApi from "./api/api";
import './App.css';
import axios from 'axios'
import Meter from "./components/Meter";
import Button from "./components/Button";
import Menu from "./components/Menu";

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
            const response = await myApi.get('/rate');
            if (response.status === 200) {
                await console.log('hhhh',response)
                setRate('second')
            }
        } catch (e) {
            console.log(e)
        }
    }

  return (
    <div className="App">
    <Menu >
        <Button name={'Get Quote'} onClick={handleClick} color={'yellow'}/>
        <Button name={'Get 2'} onClick={handleClick2} color={'yellow'}/>
    </Menu>

        <div>
            <Meter rate={rate} />
            {/*<h2>{rate}</h2>*/}
        </div>
    </div>
  );
}

export default App;
