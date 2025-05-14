
import { motion } from "framer-motion";

export const CTA = () => {
    return (
        <section className="bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-700 py-20 px-8 text-center text-white relative overflow-hidden">
            <motion.div
                className="max-w-3xl mx-auto z-10 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">This Is More Than a Course — It's a Revolution.</h2>
                <p className="mb-8 text-lg md:text-xl text-white/80">Step into your highest self. Start today.</p>
                <button className="bg-white text-black font-bold px-10 py-4 text-lg rounded-full shadow-xl hover:scale-105 transition-all duration-300">
                    Join The Challenge
                </button>
            </motion.div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>
        </section>
    );
}
