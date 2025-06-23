import React from 'react';
import Multi from '../assets/images/MultiColor.png';
import Laplap from '../assets/images/Laplap.jpg';
import Padmobile from '../assets/images/Padmobile.jpg';
import Mac from '../assets/images/Mac.jpg';
import Maclap from '../assets/images/Maclap.jpg';

const Macbook = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-2 p-2">
            {/* MacBook Air Section */}
            <div className="w-full lg:w-1/2 h-[550px] relative overflow-hidden rounded-lg">
                {/* Mobile Background */}
                <div
                    className="bg-cover bg-center h-full w-full lg:hidden flex flex-col items-center justify-center text-center px-6 relative"
                    style={{ backgroundImage: `url(${Mac})` }}
                >
                    <div className="flex flex-col items-center -mt-16">
                        <h1 className="text-3xl font-bold text-black mb-2">MacBook Air</h1>
                        <h3 className="text-lg text-black mb-6">Sky blue colour. Sky high performance with M4.</h3>
                        <div className="flex flex-col sm:flex-row gap-3 mb-8">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                                Learn More
                            </button>
                            <button className="bg-transparent hover:bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-sm font-medium border-2 border-blue-500 transition-colors">
                                Buy
                            </button>
                        </div>
                    </div>
                    <img
                        className="w-72 absolute bottom-0 left-1/2 transform -translate-x-1/2"
                        src={Multi}
                        alt="Built for Apple Intelligence"
                    />
                </div>

                {/* Desktop Background */}
                <div
                    className="bg-cover bg-center h-full w-full hidden lg:flex flex-col items-center justify-center text-center px-6 relative cursor-pointer"
                    style={{ backgroundImage: `url(${Maclap})` }}
                >
                    <div className="flex flex-col items-center -mt-16">
                        <h1 className="text-3xl font-bold text-black mb-2">MacBook Air</h1>
                        <h3 className="text-lg text-black mb-6">Sky blue colour. Sky high performance with M4.</h3>
                        <div className="flex gap-4 mb-8">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                                Learn More
                            </button>
                            <button className="bg-transparent hover:bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-sm font-medium border-2 border-blue-500 transition-colors">
                                Buy
                            </button>
                        </div>
                    </div>
                    <img
                        className="w-72 absolute bottom-0 left-1/2 transform -translate-x-1/2"
                        src={Multi}
                        alt="Built for Apple Intelligence"
                    />
                </div>
            </div>

            {/* College Students Section */}
            <div className="w-full lg:w-1/2 h-[550px] relative overflow-hidden rounded-lg">
                {/* Mobile Background */}
                <div
                    className="bg-cover bg-center h-full w-full lg:hidden flex flex-col items-center justify-start text-center px-6 relative"
                    style={{ backgroundImage: `url(${Padmobile})` }}
                >
                    <div className="pt-16">
                        <h1 className="text-3xl font-bold text-black mb-2">College Students</h1>
                        <h3 className="text-lg text-black">Mac and iPad.</h3>
                        <h3 className="text-lg text-black mb-6">Major. In any field.</h3>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Desktop Background */}
                <div
                    className="bg-cover bg-center h-full w-full hidden lg:flex flex-col items-center justify-start text-center px-6 relative cursor-pointer"
                    style={{ backgroundImage: `url(${Laplap})` }}
                >
                    <div className="pt-16">
                        <h1 className="text-3xl font-bold text-black mb-2">College Students</h1>
                        <h3 className="text-lg text-black">Mac and iPad.</h3>
                        <h3 className="text-lg text-black mb-6">Major. In any field.</h3>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Macbook;