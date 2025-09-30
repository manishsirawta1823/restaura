import mission from '../assets/videos/mission.mp4'

const Mission = () => {
    return (
        <section className='our-mission' id='mission'>
            <div className="container mx-auto mt-20 px-6 lg:px-0">
                <div className="heading">
                    <h1 className='text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-white font-primary tracking-wide'>Our Mission</h1>
                </div>

                <div className="mission-content relative">
                    <div className="card">
                        <video loading="lazy" className="w-full rounded-3xl opacity-50" autoPlay loop muted playsInline>
                            <source src={mission} type="video/mp4" />
                        </video>
                    </div>
                    <div className="text absolute top-0 flex justify-center items-center w-full h-full">
                        <p className='text-white md:text-3xl w-[300px] md:w-[560px] text-center font-primary'>At our restaurant, our mission is to create delicious and memorable dining experiences.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mission