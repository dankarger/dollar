import React from "react";

interface Props {
    rate: string
}

const Meter = ({rate}:Props)=>{

    return (
        <div>
            <h1>Meter</h1>
            <h3> rate: {rate}</h3>
        </div>
    )
}
export default Meter