
import { Link } from 'react-router-dom';
import './ProjectDetails.css'
import { MdKeyboardArrowRight } from 'react-icons/md';
import imgBanner from '../../assets/img/project_details01.jpg'
import imgBanner2 from '../../assets/img/project_details02.jpg'
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoLinkedin } from 'react-icons/bi';
import {BsCheckLg} from 'react-icons/bs';
import {FaPlay} from 'react-icons/fa';
const ProjectDetails = () => {
    return (
        <div className=''>
            <div className='details py-28'>
                <div className='z-10 relative flex justify-center items-center text-white flex-col'>
                    <h2 className='text-4xl font-extrabold'>Portfolio Details</h2>
                    <div className='flex items-center space-x-2 py-2'>
                        <Link to='/'>
                            <p className='flex items-center text-[#ffffff8a] cursor-pointer hover:text-[#0055FF] duration-300'>Home <span className='px-2'><MdKeyboardArrowRight></MdKeyboardArrowRight></span></p>
                        </Link>
                        <p className='text-[#0055FF] '>Portfolio Details</p>
                    </div>
                </div>
            </div>

            <div className='lg:px-20 md:px-12 px-8 py-8'>
                <div className='flex flex-wrap  gap-8'>

                    <div className=''>
                        <img className='rounded-md w-full' src={imgBanner} alt="" />
                    </div>

                    <div className='border rounded-md lg:w-1/4 w-full px-8 py-8'>
                        <h2 className='footerMenu text-2xl font-extrabold'>Project Information</h2>

                        <div className='py-12 space-y-4'>

                            <div className='flex items-center justify-between'>
                                <p className='text-lg font-extrabold text-[#00194C]'>Client:</p>
                                <p className='text-[#262626b1]'>Rebeca</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='text-lg font-extrabold text-[#00194C]'>Date:</p>
                                <p className='text-[#262626b1]'>17 September, 2023</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='text-lg font-extrabold text-[#00194C]'>Category:</p>
                                <p className='text-[#262626b1]'>Modern</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='text-lg font-extrabold text-[#00194C]'>Author:</p>
                                <p className='text-[#262626b1]'>Mark Willy</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='text-lg font-extrabold text-[#00194C]'>Place:</p>
                                <p className='text-[#262626b1]'>Paris</p>
                            </div>

                            <div className='flex items-center justify-between'>
                                <p className='text-lg font-extrabold text-[#00194C]'>Share:</p>
                                <div className='flex items-center space-x-2 cursor-pointer'>
                                    <p className='hover:text-[#0055FF] duration-300'><BiLogoFacebook></BiLogoFacebook></p>
                                    <p className='hover:text-[#0055FF] duration-300'><BiLogoInstagram></BiLogoInstagram></p>
                                    <p className='hover:text-[#0055FF] duration-300'><BiLogoTwitter></BiLogoTwitter></p>
                                    <p className='hover:text-[#0055FF] duration-300'><BiLogoLinkedin></BiLogoLinkedin></p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className='lg:px-20 md:px-12 px-8'>
                <h2 className='text-3xl font-extrabold text-[#00194C]'>Business Planing Solution</h2>
                <p className='font-semibold py-3 text-[#00194cac]'>
                    When An Unknown Printer Took Ar Galley Offer Type Year Anddey Scrambled Make Type Aewer Specimen Book Bethas Survived Not Only Five When Anner Year Unknown Printer.Eed A Little Help From Our Friends From Time To Time. Although We Offer The One-Stop Convenience.When An Unknown Printer Took Ar Galley Type Year Anddey Scrambled Make Type Aewer Specimen Book Bethas Survived.
                </p>

                <p className='font-semibold py-3 text-[#00194cac]'>
                    Eed A Little Help From Our Friends From Time To Time. Although We Offer The One-Stop Convenience Of Annery Integrated Range Of Legal, Financial Services Under One Roof, There Are Occasions When Our Clients Areaneed Specia- List Advice Beyond The Scope Of Our Own Expertise. That’s Why We’ve Developed Close Working Relationships With A Number Of Strategic Partner.
                </p>

                <div className='py-4'>
                    <h2 className='text-3xl font-extrabold text-[#00194C]'>Speed Optimized</h2>
                    <p className='font-semibold py-3 text-[#00194cac]'>When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Bookhas A Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchan Galley Of Type And Scrambled It To Make A Type Specimen Book.</p>
                </div>

                <div className='grid lg:grid-cols-2 lg:gap-8 gap-4 py-8 mt-8'>

                    <div>
                        <h2 className='text-3xl font-extrabold'>Raise Capital Faster Negotiate On <br></br>Your Own Terms</h2>
                        <p className='font-semibold py-3 text-[#00194cac]'>
                            When An Unknown Printer Took A Galley Offer Typey Anddey Scrambled Make A Type Specimen Bookhas Survived Not Only Five Centuries But Also.
                        </p>

                        <div className='flex items-center space-x-8  details-menu'>
                             <div className='py-4 space-y-3'>
                                <li className='flex items-center text-lg font-semibold'><span className='px-1 py-1 bg-[#0055FF] rounded-full text-white'><BsCheckLg></BsCheckLg></span><span className='text-[#00194cc7] px-2'>100% Better results</span></li>
                                <li className='flex items-center text-lg font-semibold'><span className='px-1 py-1 bg-[#0055FF] rounded-full text-white'><BsCheckLg></BsCheckLg></span><span className='text-[#00194cc7] px-2'>Budget Friendly Theme</span></li>
                             </div>

                             <div className='space-y-3 text-lg font-semibold'>
                                <li className='flex items-center'><span className='px-1 py-1 bg-[#0055FF] rounded-full text-white'><BsCheckLg></BsCheckLg></span><span className='text-[#00194cc7] px-2'>Valuable Ideas</span></li>
                                <li className='flex items-center'><span className='px-1 py-1 bg-[#0055FF] rounded-full text-white'><BsCheckLg></BsCheckLg></span><span className='text-[#00194cc7] px-2'>Happy Customers</span></li>
                             </div>
                             
                        </div>
                        <p className='font-semibold py-6 text-[#00194cac]'>
                        When An Unknown Printer Took A Galley Of Type And Aweratr Scrambled It To Make A Type Specimen Bookhas A Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentially Unchan Galley Of Type And Scrambled It To Make A Type Specimen Book.
                        </p>
                    </div>

                    <div className='relative'>
                        <img className='rounded-md' src={imgBanner2} alt="" />
                        <div className='absolute top-[45%] left-[45%]'>
                            <p className='text-white  px-5 py-5 rounded-full bg-[#0055FF] hover:bg-white hover:text-[#0055FF] duration-300 cursor-pointer'><FaPlay></FaPlay></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;