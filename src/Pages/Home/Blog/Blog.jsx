import HeadTitle from '../../../Hooks/HeadTitle';
import './Blog.css'

import blog from '../../../assets/img/h3_blog_img01.jpg'
import blog2 from '../../../assets/img/h3_blog_img02.jpg'
import blog3 from '../../../assets/img/h3_blog_img03.jpg'
import blog4 from '../../../assets/img/blog_avatar01.png'

import { MdOutlineDateRange } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div id='blog' className='lg:px-20 md:px-12 px-8 py-8 overflow-hidden'>
            <div data-aos="fade-right"
                data-aos-offset="500"
                data-aos-duration="700"data-aos-easing="linear" className='text-center'>
                <HeadTitle
                    subTitle={'NEWS BLOGS'}
                    Title={'Read Our Latest Updates'}
                ></HeadTitle>
                <p className='font-semibold py-2 text-[#00194c9d]'>
                Ever Find Yourself Staring At Your Computer Screen A Good Consulting <br></br>Slogan To Come To Mind? Oftentimes.
                </p>
            </div>

            <div data-aos="fade-up"
                data-aos-offset="500"
                data-aos-duration="700"data-aos-easing="linear" className='grid lg:grid-cols-3 md:grid-cols-2 lg:gap-6 gap-4 py-8 cursor-pointer'>

                <Link to='/blogdetails'>
                <div className='border group rounded-md overflow-hidden'>
                    <img className='rounded-md group-hover:scale-105 duration-300 w-full' src={blog} alt="" />
                    <div className='blog-content px-6 py-6'>
                         <h2 className='text-2xl font-bold text-[#00194C] group-hover:text-[#0055FF] duration-300'>Meet AutoManage, the best AI management tools</h2>
                         <p className='text-lg text-[#00194cc3] font-medium py-1'>Everything You Need To Start Building Area Atching Presence For Your Business.</p>
                         <div className='flex justify-between items-center'>

                            <div className='flex items-center space-x-3 text-lg font-medium text-[#00194cc3] '>
                                <img src={blog4} alt="" />
                                <p>Kat Doven</p>
                            </div>
                            
                            <div className='py-4'>
                                <p className='flex items-center text-xl space-x-3 text-[#0055FF]'><MdOutlineDateRange></MdOutlineDateRange><span className='text-base text-[#00194cc3] font-medium'>22 Jan, 2023</span></p>
                            </div>
                         </div>
                    </div>
                </div>
                </Link>

                <Link to='/blogdetails'>
                <div className='border group rounded-md overflow-hidden'>
                <img className='rounded-md group-hover:scale-105 duration-300 w-full' src={blog2} alt="" />
                <div className='blog-content px-6 py-6'>
                         <h2 className='text-2xl font-bold text-[#00194C] group-hover:text-[#0055FF] duration-300'>Meet AutoManage, the best AI management tools</h2>
                         <p className='text-lg text-[#00194cc3] font-medium py-1'>Everything You Need To Start Building Area Atching Presence For Your Business.</p>
                         <div className='flex justify-between items-center'>

                            <div className='flex items-center space-x-3 text-lg font-medium text-[#00194cc3] '>
                                <img src={blog4} alt="" />
                                <p>Kat Doven</p>
                            </div>
                            
                            <div className='py-4'>
                                <p className='flex items-center text-xl space-x-3 text-[#0055FF]'><MdOutlineDateRange></MdOutlineDateRange><span className='text-base text-[#00194cc3] font-medium'>22 Jan, 2023</span></p>
                            </div>
                         </div>
                    </div>
                </div>
                </Link>

                <Link to='/blogdetails'>
                <div className='border group rounded-md overflow-hidden'>
                <img className='rounded-md group-hover:scale-105 duration-300 w-full' src={blog3} alt="" />
                <div className='blog-content px-6 py-6'>
                         <h2 className='text-2xl font-bold text-[#00194C] group-hover:text-[#0055FF] duration-300'>Meet AutoManage, the best AI management tools</h2>
                         <p className='text-lg text-[#00194cc3] font-medium py-1'>Everything You Need To Start Building Area Atching Presence For Your Business.</p>
                         <div className='flex justify-between items-center'>

                            <div className='flex items-center space-x-3 text-lg font-medium text-[#00194cc3] '>
                                <img src={blog4} alt="" />
                                <p>Kat Doven</p>
                            </div>
                            
                            <div className='py-4'>
                                <p className='flex items-center text-xl space-x-3 text-[#0055FF]'><MdOutlineDateRange></MdOutlineDateRange><span className='text-base text-[#00194cc3] font-medium'>22 Jan, 2023</span></p>
                            </div>
                         </div>
                    </div>
                </div>
                </Link>

            </div>
        </div>
    );
};

export default Blog;