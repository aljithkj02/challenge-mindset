
import { motion } from "framer-motion";
import Award from '../assets/award.jpg'

export const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center text-center bg-black">
            <img src={Award} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-30" />
            <div className="relative z-10 px-6 md:px-12 max-w-4xl">
                <motion.h2
                    className="text-3xl md:text-5xl font-extrabold text-white leading-snug"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    "എല്ലാരും പിന്നെയും നിന്നിൽ സംശയിക്കാൻ തുടങ്ങി. നീ ആരാണെന്ന് അവരെ ഓർമിപ്പിച്ചു കൊള്ളുക!"
                </motion.h2>
            </div>
        </section>
    );
}