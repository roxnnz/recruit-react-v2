import React, { useState } from "react"
import MenuIcon from "../icons/Menu"
import ArrowLeftIcon from "../icons/ArrowLeft"
import { Link } from "react-router-dom";
import * as styles from './TopNavBar.module.scss'

export const TopNavBar = () => {
    const [ menuIsOpenState, setManuIsOpenState ] = useState(false);
    return (
        <div className={styles.navbar}>
            { menuIsOpenState ? 
                <div className={styles.menuIcon} onClick={() => setManuIsOpenState(false)}>
                    <ArrowLeftIcon />
                </div> : 
                <div className={styles.menuIcon} onClick={() => setManuIsOpenState(true)}>
                    <MenuIcon />
                </div> }
            
            <div>
                { menuIsOpenState ? 
                    <ul className={styles.navbarLinks}>
                        <li><Link to={'/'}>Profile</Link></li>
                        <li><Link to={'/cards'}>Cards</Link></li>
                        <li><Link to={'/new-card'}>Card Registeration</Link></li>
                    </ul> : null }
            </div>
        </div>
    )   
}
