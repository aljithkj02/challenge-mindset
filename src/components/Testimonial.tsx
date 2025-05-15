import { motion } from "framer-motion";

const testimonials = [
    { id: 1, videoUrl: "https://www.youtube.com/embed/uZ-5KfE7kYo" },
    { id: 2, videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY" },
    { id: 3, videoUrl: "https://www.youtube.com/embed/oHg5SJYRHA0" },
];

export const TestimonialSection = () => {
    return (
        <section className="relative bg-black text-white py-28 px-6 md:px-12 overflow-hidden">
            {/* Optional Background Blur or Overlay */}
            <div className="absolute inset-0 bg-[url('/testimonial-bg.jpg')] bg-cover bg-center opacity-5" />

            <div className="relative z-10 max-w-6xl mx-auto text-center">
                <motion.h2
                    className="text-2xl md:text-4xl font-semibold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    ഇനിയും തീരുമാനമെടുക്കാൻ നിനക്ക് പറ്റിയിട്ടില്ല?
                </motion.h2>

                <motion.p
                    className="text-white/60 mb-12 text-sm md:text-base"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Here’s what our students are saying
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg"
                        >
                            <div className="aspect-video w-full">
                                <iframe
                                    src={testimonial.videoUrl}
                                    title={`Testimonial ${testimonial.id}`}
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
