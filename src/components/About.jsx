import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion"


const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-10'>
            {/* Title Section */}
            <h1 className="my-20 text-center text-5xl font-bold">
                About <span className="text-neutral-500">Me</span>
            </h1>

            {/* Content Section */}
            <div className="flex flex-col lg:flex-row items-center justify-between mx-auto max-w-6xl px-4 lg:px-0">
                {/* Left Section: Image */}
                <motion.div whileInView={{ opacity:1, x:0 }} initial={{ opacity:0 , x:-100}} transition={{ duration:0.5 }} className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-10 lg:mb-0 lg:-ml-10">
                    <img className="rounded-2xl shadow-lg " src={aboutImg} alt="About Me" />
                </motion.div>

                {/* Right Section: Text Content */}
                <motion.div whileInView={{ opacity:1, x:0 }} initial={{ opacity:0 , x:100}} transition={{ duration:0.5 }} className="w-full lg:w-1/2 text-lg leading-8">
                    <div className="lg:pl-12 text-center lg:text-left">
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {ABOUT_TEXT}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
