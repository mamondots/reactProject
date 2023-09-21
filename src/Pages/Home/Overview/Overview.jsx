import './Overview'
import overViewImg from '../../../assets/img/overview_img01.jpg'
import overViewImg2 from '../../../assets/img/overview_img02.jpg'
import overViewShodow from '../../../assets/img/overview_img_shape.png'
import { BsArrowsMove, BsAward } from 'react-icons/bs';
import { PiUserFocus } from 'react-icons/pi';
import HeadTitle from '../../../Hooks/HeadTitle';
const Overview = () => {
    return (
        <div id='overview' className='lg:px-36 md:px-12 px-8 py-8 relative'>
            <div className='grid lg:grid-cols-2 lg:gap-12 gap-8'>

                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-duration="600"
                    data-aos-easing="linear" className='relative'>
                    <div className='z-10 relative flex justify-center items-center'>
                        <img className='lg:rounded-full rounded-xl z-10' src={overViewImg} alt="" />
                    </div>
                    <div className='absolute left-[-20vh] top-40 hidden lg:block'>
                        <img src={overViewShodow} alt="" />
                    </div>
                    <div className='absolute left-[-12vh] rounded-xl bottom-[4vh] z-20 shadow-2xl hidden lg:block'>
                        <img className='rounded-xl' src={overViewImg2} alt="" />
                    </div>

                    <div className='hidden lg:block'>
                        <div className='bg-[#0055FF] px-6 py-6 border-4 border-[#fff] text-3xl text-white inline-block rounded-full absolute top-0 right-[14vh] z-20'>
                            <BsArrowsMove></BsArrowsMove>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-left"
                    data-aos-offset="500"
                    data-aos-easing="linear"
                    data-aos-duration="600" className='flex items-center justify-center lg:justify-normal flex-col text-center lg:text-left'>
                    <HeadTitle
                        subTitle={'COMPANY OVERVIEW'}
                        Title={'Plan your business strategy with Our Experts'}
                    ></HeadTitle>
                    <p className='moren text-[#707070] font-medium py-2'>
                        Morem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elita Florai Psum Dolor Sit Amet, Consecteture.Borem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elita Florai Psum.
                    </p>

                    <p className='moren text-[#707070] font-medium py-3'>
                        Morem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elita Florai Psum Dolor Sit Amet, Consecteture.Borem.
                    </p>

                    <div className='flex items-end py-6 flex-wrap gap-6 lg:ml-[-18vh]'>

                        <div className='border px-6 py-4 flex rounded-md items-center justify-between space-x-4'>
                            <div className='text-4xl text-[#0055FF]'>
                                <BsAward></BsAward>
                            </div>
                            <div>
                                <h2 className='text-3xl font-extrabold text-[#00194C]'>235+</h2>
                                <p className='font-medium text-[#707070] '>Best Award</p>
                            </div>
                        </div>

                        <div className='border px-6 py-4 flex rounded-md items-center justify-between space-x-4'>
                            <div className='text-4xl text-[#0055FF]'>
                                <PiUserFocus></PiUserFocus>
                            </div>
                            <div>
                                <h2 className='text-3xl font-extrabold text-[#00194C]'>98k</h2>
                                <p className='font-medium text-[#707070] '>Happy Clients</p>
                            </div>
                        </div>

                    </div>

                </div>



            </div>
        </div>
    );
};

export default Overview;