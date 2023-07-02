import Link from 'next/link';
import React from 'react'
import { BiSearch } from "react-icons/bi";
import {AiOutlinePlus} from "react-icons/ai"

export default function Header() {
    return (
        <header>
            <nav>
                <div className="logoSearch">
                    <Link href="" className='logoLink'>
                        <img src="/images/logo.png" alt="logo image" />
                    </Link>
                    <div className="searchBox">
                        <input type="text" />
                        <button>
                            <BiSearch size={20} color='gray' ></BiSearch>
                        </button>
                    </div>
                </div>
                <div className="loginSec">
                    <Link href="" className='navLink'>
                        Contact Us
                    </Link>
                    <Link href="" className='navLink bor'>
                        Sign Up
                    </Link>
                    <Link href="" className='navLink bor'>
                        Sign In
                    </Link>
                    <Link href="" className='userLink'>
                        <img src="/images/user.png" alt="user image" />
                    </Link>
                </div>
            </nav>
            <div className="bottomNav">
                <div className="elem">
                    50
                </div>
                <div className="elem red">
                    0.21%
                </div>
                <div className="elem ">
                    NFTYBank
                </div>
                <div className="elem ">
                    41.570
                </div>
                <div className="elem green">
                    0.01%
                </div>
                <div className="elem ">
                    1.570
                </div>
                <div className="elem red">
                    0.01%
                </div>
                <div className="elem ">
                    BHARTIRTIL
                </div>
                <div className="elem ">
                   771.95
                </div>
                <div className="elem green">
                    0.69%
                </div>
                <div className="elem ">
                   HDFCBANK
                </div>
                <div className="elem ">
                   1657.19
                </div>
                <div className="elem ">
                    NFTYBank
                </div>
                <div className="elem ">
                    41.570
                </div>
                <div className="elem green">
                    0.01%
                </div>
                <div className="elem ">
                    1.570
                </div>
                <div className="elem red">
                    0.01%
                </div>
                <div className="elem ">
                   771.95
                </div>
                <div className="elem green">
                    0.69%
                </div>
                <div className="elem ">
                   HDFCBANK
                </div>
                <div className="elem ">
                   1657.19
                </div>
                <div className="elem ">
                    NFTYBank
                </div>
                <div className="elem ">
                    1.570
                </div>
                <div className="elem red">
                    0.01%
                </div>
                <div className="elem ">
                   771.95
                </div>
                <div className="elem green">
                    0.69%
                </div>
                <div className="elem green">
                    0.69%
                </div>
                <div className="elem ">
                   HDFCBANK
                </div>
                <div className="elem ">
                   1657.19
                </div>
                <div className="elem ">
                    NFTYBank
                </div>
                <div className="elem ">
                    1.570
                </div>
                <div className="elem red">
                    0.01%
                </div>
                <div className="elem ">
                   771.95
                </div>
                <div className="elem green">
                    0.69%
                </div>
            </div>
            <button className="plusBtn">
                <AiOutlinePlus size={22} color='white'/>
            </button>
        </header>
    )
}
