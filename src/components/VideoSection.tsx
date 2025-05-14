
export const VideoSection = () => {
    return (
        <section className="bg-neutral-950 px-6 md:px-20 py-16 space-y-16 text-white">
            <div className="text-center space-y-6">
                <h3 className="text-4xl font-semibold">What You'll Discover</h3>
                <p className="text-gray-300 text-lg">A sneak peek into the transformation journey</p>
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

            <div className="text-center space-y-6">
                <h3 className="text-4xl font-semibold">Experience the First Step</h3>
                <p className="text-gray-300 text-lg">Watch the first lesson – free</p>
                <div className="aspect-w-16 aspect-h-9 rounded-3xl overflow-hidden shadow-2xl">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/placeholder2"
                        title="Lesson Preview Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </section>
    );
}