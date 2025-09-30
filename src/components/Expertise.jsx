import React from 'react'
import { Expertise as expertiseData } from '../expertise'

const Expertise = () => {
    return (
        <section className='expertise-section min-h-[700px] mt-20' id='expertise'>
            <div className='container mx-auto mt-20'>
                <div className="heading">
                    <h1 className='text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-white font-primary tracking-wide'>Our Expertise</h1>
                </div>

                <div className="expertise-content">
                    {expertiseData.map(expertise => (
                        <div className="expertise-card px-6 flex flex-col md:flex-row items-center gap-6 py-6 border-b-1 border-dashed border-white/40" key={expertise.id}>
                            <div className="numbering">
                                <h3 className='font-secondary text-white/90 font-medium tracking-wide text-2xl'>0{expertise.id}.</h3>
                            </div>
                            <div className="card">
                                <img src={expertise.image} alt={expertise.name} className='w-[500px] rounded-2xl' />
                            </div>
                            <div className="text">
                                <h2 className='text-red-400 font-primary uppercase tracking-wide mb-5 text-2xl'>{expertise.name}</h2>
                                <p className='font-seconadry tracking-wide text-white/90 font-normal text-lg'>{expertise.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Expertise