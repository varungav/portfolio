import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMenu, FiTwitter, FiX } from 'react-icons/fi'

const Header = () => {
    const [isOpen, setIsOpen ] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [contactFormOpen, setContactFormOpen ] = useState(false); 
    const openContactForm = () => setContactFormOpen(true);
    const closeContactForm = () => setContactFormOpen(false);

  return (
    <header className='absolute w-full z-50 transition-all duration-300'>
        <div 
            className='container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20'>
            {/* Logo part */}
            <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                    type: 'spring',
                    stiffness: 100,
                    damping: 25,
                    duration: 1.2, 
                    delay: 0.3
                    
                }}
            className='flex items-center'>
                <div className='h-10 w-10 
                rounded-xl bg-gradient-to-r 
                from-gray-500 to-gray-100 
                flex items-center 
                justify-center text-purple-600 
                font-bold text-xl mr-3'>
                    M
                </div>
                <div className='text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent'>
                    Varun
                </div>
            </motion.div>

            {/* Desktop Navbar */}

            <div className='hidden lg:flex space-x-8'>
                {["Home", "About", "Projects", "Experience", "Contact"].map((item, index) => (
                    <motion.a
                        initial={{ opacity: 0, y: -200 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 100,
                            damping: 25,
                            duration: 1.2,
                            delay: 0.7 + index * 0.2
                        }}
                        key={index}
                        href={`#${item.toLowerCase()}`}
                        className='relative text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover-text-violet-400 font-medium transition-colors duration-300 group'
                    >
                        {item}
                        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300'></span>
                    </motion.a>
                ))}
            </div>

            {/* Social Media Icons */}
            <div className='md:flex hidden items-center space-x-4'>
                <motion.a
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1}}
                    transition={{ delay: 1.3, duration: 0.8 }}
                href="">
                    <FiGithub className='w-5 h-5' />
                </motion.a>
                <motion.a
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1}}
                    transition={{ delay: 1.3, duration: 0.8 }}
                href="">
                    <FiTwitter className='w-5 h-5' />
                </motion.a>
                <motion.a
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1}}
                    transition={{ delay: 1.3, duration: 0.8 }}
                href="">
                    <FiLinkedin className='w-5 h-5' />
                </motion.a>
            </div>
            {/* Hire Me Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1}}
                transition={{ 
                    delay: 1.3, 
                    duration: 0.8,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15 
                }}
                onClick={openContactForm}
                className='ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:text-white transition-all duration-500'
            >
                Hire Me
            </motion.button>

            {/* Mobile Menu Button */}
            <div className='md:hidden flex items-center'>
                <motion.button
                    className='text-gray-300'
                    whileTap={{scale: 0.7}}
                    onClick={toggleMenu}
                >
                    {isOpen ? <FiX className='h-6 w-6 cursor-pointer' /> : <FiMenu className='h-6 w-6 cursor-pointer'/>}
                </motion.button>
            </div>
            
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className='md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg'
                >
                <nav className='flex flex-col px-4 py-4'>
                    {["Home", "About", "Projects", "Experience", "Contact"].map((item) => (
                        <a
                            onClick={toggleMenu}
                            href={`#${item.toLowerCase()}`}
                            className='text-gray-800 dark:text-gray-200 hover:text-violet-600 font-medium py-2'
                            key={item}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className='py-4 px-2 border-t border-gray-200
                dark:border-gray-700'>
                    <div className='flex space-x-5'>
                        <a href="#">
                            <FiGithub className='h-5 w-5 text-gray-300'/>
                        </a>
                        <a href="#">
                            <FiTwitter className='h-5 w-5 text-gray-300'/>
                        </a>
                        <a href="#">
                            <FiLinkedin className='h-5 w-5 text-gray-300'/>
                        </a>
                    </div>
                    <button className='w-full mt-4 block px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold' onClick={openContactForm}>
                        Contact Me
                    </button>
                </div>
                </motion.div>
            )}
        </AnimatePresence>

        {/* Contact Form */}
        { contactFormOpen && (
            <AnimatePresence>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
                className='fixed inset-0 bg-black/50 background-black-sm z-50 flex items-center justify-center p-4'
                // onClick={closeContactForm}
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, y: 30 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 30}}
                    transition={{
                        type: 'spring',
                        damping: 30,
                        stiffness: 200,
                        duration: 0.8
                    }}
                    className='bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6'>
                    <div className='flex  justify-between items-center mb-4'>
                        <h1 className='text-2xl font-bold text-gray-300'>Get In Touch</h1>
                        <button onClick={closeContactForm}>
                            <FiX className='w-5 h-5 text-gray-300 cursor-pointer font-extrabold'/>
                        </button>
                    </div>

                    {/* Input Field */}
                    <form action="">
                        <div className='mb-4'>
                            <label htmlFor="name" className='block text-gray-300 font-bold mb-2'>Name</label>
                            <input type="text" id='name' className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-600' />
                        </div>

                        <div className='mb-4'>
                            <label htmlFor="email" className='block text-gray-300 font-bold mb-2'>Email</label>
                            <input type="email" id='email' className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-600' />
                        </div>

                        <div className='mb-4'>
                            <label htmlFor="message" className='block text-gray-300 font-bold mb-2'>Message</label>
                            <textarea id='message' className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-violet-600'></textarea>
                        </div>

                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type='submit'
                        className='w-full bg-gradient-to-r from-violet-600 to-violet-400 text-white font-bold py-2 px-4 rounded-md hover:from-violet-700 hover:to-violet-500 transition-all duration-500 cursor-pointer'>
                            Send
                        </motion.button>
                    </form>
                </motion.div>

            </motion.div>
            </AnimatePresence>
        )}
    </header>
)
}

export default Header