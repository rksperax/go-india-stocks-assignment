import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineHeart, AiOutlineEye, AiOutlineComment, AiOutlineShareAlt } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux';
import { changeState } from '@/store/slices/sidedSlice';

export default function FourmSection() {

    const sidebarState = useSelector((state) => state.sidebarReducer)
    const [mobileTab,setMobileTab]=useState('left')

    function setTabFn(opt){
        setMobileTab(opt)
    }

    return (
        // mobile tabs 
        <>
        <div className="mobileTabs">
            <div className={` left ${mobileTab == "left" ? "active" : ""}`} onClick={()=>{setTabFn('left')}}>
                Disscusion Fourm
            </div>
            <div className={` right ${mobileTab == "right" ? "active" : ""}`} onClick={()=>{setTabFn('right')}}>
                Market Stories
            </div>
        </div>
        
        <div className={`fourmSectionMain ${sidebarState ? "" : "expanded"}`} >
            <div className="container-fluid">
                <div className="row">
                    <div className={` tra ${sidebarState ? "col-lg-8 col-md-8 col-sm-8" : "col-lg-6 col-md-8 col-sm-8"} ${mobileTab == 'left' ? "" : "mobileHide" } `}>
                        <div className="discussionMain">
                            <div className="heading">
                                Disscussion fourm
                            </div>
                            <div className="filtersSec">
                                <div className="filterHead">
                                    Filters
                                </div>
                                <div className="searchSec">
                                    <div className="secItem">
                                        Section 1
                                    </div>
                                    <div className="secItem blue">
                                        Section 2
                                    </div>
                                    <div className="secItem yellow">
                                        Section 3
                                    </div>
                                    <div className="sBox">
                                        <BiSearch size={20} color='gray' ></BiSearch>
                                        <input type="text" placeholder='Search here' />
                                    </div>
                                </div>
                                <div className="posts">
                                    <div className="post">
                                        <div className="imgBox">
                                            <img src="/images/company2.png" alt="" className="mainImg img-fluid" />
                                        </div>
                                        <div className="content">
                                            <div className="name">Lorem Ipsum <span className="red">Section1</span></div>
                                            <div className="desc">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nostrum placeat, adipisci explicabo dolores aliquam.
                                            </div>
                                            <div className="likeShare">
                                                <div className="like">
                                                    <AiOutlineHeart size={18} />
                                                    <div className="text">
                                                        2k
                                                    </div>
                                                </div>
                                                <div className="like">
                                                    <AiOutlineEye size={18} />
                                                    <div className="text">
                                                        2k
                                                    </div>
                                                </div>
                                                <div className="like">
                                                    <AiOutlineComment size={18} />
                                                    <div className="text">
                                                        2k <span className="d-none d-sm-block">
                                                             Comments
                                                            </span>
                                                    </div>
                                                </div>
                                                <div className="like">
                                                    <AiOutlineShareAlt size={18} />
                                                    <div className="text">
                                                        Share
                                                    </div>
                                                </div>
                                            </div>
                                            <img src="/images/user.png" alt="useImg" className="userImg" />
                                        </div>
                                    </div>
                                    <div className="post">

                                        <div className="content">
                                            <div className="name">Lorem Ipsum <span className="blue">Section2</span></div>
                                            <div className="desc">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nostrum placeat, adipisci explicabo dolores aliquam.
                                            </div>
                                            <div className="likeShare">
                                                <div className="like">
                                                    <AiOutlineHeart size={18} />
                                                    <div className="text">
                                                        2k
                                                    </div>
                                                </div>
                                                <div className="like">
                                                    <AiOutlineEye size={18} />
                                                    <div className="text">
                                                        2k
                                                    </div>
                                                </div>
                                                <div className="like">
                                                    <AiOutlineComment size={18} />
                                                    <div className="text">
                                                        2k <span className="d-none d-sm-block">
                                                             Comments
                                                            </span>
                                                    </div>
                                                </div>
                                                <div className="like">
                                                    <AiOutlineShareAlt size={18} />
                                                    <div className="text">
                                                        Share
                                                    </div>
                                                </div>
                                            </div>
                                            <img src="/images/user.png" alt="useImg" className="userImg" />
                                        </div>
                                    </div>
                                    <div className="post">

                                        <div className="content">
                                            <div className="name">Lorem Ipsum <span className="yellow">Section3</span></div>
                                            <div className="desc">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nostrum placeat, adipisci explicabo dolores aliquam.
                                            </div>
                                            <div className="likeShare">
                                                <div className="like">
                                                    <AiOutlineHeart size={18} />
                                                    <div className="text">
                                                        2k
                                                    </div>
                                                </div>
                                                <div className="like">
                                                    <AiOutlineEye size={18} />
                                                    <div className="text">
                                                        2k
                                                    </div>
                                                </div>
                                                <div className="like">
                                                    <AiOutlineComment size={18} />
                                                    <div className="text">
                                                        2k <span className="d-none d-sm-block">
                                                             Comments
                                                            </span>
                                                    </div>
                                                </div>
                                                <div className="like">
                                                    <AiOutlineShareAlt size={18} />
                                                    <div className="text">
                                                        Share
                                                    </div>
                                                </div>
                                            </div>
                                            <img src="/images/user.png" alt="useImg" className="userImg" />
                                        </div>
                                    </div>
                                    <div className="post">

                                        <div className="content">
                                            <div className="name">Lorem Ipsum <span className="red">Section4</span></div>
                                            <div className="desc">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nostrum placeat, adipisci explicabo dolores aliquam.
                                            </div>
                                            <div className="likeShare">
                                                <div className="like">
                                                    <AiOutlineHeart size={18} />
                                                    <div className="text">
                                                        2k
                                                    </div>
                                                </div>
                                                <div className="like">
                                                    <AiOutlineEye size={18} />
                                                    <div className="text">
                                                        2k
                                                    </div>
                                                </div>
                                                <div className="like">
                                                    <AiOutlineComment size={18} />
                                                    <div className="text">
                                                        2k <span className="d-none d-sm-block">
                                                             Comments
                                                            </span>
                                                    </div>
                                                </div>
                                                <div className="like">
                                                    <AiOutlineShareAlt size={18} />
                                                    <div className="text">
                                                        Share
                                                    </div>
                                                </div>
                                            </div>
                                            <img src="/images/user.png" alt="useImg" className="userImg" />
                                        </div>
                                    </div>
                                    <div className="post">

                                        <div className="content">
                                            <div className="name">Lorem Ipsum <span className="blue">Section5</span></div>
                                            <div className="desc">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque nostrum placeat, adipisci explicabo dolores aliquam.
                                            </div>
                                            <div className="likeShare">
                                                <div className="like">
                                                    <AiOutlineHeart size={18} />
                                                    <div className="text">
                                                        2k
                                                    </div>
                                                </div>
                                                <div className="like">
                                                    <AiOutlineEye size={18} />
                                                    <div className="text">
                                                        2k
                                                    </div>
                                                </div>
                                                <div className="like">
                                                    <AiOutlineComment size={18} />
                                                    <div className="text">
                                                        2k <span className="d-none d-sm-block">
                                                             Comments
                                                            </span>
                                                    </div>
                                                </div>
                                                <div className="like">
                                                    <AiOutlineShareAlt size={18} />
                                                    <div className="text">
                                                        Share
                                                    </div>
                                                </div>
                                            </div>
                                            <img src="/images/user.png" alt="useImg" className="userImg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={ ` tra ${sidebarState ? "col-lg-4 col-md-4 col-sm-4" : "col-lg-6 col-md-4 col-sm-4"} ${mobileTab == 'right' ? "" : "mobileHide" } `}>
                        <div className="storiesSec">
                            <div className="heading">
                                Market Stories
                            </div>
                            <div className="marketCards">
                                <div className="row gy-4">

                                    <div className={`${sidebarState ? "col-12" : "col-lg-6"}`}>
                                        <div className="marketCard">
                                            <img src="/images/building.jpg" alt="building image" className="bildingImg w-100" />
                                            <div className="over">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${sidebarState ? "col-12" : "col-lg-6"}`}>
                                        <div className="marketCard">
                                            <img src="/images/building.jpg" alt="building image" className="bildingImg w-100" />
                                            <div className="over">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${sidebarState ? "col-12" : "col-lg-6"}`}>
                                        <div className="marketCard">
                                            <img src="/images/building.jpg" alt="building image" className="bildingImg w-100" />
                                            <div className="over">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${sidebarState ? "col-12" : "col-lg-6"}`}>
                                        <div className="marketCard">
                                            <img src="/images/building.jpg" alt="building image" className="bildingImg w-100" />
                                            <div className="over">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${sidebarState ? "col-12" : "col-lg-6"}`}>
                                        <div className="marketCard">
                                            <img src="/images/building.jpg" alt="building image" className="bildingImg w-100" />
                                            <div className="over">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            </div>
                                        </div>
                                    </div>
                                     <div className={`${sidebarState ? "col-12" : "col-lg-6"}`}>
                                        <div className="marketCard">
                                            <img src="/images/building.jpg" alt="building image" className="bildingImg w-100" />
                                            <div className="over">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}
