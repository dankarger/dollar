import React, {useState} from 'react';
import myApi from "./api/api";
import './App.css';
import axios from 'axios'
import Meter from "./components/Meter";
import Button from "./components/Button";

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

  return (
    <div className="App">
        <Meter rate={rate} />
        <Button name={'Rate'} onClick={handleClick}/>
        <div>
            {rate}
        </div>
    </div>
  );
}

export default App;
