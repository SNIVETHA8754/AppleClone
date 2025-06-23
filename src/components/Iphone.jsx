import React from 'react';
import iphone from '../assets/images/Iphone.jpg';
import Built from '../assets/images/MultiColor.png';
import iphonemobile from '../assets/images/Iphonemobile.jpg';

const Iphone = () => {
    return (
        <div className="mt-3 px-2">
            <div
                className="w-full h-[650px] bg-cover bg-center bg-no-repeat flex flex-col items-center px-4 cursor-pointer relative overflow-hidden rounded-lg"
                style={{
                    backgroundImage: `url(${window.innerWidth <= 640 ? iphonemobile : iphone})`,
                    backgroundPosition: 'center top',
                }}
            >
                <div className="text-center max-w-2xl mx-auto pt-16 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">iPhone</h1>
                    <h3 className="text-xl md:text-2xl text-black mb-8">
                        Meet the iPhone 16 family.
                    </h3>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors shadow-lg">
                            Learn more
                        </button>
                        <button className="bg-transparent hover:bg-blue-50 text-blue-600 px-8 py-3 rounded-full text-lg font-medium border-2 border-blue-500 transition-colors">
                            Shop iPhone
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <img
                            className="w-72 max-w-full h-auto"
                            src={Built}
                            alt="Built for Apple Intelligence"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Iphone;