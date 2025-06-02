import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaFire,
    FaStar,
    FaCheckCircle,
    FaUsers,
    FaClock,
    FaArrowRight,
    FaQuoteLeft,
    FaPhone,
    FaEnvelope,
    FaInstagram,
    FaWhatsapp,
    FaTrophy,
    FaBrain,
    FaRocket,
    FaShieldAlt,
    FaLock,
    FaInfinity,
    FaHeart,
} from 'react-icons/fa';
import { FiRefreshCw } from "react-icons/fi";
import Thumb1 from '../assets/thumbFirst.jpg'

const Landing = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [timeLeft, setTimeLeft] = useState({
        hours: 23,
        minutes: 45,
        seconds: 30
    });
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [reloadKey, setReloadKey] = useState(0);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const handleReload = () => {
        setReloadKey(prev => prev + 1);
        setIsPlaying(true); // auto play again after reload
    };

    useEffect(() => {
        setIsVisible(true);

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
            name: "രാജേഷ് കുമാർ",
            role: "IT Professional, കൊച്ചി",
            content: "സത്യം പറഞ്ഞാൽ, ഞാൻ 15 വർഷമായി ഒരേ പോസിഷനിൽ കുടുങ്ങി ഇരിക്കുകയായിരുന്നു. ഈ കോഴ്‌സ് എടുത്ത 30 ദിവസത്തിനുള്ളിൽ എന്റെ മനസ്സ് തന്നെ മാറി. ഇപ്പോൾ ഞാൻ ടീം ലീഡറായി പ്രമോഷൻ കിട്ടി, സാലറി 40% കൂടി!",
            rating: 5,
            achievement: "40% സാലറി വർദ്ധന"
        },
        {
            name: "പ്രിയ സുധീർ",
            role: "ഗൃഹിണി & യൂട്യൂബർ",
            content: "വീട്ടിൽ ഇരുന്ന് എന്തെങ്കിലും ചെയ്യണമെന്ന് വർഷങ്ങളായി ആഗ്രഹിച്ചിരുന്നു. പക്ഷേ ധൈര്യമില്ലായിരുന്നു. ഈ കോഴ്‌സിന് ശേഷം ഞാൻ യൂട്യൂബ് ചാനൽ തുടങ്ങി. ഇപ്പോൾ മാസം 50,000 രൂപ വരുമാനം!",
            rating: 5,
            achievement: "50K മാസിക വരുമാനം"
        },
        {
            name: "അനിൽ മേനോൻ",
            role: "ബിസിനസ് ഓണർ, തിരുവനന്തപുരം",
            content: "എന്റെ ബിസിനസ്സ് 3 വർഷമായി ലോസിൽ ആയിരുന്നു. എല്ലാം കൊടുത്ത് തീർക്കാൻ തീരുമാനിച്ചിരുന്നു. ഈ കോഴ്‌സിലെ മൈൻഡ് ടെക്‌നിക്ക് ഉപയോഗിച്ച് പുതിയ ആശയങ്ങൾ കൊണ്ടുവന്നു. ഇപ്പോൾ മാസം 2 ലക്ഷം പ്രോഫിറ്റ്!",
            rating: 5,
            achievement: "2L മാസിക പ്രോഫിറ്റ്"
        },
        {
            name: "നിഖിൽ രാജ്",
            role: "കോളേജ് സ്റ്റുഡന്റ്",
            content: "പഠനത്തിൽ ഫോക്കസ് ഇല്ലായിരുന്നു, പരീക്ഷയിൽ എപ്പോഴും ഫെയിൽ. ഈ കോഴ്‌സിലൂടെ എന്റെ കോൺസൺട്രേഷൻ പവർ 10 ഇരട്ടി ആയി. ഇപ്പോൾ ക്ലാസ്സിൽ ഫസ്റ്റ് റാങ്ക്!",
            rating: 5,
            achievement: "ക്ലാസ്സ് ഫസ്റ്റ് റാങ്ക്"
        }
    ];

    const courseModules = [
        {
            day: "Day 1-5",
            title: "മൈൻഡ് റീസെറ്റ് ഫൗണ്ടേഷൻ",
            description: "നെഗറ്റീവ് ചിന്തകൾ പൂർണമായി നീക്കം ചെയ്ത് പോസിറ്റീവ് മൈൻഡ്സെറ്റ് സൃഷ്ടിക്കുക",
            techniques: ["ന്യൂറോ-റീപ്രോഗ്രാമിംഗ്", "സബ്കൺഷ്യസ് ക്ലീനിംഗ്", "എനർജി ആക്ടിവേഷൻ"]
        },
        {
            day: "Day 6-10",
            title: "വിഷൻ & ഗോൾ മാസ്റ്ററി",
            description: "നിങ്ങളുടെ സ്വപ്നങ്ങൾ വ്യക്തമാക്കി അതിലേക്കുള്ള പാത തയ്യാറാക്കുക",
            techniques: ["വിഷൻ ബോർഡ് ക്രിയേഷൻ", "SMART ഗോൾ സെറ്റിംഗ്", "മാനിഫെസ്റ്റേഷൻ ടെക്‌നിക്"]
        },
        {
            day: "Day 11-15",
            title: "ഫിയർ & ലിമിറ്റിംഗ് ബിലീഫ് എലിമിനേഷൻ",
            description: "നിങ്ങളെ പിന്നോട്ട് നിർത്തുന്ന ഭയങ്ങളും വിശ്വാസങ്ങളും നീക്കം ചെയ്യുക",
            techniques: ["ഫിയർ ഫേസിംഗ് എക്സർസൈസ്", "ബിലീഫ് റീസ്ട്രക്ചറിംഗ്", "കോൺഫിഡൻസ് ബിൽഡിംഗ്"]
        },
        {
            day: "Day 16-20",
            title: "ഹാബിറ്റ് ട്രാൻസ്ഫോർമേഷൻ & ഡിസിപ്ലിൻ",
            description: "വിജയകരമായ ദിനചര്യകൾ സൃഷ്ടിച്ച് സ്വയം അച്ചടക്കം വികസിപ്പിക്കുക",
            techniques: ["21-ദിവസ ഹാബിറ്റ് ലൂപ്", "മോർണിംഗ് & നൈറ്റ് റൂട്ടീൻ", "വിൽപവർ എൻഹാൻസ്മെന്റ്"]
        },
        {
            day: "Day 21-25",
            title: "എനർജി മാനേജ്മെന്റ് & ഫോക്കസ് മാസ്റ്ററി",
            description: "നിങ്ങളുടെ എനർജി ലെവൽ പരമാവധി ആക്കി ലേസർ ഫോക്കസ് നേടുക",
            techniques: ["എനർജി ഓഡിറ്റിംഗ്", "ഡീപ് വർക്ക് ടെക്‌നിക്", "മെഡിറ്റേറ്റീവ് ഫോക്കസിംഗ്"]
        },
        {
            day: "Day 26-30",
            title: "ആക്ഷൻ മാസ്റ്ററി & റിസൾട്ട് ജനറേഷൻ",
            description: "എല്ലാം ഒരുമിച്ച് ചേർത്ത് നിർത്താനാവാത്ത റിസൾട്ട് മെഷീൻ ആകുക",
            techniques: ["എക്‌സിക്യൂഷൻ സ്ട്രാറ്റജി", "റിസൾട്ട് ട്രാക്കിംഗ്", "സക്സസ് മൾട്ടിപ്ലിക്കേഷൻ"]
        }
    ];

    const bonuses = [
        {
            icon: <FaBrain />,
            title: "സബ്ലിമിനൽ ഓഡിയോ പാക്ക്",
            value: "₹4,999",
            description: "ഉറങ്ങുമ്പോൾ തന്നെ നിങ്ങളുടെ മനസ്സിനെ പ്രോഗ്രാം ചെയ്യുന്ന പവർഫുൾ ഓഡിയോകൾ"
        },
        {
            icon: <FaRocket />,
            title: "30-ദിവസ് പേഴ്സണൽ കോച്ചിംഗ്",
            value: "₹15,000",
            description: "എക്സ്പെർട്ട് കോച്ചുമാരുമായി വൺ-ഓൺ-വൺ സെഷനുകൾ"
        },
        {
            icon: <FaUsers />,
            title: "എക്സ്ക്ലൂസീവ് കമ്മ്യൂണിറ്റി ആക്സസ്",
            value: "₹2,999",
            description: "5000+ വിജയിച്ച വ്യക്തികളുമായി ദിവസവും ഇന്ററാക്ട് ചെയ്യുക"
        },
        {
            icon: <FaInfinity />,
            title: "ലൈഫ്ടൈം അപ്ഡേറ്റ്സ്",
            value: "₹9,999",
            description: "ഭാവിയിലെ എല്ലാ അപ്ഗ്രേഡുകളും സൗജന്യമായി നേടുക"
        }
    ];

    const painPoints = [
        "🔥 എപ്പോഴും Procrastinate ചെയ്യുന്നുണ്ടോ?",
        "😔 Self Confidence ഇല്ലാതെ കഷ്ടപ്പെടുന്നുണ്ടോ?",
        "💸 പണത്തിന്റെ അഭാവം കാരണം സ്വപ്നങ്ങൾ ഉപേക്ഷിക്കുന്നുണ്ടോ?",
        "🎯 ജീവിതത്തിൽ ഒരു ക്ലിയർ ദിശ ഇല്ലാതെ അലയുന്നുണ്ടോ?",
        "😰 മറ്റുള്ളവർ എന്ത് വിചാരിക്കുമെന്ന ഭയം?",
        "⏰ സമയ മാനേജ്മെന്റിൽ പരാജയപ്പെടുന്നുണ്ടോ?"
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
                                <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                                    മൈൻഡ്സെറ്റ്
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                    പൂർണമായി മാറ്റുക!
                                </span>
                            </motion.h1>

                            <motion.p
                                className="text-xl mb-8 text-gray-700 leading-relaxed"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <strong className="text-red-600">ശ്രദ്ധിക്കുക:</strong> ഇത് വെറും ഒരു കോഴ്‌സ് അല്ല!
                                ഇത് നിങ്ങളുടെ ജീവിതത്തിലെ ഏറ്റവും വലിയ ട്രാൻസ്ഫോർമേഷൻ ആണ്.
                                30 ദിവസം കൊണ്ട് നിങ്ങൾ ഒരു പുതിയ വ്യക്തിയായി മാറും - <em>ഗ്യാരണ്ടി!</em>
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
                                        <div className="text-2xl font-bold text-green-700">12,847+</div>
                                        <div className="text-sm text-green-600">വിജയകരമായി ജീവിതം മാറ്റിയവർ</div>
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-green-700">4.9⭐</div>
                                        <div className="text-sm text-green-600">ആവറേജ് റേറ്റിംഗ്</div>
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
                                        { label: 'മണിക്കൂർ', value: timeLeft.hours },
                                        { label: 'മിനിറ്റ്', value: timeLeft.minutes },
                                        { label: 'സെക്കൻഡ്', value: timeLeft.seconds }
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
                                    <div className="text-green-600 font-bold text-lg">70% ഡിസ്കൗണ്ട്!</div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Digital Salesperson Avatar */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative"
                        >
                            <div className="relative w-full max-w-md mx-auto">
                                <motion.div
                                    animate={{
                                        rotate: [0, 3, -3, 0],
                                        scale: [1, 1.02, 1]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 w-80 h-80 rounded-full flex items-center justify-center text-8xl shadow-2xl relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                                    <span className="relative z-10">🧠💪</span>
                                </motion.div>

                                {/* Floating Success Indicators */}
                                <motion.div
                                    animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute -top-4 -right-4 bg-yellow-400 text-black p-3 rounded-full shadow-lg"
                                >
                                    <FaTrophy />
                                </motion.div>

                                <motion.div
                                    animate={{ y: [10, -10, 10], rotate: [0, -5, 5, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                                    className="absolute -bottom-4 -left-4 bg-green-400 text-black p-3 rounded-full shadow-lg"
                                >
                                    <FaCheckCircle />
                                </motion.div>

                                <motion.div
                                    animate={{ x: [-5, 5, -5], rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                                    className="absolute top-1/2 -left-6 bg-blue-400 text-white p-2 rounded-full shadow-lg"
                                >
                                    <FaRocket />
                                </motion.div>

                                {/* Pulsing Aura */}
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 bg-gradient-to-br from-red-400/30 to-orange-400/30 rounded-full -z-10"
                                ></motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Dynamic Testimonial Showcase */}
            <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                                🎯 ഇവരെല്ലാം നേടിയത് നിങ്ങൾക്കും നേടാം!
                            </span>
                        </h2>
                    </motion.div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentTestimonial}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-green-200">
                                <div className="flex items-start gap-6">
                                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-2xl text-white font-bold">
                                        {testimonials[currentTestimonial].name.charAt(0)}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center mb-4">
                                            <div className="flex">
                                                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                                    <FaStar key={i} className="text-yellow-400" />
                                                ))}
                                            </div>
                                            <span className="ml-3 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                                                {testimonials[currentTestimonial].achievement}
                                            </span>
                                        </div>
                                        <FaQuoteLeft className="text-green-400 mb-4" size={24} />
                                        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                                            {testimonials[currentTestimonial].content}
                                        </p>
                                        <div>
                                            <div className="font-bold text-lg text-gray-800">{testimonials[currentTestimonial].name}</div>
                                            <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex justify-center mt-8 gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentTestimonial(index)}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentTestimonial
                                    ? 'bg-green-500 scale-125'
                                    : 'bg-green-200'
                                    }`}
                            />
                        ))}
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

                        {/* {courseModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-2xl p-8 shadow-xl border border-blue-200 hover:border-blue-400 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {module.day.split(' ')[1]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {module.day}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-800">{module.title}</h3>
                    </div>
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      {module.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">പ്രധാന ടെക്‌നിക്കുകൾ:</h4>
                      <div className="flex flex-wrap gap-2">
                        {module.techniques.map((technique, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium"
                          >
                            ✨ {technique}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))} */}
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
                                🎁 സ്പെഷ്യൽ ബോണസ് പാക്കേജ് (വെല്യൂ: ₹32,997)
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
                                <p className="text-gray-700 text-sm">{bonus.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl p-8 mt-12 text-center"
                    >
                        <h3 className="text-3xl font-bold mb-4">മൊത്തം വെല്യൂ: ₹42,996</h3>
                        <p className="text-xl mb-4">നിങ്ങൾ പേയ് ചെയ്യുന്നത്: <span className="text-4xl font-bold">₹2,997</span></p>
                        <p className="text-lg">നിങ്ങൾ സേവ് ചെയ്യുന്നത്: <span className="text-2xl font-bold text-yellow-300">₹39,999!</span></p>
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
                            <h2 className="text-4xl font-bold text-red-600 mb-6">
                                ⚠️ അവസാന മുന്നറിയിപ്പ്!
                            </h2>
                            <div className="grid md:grid-cols-3 gap-8 mb-8">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-red-600">127</div>
                                    <div className="text-gray-700">സ്പോട്ടുകൾ ബാക്കി</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-orange-600">2,847</div>
                                    <div className="text-gray-700">പേർ വെയ്റ്റിംഗ് ലിസ്റ്റിൽ</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-green-600">97%</div>
                                    <div className="text-gray-700">സക്സസ് റേറ്റ്</div>
                                </div>
                            </div>
                            <p className="text-xl text-gray-700 mb-6">
                                ഈ സ്പെഷ്യൽ ഓഫർ <strong className="text-red-600">ഇന്ന് രാത്രി 12 മണിക്ക്</strong> അവസാനിക്കും.
                                അതിനു ശേഷം വില ₹9,999 ആകും. <strong>മിസ് ചെയ്യരുത്!</strong>
                            </p>

                            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
                                <p className="text-yellow-800 font-semibold">
                                    💡 <strong>ഫാക്ട്:</strong> ഇതുവരെ ഈ കോഴ്‌സ് എടുത്ത 12,847 പേരിൽ
                                    97% പേരും അവരുടെ ജീവിതത്തിൽ മെഷറബിൾ മാറ്റം റിപ്പോർട്ട് ചെയ്തിട്ടുണ്ട്!
                                </p>
                            </div>
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
                        <h2 className="text-5xl font-bold mb-6">
                            🔥 ഇനിയും കാത്തിരിക്കേണ്ട!
                        </h2>
                        <p className="text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
                            30 ദിവസം കൊണ്ട് നിങ്ങളുടെ ജീവിതത്തിൽ <strong>വിപ്ലവകരമായ മാറ്റം</strong>
                            കൊണ്ടുവരാൻ തയ്യാറാണോ? ഇന്നു തന്നെ ആരംഭിക്കുക!
                        </p>

                        <div className="bg-white/10 backdrop-blur rounded-3xl p-8 max-w-lg mx-auto mb-8">
                            <div className="text-5xl font-bold text-yellow-300 mb-2">₹2,997</div>
                            <div className="text-white/70 line-through text-2xl">₹42,996</div>
                            <div className="text-yellow-300 font-bold text-2xl mb-3">93% ഡിസ്കൗണ്ട്!</div>
                            <div className="text-lg text-white/90">+ ₹32,997 വർത്ത് ബോണസ്</div>
                            <div className="text-lg text-white/90">+ ലൈഫ്ടൈം ആക്സസ്</div>
                            <div className="text-lg text-white/90">+ 60-ദിവസ് ഗ്യാരണ്ടി</div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-red-600 px-16 py-6 rounded-full text-3xl font-bold flex items-center justify-center gap-4 mx-auto hover:bg-yellow-100 transition-all shadow-2xl"
                        >
                            <FaFire />
                            ഇപ്പോൾ തന്നെ വാങ്ങുക
                            <FaArrowRight />
                        </motion.button>

                        <div className="mt-8 flex justify-center items-center gap-6 text-white/80">
                            <div className="flex items-center gap-2">
                                <FaLock />
                                <span>സുരക്ഷിത പേയ്‌മെന്റ്</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaShieldAlt />
                                <span>മണി ബാക്ക് ഗ്യാരണ്ടി</span>
                            </div>
                        </div>

                        <p className="text-white/70 mt-6 text-lg">
                            ⏰ <strong>ഓർക്കുക:</strong> ഈ ഓഫർ ഇന്ന് രാത്രി 12 മണിക്ക് അവസാനിക്കും!
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-gray-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                                🧠 Challenge Mindset
                            </h3>
                            <p className="text-gray-400 mb-4">
                                നിങ്ങളുടെ സ്വപ്നങ്ങൾ യാഥാർത്ഥ്യമാക്കാൻ ഞങ്ങൾ ഇവിടെയുണ്ട്!
                            </p>
                            <div className="flex gap-4">
                                <motion.div whileHover={{ scale: 1.2 }} className="text-pink-400 text-2xl cursor-pointer">
                                    <FaInstagram />
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.2 }} className="text-green-400 text-2xl cursor-pointer">
                                    <FaWhatsapp />
                                </motion.div>
                            </div>
                        </div>

                        <div>
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
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                        <p className="text-gray-400 mb-2">
                            &copy; 2025 Challenge Mindset. എല്ലാ അവകാശങ്ങളും സുരക്ഷിതം.
                        </p>
                        <p className="text-gray-500 text-sm">
                            നിങ്ങളുടെ സ്വകാര്യത സുരക്ഷിതമാണ് | Terms & Conditions Apply
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Landing;