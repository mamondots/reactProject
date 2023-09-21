
import { BsArrowRight } from 'react-icons/bs';
import img from '../../../assets/img/hero.jpg'
import img2 from '../../../assets/img/h3_banner_img02.jpg'
import img3 from '../../../assets/img/h3_banner_img03.jpg'
import brand01 from '../../../assets/img/brand_img01.png'
import brand02 from '../../../assets/img/brand_img02.png'
import brand03 from '../../../assets/img/brand_img03.png'
import brand04 from '../../../assets/img/brand_img04.png'
import brand05 from '../../../assets/img/brand_img05.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import About from '../About/About';
import Services from '../Services/Services';
import Overview from '../Overview/Overview';
import Whybest from '../Whybest/Whybest';
import Projects from '../Projects/Projects';
import Counter from '../Counter/Counter';
import Team from '../Team/Team';
import CallMe from '../CallMe/CallMe';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <div id='home' className='lg:px-20 md:px-12 px-8 py-8'>
                <div className='grid lg:grid-cols-2 gap-12'>
                    <div className='text-center lg:text-justify'>
                        <h2 className='lg:text-5xl md:text-4xl text-3xl text-[#00194C] font-black lg:leading-tight'>Need Business <br></br>Consultation <br></br>Today</h2>
                        <p 
                             className='leading-normal py-4 text-[#334770] font-medium'>Agilos Helps You To Convert Your Data Into A Strategic Asset And <br></br>Get Top-Notch Business Insights.
                        </p>
                        <div className='inline-block'>
                            <div className='lg:px-8 md:px-8 px-6 py-4 border rounded-full flex items-center justify-between relative'>
                                <input className='outline-none lg:mr-32 md:mr-32 sm:mr-28 mr-20' type="text" placeholder="E-mail Address" />
                                <p className='py-4 px-4 rounded-full bg-[#0055FF] text-white text-xl inline-block absolute right-2 cursor-pointer hover:bg-[#FF005C] duration-300'><BsArrowRight></BsArrowRight></p>
                            </div>
                        </div>

                        <div className='hidden lg:block'>
                            <p className='py-12 text-sm text-[#262626c7] font-semibold'>Trusted by 10,000+ companies around the world</p>
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={60}
                                loop={true}
                                className="mySwiper opacity-50">
                                <SwiperSlide>
                                    <img src={brand02} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={brand04} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={brand02} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={brand04} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={brand02} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={brand04} alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </div>


                    </div>

                    <div className='flex items-center justify-center'>
                        <img className='' src={img} alt="" />
                        <img className='absolute bottom-20 ml-[-70vh] rounded-xl shadow-lg hidden lg:block' src={img2} alt="" />
                        <img className='absolute bottom-60 right-20 rounded-xl shadow-lg hidden lg:block' src={img3} alt="" />
                    </div>

                </div>
            </div>
            <About></About>
            <Services></Services>
            <Overview></Overview>
            <Whybest></Whybest>
            <Projects></Projects>
            <Counter></Counter>
            <Team></Team>
            <CallMe></CallMe>
            <Blog></Blog>
            <Contact></Contact>
        </div>
    );
};

export default Home;