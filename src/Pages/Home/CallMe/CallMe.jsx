import React from 'react';
import { LuPhoneCall } from 'react-icons/lu';
import { BsArrowRight } from 'react-icons/bs';
import './CallMe.css'
const CallMe = () => {
    return (
        <div id='callme' className='lg:px-20 md:px-12 px-8 py-8'>
            <div className='bg-[#0055FE] flex justify-between items-center flex-wrap lg:gap-0 gap-4 rounded-xl py-12 px-16'>

                 <div className='flex space-x-4 items-center first-part'>
                    <p className='text-white text-4xl'><LuPhoneCall></LuPhoneCall></p>
                    <div>
                        <p className='text-white text-lg font-semibold'>Call For More Info</p>
                        <h2 className='text-white text-2xl font-semibold'>+8801746770324</h2>
                    </div>
                 </div>

                 <div>
                    <h2 className='text-white text-2xl font-semibold'>Let’s Request a Schedule For <br></br>Free Consultation</h2>
                 </div>

                 <div>
                    <button className='py-3 px-8 rounded-full border-2 border-white text-white font-medium flex items-center hover:bg-[#31467055] hover:border-[#31467055] duration-300'>CONTACT US <span className='px-2 inline-block'><BsArrowRight></BsArrowRight></span></button>
                 </div>

            </div>
        </div>
    );
};

export default CallMe;