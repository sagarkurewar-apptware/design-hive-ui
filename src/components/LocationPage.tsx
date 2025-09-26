'use client';

import React from 'react';
const LocationPage: React.FC = () => (
    <div className="bg-white px-4 md:px-0 border-b">
        <div className="w-full md:max-w-[980px] mx-auto h-[250px] md:h-[440px] border-x border-[#D6D3D1] py-10">
            <iframe
                title="Google Map"
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.450914816197!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzM0LjAiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1692700000000!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </div>
);


export default LocationPage;
