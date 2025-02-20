"use client";
import React from 'react';

type BannerProps = {
    image: { src?: string; alt?: string };
};

const Banner: React.FC<BannerProps> = ({ image }) => {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="w-full h-64">
                <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
};

export default Banner;
