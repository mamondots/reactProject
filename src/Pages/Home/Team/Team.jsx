import React from 'react';
import HeadTitle from '../../../Hooks/HeadTitle';
import teamImg from '../../../assets/img/h2_team_img01.jpg'
import teamImg2 from '../../../assets/img/h2_team_img02.jpg'
import teamImg3 from '../../../assets/img/h2_team_img03.jpg'
import teamImg4 from '../../../assets/img/h2_team_img04.jpg'
import './Team.css'

import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Team = () => {
    return (
        <div id='team' className='lg:px-20 md:px-12 px-8 py-12 overflow-hidden'>
            <div data-aos="fade-left"
                data-aos-offset="500"
                data-aos-duration="700"data-aos-easing="linear" className='text-center'>
                <HeadTitle
                    subTitle={'EXPERT PEOPLE'}
                    Title={'Our Dedicated Team Members'}
                ></HeadTitle>
                <p className='font-semibold py-2 text-[#00194c9d]'>
                    Ever Find Yourself Staring At Your Computer Screen A Good Consulting <br></br>Slogan To Come To Mind? Oftentimes.
                </p>
            </div>

            <div data-aos="fade-right"
                data-aos-offset="500"
                data-aos-duration="700"data-aos-easing="linear" className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-6 gap-4 py-8 relative'>

                <Link to='/teamdetails'>
                    <div className='relative'>
                        <img className='w-full rounded-md' src={teamImg} alt="" />
                        <div className='team-content absolute left-[8%] md lg:top-[8%] md:top-[8%] sm:top-[6%] top-[3%]'>
                            <div className=''>
                                <h2 className='text-white lg:text-xl md:text-2xl sm:text-3xl text-3xl font-extrabold'>Brooklyn Simmons</h2>
                                <p className='lg:text-base text-lg font-medium text-[#ffffffc7] py-1 team-line'>Finance Advisor</p>

                                <div className='absolute top-[30vh]  bg-[#0045CE] px-2 py-4 text-white rounded-full space-y-2 text-xl cursor-pointer'>

                                    <p className='rotate-45 hover:rotate-0 duration-300'><BiLogoFacebook></BiLogoFacebook></p>
                                    <p className='rotate-45 hover:rotate-0 duration-300'><BiLogoInstagram></BiLogoInstagram></p>
                                    <p className='rotate-45 hover:rotate-0 duration-300'><BiLogoTwitter></BiLogoTwitter></p>
                                    <p className='rotate-45 hover:rotate-0 duration-300'><BiLogoLinkedin></BiLogoLinkedin></p>

                                </div>

                            </div>

                        </div>
                    </div>
                </Link>

                <Link to='/teamdetails'>
                    <div className='relative'>
                        <img className='w-full rounded-md' src={teamImg2} alt="" />
                        <div className='team-content absolute left-[8%] md lg:top-[8%] md:top-[8%] sm:top-[6%] top-[3%]'>
                            <div className=''>
                                <h2 className='text-white lg:text-xl md:text-2xl sm:text-3xl text-3xl font-extrabold'>Jenny Wilson</h2>
                                <p className='lg:text-base text-lg font-medium text-[#ffffffc7] py-1 team-line'>Finance Advisor</p>

                                <div className='absolute top-[30vh]  bg-[#0045CE] px-2 py-4 text-white rounded-full space-y-2 text-xl cursor-pointer'>

                                    <p className='rotate-45 hover:rotate-0 duration-300'><BiLogoFacebook></BiLogoFacebook></p>
                                    <p className='rotate-45 hover:rotate-0 duration-300'><BiLogoInstagram></BiLogoInstagram></p>
                                    <p className='rotate-45 hover:rotate-0 duration-300'><BiLogoTwitter></BiLogoTwitter></p>
                                    <p className='rotate-45 hover:rotate-0 duration-300'><BiLogoLinkedin></BiLogoLinkedin></p>

                                </div>

                            </div>

                        </div>

                    </div>
                </Link>

                <Link to='/teamdetails'>
                    <div className='relative'>
                        <img className='w-full rounded-md' src={teamImg3} alt="" />
                        <div className='team-content absolute left-[8%] md lg:top-[8%] md:top-[8%] sm:top-[6%] top-[3%]'>
                            <div className=''>
                                <h2 className='text-white lg:text-xl md:text-2xl sm:text-3xl text-3xl font-extrabold'>Brooklyn Simmons</h2>
                                <p className='lg:text-base text-lg font-medium text-[#ffffffc7] py-1 team-line'>Finance Advisor</p>

                                <div className='absolute top-[30vh]  bg-[#0045CE] px-2 py-4 text-white rounded-full space-y-2 text-xl cursor-pointer'>

                                    <p className='rotate-45 hover:rotate-0 duration-300'><BiLogoFacebook></BiLogoFacebook></p>
                                    <p className='rotate-45 hover:rotate-0 duration-300'><BiLogoInstagram></BiLogoInstagram></p>
                                    <p className='rotate-45 hover:rotate-0 duration-300'><BiLogoTwitter></BiLogoTwitter></p>
                                    <p className='rotate-45 hover:rotate-0 duration-300'><BiLogoLinkedin></BiLogoLinkedin></p>

                                </div>

                            </div>

                        </div>

                    </div>
                </Link>

                <Link to='/teamdetails'>
                    <div className='relative'>
                        <img className='w-full rounded-md' src={teamImg4} alt="" />
                        <div className='team-content absolute left-[8%] md lg:top-[8%] md:top-[8%] sm:top-[6%] top-[3%]'>
                            <div className=''>
                                <h2 className='text-white lg:text-xl md:text-2xl sm:text-3xl text-3xl font-extrabold'>Wade Warren</h2>
                                <p className='lg:text-base text-lg font-medium text-[#ffffffc7] py-1 team-line'>Finance Advisor</p>

                                <div className='absolute top-[30vh]  bg-[#0045CE] px-2 py-4 text-white rounded-full space-y-2 text-xl cursor-pointer'>

                                    <p className='rotate-45 hover:rotate-0 duration-300'><BiLogoFacebook></BiLogoFacebook></p>
                                    <p className='rotate-45 hover:rotate-0 duration-300'><BiLogoInstagram></BiLogoInstagram></p>
                                    <p className='rotate-45 hover:rotate-0 duration-300'><BiLogoTwitter></BiLogoTwitter></p>
                                    <p className='rotate-45 hover:rotate-0 duration-300'><BiLogoLinkedin></BiLogoLinkedin></p>

                                </div>

                            </div>

                        </div>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default Team;