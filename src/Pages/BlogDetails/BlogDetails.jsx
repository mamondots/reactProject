import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaRegComment } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { MdOutlineDateRange, MdLabelImportantOutline } from 'react-icons/md';
import { BsCheckLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import imgBanner from '../../assets/img/project_details02.jpg'
import imgBanner2 from '../../assets/img/blog-details02.jpg'
import imgUser from '../../assets/img/blog_avatar01.png'
import imgComent from '../../assets/img/comment01.png'
import imgComent2 from '../../assets/img/comment02.png'

import postImg from '../../assets/img/rc_post01.jpg'
import postImg2 from '../../assets/img/rc_post02.jpg'
import postImg3 from '../../assets/img/rc_post03.jpg'
import postImg4 from '../../assets/img/rc_post04.jpg'

const BlogDetails = () => {
    return (
        <div>
            <div className='details py-28'>
                <div className='z-10 relative flex justify-center items-center text-white flex-col'>
                    <h2 className='text-4xl font-extrabold'>Blog Details</h2>
                    <div className='flex items-center space-x-2 py-2'>
                        <Link to='/'>
                            <p className='flex items-center text-[#ffffff8a] cursor-pointer hover:text-[#0055FF] duration-300'>Home <span className='px-2'><MdKeyboardArrowRight></MdKeyboardArrowRight></span></p>
                        </Link>
                        <p className='text-[#0055FF]'>Blog Details</p>
                    </div>
                </div>
            </div>

            <div className='lg:px-20 md:px-12 px-8 py-8'>
                <div className='flex lg:gap-8 gap-4'>

                    <div className='w-3/4'>
                        <img className='w-full rounded-md' src={imgBanner} alt="" />
                        <h2 className='py-4 text-3xl font-bold mt-2'>Why Should Business Payroll Outsourcing</h2>
                        <div className='flex items-center space-x-4'>

                            <div>
                                <p className='flex items-center space-x-2 text-lg font-semibold '><span className='text-xl text-[#0055FF]'><MdOutlineDateRange></MdOutlineDateRange></span> <span>22 Sept, 2023</span></p>
                            </div>

                            <div>
                                <p className='flex items-center space-x-2 text-lg font-semibold'><span><img src={imgUser} alt="" /></span> <span>by Kat Doven</span></p>
                            </div>

                            <div>
                                <p className='flex items-center text-lg font-semibold space-x-2'><span className='text-xl text-[#0055FF]'><MdLabelImportantOutline></MdLabelImportantOutline></span> <span>Finance,Business</span></p>
                            </div>

                            <div>
                                <p className='flex items-center text-lg font-semibold space-x-2'><span className='text-xl text-[#0055FF]'><FaRegComment></FaRegComment></span> <span>05 Comments</span></p>
                            </div>

                        </div>

                        <p className='py-4 mt-4 font-medium text-[#757575] text-base'>
                            When An Unknown Printer Took Ar Galley Offer Type Year Anddey Scrambled Make Type Aewer Specimen Book Bethas Survived Not Only Five When Annery Unknown Printer.Eed A Little Help From Our Friends From Time To Time. Although We Offer The One-Stop Convenience.
                        </p>

                        <p className='py-1 font-medium text-[#757575] text-base'>
                            Eed A Little Help From Our Friends From Time To Time. Although We Offer The One-Stop Convenience Of Annery Integrated Range Of Legal, Financial Services Under One Roof, There Are Occasions When Our Clients Areaneed Specia- List Advice Beyond The Scope Of Our Own Expertise.
                        </p>

                        <h2 className='py-4 text-3xl font-bold mt-2'>Speed Optimized</h2>
                        <p className='py-1 font-medium text-[#757575] text-base'>
                            When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Bookhas A Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchan Galley Of Type And Scrambled It To Make A Type Specimen Book.
                        </p>

                        <div className='grid lg:grid-cols-2 gap-4 py-10'>

                            <div>
                                <img className='rounded-md' src={imgBanner2} alt="" />
                            </div>

                            <div>
                                <h2 className='text-[#00194C] text-2xl font-extrabold'>Conduct Replied Off Whether Arrived Adapted</h2>
                                <p className='py-2 font-medium text-[#757575] text-base'>When An Unknown Printer Took A Galley Type Remaining Essentially Unchan Galley Of Type And Scrambled It To Make A Type Specimen Book.</p>
                                <div className='space-y-2 py-2'>
                                    <p className='flex items-center text-base space-x-2 font-medium'><span className='px-1 py-1 bg-[#0055FF] text-white rounded-full '><BsCheckLg></BsCheckLg></span>  <span className='text-[#757575]'>Commercial Property Insurance</span></p>
                                    <p className='flex items-center text-base space-x-2 font-medium'><span className='px-1 py-1 bg-[#0055FF] text-white rounded-full '><BsCheckLg></BsCheckLg></span>  <span className='text-[#757575]'>Budget Friendly Theme</span></p>
                                    <p className='flex items-center text-base space-x-2 font-medium'><span className='px-1 py-1 bg-[#0055FF] text-white rounded-full '><BsCheckLg></BsCheckLg></span>  <span className='text-[#757575]'>Happy Customers</span></p>
                                </div>


                            </div>

                        </div>

                        <p className='py-1 font-medium text-[#757575] text-base'>
                            When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Bookhas A Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchan Galley Of Type And Scrambled It To Make A Type Specimen Book.
                        </p>

                        <div className='py-12 space-y-8'>

                            <div className='border py-4 px-6 border-[#0055ff34] rounded-md flex items-center space-x-6 w-full'>
                                <div>
                                    <img src={imgComent} alt="" />
                                </div>
                                <div className='w-full'>
                                    <div className='flex items-center justify-between w-full lg:mt-2'>
                                        <p className='text-lg font-semibold'>Jessica Rose</p>
                                        <p className='text-[#0055FF] font-medium'>December 27, 2023</p>
                                    </div>
                                    <p className='py-2 font-medium text-[#757575]'>
                                        Finanappreciate Your Trust Greatly Our Clients Choose Dentace Ducts Because Know We Are The Best Area Awaitingare Really.
                                    </p>
                                    <button className='font-semibold text-[#0055FF] py-2 px-4 bg-[#E6EEFF] rounded-md'>REPLY</button>
                                </div>
                            </div>

                            <div className='border py-4 px-6 border-[#0055ff34] rounded-md flex items-center space-x-6 w-full'>
                                <div>
                                    <img src={imgComent2} alt="" />
                                </div>
                                <div className='w-full'>
                                    <div className='flex items-center justify-between w-full lg:mt-2'>
                                        <p className='text-lg font-semibold'>Parker Willy</p>
                                        <p className='text-[#0055FF] font-medium'>December 25, 2023</p>
                                    </div>
                                    <p className='py-2 font-medium text-[#757575]'>
                                        Finanappreciate Your Trust Greatly Our Clients Choose Dentace Ducts Because Know We Are The Best Area Awaitingare Really.
                                    </p>
                                    <button className='font-semibold text-[#0055FF] py-2 px-4 bg-[#E6EEFF] rounded-md'>REPLY</button>
                                </div>
                            </div>

                        </div>

                        <div className='border rounded-md py-6 px-8 border-[#0055ff34]'>
                            <form className='space-y-4'>
                                <h2 className='text-2xl font-bold'>Post a comment</h2>
                                <p className='text-lg font-semibold text-[#767676]'>Your Email Address Will Not Be Published. Required Fields Are Marked *</p>
                                <textarea className='border outline-none px-4 py-2 w-full' placeholder='Comment' cols="30" rows="5"></textarea>
                                <div className='w-full flex items-center space-x-4'>
                                    <input className='border px-4 py-2 w-full outline-none' type="text" placeholder='Name' />
                                    <input className='border px-4 py-2 w-full outline-none' type="email" placeholder='Email' />
                                    <input className='border px-4 py-2 w-full outline-none' type="text" placeholder='Website' />
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <input className='py-2 px-2' type="checkbox" />
                                    <p className='text-[#767676]'>Save my name,email websites in this browser for the next time i comment</p>
                                </div>
                                <input className='px-8 py-3 bg-[#0055FF] rounded-full text-white font-semibold cursor-pointer hover:bg-[#00194C] duration-300' type="submit" value="SUBMIT POST" />
                            </form>
                        </div>

                    </div>

                    <div className='w-1/3'>
                        <div className='border px-4 py-3 flex items-center justify-between rounded-md'>
                            <input className='outline-none border-none' type="text" placeholder='Search Here..' />
                            <p className='text-2xl text-[#0055FF]'><BiSearch></BiSearch></p>
                        </div>

                        <div className='border px-4 py-3 mt-4 rounded-md'>

                        <div className='flex items-center justify-between rounded-md'>
                            <h2 className='text-2xl font-extrabold footerMenu'>Categories</h2>
                        </div>

                        <div className='py-6 space-y-4'>

                                <div className='flex items-center justify-between'>
                                    <p className='font-bold text-lg'>Business</p>
                                    <p className='text-[#646262]'>(02)</p>
                                </div>

                                <div className='flex items-center justify-between'>
                                    <p className='font-bold text-lg'>Consulting</p>
                                    <p className='text-[#646262]'>(08)</p>
                                </div>

                                <div className='flex items-center justify-between'>
                                    <p className='font-bold text-lg'>Corporate</p>
                                    <p className='text-[#646262]'>(05)</p>
                                </div>

                                <div className='flex items-center justify-between'>
                                    <p className='font-bold text-lg'>Design</p>
                                    <p className='text-[#646262]'>(02)</p>
                                </div>

                                <div className='flex items-center justify-between'>
                                    <p className='font-bold text-lg'>Fashion</p>
                                    <p className='text-[#646262]'>(11)</p>
                                </div>

                                <div className='flex items-center justify-between'>
                                    <p className='font-bold text-lg'>Marketing</p>
                                    <p className='text-[#646262]'>(12)</p>
                                </div>
                        </div>
                            
                        </div>

                        <div className='border px-4 py-3 mt-4 rounded-md'>
                                <h2 className='text-2xl font-extrabold footerMenu'>Recent Posts</h2>

                                <div className='mt-4 space-y-2'>

                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <img className='rounded-xl' src={postImg} alt="" />
                                        </div>

                                        <div className='px-4'>
                                            <p className='flex items-center text-xl text-[#0055FF]'><MdOutlineDateRange></MdOutlineDateRange><span className='text-[#262626] text-base font-semibold px-2'>22 Jan, 2023</span></p>
                                            <h2 className='py-2 font-medium text-[#585858]'>Whale Be Raised Must Be In A Month</h2>
                                        </div>

                                    </div>

                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <img className='rounded-xl' src={postImg2} alt="" />
                                        </div>

                                        <div className='px-4'>
                                            <p className='flex items-center text-xl text-[#0055FF]'><MdOutlineDateRange></MdOutlineDateRange><span className='text-[#262626] text-base font-semibold px-2'>22 Jan, 2023</span></p>
                                            <h2 className='py-2 font-medium text-[#585858]'>Whale Be Raised Must Be In A Month</h2>
                                        </div>

                                    </div>

                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <img className='rounded-xl' src={postImg3} alt="" />
                                        </div>

                                        <div className='px-4'>
                                            <p className='flex items-center text-xl text-[#0055FF]'><MdOutlineDateRange></MdOutlineDateRange><span className='text-[#262626] text-base font-semibold px-2'>22 Jan, 2023</span></p>
                                            <h2 className='py-2 font-medium text-[#585858]'>Whale Be Raised Must Be In A Month</h2>
                                        </div>

                                    </div>

                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <img className='rounded-xl' src={postImg4} alt="" />
                                        </div>

                                        <div className='px-4'>
                                            <p className='flex items-center text-xl text-[#0055FF]'><MdOutlineDateRange></MdOutlineDateRange><span className='text-[#262626] text-base font-semibold px-2'>22 Jan, 2023</span></p>
                                            <h2 className='py-2 font-medium text-[#585858]'>Whale Be Raised Must Be In A Month</h2>
                                        </div>

                                    </div>

                                </div>
                        </div>

                        <div className='border px-4 py-3 mt-4 rounded-md'>
                             <h2 className='text-2xl font-extrabold footerMenu'>Tags</h2>
                             <div className='py-8 flex flex-wrap gap-4'>
                                    <p className='px-4 py-2 bg-[#E6EEFF] rounded-md
                                     text-[#0055FF] hover:bg-[#0055FF] hover:text-[#fff] duration-300 font-medium cursor-pointer'>Finance</p>

                                    <p  className='px-4 py-2 bg-[#E6EEFF] rounded-md
                                     text-[#0055FF] hover:bg-[#0055FF] hover:text-[#fff] duration-300 font-medium cursor-pointer'>Consultancy</p>

                                    <p  className='px-4 py-2 bg-[#E6EEFF] rounded-md
                                     text-[#0055FF] hover:bg-[#0055FF] hover:text-[#fff] duration-300 font-medium cursor-pointer'>Data</p>

                                    <p  className='px-4 py-2 bg-[#E6EEFF] rounded-md
                                     text-[#0055FF] hover:bg-[#0055FF] hover:text-[#fff] duration-300 font-medium cursor-pointer'>Agency</p>

                                    <p  className='px-4 py-2 bg-[#E6EEFF] rounded-md
                                     text-[#0055FF] hover:bg-[#0055FF] hover:text-[#fff] duration-300 font-medium cursor-pointer'>Travel</p>

                             </div>
                        </div>

                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogDetails;