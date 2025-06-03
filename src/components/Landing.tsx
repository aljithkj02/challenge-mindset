import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaTrophy, FaQuoteLeft } from 'react-icons/fa';
import { FiRefreshCw } from "react-icons/fi";
import { MdVerified } from 'react-icons/md';
import Thumb1 from '../assets/thumbFirst.jpg'
import Thumb2 from '../assets/thumbSecond.jpg'
import Award from "../assets/award.jpg";
import Thumbnail1 from '../assets/thumb1.jpg'
import Thumbnail2 from '../assets/thumb2.jpg'
import Thumbnail3 from '../assets/thumb4.jpg'

const testimonials = [
    {
        id: 1,
        videoUrl: "https://res.cloudinary.com/dquq0mrkt/video/upload/v1747562537/%E0%B4%9C%E0%B5%80%E0%B4%B5%E0%B4%BF%E0%B4%A4%E0%B4%82_%E0%B4%AE%E0%B4%BE%E0%B4%B1%E0%B5%8D%E0%B4%B1%E0%B4%BF_%E0%B4%AE%E0%B4%B1%E0%B4%BF%E0%B4%9A%E0%B5%8D%E0%B4%9A%E0%B4%B5%E0%B4%B0%E0%B5%81%E0%B4%9F%E0%B5%86_%E0%B4%85%E0%B4%A8%E0%B5%81%E0%B4%AD%E0%B4%B5%E0%B4%82_%E0%B4%87%E0%B4%A4%E0%B4%BE_%E0%B4%A8%E0%B4%BF%E0%B4%99%E0%B5%8D%E0%B4%99%E0%B4%B3%E0%B5%81%E0%B4%82_Ready_%E0%B4%86%E0%B4%A3%E0%B5%8B_muynko.mp4",
        poster: Thumbnail1
    },
    {
        id: 2,
        videoUrl: "https://res.cloudinary.com/dquq0mrkt/video/upload/v1747563959/Sreelakshmi_online-video-cutter.com_1_ruadp3.mp4",
        poster: Thumbnail2
    },
    {
        id: 3,
        videoUrl: "https://res.cloudinary.com/dquq0mrkt/video/upload/v1747564223/Praseetha_online-video-cutter.com_1_b5n34u.mp4",
        poster: Thumbnail3
    },
];

const Landing = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [reloadKey, setReloadKey] = useState(0);

    const [reloadKey2, setReloadKey2] = useState(0);
    const [isPlaying2, setIsPlaying2] = useState(false);

    const [reloadKeys, setReloadKeys] = useState(
        testimonials.reduce((acc, t) => ({ ...acc, [t.id]: 0 }), {})
    );

    const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

    const handleReloadTest = (id: number) => {
        setReloadKeys((prev: any) => ({
            ...prev,
            [id]: prev[id] + 1,
        }));
    };

    const handlePlayTest = (id: number) => {
        Object.entries(videoRefs.current).forEach(([key]) => {
            const vid = videoRefs.current[parseInt(key)];
            if (parseInt(key) !== id && vid && !vid.paused) {
                vid.pause();
                vid.currentTime = 0;
            }
        });
    };

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const handleReload = () => {
        setReloadKey(prev => prev + 1);
        setIsPlaying(true); // auto play again after reload
    };

    const handlePlay2 = () => {
        setIsPlaying2(true);
    };

    const handleReload2 = () => {
        setReloadKey2(prev => prev + 1);
        setIsPlaying2(true); // auto play again after reload
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    const staggerChildren = {
        animate: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            {/* Hero Section with Quote */}
            <motion.section
                className="min-h-screen flex items-center justify-center relative overflow-hidden"
                initial="initial"
                animate="animate"
                variants={staggerChildren}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 via-black to-orange-400/20"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_70%)]"></div>

                <motion.div
                    className="text-center z-10 px-6 max-w-4xl mx-auto"
                    variants={fadeInUp}
                >
                    <motion.div
                        className="inline-block p-8 border-2 border-amber-400/40 rounded-2xl backdrop-blur-sm bg-gradient-to-br from-amber-400/10 to-orange-400/5"
                        whileHover={{ scale: 1.02, borderColor: "rgb(251 146 60 / 0.7)", boxShadow: "0 0 30px rgb(251 146 60 / 0.3)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <FaQuoteLeft className="text-amber-400 text-2xl mb-6 mx-auto" />
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 leading-tight">
                            എല്ലാരും പിന്നെയും നിന്നിൽ സംശയിക്കാൻ തുടങ്ങി. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-amber-100 to-orange-300">നീ ആരാണെന്ന് അവരെ ഓർമിപ്പിച്ചു കൊള്ളുക!</span>
                        </h1>
                    </motion.div>

                    {/* <motion.button
                        className="mt-12 px-8 py-4 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 text-black font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-amber-400/40 hover:from-amber-300 hover:to-orange-400 transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        ഇപ്പോൾ തന്നെ ആരംഭിക്കുക
                    </motion.button> */}
                </motion.div>
            </motion.section>

            {/* Video Section */}
            <motion.section
                className="py-20 px-6 bg-gradient-to-b from-black to-gray-900"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerChildren}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400"
                        variants={fadeInUp}
                    >
                        നിങ്ങളുടെ യാത്ര ആരംഭിക്കുന്നു ഇവിടെ
                    </motion.h2>

                    <motion.div
                        className="relative aspect-video bg-gray-800 rounded-2xl overflow-hidden group cursor-pointer"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="w-full h-full">
                            {isPlaying && (
                                <button
                                    onClick={handleReload}
                                    className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                                    title="Reload Video"
                                >
                                    <FiRefreshCw className="w-5 h-5 cursor-pointer" />
                                </button>
                            )}

                            {!isPlaying ? (
                                <div className="w-full h-full cursor-pointer relative" onClick={handlePlay}>
                                    <img
                                        src={Thumb1}
                                        alt="Video Thumbnail"
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Optional: Add Play button overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                        <motion.div
                                            className="w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center group-hover:from-amber-300 group-hover:to-orange-300 hover:shadow-xl hover:shadow-amber-400/30 transition-all duration-300"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <FaPlay className="text-black text-2xl ml-1" />
                                        </motion.div>
                                    </div>
                                </div>
                            ) : (
                                <div className="aspect-video">
                                    <iframe
                                        key={`hero-video-${reloadKey}`}
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/RQJCvOMPACk?autoplay=1"
                                        title="Course Overview Video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            )}
                        </div>

                    </motion.div>

                    <motion.button
                        className="mt-8 px-8 cursor-pointer py-3 border-2 border-amber-400 text-amber-400 font-semibold rounded-full hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-400 hover:text-black hover:shadow-lg hover:shadow-amber-400/30 transition-all duration-300"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                    >
                        Join Now
                    </motion.button>
                </div>
            </motion.section>

            {/* Award Section */}
            <motion.section
                className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerChildren}
            >
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        className="inline-flex items-center gap-3 mb-8"
                        variants={fadeInUp}
                    >
                        <FaTrophy className="text-amber-400 text-3xl" />
                        <MdVerified className="text-amber-400 text-2xl" />
                    </motion.div>

                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500"
                        variants={fadeInUp}
                    >
                        നാഷണൽ അവാർഡ് കരസ്ഥമാക്കിയ കേരളത്തിലെ No 1 കോഴ്സ്
                    </motion.h2>

                    <motion.div
                        className="relative w-full max-w-3xl mx-auto aspect-square bg-gray-800 rounded-2xl overflow-hidden"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.03 }}
                    >
                        {/* <div className="absolute inset-0 bg-gradient-to-br from-amber-400/15 to-orange-400/10"></div> */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5">
                                <img
                                    src={Award}
                                    alt="Award Winning Course"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                    </motion.div>

                    <motion.button
                        className="mt-12 px-10 py-4 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 text-black font-bold text-xl rounded-full hover:shadow-2xl hover:shadow-amber-400/40 hover:from-amber-300 hover:to-orange-400 transition-all duration-300"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05, y: -2 }}
                    >
                        Join Now
                    </motion.button>
                </div>
            </motion.section>

            {/* First Challenge Section */}
            <motion.section
                className="py-20 px-6 bg-gradient-to-b from-black to-gray-900"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerChildren}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400"
                        variants={fadeInUp}
                    >
                        FIRST CHALLENGE
                    </motion.h2>
{/* 
                    <motion.p
                        className="text-xl text-gray-300 mb-12"
                        variants={fadeInUp}
                    >
                        നിങ്ങളുടെ കഴിവുകൾ പരീക്ഷിക്കാൻ തയ്യാറാണോ?
                    </motion.p> */}

                    <motion.div
                        className="relative aspect-video bg-gray-800 rounded-2xl overflow-hidden group cursor-pointer"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="w-full h-full">
                            {isPlaying2 && (
                                <button
                                    onClick={handleReload2}
                                    className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                                    title="Reload Video"
                                >
                                    <FiRefreshCw className="w-5 h-5 cursor-pointer" />
                                </button>
                            )}

                            {!isPlaying2 ? (
                                <div className="w-full h-full cursor-pointer relative" onClick={handlePlay2}>
                                    <img
                                        src={Thumb2}
                                        alt="Video Thumbnail"
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Optional: Add Play button overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                        <motion.div
                                            className="w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center group-hover:from-amber-300 group-hover:to-orange-300 hover:shadow-xl hover:shadow-amber-400/30 transition-all duration-300"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <FaPlay className="text-black text-2xl ml-1" />
                                        </motion.div>
                                    </div>
                                </div>
                            ) : (
                                <div className="aspect-video">
                                    <iframe
                                        key={`hero-video-${reloadKey2}`}
                                        className="w-full h-full"
                                        src="https://www.youtube.com/embed/h8G8LHvanBc?autoplay=1"
                                        title="Course Overview Video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            )}
                        </div>

                    </motion.div>

                    <motion.button
                        className="mt-8 px-8 py-3 bg-gradient-to-r from-red-500 to-amber-400 text-white font-bold rounded-full hover:shadow-xl hover:shadow-amber-400/30 hover:from-red-400 hover:to-orange-400 transition-all duration-300"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                    >
                        Start Challenge
                    </motion.button>
                </div>
            </motion.section>

            {/* Testimonials Section */}
            <motion.section
                className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerChildren}
            >
                <div className="max-w-6xl mx-auto text-center">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400"
                        variants={fadeInUp}
                    >
                        ഇനിയും തീരുമാനമെടുക്കാൻ പറ്റിയിട്ടില്ലേ?
                    </motion.h2>

                    <motion.p
                        className="text-xl text-gray-300 mb-16"
                        variants={fadeInUp}
                    >
                        Here's what our students are saying
                    </motion.p>

                    <motion.div
                        className="grid md:grid-cols-3 gap-8 mb-16"
                        variants={staggerChildren}
                    >
                        {testimonials.map(({ id, poster, videoUrl }, i) => (
                            <motion.div
                                key={i}
                                className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden group cursor-pointer"
                                variants={fadeInUp}
                                whileHover={{ scale: 1.03, y: -5 }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <motion.div
                                        // @ts-ignore
                                        key={`${testimonial.id}-${reloadKeys[testimonial.id]}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: index * 0.2 }}
                                        viewport={{ once: true }}
                                        className="relative group bg-white/5 border border-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg"
                                    >
                                        {/* Reload Button */}
                                        <button
                                            onClick={() => handleReloadTest(id)}
                                            className="absolute z-10 top-2 right-2 opacity-0 group-hover:opacity-100 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                                            title="Reload Video"
                                        >
                                            <FiRefreshCw className="w-5 h-5 cursor-pointer" />
                                        </button>

                                        {/* Video Element */}
                                        <div className="aspect-video w-full">
                                            <video
                                                // @ts-ignore
                                                key={`${id}-${reloadKeys[id]}`}
                                                // @ts-ignore
                                                ref={(el) => (videoRefs.current[id] = el)}
                                                src={videoUrl}
                                                controls
                                                className="w-full h-full"
                                                onPlay={() => handlePlayTest(id)}
                                                poster={poster}
                                            />
                                        </div>
                                    </motion.div>
                                ))}


                            </motion.div>
                        ))}
                    </motion.div>

                    {/* <motion.button
                        className="px-12 py-4 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 text-black font-bold text-xl rounded-full hover:shadow-2xl hover:shadow-amber-400/40 hover:from-amber-300 hover:to-orange-400 transition-all duration-300"
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05, y: -2 }}
                    >
                        Join Now
                    </motion.button> */}
                </div>
            </motion.section>

            {/* Final CTA Section */}
            <motion.section
                className="py-32 px-6 bg-gradient-to-b from-black via-amber-900/10 to-black"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
                variants={staggerChildren}
            >
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500"
                        variants={fadeInUp}
                    >
                        നിങ്ങളുടെ സമയം ഇപ്പോൾ!
                    </motion.h2>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-300 mb-12"
                        variants={fadeInUp}
                    >
                        കാത്തിരിക്കരുത്. ഇന്നേ നിങ്ങളുടെ ഭാവി മാറ്റുക.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                        variants={fadeInUp}
                    >
                        <motion.button
                            className="px-12 py-5 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 text-black font-bold text-xl rounded-full hover:shadow-2xl hover:shadow-amber-400/50 hover:from-amber-300 hover:to-orange-400 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Enroll Now
                        </motion.button>

                        {/* <motion.button
                            className="px-8 py-4 border-2 border-amber-400 text-amber-400 font-semibold text-lg rounded-full hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-400 hover:text-black hover:shadow-lg hover:shadow-amber-400/30 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            കൂടുതൽ വിവരങ്ങൾ
                        </motion.button> */}
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default Landing;