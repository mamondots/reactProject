import { BiSearch, BiMenuAltRight } from 'react-icons/bi';
import { LiaPhoneVolumeSolid } from 'react-icons/lia';
import { GrMenu } from 'react-icons/gr';
import { MdClose } from 'react-icons/md';
import './Navbar.css'
import { useState } from 'react';

import Headroom from 'react-headroom';
import { Link } from 'react-scroll';



const Navbar = () => {
    const [open,setOpen] = useState(false)
    const handleOpen = () =>{
        setOpen(true)
        console.log('yaa daddy')
    }
    return (
        <div>
             <Headroom>
             <div className='lg:px-20 md:px-12 px-8 py-8 bg-[#fff]'>
            
            <div className='flex items-center justify-between'>
            <div className='logo'>
                
                <h2 className='text-2xl font-bold text-[#00194C]'>Mamon<span className='text-[#0055FF]'>Dots</span></h2>
                
            </div>
            <div className='hidden lg:block'>
                <div className='flex items-center space-x-6'>
                    <div className='menu'>
                        <ul className='flex items-center space-x-6 font-medium '>
                            <li>
                            <Link to='home' smooth={true} duration={1000}>
                            <a href="">Home</a>
                            </Link>
                            </li>

                            <li>
                            <Link to='about' smooth={true} duration={1000}>
                            <a href="">About us</a>
                            </Link>
                            </li>

                            <li>
                                <Link to='services' smooth={true} duration={1000}><a href="">Services</a></Link>
                            </li>
                            
                            <li>
                                <Link to='projects' smooth={true} duration={1000}><a href="">Projects</a></Link>
                            </li>

                            <li>
                                <Link to='team' smooth={true} duration={1000}><a href="">Our Team</a></Link>
                            </li>

                            <li>
                                <Link to='blog' smooth={true} duration={1000}><a href="">Blogs</a></Link>
                            </li>

                            <li>
                                <Link to='contact' smooth={true} duration={1000}><a href="">Contact</a></Link>
                            </li>

                        </ul>
                    </div>

                    <div className='flex items-center space-x-6'>
                        <div className='flex items-center space-x-2 text-2xl cursor-pointer'>
                            <p className='hover:text-[#0055FF] duration-300'><BiSearch></BiSearch></p>
                            <p><BiMenuAltRight></BiMenuAltRight></p>
                        </div>

                        <div className='flex items-center space-x-2'>
                            <div className='bg-[#0055FF] px-3 py-3 text-center rounded-full text-xl text-white'><LiaPhoneVolumeSolid></LiaPhoneVolumeSolid></div>
                            <div>
                                <p className='text-[14px]'>Hot Line Number</p>
                                <p className='text-base font-semibold cursor-pointer hover:text-[#0055FF] duration-300'>+8801746770324</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className='lg:hidden border-2 text-2xl font-bold py-2 px-2 border-[#0055FF]' onClick={handleOpen}>
                <h2 className='text-[#0055FF]'><GrMenu></GrMenu></h2>
            </div>
        </div>
       

        <div className='hidden-menu hidden absolute top-0 left-0 w-full h-full bg-[#26262656]'>
            <div className='bg-[#fff] inline-block absolute right-0 px-8 w-[25%] py-10 h-full'>
                <div>
                     <div className='flex items-center justify-between'>
                     <h2 className='text-xl font-bold text-[#00194C]'>Mamon<span className='text-[#0055FF]'>Dots</span></h2>
                     <p className='text-2xl cursor-pointer'><MdClose></MdClose></p>
                     </div>

                     <div className='py-6'>
                         <form>
                            <input className='border outline-none px-2 py-2' type="text" placeholder='Search here...' />
                            <input className='px-6 py-2 bg-[#0055FF] text-white font-semibold hover:bg-[#FF005C] duration-300 cursor-pointer' type="submit" value="Find" />
                         </form>
                     </div>
                     
                </div>
            <ul className='text-xl font-medium space-y-2 mt-8'>
                <li className='border-b py-2 hover:text-[#0055FF] duration-300'>
                    <Link to='home' smooth={true} duration={1000}>
                    <a href="">Home</a>
                    </Link>
                </li>
                <li className='border-b py-2 hover:text-[#0055FF] duration-300'><a href="">About us</a></li>
                <li className='border-b py-2 hover:text-[#0055FF] duration-300'><a href="">Services</a></li>
                <li className='border-b py-2 hover:text-[#0055FF] duration-300'><a href="">Projects</a></li>
                <li className='border-b py-2 hover:text-[#0055FF] duration-300'><a href="">Our Team</a></li>
                <li className='border-b py-2 hover:text-[#0055FF] duration-300'><a href="">Blogs</a></li>
                <li className='border-b py-2 hover:text-[#0055FF] duration-300'><a href="">Contact</a></li>
            </ul>
            </div>
        </div>
    </div>
             </Headroom>
        </div>
    );
};

export default Navbar;