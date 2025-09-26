'use client';

import React from 'react';

 const roles = [
    {
      icon: "/assets/whyDesignImage1.png",
      title: "Product Designers",
      description:
        "At the intersection of creativity and problem-solving, they shape digital experiences that feel purposeful, intuitive, and human.",
    },
    {
      icon: "/assets/whyDesignImage2.png",
      title: "Founders & Product Owners",
      description:
        "Visionaries who transform ideas into impactful ventures, driving strategy, innovation, and the future of industries.",
    },
    {
      icon: "/assets/whyDesignImage3.png",
      title: "UI/ UX designer",
      description:
        "Leaders who design seamless user journeys, foster team collaboration, and ensure products grow with purpose and resilience.",
    },
    {
      icon: "/assets/whyDesignImage4.png",
      title: "Business Owners & Leaders",
      description:
        "Decision-makers who nurture growth, guide teams, and sustain businesses through human-centered innovation.",
    },
  ];

const WhyDesignHive: React.FC = () => {
    return (
        <div className="px-4 md:p-0 border-b border-[#D6D3D1] bg-[#FFF8EC]">
            <div className="max-w-[980px] mx-auto flex flex-col md:flex-row  border-x border-[#D6D3D1] py-10 md:p-0">

                {/* Left Content Area - Text Description */}
                <div className="flex-1 w-full md:w-2/5 h-[60%] md:h-auto md:pt-16">
                    <div className="border-l-4 border-[#FF6200] pl-6 pr-16 md:pl-10 md:pr-20">
                        <p className="text-[#78716C] text-[14px] md:text-xl font-medium mb-2 uppercase">WHO IT’S FOR </p>
                        <h2 className="text-[#292524] text-5xl md:text-[56px] font-medium leading-tight mb-8">
                            Why DesignHive?
                        </h2>
                    </div>

                    <p className="text-[#585858] text-[14px] md:text-xl leading-relaxed mb-6 px-6 md:pl-10 ">
                        Design Hive is where designers, thinkers, and innovators decode AI’s real impact on design—beyond the hype. We explore how AI enhances creativity, streamlines workflows, and opens new possibilities in branding, storytelling, and user experience, all while preserving human intuition.
                    </p>
                </div>

                {/* Right Content Area - Vertical Text & Register Button */}
                <div className="flex flex-col gap-4 md:h-auto w-full md:w-3/5 px-4 md:pl-8 md:py-16">
                    {roles.map((role, index) => (
                        <div key={index} className="flex items-start space-x-4">
                            <div className="w-[96px] h-[96px] md:w-[120px] md:h-[120px] flex items-center justify-center rounded-md">
                                <img src={role.icon} alt={role.title} className="w-full h-full" />
                            </div>
                            <div className='flex-1 pr-2 md:pr-10'>
                                <h3 className="font-medium text-base md:text-2xl text-[#443F3F]">{role.title}</h3>
                                <p className="text-[12px] md:text-base text-[#78716C]">{role.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default WhyDesignHive;