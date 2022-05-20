import React from "react";

interface Props {
    name: string,
    onClick:  React.MouseEventHandler<HTMLButtonElement> | undefined
}


const Button:React.FC<Props>=({name, onClick})=>{

    return (
        <div>
            <button onClick={onClick}>
                button
                {name}
            </button>
        </div>
    )
}
export default Button