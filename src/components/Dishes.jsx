import { dishes } from '../dishes'
import { motion } from 'framer-motion'

const Dishes = () => {
    // Card animation variants for automatic zoom effect
    const cardVariants = {
        hidden: {
            // opacity: 0,
            scale: 0.8,
            y: 50
        },
        visible: {
            // opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                type: "spring",
                stiffness: 100
            }
        }
    }

    // Container variants for staggered animation
    const containerVariants = {
        // hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    }

    return (
        <motion.section
            className='our-dishes container mx-auto mt-12 md:mt-20 px-4 sm:px-6 lg:px-8'
            id='dishes'
            // initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <motion.div
                className="heading"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h1 className='text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-white font-primary tracking-wide'>Our Dishes</h1>
            </motion.div>

            <motion.div
                className="dishes grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-items-center"
                variants={containerVariants}
            >
                {dishes.map((dish, index) => (
                    <motion.div
                        className="dish w-full max-w-xs sm:max-w-sm"
                        key={dish.id}
                        variants={cardVariants}
                        whileInView="visible"
                        initial="hidden"
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <motion.div
                            className="card w-full h-48 sm:h-56 md:h-64 rounded-2xl overflow-hidden"
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.3, ease: "easeInOut" }
                            }}
                        >
                            <motion.img
                                src={dish.image}
                                alt={dish.name}
                                className='w-full h-full object-cover rounded-2xl'
                                initial={{ scale: 1.2 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                viewport={{ once: true }}
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.4 }
                                }}
                            />
                        </motion.div>
                        <motion.div
                            className="dish-content px-2 sm:px-3 py-4 sm:py-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3 + (index * 0.1),
                                duration: 0.6,
                                ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                        >
                            <h2 className="dish-name font-primary text-lg sm:text-xl text-white font-medium">{dish.name}</h2>
                            <p className='dish-description font-secondary tracking-wide text-xs sm:text-sm text-white/70 mt-1 sm:mt-2'>{dish.description}</p>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    )
}

export default Dishes