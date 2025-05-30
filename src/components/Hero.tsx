import { useState } from "react";
import { motion } from "framer-motion";
import { FiRefreshCw } from "react-icons/fi";
import Thumb1 from '../assets/thumbFirst.jpg'

export const Hero = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [reloadKey, setReloadKey] = useState(0);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const handleReload = () => {
        setReloadKey(prev => prev + 1);
        setIsPlaying(true); // auto play again after reload
    };

    return (
        <section className="relative bg-black text-white px-6 md:px-12 pt-28 text-center overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl px-8 py-10 shadow-lg"
                >
                    <h2 className="text-xl md:text-3xl font-medium italic leading-relaxed text-white tracking-wide">
                        എല്ലാരും പിന്നെയും നിന്നിൽ സംശയിക്കാൻ തുടങ്ങി. <br />
                        നീ ആരാണെന്ന് അവരെ ഓർമിപ്പിച്ചു കൊള്ളുക!
                    </h2>
                </motion.div>
            </div>

            <div className="text-center space-y-6 my-10">
                <div className="relative group aspect-w-16 aspect-h-9 rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto">

                    {isPlaying && (
                        <button
                            onClick={handleReload}
                            className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                            title="Reload Video"
                        >
                            <FiRefreshCw className="w-5 h-5 cursor-pointer" />
                        </button>
                    )}

                    <div className="w-full h-full">
                        {!isPlaying ? (
                            <div className="w-full h-full cursor-pointer relative" onClick={handlePlay}>
                                <img
                                    src={Thumb1}
                                    alt="Video Thumbnail"
                                    className="w-full h-full object-cover"
                                />
                                {/* Optional: Add Play button overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
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
                </div>
            </div>
        </section>
    );
};
