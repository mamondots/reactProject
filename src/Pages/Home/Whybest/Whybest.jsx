import './Whybest.css'
import BGimg from '../../../assets/img/choose_bg.jpg'
import { FaPlay } from 'react-icons/fa';
import HeadTitle from '../../../Hooks/HeadTitle';

const Whybest = () => {
    return (
        <div id='whybest' className='mt-16'>
            <div className='best-bg lg:px-20 md:px-12 px-8 py-8'>
                <div className='grid lg:grid-cols-2 lg:gap-12 gap-8 relative '>

                    <div className='lg:py-20 py-12 lg:mt-40'>
                        <div className='text-center lg:text-left'>
                            <h2 className='text-4xl font-extrabold text-white leading-snug'> We’ll Ensure You Always Get the Best Guidance.</h2>
                            <p className='moren text-[#dcdcdc] font-medium py-2'>Morem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elita Florai Psum Dolor Sit Amet, Consecteture.Borem.</p>
                        </div>
                        <div className='flex justify-center lg:justify-normal items-center py-6 space-x-6 group cursor-pointer'>

                            <p className='px-5 py-5 rounded-full bg-[#0055FF] text-white text-2xl bestIcon'><FaPlay></FaPlay></p>
                            <h2 className='text-white font-semibold cursor-pointer group-hover:text-[#0055FF] duration-300 inline-block'>Watch Video</h2>

                        </div>
                    </div>

                    <div className='bg-[#FFFFFF] inline-block rounded-md pt-8'>
                        <div className='py-6 px-16'>
                            <HeadTitle
                                subTitle={'WHY WE ARE THE BEST'}
                                Title={'Smart Great Finance For you Solutions'}
                            ></HeadTitle>
                            <p className='moren text-[#707070] font-medium py-2'>
                                Morem Ipsum Dolor Sit Amet Consectedipiscing Elita Florai Psum Dolor Sit Amonsectet Borem Ipsum Consectetur.
                            </p>
                        </div>

                        <div className='px-16 pb-8 space-y-2 w-[100%]'>

                            <div>
                                <div className='flex justify-between items-center font-semibold py-2 text-lg text-[#00194C] w-[85%]'>
                                    <p>Consulting</p>
                                    <p>85%</p>
                                </div>
                                <div className='px-2 py-1 rounded-full bg-[#E6EEFF]'>
                                <div className='w-[85%] bg-[#0055FF] px-8 py-1 rounded-full'></div>
                                </div>
                            </div>

                            <div>
                                <div className='flex justify-between items-center font-semibold py-2 text-lg text-[#00194C] w-[76%]'>
                                    <p>Investment</p>
                                    <p>76%</p>
                                </div>
                                <div className='px-2 py-1 rounded-full bg-[#E6EEFF]'>
                                <div className='w-[76%] bg-[#0055FF] px-8 py-1 rounded-full'></div>
                                </div>
                            </div>

                            <div className='w-[100%]'>
                                <div className='flex justify-between items-center font-semibold py-2 text-lg text-[#00194C] w-[90%]'>
                                    <p>Business</p>
                                    <p>90%</p>
                                </div>
                                <div className='px-2 py-1 rounded-full bg-[#E6EEFF] relative '>
                                    <div className='w-[90%] bg-[#0055FF] px-8 py-1 rounded-full'></div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Whybest;