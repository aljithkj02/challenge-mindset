import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section className="relative bg-black text-white px-6 md:px-12 py-36 text-center overflow-hidden">
            {/* Background overlay */}

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
        </section>
    );
};
