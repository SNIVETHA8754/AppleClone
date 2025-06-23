import React from 'react'
import ipadmobile from '../assets/images/Ipdamobile.jpg'
import ipadlap from '../assets/images/Ipadlap.jpg'
import lap from '../assets/images/Lap.jpg'
import lapmobile from '../assets/images/Lapmobile.jpg'
import Multi from '../assets/images/MultiColor.png'
import ipadair from '../assets/images/Ipadair.png'

const Ipadair = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-2 p-2">
            {/* iPad Air Section */}
            <div className="w-full lg:w-1/2 h-[550px] relative overflow-hidden rounded-lg">
                {/* Mobile View Test*/}
                <div
                    className="bg-cover bg-center h-full w-full lg:hidden flex flex-col items-center justify-center text-center px-6 relative"
                    style={{ backgroundImage: `url(${ipadmobile})` }}
                >
                    <div className="flex flex-col items-center -mt-20">
                        <img className="w-32 h-auto mb-4" src={ipadair} alt="iPad Air" />
                        <h3 className="text-lg text-black mb-6">Now supercharged by the M3 chip.</h3>
                        <div className="flex flex-col sm:flex-row gap-3 mb-8">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                                Learn more
                            </button>
                            <button className="bg-transparent hover:bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-sm font-medium border-2 border-blue-500 transition-colors">
                                Buy
                            </button>
                        </div>
                    </div>
                    <img className="w-72 absolute bottom-0 left-1/2 transform -translate-x-1/2" src={Multi} alt="Built for Apple Intelligence" />
                </div>

                {/* Desktop View */}
                <div
                    className="bg-cover bg-center h-full w-full hidden lg:flex flex-col items-center justify-center text-center px-6 relative cursor-pointer"
                    style={{ backgroundImage: `url(${ipadlap})` }}
                >
                    <div className="flex flex-col items-center -mt-20">
                        <img className="w-32 h-auto mb-4" src={ipadair} alt="iPad Air" />
                        <h3 className="text-lg text-black mb-6">Now supercharged by the M3 chip.</h3>
                        <div className="flex gap-4 mb-8">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                                Learn more
                            </button>
                            <button className="bg-transparent hover:bg-blue-50 text-blue-600 px-6 py-2 rounded-full text-sm font-medium border-2 border-blue-500 transition-colors">
                                Buy
                            </button>
                        </div>
                    </div>
                    <img className="w-72 absolute bottom-0 left-1/2 transform -translate-x-1/2" src={Multi} alt="Built for Apple Intelligence" />
                </div>
            </div>

            {/* MacBook Pro Section */}
            <div className="w-full lg:w-1/2 h-[550px] relative overflow-hidden rounded-lg">
                {/* Mobile View */}
                <div
                    className="bg-cover bg-center h-full w-full lg:hidden flex flex-col items-center justify-center text-center px-6 relative cursor-pointer"
                    style={{ backgroundImage: `url(${lapmobile})` }}
                >
                    <div className="flex flex-col items-center -mt-20">
                        <h1 className="text-3xl font-bold text-white mb-2">MacBook Pro</h1>
                        <h3 className="text-lg text-white mb-6">A work of smart.</h3>
                        <div className="flex flex-col sm:flex-row gap-3 mb-8">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                                Learn more
                            </button>
                            <button className="bg-transparent hover:bg-white hover:bg-opacity-20 text-blue-400 px-6 py-2 rounded-full text-sm font-medium border-2 border-blue-400 transition-all">
                                Buy
                            </button>
                        </div>
                    </div>
                    <img className="w-72 absolute bottom-0 left-1/2 transform -translate-x-1/2" src={Multi} alt="Built for Apple Intelligence" />
                </div>

                {/* Desktop View */}
                <div
                    className="bg-cover bg-center h-full w-full hidden lg:flex flex-col items-center justify-center text-center px-6 relative cursor-pointer"
                    style={{ backgroundImage: `url(${lap})` }}
                >
                    <div className="flex flex-col items-center -mt-20">
                        <h1 className="text-3xl font-bold text-white mb-2">MacBook Pro</h1>
                        <h3 className="text-lg text-white mb-6">A work of smart.</h3>
                        <div className="flex gap-4 mb-8">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                                Learn more
                            </button>
                            <button className="bg-transparent hover:bg-white hover:bg-opacity-20 text-blue-400 px-6 py-2 rounded-full text-sm font-medium border-2 border-blue-400 transition-all">
                                Buy
                            </button>
                        </div>
                    </div>
                    <img className="w-72 absolute bottom-0 left-1/2 transform -translate-x-1/2" src={Multi} alt="Built for Apple Intelligence" />
                </div>
            </div>
        </div>
    )
}

export default Ipadair