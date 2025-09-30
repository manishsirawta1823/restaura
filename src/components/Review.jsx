import React from 'react'
import { motion } from 'framer-motion'
import user from '../assets/images/user.jpeg'
import customer1 from '../assets/images/gallery/customer.jpeg'
import customer2 from '../assets/images/gallery/customer1.jpeg'
import customer3 from '../assets/images/gallery/customer2.jpeg'
import customer4 from '../assets/images/gallery/customer3.jpeg'

const Review = () => {
    // Animation variants for the main quote
    const quoteVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        }
    }

    // Animation variants for user info
    const userVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                delay: 0.5
            }
        }
    }

    // Animation variants for gallery container
    const galleryContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
                delayChildren: 1.2
            }
        }
    }

    // Animation variants for each gallery image card
    const imageVariants = {
        hidden: {
            opacity: 0,
            scale: 0.6,
            y: 80,
            rotateY: 90,
            rotateX: 20
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            rotateY: 0,
            rotateX: 0,
            transition: {
                duration: 1,
                ease: "easeOut",
                type: "spring",
                stiffness: 80,
                damping: 15
            }
        },
        hover: {
            scale: 1.08,
            y: -15,
            rotateY: 5,
            boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        }
    }

    return (
        <motion.section
            className='review-section min-h-[700px] mt-20'
            id='review'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            <div className='container mx-auto mt-20 px-6 lg:px-0'>
                <div className="review-content">
                    <motion.h2
                        className='text-2xl md:text-5xl tracking-wide text-white/90 w-full lg:w-[80%] mx-auto leading-relaxed font-primary'
                        variants={quoteVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        "As a seasoned food critic, my expectations are always high when stepping into a new dining establishment. Restaura, with its unassuming exterior and elegantly designed interior, promised a unique culinary experience from the moment I walked in. And I must say, it delivered beyond my expectations."
                    </motion.h2>

                    <motion.div
                        className="user mt-10 flex items-center gap-4"
                        variants={userVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="user-image"
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <img src={user} alt="user" className='w-16 md:w-20 rounded-full border-1 border-white' />
                        </motion.div>
                        <motion.div
                            className="text"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                            viewport={{ once: true }}
                        >
                            <h3 className='md:text-xl font-normal text-white font-primary tracking-wide'>Xaviour Fernando</h3>
                            <p className='text-white/70 font-secondary tracking-wide text-sm md:text-base'>Food Critic</p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 justify-items-center mt-16"
                        variants={galleryContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div
                            className="card1 cursor-pointer"
                            variants={imageVariants}
                            whileHover="hover"
                            style={{ perspective: "1000px" }}
                        >
                            <motion.img
                                src={customer1}
                                alt="customer1"
                                className='h-[90%] md:h-[260px] rounded-tl-3xl rounded-br-3xl shadow-lg object-cover'
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                        <motion.div
                            className="card2 cursor-pointer"
                            variants={imageVariants}
                            whileHover="hover"
                            style={{ perspective: "1000px" }}
                        >
                            <motion.img
                                src={customer2}
                                alt="customer2"
                                className='h-[90%] md:h-[260px] rounded-tl-3xl rounded-br-3xl shadow-lg object-cover'
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                        <motion.div
                            className="card3 cursor-pointer"
                            variants={imageVariants}
                            whileHover="hover"
                            style={{ perspective: "1000px" }}
                        >
                            <motion.img
                                src={customer3}
                                alt="customer3"
                                className='h-[90%] md:h-[260px] rounded-tl-3xl rounded-br-3xl shadow-lg object-cover'
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                        <motion.div
                            className="card4 cursor-pointer"
                            variants={imageVariants}
                            whileHover="hover"
                            style={{ perspective: "1000px" }}
                        >
                            <motion.img
                                src={customer4}
                                alt="customer4"
                                className='h-[90%] md:h-[260px] rounded-tl-3xl rounded-br-3xl shadow-lg object-cover'
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default Review
