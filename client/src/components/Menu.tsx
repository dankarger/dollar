import React from "react";
import './Menu.css'

interface Props {
    children:JSX.Element | JSX.Element[]
}

const Menu:React.FC<Props>=({children}:Props)=> {

    return (
        <div className={'menu-div'}>

            {children}
        </div>
    )
}
export default Menu