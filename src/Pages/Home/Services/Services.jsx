
import './Services.css'
import { BiCloudLightning, BiLayer, BiAnalyse } from 'react-icons/bi';
import { PiCalculatorLight } from 'react-icons/pi';
import { BsArrowRight } from 'react-icons/bs';

const Services = () => {
    return (
        <div id='services' className='lg:px-20 md:px-12 px-8 py-16 w-full'>
            <div className='text-center service-title'>
                <p data-aos="fade-left" data-aos-easing="linear"
                    data-aos-duration="700" className="bg-[#E6EEFF] inline-block font-semibold px-4 py-2 rounded-full text-[#0055FF]">WHAT WE DO FOR YOU</p>
                <h2 data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="700" className="py-3 lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-black leading-normal text-[#00194C]">The features that make our <br></br>Service unique</h2>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-8 gap-6 py-8'>

                <div data-aos="fade-up"
                    data-aos-duration="800" className='border px-6 py-6 rounded-md group cursor-pointer hover:bg-[#0055FF] hover:text-white duration-300'>
                    <p className='bg-[#E6EEFF] px-2 py-2 rounded-md inline-block text-4xl text-[#0055FF] service-icon'><BiCloudLightning></BiCloudLightning></p>
                    <h2 className='text-xl font-bold py-2 service-font'>Finance Planning</h2>
                    <p className="moren group-hover:text-white duration-300 text-[#707070] font-medium text-base">Morem Ipsum Dolor Sittemet Consectetur Adipiscing Elitflorai Psum Dolor.</p>
                    <p className='moren group-hover:text-white duration-300 flex items-center py-4 text-sm font-medium text-[#707070]'>See Details <span className='px-4  text-sm '><BsArrowRight></BsArrowRight></span></p>
                </div>

                <div data-aos="fade-up"
                    data-aos-duration="900" className='border px-6 py-6 rounded-md group cursor-pointer hover:bg-[#0055FF] hover:text-white duration-300 lg:mt-4'>
                    <p className='bg-[#E6EEFF] px-2 py-2 rounded-md inline-block text-4xl text-[#0055FF] service-icon'><BiLayer></BiLayer></p>
                    <h2 className='text-xl font-bold py-2 service-font'>Business Consulting</h2>
                    <p lassName="moren group-hover:text-white duration-300 text-[#707070] font-medium text-base">Morem Ipsum Dolor Sittemet Consectetur Adipiscing Elitflorai Psum Dolor.</p>
                    <p className='moren group-hover:text-white duration-300 flex items-center py-4 text-sm font-medium text-[#707070]'>See Details <span className='px-4  text-sm '><BsArrowRight></BsArrowRight></span></p>
                </div>

                <div data-aos="fade-up"
                    data-aos-duration="1000" className='border px-6 py-6 rounded-md group cursor-pointer hover:bg-[#0055FF] hover:text-white duration-300'>
                    <p className='bg-[#E6EEFF] px-2 py-2 rounded-md inline-block text-4xl text-[#0055FF] service-icon'><PiCalculatorLight></PiCalculatorLight></p>
                    <h2 className='text-xl font-bold py-2 service-font'>Tax Advisory</h2>
                    <p lassName="moren group-hover:text-white duration-300 text-[#707070] font-medium text-base">Morem Ipsum Dolor Sittemet Consectetur Adipiscing Elitflorai Psum Dolor.</p>
                    <p className='moren group-hover:text-white duration-300 flex items-center py-4 text-sm font-medium text-[#707070]'>See Details <span className='px-4  text-sm '><BsArrowRight></BsArrowRight></span></p>
                </div>

                <div data-aos="fade-up"
                    data-aos-duration="1100" className='border px-6 py-6 rounded-md group cursor-pointer hover:bg-[#0055FF] hover:text-white duration-300 lg:mt-4'>
                    <p className='bg-[#E6EEFF] px-2 py-2 rounded-md inline-block text-4xl text-[#0055FF] service-icon'><BiAnalyse></BiAnalyse></p>
                    <h2 className='text-xl font-bold py-2 service-font'>Business Audi</h2>
                    <p lassName="moren group-hover:text-white duration-300 text-[#707070] font-medium text-base">Morem Ipsum Dolor Sittemet Consectetur Adipiscing Elitflorai Psum Dolor.</p>
                    <p className='moren group-hover:text-white duration-300 flex items-center py-4 text-sm font-medium text-[#707070]'>See Details <span className='px-4  text-sm '><BsArrowRight></BsArrowRight></span></p>
                </div>

            </div>

        </div>
    );
};

export default Services;