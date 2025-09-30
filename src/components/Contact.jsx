import React from 'react'

const Contact = () => {
    return (
        <section className='contact-section min-h-[700px] mt-20' id='contact'>
            <div className='container mx-auto mt-20 px-6 lg:px-0'>
                <div className="heading">
                    <h1 className='text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16 text-white font-primary tracking-wide'>Contact Us</h1>
                </div>

                <div className="contact-content text-white/70 text-2xl md:text-3xl font-primary tracking-wide">
                    <ul className='flex flex-col'>
                        <li className='border-b-1 pb-16 border-white/60 border-dashed'><h2>Address: 123 Main Street, Paris, France, 345678</h2></li>
                        <li className='border-b-1 py-16 border-white/60 border-dashed'><h2>Phone: 123-456-7890</h2></li>
                        <li className='border-b-1 py-16 border-white/60 border-dashed'><h2>Email: contact@restaurant.com</h2></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Contact