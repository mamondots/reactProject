

const Contact = () => {
    return (
        <div id="contact" className="bg-[#00194C] py-8">
            <div className='lg:px-20 md:px-12 px-8 py-8'>
                <div className="grid lg:grid-cols-2 lg:gap-8 gap-4">

                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl py-1 font-bold text-white">Request a Call Back</h2>
                        <p className="py-2 text-[#cfcece] text-lg font-medium">Ever Find Yourself Staring At Your Computer Screen A Good <br></br>Consulting Slogan To Come To Mind? Oftentimes.</p>
                    </div>

                    <div>
                        <form className="space-y-4 lg:mt-4 mt-0">

                            <div className="space-x-4 w-full flex">
                                <input className="py-2 px-4 outline-none w-full rounded-md" type="text" placeholder="Name*" />
                                <input className="py-2 px-4 outline-none w-full rounded-md" type="text" placeholder="Email*" />
                            </div>

                            <div className="space-x-4 w-full flex">
                                <input className="py-2 px-4 outline-none w-full rounded-md" type="text" placeholder="Phone*" />
                                <input className="py-2 px-4 outline-none w-full bg-[#0055FF] text-white rounded-md" type="submit" value="SEND NOW" />
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;