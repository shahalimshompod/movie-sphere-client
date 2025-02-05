import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroCarousel = () => {
    return (
        <div className='dark:bg-background'>
            <Carousel showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}>

                <div className="relative">
                    <img src="https://i.ibb.co.com/LZrVtx1/p15446613-v-h8-aq.jpg" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent flex items-center justify-start pl-8 lg:pl-16">
                        <div className='flex flex-col justify-start'>
                            <h1 className='text-white font-bold font-montserrat text-2xl lg:text-7xl lg:w-11/12 text-left'>Adventure Awaits in Jumanji!</h1>
                            <button className='text-white btn border-none bg-secondary hover:bg-accent hover:text-black font-roboto w-28 lg:w-32 mt-4'>Book Now!</button>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <img src="https://i.ibb.co.com/Xph8jLc/godzilla-minus-one-share.png" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent flex items-center justify-start pl-8 lg:pl-16">
                        <div className='flex flex-col justify-start'>
                            <h1 className='text-white font-bold font-montserrat text-2xl lg:text-7xl lg:w-11/12 text-left'>Godzilla Returns: Bigger & Stronger!</h1>
                            <button className='text-white btn border-none bg-secondary hover:bg-accent hover:text-black font-roboto w-28 lg:w-32 mt-4'>Book Now!</button>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <img src="https://i.ibb.co.com/YD5qN4N/maxresdefault.jpg" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent flex items-center justify-start pl-8 lg:pl-16">
                        <div className='flex flex-col justify-start'>
                            <h1 className='text-white font-bold font-montserrat text-2xl lg:text-7xl lg:w-11/12 text-left'>A Journey Beyond the Stars!</h1>
                            <button className='text-white btn border-none bg-secondary hover:bg-accent hover:text-black font-roboto w-28 lg:w-32 mt-4'>Book Now!</button>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <img src="https://i.ibb.co.com/qYtjbjX/avatar-the-way-of-water-poster.webp" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent flex items-center justify-start pl-8 lg:pl-16">
                        <div className='flex flex-col justify-start'>
                            <h1 className='text-white font-bold font-montserrat text-2xl lg:text-7xl lg:w-11/12 text-left'>Explore the Wonders of Pandora!</h1>
                            <button className='text-white btn border-none bg-secondary hover:bg-accent hover:text-black font-roboto w-28 lg:w-32 mt-4'>Book Now!</button>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <img src="https://i.ibb.co.com/GHkr2WM/movie-titanic-ship-wallpaper-preview.jpg" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent flex items-center justify-start pl-8 lg:pl-16">
                        <div className='flex flex-col justify-start'>
                            <h1 className='text-white font-bold font-montserrat text-2xl lg:text-7xl lg:w-11/12 text-left'>Love That Transcends Time!</h1>
                            <button className='text-white btn border-none bg-secondary hover:bg-accent hover:text-black font-roboto w-28 lg:w-32 mt-4'>Book Now!</button>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <img src="https://i.ibb.co.com/Tt4nckd/share-1.webp" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent flex items-center justify-start pl-8 lg:pl-16">
                        <div className='flex flex-col justify-start'>
                            <h1 className='text-white font-bold font-montserrat text-2xl lg:text-7xl lg:w-11/12 text-left'>Assemble Your Heroes!</h1>
                            <button className='text-white btn border-none bg-secondary hover:bg-accent hover:text-black font-roboto w-28 lg:w-32 mt-4'>Book Now!</button>
                        </div>
                    </div>
                </div>

            </Carousel>
        </div>
    );
};

export default HeroCarousel;
