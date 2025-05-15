import { useState } from "react";
import { motion } from "framer-motion";
import { FiRefreshCw } from "react-icons/fi";

const testimonials = [
    { id: 1, videoUrl: "https://www.youtube.com/embed/uZ-5KfE7kYo" },
    { id: 2, videoUrl: "https://www.youtube.com/embed/iFTC1Ag15nE" },
    { id: 3, videoUrl: "https://www.youtube.com/embed/XxXVJYLNt7A" },
];

export const TestimonialSection = () => {
    const [reloadKeys, setReloadKeys] = useState(
        testimonials.reduce((acc, t) => ({ ...acc, [t.id]: 0 }), {})
    );

    const handleReload = (id: number) => {
        setReloadKeys((prev: any) => ({
            ...prev,
            [id]: prev[id] + 1,
        }));
    };

    return (
        <section className="relative bg-black text-white py-28 px-6 md:px-12 overflow-hidden">
            {/* Background */}
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
                                onClick={() => handleReload(testimonial.id)}
                                className="absolute z-10 top-2 right-2 opacity-0 group-hover:opacity-100 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                                title="Reload Video"
                            >
                                <FiRefreshCw className="w-5 h-5 cursor-pointer" />
                            </button>

                            {/* Iframe */}
                            <div className="aspect-video w-full">
                                <iframe
                                    // @ts-ignore
                                    key={`${testimonial.id}-${reloadKeys[testimonial.id]}`}
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
