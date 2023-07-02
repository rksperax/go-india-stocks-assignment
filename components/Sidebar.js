import React, { useState } from 'react'
import { FaUser, FaBell } from "react-icons/fa";
import {RiArrowDropDownFill} from "react-icons/ri";
import {BsFillChatDotsFill} from "react-icons/bs";
import {BiCaretRight} from "react-icons/bi";

import { useSelector, useDispatch } from 'react-redux';
import { changeState } from '@/store/slices/sidedSlice';


export default function Sidebar() {

    const [isDrp,setIsDrp]=useState(false)
    const [isSidebarOpen,setIsSidebarOpen]=useState(true)

    const dispatch = useDispatch()
    const sidebarState = useSelector((state)=>state.sidebarReducer)


    function drpToggle(){
        setIsDrp(!isDrp);
    }
    function sidebarTogglerFn(){
        // setIsSidebarOpen(!isSidebarOpen)
        dispatch(changeState())
    }

    return (
        <div className={ `sidebarMain ${sidebarState ? "" : "closed"}`} >
            <div className="userNotify">
                <div className="userBox">
                    <FaUser color='white' size={18} />
                    <div className="text">
                        Hello, User 
                    </div>
                </div>
                <div className="notifyBox">
                    <FaBell color='white' size={18} />
                    <div className="dot"></div>
                </div>
            </div>
            <div className="navItems">
                <div className="item itemDrp" >
                    <div className="text" onClick={drpToggle}>
                    Discussion Fourm
                    </div>
                    <RiArrowDropDownFill  className='triIcon' size={18} color='white'/>
                    <BsFillChatDotsFill  className='itemIcon' size={16} color='white'/>
                    <div className={` subNav ${isDrp ? "open": ""}`}>
                        <div className="opt">
                            option1
                        </div>
                        <div className="opt">
                            option2
                        </div>
                        <div className="opt">
                            option3
                        </div>
                    </div>
                   
                </div>
                <div className="item">
                    <div className="text">
                    Market Stories
                    </div>
                </div>
                <div className="item">
                    <div className="text">
                    Sentiment
                    </div>
                </div>
                <div className="item">
                    <div className="text">
                    Market
                    </div>
                </div>
                <div className="item">
                    <div className="text">
                    Sector
                    </div>
                </div>
                <div className="item">
                    <div className="text">
                    Watchlist
                    </div>
                </div>
                <div className="item">
                    <div className="text">
                    Events
                    </div>
                </div>
                <div className="item">
                    <div className="text">
                    News/Interview
                    </div>
                </div>
            </div>
            <div className="sideBarToggler" onClick={sidebarTogglerFn}>
                <BiCaretRight color='white' size={20}/>
            </div>

        </div>
    )
}
