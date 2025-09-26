'use client';

import React from 'react';
import { Button } from './ui/button';

const AboutSection: React.FC = () => {
    return (
        <div className="px-4 md:p-0 border-b border-[#D6D3D1]">
            <div className="max-w-[980px] mx-auto flex flex-col md:flex-row  border-x border-[#D6D3D1] py-10 md:p-0">

                {/* Left Content Area - Text Description */}
                <div className="flex-1 md:w-3/4 h-[60%] md:h-auto md:pt-16">
                    <div className="border-l-4 border-[#FF6200] pl-6 pr-16 md:pl-10 md:pr-20">
                        <p className="text-[#78716C] text-[14px] md:text-xl font-medium mb-2 uppercase">LETS UNDERSTAND</p>
                        <h2 className="text-[#292524] text-4xl md:text-[56px] font-medium leading-tight mb-8">
                            What is DesignHive?
                        </h2>
                    </div>

                    <p className="text-[#585858] text-[14px] md:text-xl leading-relaxed mb-6 px-6 md:pl-10 md:pr-20">
                        The AI wave has reshaped the design world but the real story begins after the hype.
                        Design Hive is where designers, thinkers, and innovators come together to decode what AI
                        truly means for the future of design.
                    </p>

                    <p className="text-[#585858] text-[14px] md:text-xl leading-relaxed mb-8 px-6 md:pl-10 md:pr-20">
                        We go beyond trends and buzzwords, exploring how AI enhances creativity without replacing
                        human intuition, streamlines workflows while preserving originality, and unlocks new
                        possibilities in branding, storytelling, and user experience.
                    </p>
                </div>

                {/* Right Content Area - Vertical Text & Register Button */}
                <div className="flex flex-col md:flex-row md:justify-end h-[40%] md:h-auto md:w-1/4">
                    <div className="max-md:hidden md:w-1/4 h-full border-x border-[#D6D3D1]">
                        <img
                            src="/assets/aboutSidebarImage.png"
                            alt="about"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="md:hidden max-h-[370px]">
                        <img
                            src="/assets/aboutSidebarVerticalImage.png"
                            alt="about"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex w-full md:items-end pb-0 md:pb-20">
                        <Button className='w-full max-sm:mt-10 rounded-none px-8 bg-[#CC4502] hover:bg-[#831843] transition duration-150 ease-in-out'>
                            Register Now
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutSection;