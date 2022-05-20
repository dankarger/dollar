import React, {useState} from 'react';
import myApi from "./api/api";
import './App.css';
import axios from 'axios'

function App() {
    const [rate, setRate] = useState()

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
      <h1>helelo</h1>
        <h2>wtf</h2>
        <button onClick={handleClick}>cl</button>
        <div>
            {rate}
        </div>

    </div>
  );
}

export default App;
