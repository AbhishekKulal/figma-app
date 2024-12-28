import React from 'react';
import meetingIllustration from '../../assets/images/illustration.svg';
import coWorkingVideo from '../../assets/videos/coWorking.mp4'
import vector from '../../assets/images/vector.svg'
import '../../index.css'
const Hero: React.FC = () => {

   
    return (
        <div className="bg-gray-50 relative" style={{
            height: '500px'
        }}>
            <div className="container mx-auto flex flex-col md:flex-row md:items-start sm:items-end justify-between">
                <div className="hidden md:flex md:w-1/2 mb-8 md:mb-0 page-title" >
                    <img src={meetingIllustration} alt="Meeting Illustration" className="w-1/2 mx-auto absolute"
                        style={{
                            maxWidth: 'calc(100% - 500px)',

                        }}
                    />

                    <div className='container hidden md:block z-10'>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Host your meeting with<br />
                            world-class amenities.
                        </h1>
                        <p className="text-3xl md:text-4xl font-bold">
                            Starting at <span className="text-yellow-500">₹199/-!</span>
                        </p>
                    </div>
                </div>
                <div
                    className="md:w-1/2"
                //   style={{
                //     backgroundImage: `url(${vector})`,
                //     backgroundRepeat: 'no-repeat',
                //     backgroundPosition: 'center',
                //     backgroundSize: 'contain'
                //   }}
                >
                    <img src={vector} alt="p" style={{
                        float: 'right',
                        position: 'absolute',
                        right: 0,
                        width: '28rem',
                        top: '-5rem'

                    }} />
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className='absolute'
                        style={{
                            height: '24rem',
                            width: '24rem',
                            float: 'right',
                            top: '42px',
                            right: '7rem',
                            background: 'transparent',
                            mixBlendMode: 'darken'
                        }}
                    >
                        <source src={coWorkingVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            {/* <img src='https://raw.githubusercontent.com/MujtabaKably/bhive-interview-project-data/refs/heads/main/static_assets/0a74575ca6004b4bb20dcd131afc5849.jpg'
      alt="aa"/>
      <WhyChooseUs/>

      <p className='line-clamp-2'>
        aaaamnbj
        ajhkakja  ajhjabhja jahkjaa  ajhkakja  ajhjabhja jahkjaa ajhkakja  ajhjabhja jahkjaa ajhkakja  ajhjabhja jahkjaa ajhkakja  ajhjabhja jahkjaa ajhkakja  ajhjabhja jahkjaa ajhkakja  ajhjabhja jahkjaa ajhkakja  ajhjabhja jahkjaa ajhkakja  ajhjabhja jahkjaa ajhkakja  ajhjabhja jahkjaa ajhkakja  ajhjabhja jahkjaa ajhkakja  ajhjabhja jahkjaa ajhkakja  ajhjabhja jahkjaa ajhkakja  ajhjabhja jahkjaa ajhkakja  ajhjabhja jahkjaa ajhkakja  ajhjabhja jahkjaa ajhkakja  ajhjabhja jahkjaa ajhkakja  ajhjabhja jahkjaa ajhkakja  ajhjabhja jahkjaa
      </p> */}
        </div>
    );
};

export default Hero; 