import hero from '../assets/videos/hero-video.mp4'
import hero_poster from '../assets/images/hero.jpg'

const Hero = () => {
    return (
        <section className='hero-section w-full min-h-screen relative overflow-hidden' id='home'>
            <div className="hero-content relative w-full h-screen">
                <video
                    loading="lazy"
                    className="absolute inset-0 w-full h-[90%] object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={hero_poster}
                >
                    <source src={hero} type="video/mp4" />
                </video>

                <div className="text-content absolute top-1/2 md:top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4">
                    <h1 className='text-5xl md:text-6xl font-bold text-white mb-6 font-primary tracking-wide leading-snug'>Welcome to Restaura</h1>
                    <p className='text-white md:text-lg mb-6 font-secondary tracking-wide leading-normal'>Experience the finest dining with our exquisite dishes and exceptional service.</p>

                    <a href="#dishes" className='bg-red-600 text-white px-6 py-3 rounded-full text-lg font-secondary tracking-wide font-semibold hover:bg-red-700 transition duration-300'>Explore Our Menu</a>
                </div>
            </div>
        </section>
    )
}

export default Hero