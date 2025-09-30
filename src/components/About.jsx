import React from 'react'

const About = () => {
    return (
        <section className='about-section min-h-screen' id='about'>
            <div className='container mx-auto mt-20 px-6 lg:px-0'>
                <div className="heading">
                    <h1 className='text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-white font-primary tracking-wide'>About Us</h1>
                </div>

                <div className="about-content flex flex-col md:flex-row w-full">
                    <div className="card lg:w-1/2">
                        <img src="/src/assets/images/about.jpeg" alt="About Image" className='w-[720px] rounded-3xl transform -rotate-3' />
                    </div>

                    <div className="about-text lg:w-1/2 mt-20 lg:mt-0">
                        <h2 className='text-4xl md:text-5xl font-semibold tracking-wide capitalize font-primary text-white'>
                            We love cooking!
                            <div className="underline w-32 md:w-40 h-2 bg-red-300 transform -rotate-3 mt-2"></div>
                        </h2>
                        <p className='text-lg md:text-2xl font-secondary tracking-wide font-medium text-white/60 mt-10'>At Restaura, we believe that great food goes beyond taste; it tells a story of dedication and creativity. From our chef's signature creations to our attentive service, every detail is curated to ensure your visit is nothing short of exceptional. Whether you're savoring our renowned Tikka Kebab or exploring our diverse menu inspired by global flavors, each dish is a celebration of flavor and innovation. Join us for a culinary journey where every bite leaves a lasting impression. Experience Restaura—where every meal is a masterpiece.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About