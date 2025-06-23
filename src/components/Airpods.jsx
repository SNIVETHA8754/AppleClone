import React from 'react'
import { FaApple } from 'react-icons/fa'
import man from '../assets/images/Man.jpg'
import manmobile from '../assets/images/Manmobile.jpg'
import phonemobile from '../assets/images/Phonemobile.jpg'
import phonelap from '../assets/images/Phonelap.jpg'

const Airpods = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-2 p-2">
            {/* AirPods 4 Section */}
            <div className="w-full lg:w-1/2 h-[550px] relative overflow-hidden rounded-lg">
                {/* Mobile Background */}
                <div
                    className="bg-cover bg-center h-full w-full lg:hidden flex flex-col items-center justify-end text-center px-6 relative"
                    style={{ backgroundImage: `url(${manmobile})` }}
                >
                    <div className="pb-16">
                        <h1 className="text-4xl font-bold text-white mb-2">AirPods 4</h1>
                        <h3 className="text-xl text-white mb-2">
                            Iconic. Now supersonic.
                        </h3>
                        <h3 className="text-lg text-white mb-6">
                            Available with Active Noise Cancellation.<sup>1</sup>
                        </h3>
                        <div className="flex flex-col sm:flex-row justify-center gap-3">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                                Learn more
                            </button>
                            <button className="bg-transparent hover:bg-white hover:bg-opacity-20 text-blue-400 px-6 py-2 rounded-full text-sm font-medium border-2 border-blue-400 transition-all">
                                Buy
                            </button>
                        </div>
                    </div>
                </div>

                {/* Desktop Background */}
                <div
                    className="bg-cover bg-center h-full w-full hidden lg:flex flex-col items-center justify-end text-center px-6 relative cursor-pointer"
                    style={{ backgroundImage: `url(${man})` }}
                >
                    <div className="pb-16">
                        <h1 className="text-4xl font-bold text-white mb-2">AirPods 4</h1>
                        <h3 className="text-xl text-white mb-2">
                            Iconic. Now supersonic.
                        </h3>
                        <h3 className="text-lg text-white mb-6">
                            Available with Active Noise Cancellation.<sup>1</sup>
                        </h3>
                        <div className="flex justify-center gap-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                                Learn more
                            </button>
                            <button className="bg-transparent hover:bg-white hover:bg-opacity-20 text-blue-400 px-6 py-2 rounded-full text-sm font-medium border-2 border-blue-400 transition-all">
                                Buy
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Apple Trade In Section */}
            <div className="w-full lg:w-1/2 h-[550px] relative overflow-hidden rounded-lg">
                {/* Mobile Background */}
                <div
                    className="bg-cover bg-center h-full w-full lg:hidden flex flex-col items-center justify-start text-center px-6 relative"
                    style={{ backgroundImage: `url(${phonemobile})` }}
                >
                    <div className="pt-16">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <FaApple className="text-3xl text-black" />
                            <h1 className="text-3xl font-bold text-black">Trade In</h1>
                        </div>
                        <h3 className="text-lg text-black mb-6">Upgrade and save. It's that easy.</h3>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                            Get your estimate
                        </button>
                    </div>
                </div>

                {/* Desktop Background */}
                <div
                    className="bg-cover bg-center h-full w-full hidden lg:flex flex-col items-center justify-start text-center px-6 relative cursor-pointer"
                    style={{ backgroundImage: `url(${phonelap})` }}
                >
                    <div className="pt-16">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <FaApple className="text-3xl text-black" />
                            <h1 className="text-3xl font-bold text-black">Trade In</h1>
                        </div>
                        <h3 className="text-lg text-black mb-6">Upgrade and save. It's that easy.</h3>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                            Get your estimate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Airpods