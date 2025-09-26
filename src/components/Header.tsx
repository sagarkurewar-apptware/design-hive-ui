import React from 'react';

const Header: React.FC = () => {
    return (
        <div className='w-full bg-[#FFF8EC]'>
            <div className="w-full h-48 md:h-[440px] flex justify-center">
                <div className="w-full h-48 md:h-[440px]">
                    <img
                        src="/assets/headerImage.png"
                        alt="Header"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="max-w-[980px] mx-auto flex flex-col justify-between gap-4 md:gap-0 px-4 md:px-0 py-6 md:py-8 text-[#292524]">
                <div className="">
                    <h2 className="text-5xl md:text-[64px] font-bold md:leading-20">Post Hype Ai at <br />DesignHive </h2>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0">
                    <div className="w-full md:w-1/2">
                        <h4 className="text-base md:text-[28px] font-medium">from Apptware Design Studio</h4>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="flex justify-between gap-4 font-medium">
                            <div className="">
                                <p className="text-[#78716C] text-base">Event Date</p>
                                <p className="text-[#FF6200] text-base md:text-[20px]">Oct 12, 2025 - Saturday</p>
                                <p className="text-base md:text-[20px] font-medium">12:00 PM onwards</p>
                            </div>

                            <div className="w-[2px] h-12 bg-[#FF6200] self-center" />

                            <div className="w-1/3 flex flex-col justify-center">
                                <p className="text-[#78716C] text-base">Location</p>
                                <p className="text-base md:text-[20px] font-medium">Pune, Bharat</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;