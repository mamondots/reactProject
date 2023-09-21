import React from 'react';
import HeadTitle from '../../../Hooks/HeadTitle';

import projectImg from '../../../assets/img/h3_project_img01.jpg'
import projectImg2 from '../../../assets/img/h3_project_img02.jpg'
import projectImg3 from '../../../assets/img/h3_project_img03.jpg'
import projectImg4 from '../../../assets/img/h3_project_img04.jpg'
import './Projects.css'

import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div id='projects' className='lg:px-20 md:px-12 px-8 py-12 mt-12'>
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="linear"  data-aos-duration="600" className='text-center lg:text-left'>
                <HeadTitle
                    subTitle={'COMPLETE PROJECTS'}
                >
                </HeadTitle>
                <h2 className="lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-bold leading-snug">A Complete Solution For <br></br><span>Global Business</span></h2>
            </div>

            <div data-aos="fade-up"
     data-aos-duration="1000" className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-4 gap-4 py-8'>

                <Link to='/projectdetails'>
                    <div className='project-box'>
                        <img className='w-full rounded-xl' src={projectImg} alt="" />
                        <div className='project-content absolute lg:top-[40%] md:top-[40%] sm:top-[40%] top-[45%] lg:left-[16%] md:left-[16%] sm:left-[16%] left-[25%] text-center'>
                            <h2 className='text-xl font-extrabold text-white'>Finance Consultancy</h2>
                            <p className='font-medium text-[#cecdcd] py-2'>Advisory</p>
                            <div className='absolute lg:top-[20vh] md:top-[28vh] sm:top-[32vh] top-[16vh] lg:right-0 md:right-2 sm:right-0 right-0'>
                                <p className='text-[#00194C] text-2xl px-2 py-2 rounded-full bg-white inline-block hover:bg-[#00194C] hover:text-white duration-300 cursor-pointer'><IoIosArrowForward></IoIosArrowForward></p>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to='/projectdetails'>
                    <div className='project-box'>
                        <img className='w-full rounded-xl' src={projectImg2} alt="" />
                        <div className='project-content absolute lg:top-[40%] md:top-[40%] sm:top-[40%] top-[45%] lg:left-[16%] md:left-[16%] sm:left-[16%] left-[25%] text-center'>
                            <h2 className='text-xl font-extrabold text-white'>Finance Consultancy</h2>
                            <p className='font-medium text-[#cecdcd] py-2'>Advisory</p>
                            <div className='absolute lg:top-[20vh] md:top-[28vh] sm:top-[32vh] top-[16vh] lg:right-0 md:right-2 sm:right-0 right-0'>
                                <p className='text-[#00194C] text-2xl px-2 py-2 rounded-full bg-white inline-block hover:bg-[#00194C] hover:text-white duration-300 cursor-pointer'><IoIosArrowForward></IoIosArrowForward></p>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to='/projectdetails'>

                    <div className='project-box'>
                        <img className='w-full rounded-xl' src={projectImg3} alt="" />
                        <div className='project-content absolute lg:top-[40%] md:top-[40%] sm:top-[40%] top-[45%] lg:left-[16%] md:left-[16%] sm:left-[16%] left-[25%] text-center'>
                            <h2 className='text-xl font-extrabold text-white'>Finance Consultancy</h2>
                            <p className='font-medium text-[#cecdcd] py-2'>Advisory</p>
                            <div className='absolute lg:top-[20vh] md:top-[28vh] sm:top-[32vh] top-[16vh] lg:right-0 md:right-2 sm:right-0 right-0'>
                                <p className='text-[#00194C] text-2xl px-2 py-2 rounded-full bg-white inline-block hover:bg-[#00194C] hover:text-white duration-300 cursor-pointer'><IoIosArrowForward></IoIosArrowForward></p>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to='/projectdetails'>
                    <div className='project-box'>
                        <img className='w-full rounded-xl' src={projectImg4} alt="" />
                        <div className='project-content absolute lg:top-[40%] md:top-[40%] sm:top-[40%] top-[45%] lg:left-[16%] md:left-[16%] sm:left-[16%] left-[25%] text-center'>
                            <h2 className='text-xl font-extrabold text-white'>Finance Consultancy</h2>
                            <p className='font-medium text-[#cecdcd] py-2'>Advisory</p>
                            <div className='absolute lg:top-[20vh] md:top-[28vh] sm:top-[32vh] top-[16vh] lg:right-0 md:right-2 sm:right-0 right-0'>
                                <p className='text-[#00194C] text-2xl px-2 py-2 rounded-full bg-white inline-block hover:bg-[#00194C] hover:text-white duration-300 cursor-pointer'><IoIosArrowForward></IoIosArrowForward></p>
                            </div>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default Projects;