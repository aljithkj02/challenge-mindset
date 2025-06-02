import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Thumb2 from '../assets/thumbSecond.jpg'
import {
    FaFire,
    FaStar,
    FaUsers,
    FaArrowRight,
    FaQuoteLeft,
    FaPhone,
    FaEnvelope,
    FaInstagram,
    FaWhatsapp,
    FaShieldAlt,
    FaLock,
    FaInfinity, FaChevronLeft, FaChevronRight
} from 'react-icons/fa';
import { FiRefreshCw } from "react-icons/fi";
import Thumb1 from '../assets/thumbFirst.jpg'

import { HiSparkles } from 'react-icons/hi';

const Landing = () => {
    const [timeLeft, setTimeLeft] = useState({
        hours: 23,
        minutes: 45,
        seconds: 30
    });
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [reloadKey, setReloadKey] = useState(0);

    const [reloadKey2, setReloadKey2] = useState(0);
    const [isPlaying2, setIsPlaying2] = useState(false);

    const [isPaused, setIsPaused] = useState(false);

    const handlePlay2 = () => {
        setIsPlaying2(true);
    };

    const handleReload2 = () => {
        setReloadKey2(prev => prev + 1);
        setIsPlaying2(true); // auto play again after reload
    };

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const handleReload = () => {
        setReloadKey(prev => prev + 1);
        setIsPlaying(true); // auto play again after reload
    };

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [isPaused]);

    useEffect(() => {

        // Countdown timer
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                }
                return prev;
            });
        }, 1000);

        // Testimonial rotator
        const testimonialTimer = setInterval(() => {
            setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
        }, 4000);

        return () => {
            clearInterval(timer);
            clearInterval(testimonialTimer);
        };
    }, []);

    const testimonials = [
        {
            name: "സുരേഷ് നായർ",
            role: "സോഫ്റ്റ്‌വെയർ എഞ്ചിനീയർ, കോഴിക്കോട്",
            content: "വർഷങ്ങളായി ഞാൻ വലിയ പ്രോജക്ടുകൾ എടുക്കാൻ ഭയപ്പെട്ടിരുന്നു. എന്നാൽ ഈ കോഴ്‌സ് പൂർത്തിയാക്കിയ ശേഷം എന്റെ ആത്മവിശ്വാസം പൂർണമായി മാറി. ഇപ്പോൾ ഞാൻ സീനിയർ പൊസിഷനിലേക്ക് സ്വയം ചലഞ്ച് ചെയ്യുന്നു. ഈ മൈൻഡ്‌സെറ്റ് ആണ് എന്റെ കരിയറിനെ തന്നെ രൂപാന്തരപ്പെടുത്തിയത്.",
            rating: 5
        },
        {
            name: "ദീപിക സുരേഷ്",
            role: "ബിസിനസ് കൺസൾട്ടന്റ്, കോച്ചി",
            content: "എന്റെ ഏറ്റവും വലിയ പ്രശ്നം കൺസിസ്റ്റന്റ് ആയിരിക്കാനുള്ള കഴിവില്ലായ്മ ആയിരുന്നു. ഏതൊരു ലക്ഷ്യവും പാതിവഴിയിൽ ഉപേക്ഷിക്കും. ഈ കോഴ്‌സിലെ ടെക്‌നിക്കുകൾ എന്റെ വിൽ പവർ അവിശ്വസനീയമായി വർദ്ധിപ്പിച്ചു. ഇപ്പോൾ എന്റെ ബിസിനസ്സ് പൂർണമായും ട്രാക്കിൽ വന്നിരിക്കുന്നു.",
            rating: 5
        },
        {
            name: "അഭിലാഷ് പി കെ",
            role: "മാർക്കറ്റിംഗ് മാനേജർ, തിരുവനന്തപുരം",
            content: "പബ്ലിക് സ്പീക്കിംഗ് എന്റെ ഏറ്റവും വലിയ ഫിയർ ആയിരുന്നു. അത് കാരണം പല അവസരങ്ങളും നഷ്ടമായി. ഈ കോഴ്‌സിലൂടെ എന്റെ ഫിയർ പൂർണമായും മറികടന്നു. ഇപ്പോൾ ഞാൻ കോൺഫിഡന്റായി പ്രസന്റേഷനുകൾ കൊടുക്കുന്നു. ഇത് എന്റെ കരിയറിൽ വലിയ മാറ്റമുണ്ടാക്കി.",
            rating: 5
        },
        {
            name: "മീര രാജേഷ്",
            role: "ഫിറ്റ്‌നസ് എന്റർപ്രണർ, എറണാകുളം",
            content: "അമിതവണ്ണവും ആത്മവിശ്വാസക്കുറവും എന്റെ വലിയ പ്രശ്നങ്ങളായിരുന്നു. ഈ കോഴ്‌സിലെ മൈൻഡ്‌സെറ് ടെക്‌നിക്കുകൾ ഉപയോഗിച്ച് ഞാൻ സ്വയം ചലഞ്ച് ചെയ്യാൻ തുടങ്ങി. ഇപ്പോൾ വെയിറ്റ് ലോസ് ആയിട്ടും, ഞാൻ എന്റെ സ്വന്തം ജിമ്മും തുടങ്ങി. ഈ കോഴ്‌സ് എന്റെ മനസ്സിനെ പൂർണമായും മാറ്റിമറിച്ചു.",
            rating: 5
        },
        {
            name: "രാഹുൽ വി എസ്",
            role: "കോളേജ് വിദ്യാർത്ഥി, കോട്ടയം",
            content: "പഠനത്തിൽ ഫോക്കസ് ഇല്ലായിരുന്നു, എന്റെ ഗോളുകൾ അച്ചീവ് ചെയ്യാൻ കഴിയുന്നില്ലായിരുന്നു. ഈ കോഴ്‌സിലെ മെത്തേഡുകൾ ഉപയോഗിച്ച് എന്റെ മെന്റൽ സ്ട്രെങ്ത് അസാധാരണമായി വർദ്ധിച്ചു. ഇപ്പോൾ ഞാൻ വളരെ കൺസിസ്റ്റന്റ് ആയി പഠിക്കുന്നു, എന്റെ അക്കാദമിക് പെർഫോർമൻസ് വളരെ മെച്ചപ്പെട്ടു.",
            rating: 5
        },
        {
            name: "ഹരീഷ് കുമാർ",
            role: "ബിസിനസ് ഓണർ, കാസർഗോഡ്",
            content: "എന്റെ ബിസിനസ്സിൽ വലിയ റിസ്കുകൾ എടുക്കാൻ മടിയായിരുന്നു. എപ്പോഴും സേഫ് സോണിൽ നിന്നു. ഈ കോഴ്‌സ് എന്റെ ചലഞ്ച് മൈൻഡ്‌സെറ്റ് പൂർണമായും ഡെവലപ്പ് ചെയ്തു. ഇപ്പോൾ ഞാൻ ധൈര്യത്തോടെ പുതിയ വെഞ്ചറുകൾ ആരംഭിക്കുന്നു. ഇത് എന്റെ വിജയത്തിന്റെ യഥാർത്ഥ ചാബി ആയിരുന്നു.",
            rating: 5
        }
    ];

    const bonuses = [
        {
            icon: <FaUsers />,
            title: "Exclussive Community Access",
            value: "₹2,999",
            description: "5000+ വിജയിച്ച വ്യക്തികളുമായി ദിവസവും ഇന്ററാക്ട് ചെയ്യുക"
        },
    ];

    const painPoints = [
        "🔥 എപ്പോഴും Procrastinate ചെയ്യുന്നുണ്ടോ?",
        "😔 Self Confidence ഇല്ലാതെ കഷ്ടപ്പെടുന്നുണ്ടോ?",
        "🎯 ജീവിതത്തിൽ ഒരു Clear Direction ഇല്ലാതെ അലയുന്നുണ്ടോ?",
        // "😰 മറ്റുള്ളവർ എന്ത് വിചാരിക്കുമെന്ന ഭയം?",
        // "⏰ സമയ മാനേജ്മെന്റിൽ പരാജയപ്പെടുന്നുണ്ടോ?"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 text-gray-900 overflow-hidden">
            {/* Navbar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-orange-200 shadow-lg"
            >
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <motion.div
                        className="text-[22px] font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
                        whileHover={{ scale: 1.05 }}
                    >
                        🧠 Challenge Mindset
                    </motion.div>
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(239,68,68,0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
                    >
                        🔥 Buy Now
                    </motion.button>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <section className="pt-24 pb-16 relative overflow-hidden bg-gradient-to-br from-orange-100 to-red-100">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-300/30 to-red-300/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-300/30 to-orange-300/30 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Pain Point Hook */}
                            <motion.div
                                className="bg-red-100 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3 className="font-bold text-red-700 mb-2">നിങ്ങൾക്കും ഇതേ പ്രശ്നങ്ങൾ ഉണ്ടോ?</h3>
                                <div className="space-y-1">
                                    {painPoints.slice(0, 3).map((point, index) => (
                                        <p key={index} className="text-red-600 text-sm">{point}</p>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.h1
                                className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                    30 ദിവസം
                                </span>
                                <br />
                                <span className="text-gray-800">
                                    കൊണ്ട് നിങ്ങളുടെ
                                </span>
                                <br />
                                <span className="text-gray-800">
                                    മൈൻഡ്സെറ്റ്
                                </span>
                                <br />
                                <span className="text-gray-800">
                                    പൂർണമായി മാറ്റുക!
                                </span>
                            </motion.h1>

                            <motion.p
                                className="text-xl mb-8 text-gray-700 leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <strong className="text-red-600">Listen:</strong> ഇത് വെറും ഒരു കോഴ്‌സ് അല്ല!
                                ഇത് നിങ്ങളുടെ ജീവിതത്തിലെ ഏറ്റവും വലിയ ട്രാൻസ്ഫോർമേഷൻ ആണ്.
                                30 ദിവസം കൊണ്ട് നിങ്ങൾ ഒരു പുതിയ വ്യക്തിയായി മാറും - <em>Guarantee!</em>
                            </motion.p>

                            {/* Social Proof Counter */}
                            <motion.div
                                className="bg-green-100 border border-green-300 rounded-xl p-4 mb-6"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-2xl font-bold text-green-700">800+</div>
                                        <div className="text-sm text-green-600">വിജയകരമായി ജീവിതം മാറ്റിയവർ</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-green-700">4.9⭐</div>
                                        <div className="text-sm text-green-600">Average Rating</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Countdown Timer */}
                            <motion.div
                                className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl p-6 mb-8 shadow-xl"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <h3 className="text-lg font-bold mb-4 text-center">🚨 ലിമിറ്റഡ് ഓഫർ അവസാനിക്കുന്നത്:</h3>
                                <div className="flex justify-center gap-4">
                                    {[
                                        { label: 'Hour', value: timeLeft.hours },
                                        { label: 'Minute', value: timeLeft.minutes },
                                        { label: 'Second', value: timeLeft.seconds }
                                    ].map((item, index) => (
                                        <div key={index} className="text-center">
                                            <div className="bg-white/20 backdrop-blur rounded-lg p-3 min-w-[60px]">
                                                <div className="text-2xl font-bold text-yellow-300">{item.value.toString().padStart(2, '0')}</div>
                                            </div>
                                            <div className="text-sm mt-1">{item.label}</div>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-center mt-3 text-sm">⚡ ഇത് കഴിഞ്ഞാൽ വില ₹9,999 ആകും!</p>
                            </motion.div>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 15px 35px rgba(239,68,68,0.4)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold flex items-center justify-center gap-2 shadow-2xl hover:shadow-3xl transition-all"
                                >
                                    🔥 ഇപ്പോൾ തന്നെ വാങ്ങുക
                                    <FaArrowRight />
                                </motion.button>

                                <motion.div className="text-center sm:text-left">
                                    <div className="text-4xl font-bold text-red-600">₹2,997</div>
                                    <div className="text-gray-500 line-through text-lg">₹9,999</div>
                                    <div className="text-green-600 font-bold text-lg">70% Discount!</div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Course Intro Video */}
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
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="aspect-video w-full">
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
                </div>
            </section>


            {/* Detailed Course Modules */}
            <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                📚 30 ദിവസത്തെ കംപ്ലീറ്റ് ട്രാൻസ്ഫോർമേഷൻ പ്ലാൻ
                            </span>
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            ഓരോ ദിവസവും സയന്റിഫിക്കായി ഡിസൈൻ ചെയ്ത ടെക്‌നിക്കുകൾ ഉപയോഗിച്ച്
                            നിങ്ങളുടെ മനസ്സിനെ വിജയത്തിന്റെ പവർഹൗസ് ആക്കി മാറ്റുക
                        </p>
                    </motion.div>


                    {/* Video Section */}
                    <div className="text-center space-y-6">
                        <h3 className="text-4xl font-semibold">FIRST CHALLENGE </h3>

                        <div className="relative group aspect-w-16 aspect-h-9 rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto">

                            {isPlaying2 && (
                                <button
                                    onClick={handleReload2}
                                    className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                                    title="Reload Video"
                                >
                                    <FiRefreshCw className="w-5 h-5 cursor-pointer" />
                                </button>
                            )}

                            <div className="w-full h-full">
                                {!isPlaying2 ? (
                                    <div className="w-full h-full cursor-pointer" onClick={handlePlay2}>
                                        <img
                                            src={Thumb2}
                                            alt="Video Thumbnail"
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Optional: Add Play button overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="aspect-video">
                                        <iframe
                                            key={`hero-video-${reloadKey2}`}
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
                </div>
            </section>

            {/* Exclusive Bonuses */}
            <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                🎁 Special Bonus Package (Value: ₹12,000)
                            </span>
                        </h2>
                        <p className="text-xl text-gray-700">
                            ഇന്ന് ഓർഡർ ചെയ്യുന്നവർക്ക് ഈ അമൂല്യമായ ബോണസുകൾ <strong className="text-red-600">ഫ്രീയായി!</strong>
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {bonuses.map((bonus, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, rotateY: 5 }}
                                className="bg-white rounded-2xl p-6 shadow-xl border-2 border-purple-200 hover:border-purple-400 transition-all relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 text-sm font-bold rounded-bl-lg">
                                    FREE
                                </div>
                                <div className="text-purple-500 text-4xl mb-4">{bonus.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-gray-800">{bonus.title}</h3>
                                <div className="text-2xl font-bold text-green-600 mb-3">{bonus.value}</div>
                                {/* <p className="text-gray-700 text-sm">{bonus.description}</p> */}
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl p-8 mt-12 text-center"
                    >
                        <h3 className="text-3xl font-bold mb-4">Total Value: ₹12,000</h3>
                        <p className="text-xl mb-4">നിങ്ങൾ പേയ് ചെയ്യുന്നത്: <span className="text-4xl font-bold">₹2,999</span></p>
                        <p className="text-lg">നിങ്ങൾ സേവ് ചെയ്യുന്നത്: <span className="text-2xl font-bold text-yellow-300">₹9001!</span></p>
                    </motion.div>
                </div>
            </section>

            {/* Urgency & Scarcity */}
            <section className="py-16 bg-gradient-to-r from-red-100 to-orange-100">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-red-300">
                            <h2 className="text-2xl font-bold text-red-600 mb-6">
                                ⚠️ അവസാന മുന്നറിയിപ്പ്!
                            </h2>
                            <div className="grid md:grid-cols-3 gap-8 mb-8">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-red-600">127</div>
                                    <div className="text-gray-700">Spots Left</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-orange-600">56</div>
                                    <div className="text-gray-700">പേർ വെയ്റ്റിംഗ് ലിസ്റ്റിൽ</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-green-600">97%</div>
                                    <div className="text-gray-700">Success Rate</div>
                                </div>
                            </div>
                            <p className="text-xl text-gray-700 mb-6">
                                ഈ സ്പെഷ്യൽ ഓഫർ <strong className="text-red-600">ഇന്ന് രാത്രി 12 മണിക്ക്</strong> അവസാനിക്കും.
                                അതിനു ശേഷം വില ₹9,999 ആകും. <strong>മിസ് ചെയ്യരുത്!</strong>
                            </p>

                            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
                                <p className="text-yellow-800 font-semibold">
                                    💡 <strong>Fact:</strong> ഇതുവരെ ഈ കോഴ്‌സ് എടുത്ത 847 പേരിൽ
                                    97% പേരും അവരുടെ ജീവിതത്തിൽ Measurable change റിപ്പോർട്ട് ചെയ്തിട്ടുണ്ട്!
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Dynamic Testimonial Showcase */}
            <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-indigo-400/5"></div>
                <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-xl"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <HiSparkles className="text-yellow-500 text-2xl" />
                            <span className="text-indigo-600 font-semibold text-lg">Success Stories</span>
                            <HiSparkles className="text-yellow-500 text-2xl" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                🎯 ഇവരെല്ലാം നേടിയത് നിങ്ങൾക്കും നേടാം!
                            </span>
                        </h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            ആയിരക്കണക്കിന് ആളുകളുടെ ജീവിതം മാറ്റിമറിച്ച ഈ കോഴ്‌സിന്റെ യഥാർത്ഥ ഫലങ്ങൾ കേൾക്കൂ
                        </p>
                    </motion.div>

                    <div className="max-w-5xl mx-auto">
                        <div
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            onTouchStart={() => setIsPaused(true)}
                            onTouchEnd={() => setIsPaused(false)}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentTestimonial}
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="relative"
                                >
                                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
                                        {/* Decorative elements */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-100 to-transparent rounded-full translate-y-12 -translate-x-12"></div>

                                        <div className="relative z-10">
                                            <div className="flex flex-col md:flex-row items-start gap-8">
                                                <div className="flex-shrink-0">
                                                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-2xl md:text-3xl text-white font-bold shadow-lg">
                                                        {testimonials[currentTestimonial].name.charAt(0)}
                                                    </div>
                                                </div>

                                                <div className="flex-1">
                                                    <div className="flex items-center gap-1 mb-6">
                                                        {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                                            <FaStar key={i} className="text-yellow-400 text-xl" />
                                                        ))}
                                                    </div>

                                                    <div className="relative mb-6">
                                                        <FaQuoteLeft className="text-indigo-300 text-3xl mb-4" />
                                                        <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium">
                                                            {testimonials[currentTestimonial].content}
                                                        </p>
                                                    </div>

                                                    <div className="border-t border-gray-100 pt-6">
                                                        <div className="font-bold text-xl text-gray-800 mb-1">
                                                            {testimonials[currentTestimonial].name}
                                                        </div>
                                                        <div className="text-indigo-600 font-medium">
                                                            {testimonials[currentTestimonial].role}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-center mt-12 gap-6">
                            <button
                                onClick={prevTestimonial}
                                className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-indigo-600 hover:bg-indigo-50 hover:border-indigo-200 transition-all duration-300 hover:scale-110"
                            >
                                <FaChevronLeft />
                            </button>

                            <div className="flex gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentTestimonial(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial
                                                ? 'bg-gradient-to-r from-blue-500 to-indigo-500 scale-125 shadow-lg'
                                                : 'bg-gray-300 hover:bg-gray-400'
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextTestimonial}
                                className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center text-indigo-600 hover:bg-indigo-50 hover:border-indigo-200 transition-all duration-300 hover:scale-110"
                            >
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>

                    {/* Call to action hint */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-center mt-16"
                    >
                        <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-white/40 shadow-lg">
                            <HiSparkles className="text-yellow-500" />
                            <span className="text-gray-700 font-medium">നിങ്ങളുടെ സക്സസ് സ്റ്റോറി എഴുതാനുള്ള സമയം എത്തി!</span>
                            <HiSparkles className="text-yellow-500" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 bg-gradient-to-r from-red-500 to-orange-500 text-white">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6">
                            🔥 ഇനിയും കാത്തിരിക്കേണ്ട!
                        </h2>
                        <p className="text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
                            30 ദിവസം കൊണ്ട് നിങ്ങളുടെ ജീവിതത്തിൽ <strong>വിപ്ലവകരമായ മാറ്റം</strong>
                            കൊണ്ടുവരാൻ തയ്യാറാണോ? ഇന്നു തന്നെ Join ചെയ്യൂ!
                        </p>

                        <div className="bg-white/10 backdrop-blur rounded-3xl p-8 max-w-lg mx-auto mb-8">
                            <div className="text-5xl font-bold text-yellow-300 mb-2">₹2,999</div>
                            <div className="text-white/70 line-through text-2xl">₹12,000</div>
                            <div className="text-yellow-300 font-bold text-2xl mb-3">93% ഡിസ്കൗണ്ട്!</div>
                            <div className="text-lg text-white/90">+ ₹9000 Worth Bonus</div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-red-600 px-4 py-6 rounded-full text-xl font-bold flex items-center justify-center gap-2 mx-auto hover:bg-yellow-100 transition-all shadow-2xl"
                        >
                            <FaFire />
                            ഇപ്പോൾ തന്നെ വാങ്ങുക
                            <FaArrowRight />
                        </motion.button>

                        {/* <div className="mt-8 flex justify-center items-center gap-6 text-white/80">
                            <div className="flex items-center gap-2">
                                <FaLock />
                                <span>സുരക്ഷിത പേയ്‌മെന്റ്</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaShieldAlt />
                                <span>മണി ബാക്ക് ഗ്യാരണ്ടി</span>
                            </div>
                        </div> */}

                        <p className="text-white/70 mt-6 text-lg">
                            ⏰ <strong>ഓർക്കുക:</strong> ഈ ഓഫർ ഇന്ന് രാത്രി 12 മണിക്ക് അവസാനിക്കും!
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-5 bg-gray-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="">
                        <div className='flex justify-center'>
                            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                                🧠 Challenge Mindset
                            </h3>
                            {/* <p className="text-gray-400 mb-4">
                                നിങ്ങളുടെ സ്വപ്നങ്ങൾ യാഥാർത്ഥ്യമാക്കാൻ ഞങ്ങൾ ഇവിടെയുണ്ട്!
                            </p> */}
                        </div>

                        {/* <div>
                            <h4 className="text-lg font-semibold mb-4 text-orange-400">ബന്ധപ്പെടുക</h4>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-gray-300">
                                    <FaPhone className="text-green-400" /> +91 9876543210
                                </div>
                                <div className="flex items-center gap-3 text-gray-300">
                                    <FaEnvelope className="text-blue-400" /> info@challengemindset.com
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-orange-400">സപ്പോർട്ട്</h4>
                            <div className="space-y-2 text-gray-300">
                                <div>24/7 കസ്റ്റമർ സപ്പോർട്ട്</div>
                                <div>ലൈവ് ചാറ്റ് സപ്പോർട്ട്</div>
                                <div>FAQ & ഹെൽപ് സെന്റർ</div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-orange-400">ഗ്യാരണ്ടീസ്</h4>
                            <div className="space-y-2 text-gray-300">
                                <div className="flex items-center gap-2">
                                    <FaShieldAlt className="text-green-400" />
                                    <span>60-ദിവസ് മണി ബാക്ക്</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaInfinity className="text-blue-400" />
                                    <span>ലൈഫ്ടൈം ആക്സസ്</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaUsers className="text-purple-400" />
                                    <span>കമ്മ്യൂണിറ്റി സപ്പോർട്ട്</span>
                                </div>
                            </div>
                        </div> */}
                    </div>

                    {/* <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                        <p className="text-gray-400 mb-2">
                            &copy; 2025 Challenge Mindset. എല്ലാ അവകാശങ്ങളും സുരക്ഷിതം.
                        </p>
                        <p className="text-gray-500 text-sm">
                            നിങ്ങളുടെ സ്വകാര്യത സുരക്ഷിതമാണ് | Terms & Conditions Apply
                        </p>
                    </div> */}
                </div>
            </footer>
        </div>
    );
};

export default Landing;