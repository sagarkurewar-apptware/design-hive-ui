'use client';

import React from 'react';

const DesignTeamSection: React.FC = () => {
    return (
        <div className="px-4 md:p-0 border-b border-[#D6D3D1] bg-[#FFF8EC]">
            <div className="max-w-[980px] mx-auto flex flex-col  border-x border-[#D6D3D1] py-10 md:p-0">

                <div className="md:pt-16">
                    <div className="border-l-4 border-[#FF6200] pl-6 pr-16 md:pl-10 md:pr-20">
                        <p className="text-[#78716C] text-[14px] md:text-xl font-medium mb-2 uppercase">PEOPLE BEHIND THE SCREEN </p>
                        <h2 className="text-[#292524] text-5xl md:text-[56px] font-medium leading-tight mb-8">
                            Our Design Team
                        </h2>
                    </div>

                </div>

                <div className="h-[200px] md:h-[300px] w-full px-4 md:px-0 bg-[#caafa0] flex items-center justify-center mb-8">
                   images here
                </div>

            </div>
        </div>
    );
};

export default DesignTeamSection;