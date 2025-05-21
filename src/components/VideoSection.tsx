import { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import Award from "../assets/award.jpg";
import Thumb2 from '../assets/thumbSecond.jpg'

export const VideoSection = () => {
    const [reloadKey, setReloadKey] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const handleReload = () => {
        setReloadKey(prev => prev + 1);
        setIsPlaying(true); // auto play again after reload
    };

    return (
        <section className="bg-neutral-950 px-6 md:px-20 py-16 space-y-16 text-white">

            {/* Award Banner Section */}
            <div className="text-center space-y-6">
                <h2 className="text-2xl md:text-4xl font-bold text-white leading-relaxed">
                    നാഷണൽ അവാർഡ് കരസ്ഥമാക്കിയ <br />{" "}
                    <span className="text-pink-500">കേരളത്തിലെ No 1 കോഴ്സ്</span>
                </h2>
                <div className="w-full max-w-3xl mx-auto">
                    <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5">
                        <img
                            src={Award}
                            alt="Award Winning Course"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Video Section */}
            <div className="text-center space-y-6">
                <h3 className="text-4xl font-semibold">FIRST CHALLENGE </h3>

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
                            <div className="w-full h-full cursor-pointer" onClick={handlePlay}>
                                <img
                                    src={Thumb2}
                                    alt="Video Thumbnail"
                                    className="w-full h-full object-cover"
                                />
                                {/* Optional: Add Play button overlay */}
                                {/* <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div> */}
                            </div>
                        ) : (
                            <div className="aspect-video">
                                <iframe
                                    key={`hero-video-${reloadKey}`}
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/h8G8LHvanBc?autoplay=1"
                                    title="Course Overview Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        )}
                    </div>
                </div>

            </div>

            <div className="flex justify-center">
                <button className="bg-white text-black font-bold px-10 py-4 text-lg rounded-full shadow-xl hover:scale-105 transition-all duration-300">
                    Join The Challenge
                </button>
            </div>
        </section>
    );
};
