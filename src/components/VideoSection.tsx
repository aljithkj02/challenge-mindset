import { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import Award from "../assets/award.jpg";

export const VideoSection = () => {
    const [reloadKey, setReloadKey] = useState(0);

    const handleReload = () => {
        setReloadKey(prev => prev + 1);
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
                <h3 className="text-4xl font-semibold">ആദ്യ കോഴ്സ് </h3>
                <div className="relative group aspect-w-16 aspect-h-9 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Reload button */}
                    <button
                        onClick={handleReload}
                        className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                        title="Reload Video"
                    >
                        <FiRefreshCw className="w-5 h-5 cursor-pointer" />
                    </button>

                    {/* YouTube Iframe */}
                    <div className="max-w-4xl mx-auto aspect-video">
                        <iframe
                            key={`video-${reloadKey}`}
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/OWwsuiKwv8c"
                            title="Course Overview Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
