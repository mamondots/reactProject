import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {
    const [countStart, setCountStart] = useState(false)
    return (
        <div id='counter' className='lg:px-20 md:px-12 px-8 py-8'>
            <ScrollTrigger onEnter={() => setCountStart(true)} onExit={() => setCountStart(false)}>
                <div className='grid lg:grid-cols-4 lg:gap-8 text-center counter relative'>

                    <div>
                        <h2 className='text-[#00194C] text-6xl font-extrabold counter-box'>
                            {countStart && <CountUp
                                start={0}
                                end={95}
                                duration={2.75}
                            ></CountUp>}%
                        </h2>
                        <p className='text-[#00194ca2] font-bold'>Success Rate</p>
                    </div>

                    <div>
                        <h2 className='text-[#00194C] text-6xl font-extrabold counter-box'>
                        {countStart && <CountUp
                                start={0}
                                end={55}
                                duration={2.75}
                            ></CountUp>}k</h2>
                        <p className='text-[#00194ca2] font-bold'>Complete Projects</p>
                    </div>

                    <div>
                        <h2 className='text-[#00194C] text-6xl font-extrabold'> {countStart && <CountUp
                                start={0}
                                end={25}
                                duration={2.75}
                            ></CountUp>}k</h2>
                        <p className='text-[#00194ca2] font-bold'>Satisfied Clients</p>
                    </div>

                    <div>
                        <h2 className='text-[#00194C] text-6xl font-extrabold'> {countStart && <CountUp
                                start={0}
                                end={15}
                                duration={2.75}
                            ></CountUp>}k</h2>
                        <p className='text-[#00194ca2] font-bold'>Trade In The World</p>
                    </div>

                </div>
            </ScrollTrigger>
        </div>
    );
};

export default Counter;