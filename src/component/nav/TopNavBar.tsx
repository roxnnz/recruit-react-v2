import React, { useState } from "react"
import MenuIcon from "../icons/Menu"
import ArrowLeftIcon from "../icons/ArrowLeft"
import { Link, useParams } from "react-router-dom";

export const TopNavBar = () => {
    const param = useParams();
    const [ menuIsOpenState, setManuIsOpenState ] = useState(false);
    return (
        <div className="navbar">
            { menuIsOpenState ? 
                <div onClick={() => setManuIsOpenState(false)}>
                    <ArrowLeftIcon />
                </div> : 
                <div onClick={() => setManuIsOpenState(true)}>
                    <MenuIcon />
                </div> }
            
            <div>
                { menuIsOpenState ? 
                    <ul className="navbar-links">
                        <li><Link to={'/'}>Profile</Link></li>
                        <li><Link to={'/cards'}>Cards</Link></li>
                        <li><Link to={'/new-card'}>Card Registeration</Link></li>
                    </ul> : null }
            </div>
        </div>
    )   
}
