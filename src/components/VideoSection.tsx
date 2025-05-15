import Award from '../assets/award.jpg'

export const VideoSection = () => {
    return (
        <section className="bg-neutral-950 px-6 md:px-20 py-16 space-y-16 text-white">

            <div className="text-center space-y-6">
                <h2 className="text-2xl md:text-4xl font-bold text-white leading-relaxed">
                    നാഷണൽ അവാർഡ് കരസ്ഥമാക്കിയ <br /> <span className="text-pink-500">കേരളത്തിലെ No 1 കോഴ്സ്</span>
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

            <div className="text-center space-y-6">
                <h3 className="text-4xl font-semibold">ആദ്യ കോഴ്സ് </h3>
                <div className="aspect-w-16 aspect-h-9 rounded-3xl overflow-hidden shadow-2xl">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/placeholder1"
                        title="Course Overview Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </section>
    );
}