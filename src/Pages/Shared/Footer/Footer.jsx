
import { BiPhoneCall } from 'react-icons/bi';
import { BsStopwatch} from 'react-icons/bs';
import './Footer.css'
const Footer = () => {
    return (
        <div className='lg:px-20 md:px-12 px-8 py-16 footers bg-[#f2f1f1]'>
            <div className='flex items-center justify-between flex-wrap gap-8 lg:gap-0'>

                <div>
                    <h2 className='text-2xl font-bold'>Mamon<span className='text-[#0055FF]'>Dots</span></h2>
                    <p className='font-semibold py-4 text-[#00194cd0]'>When An Unknown Printer Took A Galley Of <br></br>Type Aawer Awtnd Scrambled It To Make A <br></br>Type Specimen Book.</p>
                    <div className='flex items-center space-x-2 py-2'>
                        <p className='text-2xl text-[#0055FF]'><BiPhoneCall></BiPhoneCall></p>
                        <p className='text-[#00194cd0] font-semibold'>+8801746770324</p>
                    </div>

                    <div className='flex space-x-2 py-2'>
                        <p className='text-2xl text-[#0055FF]'><BsStopwatch></BsStopwatch></p>
                        <p className='text-[#00194cd0] font-semibold'>Mon – Sat: 8 Am – 5 Pm, <br></br>Sunday: <span className='text-[#0055FF]'>CLOSED</span></p>
                    </div>
                </div>
                
                <div>
                    <h2 className='text-2xl font-bold footerMenu py-1'>Menu</h2>
                    <ul className='text-base font-semibold text-[#00194cd0] space-y-1 py-4'>
                        <li className='hover:text-[#0055FF] duration-300'><a href="">Company</a></li>
                        <li className='hover:text-[#0055FF] duration-300'><a href="">Careers</a></li>
                        <li className='hover:text-[#0055FF] duration-300'><a href="">Press media</a></li>
                        <li className='hover:text-[#0055FF] duration-300'><a href="">Our Blog</a></li>
                        <li className='hover:text-[#0055FF] duration-300'><a href="">Privacy Policy</a></li>
                    </ul>
                </div>

                <div>
                <h2 className='text-2xl font-bold footerMenu py-1'>Quick Links</h2>
                    <ul className='text-base font-semibold text-[#00194cd0] space-y-1 py-4'>
                        <li className='hover:text-[#0055FF] duration-300'><a href="">How it’s Work</a></li>
                        <li className='hover:text-[#0055FF] duration-300'><a href="">Partners</a></li>
                        <li className='hover:text-[#0055FF] duration-300'><a href="">Testimonials</a></li>
                        <li className='hover:text-[#0055FF] duration-300'><a href="">Case Studies</a></li>
                        <li className='hover:text-[#0055FF] duration-300'><a href="">Pricing</a></li>
                    </ul>
                </div>

                <div className='lg:mt-[-40px]'>
                <h2 className='text-2xl font-bold footerMenu py-1'>Our Newsletter</h2>
                <p className='text-base font-semibold  py-4 text-[#00194cd0]'>Sign Up To Privitar’s Weekly Newsletter To Get <br></br>The Latest Updates.</p>
                <form className='border rounded-full bg-[#EEF1F5]'>
                      <input className=' px-4 py-2 bg-transparent outline-none font-semibold' type="text" placeholder='Enter Your Email..' />
                      <input className='bg-[#0055FF] inline-block py-2 px-6 rounded-full hover:bg-[#00194C] duration-300 cursor-pointer text-white' type="submit" value="Subscribe" />
                </form>
                </div>

            </div>
        </div>
    );
};

export default Footer;