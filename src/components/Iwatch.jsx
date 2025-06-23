import React from 'react'
import watch from '../assets/images/Iwatch.png'
import Handwatch from '../assets/images/Watch.jpg'
import Watchphone from '../assets/images/Watchmobile.jpg'

const Iwatch = () => {
    return (
        <div className="mt-3 px-2">
            <div 
                className="w-full h-[650px] bg-cover bg-center bg-no-repeat flex flex-col items-center px-4 cursor-pointer relative overflow-hidden rounded-lg"
                style={{
                    backgroundImage: `url(${window.innerWidth <= 640 ? Watchphone : Handwatch})`,
                    backgroundPosition: 'center top',
                }}
            >
                <div className="text-center max-w-2xl mx-auto pt-16 relative z-11">
                    <img
                        src={watch}
                        alt="Apple Watch"
                        className="w-48 h-auto mx-auto mb-6"
                    />
                    <h3 className="text-xl md:text-2xl text-black mb-8">
                        Live healthier. Train better. Stay connected.
                    </h3>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-colors shadow-lg">
                            Learn more
                        </button>
                        <button className="bg-transparent hover:bg-blue-50 text-blue-600 px-8 py-3 rounded-full text-lg font-medium border-2 border-blue-500 transition-colors">
                            Shop Watch
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Iwatch