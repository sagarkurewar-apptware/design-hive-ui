import React from 'react';

const Header: React.FC = () => {
    return (
        <div className='w-full border-b border-gray-300 bg-[#FFF8EC]'>
            <div className="w-full h-48 md:h-[440px] bg-gray-200 flex justify-center">
                <img src="/assets/headerImage.png" alt="Header" className="max-h-full max-w-full object-cover" />
            </div>

            <div className="w-[980px] mx-auto flex flex-col justify-between py-6 md:py-8 text-[#292524]">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-2xl md:text-6xl font-bold leading-20">Post Hype Ai at <br />DesignHive </h2>
                </div>

                <div className="flex justify-between items-center">
                    <div className="w-2/5">
                        <h4 className="text-base md:text-2xl font-medium leading-20">from Apptware Design Studio</h4>
                    </div>
                    <div className="w-2/5 flex items-stretch">
                        <div className="flex-1 bg-gray-100">
                            <p className="text-[#78716C] text-base">Event Date</p>
                            <p className="text-[#FF6200] text-[20px]">Oct 12, 2025 - Saturday</p>
                            <p className="text-[20px] font-medium">12:00 PM onwards</p>
                        </div>

                        <div className="w-px bg-[#FF6200]" />

                        <div className="flex-1 bg-gray-100">
                            <p className="text-[#78716C] text-base">Location</p>
                            <p className="text-[20px] font-medium">Pune, Bharat</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;