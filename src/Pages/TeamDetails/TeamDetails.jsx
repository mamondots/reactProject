import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import img from '../../assets/img/team_details_img.jpg'

import { LiaPhoneVolumeSolid } from 'react-icons/lia';
import { TfiEmail } from 'react-icons/tfi';
import { BiMap } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import { HiOutlineShare } from 'react-icons/hi';

const TeamDetails = () => {
    return (
        <div>
            <div className='details py-28'>
                <div className='z-10 relative flex justify-center items-center text-white flex-col'>
                    <h2 className='text-4xl font-extrabold'>Team Details</h2>
                    <div className='flex items-center space-x-2 py-2'>
                        <Link to='/'>
                            <p className='flex items-center text-[#ffffff8a] cursor-pointer hover:text-[#0055FF] duration-300'>Home <span className='px-2'><MdKeyboardArrowRight></MdKeyboardArrowRight></span></p>
                        </Link>
                        <p className='text-[#0055FF] '>Team Details</p>
                    </div>
                </div>
            </div>

            <div className='lg:px-20 md:px-12 px-8 py-20'>
                 <div className='flex lg:flex-nowrap flex-wrap lg:gap-8 gap-4'>

                     <div className='lg:w-1/2 w-full'>
                        <img className='rounded-md w-full' src={img} alt="" />

                        <div className='py-4 space-y-2'>
                             <p className='flex items-center space-x-2 text-lg font-semibold'><span className='px-2 py-2 rounded-full bg-[#E6EEFF] text-[#0055FF]'><LiaPhoneVolumeSolid></LiaPhoneVolumeSolid></span> <span>+8801746770324</span></p>
                             <p className='flex items-center space-x-2 text-lg font-semibold'><span className='px-2 py-2 rounded-full bg-[#E6EEFF] text-[#0055FF]'><TfiEmail></TfiEmail></span> <span>mamonrabin@gmail.com</span></p>
                             <p className='flex items-center space-x-2 text-lg font-semibold'><span className='px-2 py-2 rounded-full bg-[#E6EEFF] text-[#0055FF]'><BiMap></BiMap></span> <span>20 Avenue, Mark Street, Dhaka City</span></p>
                        </div>

                        <div className='space-x-2 flex items-center'>
                            <button className='flex items-center py-3 px-6 bg-[#0055FF] rounded-full text-white font-medium hover:bg-[#00194C] duration-300'>CONTACT WITH ME <span className='px-2'><BsArrowRight></BsArrowRight></span></button>
                            <button className='flex items-center py-3 px-6 bg-[#E6EEFF] rounded-full text-[#0055FF] font-medium hover:bg-[#0055FF]  hover:text-[#fff] duration-300'><HiOutlineShare></HiOutlineShare><span className='px-2'>SHARE</span></button>
                        </div>
                     </div>

                     <div className='lg:w-2/3 lg:px-8'>
                        <h2 className='text-3xl font-extrabold text-[#00194C] py-2'>Leslie Alexander</h2>
                        <p className='text-lg font-medium text-[#878787] footerMenu'>Finance Advisor</p>
                        <p className='py-8 font-medium text-[#262626da]'>Estibulum Ac Diam Sit Amet Quam Vehicula Elementum Sed Sit Amet Dui Sed Porttitor Lect Us Nibh. Praesent Sapien Massa, Convallis A Pellentesquam Vehiculaestibulum Ac Diam Sit Amet Quam Vehicula Elementumsit Amet Dui Sed Porttitor Lectus NibPraesent Sapien Massa Convallis A Pellentese Nec Diam Sit Amet Quam Vehicula.</p>

                        <div>
                            <h2 className='text-3xl font-extrabold text-[#00194C] footerMenu'>My Expertise Skills</h2>
                            <p className='py-8 font-medium text-[#262626da]'>
                            When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book It Has Survived Not Only Five Centuries
                            </p>

                            <div className='space-y-2'>

                                <div>
                                    <div className='flex justify-between items-center w-[65%] py-1'>
                                        <p className='font-semibold'>Finance Consultancy</p>
                                        <p className='font-semibold text-[#595959]'>65%</p>
                                    </div>
                                    <div className='bg-[#E6EEFF] rounded-full w-full h-2 inline-block relative'>
                                        <span className='py-1 rounded-full bg-[#0055FF] w-[65%] inline-block absolute top-0'></span>
                                    </div>
                                </div>

                                <div>
                                    <div className='flex justify-between items-center w-[80%] py-1'>
                                        <p className='font-semibold'>Business</p>
                                        <p className='font-semibold text-[#595959]'>80%</p>
                                    </div>
                                    <div className='bg-[#E6EEFF] rounded-full w-full h-2 inline-block relative'>
                                        <span className='py-1 rounded-full bg-[#0055FF] w-[80%] inline-block absolute top-0'></span>
                                    </div>
                                </div>

                                <div>
                                    <div className='flex justify-between items-center w-[90%] py-1'>
                                        <p className='font-semibold'>Marketing</p>
                                        <p className='font-semibold text-[#595959]'>90%</p>
                                    </div>
                                    <div className='bg-[#E6EEFF] rounded-full w-full h-2 inline-block relative'>
                                        <span className='py-1 rounded-full bg-[#0055FF] w-[90%] inline-block absolute top-0'></span>
                                    </div>
                                </div>

                            </div>

                            <p className='py-6 font-medium text-[#262626da]'>
                            Estibulum Ac Diam Sit Amet Quam Vehicula Elementum Sed Sit Amet Dui Sed Porttitor Lect Us Nibh. Praesent Sapien Massa, Convallis A Pellentesquam Vehiculaestibulum Ac Diam Sit Amet Quam Vehicula Elementumsit Amet Dui Sed Porttitor Lectus NibPraesent Sapien Massa Convallis A Pellentese Nec Diam Sit Amet Quam Vehicula.
                            </p>
                        </div>

                     </div>

                 </div>
            </div>
        </div>
    );
};

export default TeamDetails;