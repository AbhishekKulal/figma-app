import React from 'react'
import downloadImage from '../../assets/images/downloadInfo.svg'

import googlePlay from '../../assets/images/googlePlay.svg'

const Downloads: React.FC = () => {

    return (
        <div className="py-12 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">Download our app now</h2>
                    <div className="text-yellow-400 text-2xl sm:hidden cursor-pointer">→</div>
                </div>
                <div className='flex items-end'>
                    <img src={downloadImage} alt="download" />
                    <div className='shadow-md bhvive-card rounded-lg flex flex-col justify-center pr-12 pl-14 gap-10' style={{
                        height: '255px',
                        width: '100%',
                        

                    }}>

                        <p className='text-lg text-yellowGrey-100'>Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.</p>

                        <div >

                            <button >

                                <img src={googlePlay} alt="playstore" />
                            </button>
                            <button>
                                <img src={googlePlay} alt="appstore" />

                            </button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Downloads