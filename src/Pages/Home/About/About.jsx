import HeadTitle from "../../../Hooks/HeadTitle";
import './About.css'
import { SiAirplayaudio, SiAkamai } from 'react-icons/si';
import { BsArrowRight } from 'react-icons/bs';
import aboutImg from '../../../assets/img/inner_about_img01.jpg'
import aboutImg2 from '../../../assets/img/inner_about_img02.jpg'


const About = () => {
    return (
        <div id="about" className='lg:px-20 md:px-12 px-8 py-16'>

            <div className="grid lg:grid-cols-2 lg:gap-12 gap-8">

                <div data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                    <div className="text-center lg:text-left">
                        <HeadTitle
                            subTitle={'WHO WE ARE'}
                            Title={'Innovative Business Solutions For Success Company'}
                        ></HeadTitle>
                        <p className="moren text-[#707070] font-medium">
                            Morem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elita Florai Psum Dolor Sit Amet Consecteture Borem Ipsum Dolor Sitter Consectetur Adipiscing Elita Florai Psum.
                        </p>
                    </div>

                    <div className="lg:justify-normal flex justify-center items-center">
                        <div className="flex items-center flex-wrap lg:gap-8 gap-8 mt-6">

                            <div className="bg-[#E6EEFF] rounded-md py-4 px-4 flex items-center">
                                <div className="text-4xl text-[#0055FF] inline-block about-icon"><SiAirplayaudio></SiAirplayaudio></div>
                                <div className="px-4">
                                    <h2 className="text-3xl font-extrabold text-[#00194C]">152K</h2>
                                    <p className="font-semibold text-[#707070] ">Total Revenue</p>
                                </div>
                            </div>



                            <div className="bg-[#E6EEFF] rounded-md py-4 px-4 flex items-center">
                                <div className="text-4xl text-[#0055FF] inline-block about-icon"><SiAkamai></SiAkamai></div>
                                <div className="px-4">
                                    <h2 className="text-3xl font-extrabold text-[#00194C]">95%</h2>
                                    <p className="font-semibold text-[#707070] ">Increase In Sales</p>
                                </div>
                            </div>



                        </div>
                    </div>

                    <p className="moren py-4 text-[#707070] font-medium">
                        Morem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elita Florai Psum Dolor Sit Amet Consecteture Borem Ipsum Dolor Sitter Consectetur Adipiscing Elita Florai Psum.
                    </p>

                    <button className="mt-2 px-6 py-3 rounded-full bg-[#0055FF] text-white flex items-center font-semibold hover:bg-[#00194C] duration-300 cursor-pointer">CONTACT WITH US <span className="mx-3 font-semibold"><BsArrowRight></BsArrowRight></span></button>
                </div>

                <div data-aos="fade-down"
         data-aos-duration="1500" className="relative">
                    <div>
                        <div className="rounded-lg flex justify-center items-center lg:justify-normal">
                        <img className="rounded-lg" src={aboutImg} alt="" />
                        </div>

                        <div className="hidden lg:block">
                        <div className="border-4 border-[#fff] about-years absolute bottom-[-12vh] right-0 bg-[#0055FF] rounded-xl px-8 py-8 text-center text-white h-[62vh]">
                            <h2 className="text-6xl font-black">25</h2>
                            <p className="text-2xl font-bold">Years Of <br></br>Experience</p>
                        </div>

                        <div className="absolute bottom-[-12vh] rounded-lg right-[10vh]  ">
                        <img className="rounded-lg border-[#fff] border-4" src={aboutImg2} alt="" />
                        </div>
                        </div>

                    </div>


                </div>

            </div>

        </div>
    );
};

export default About;