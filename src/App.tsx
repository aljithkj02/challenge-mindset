import { CTA } from "./components/CTA"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
// import { Navbar } from "./components/Navbar"
import { TestimonialSection } from "./components/Testimonial"
import { VideoSection } from "./components/VideoSection"
// import b from './assets/b.jpeg'


function App() {

    return (
        <main className="bg-black text-white min-h-screen relative">
            {/* Background layer */}
            {/* <div
                style={{
                    backgroundImage: `url(${b})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
                className="fixed inset-0 z-0"
            ></div> */}
            {/* <Navbar /> */}
            <Hero />
            <VideoSection />
            <TestimonialSection />
            <CTA />
            <Footer />
        </main>
    )
}

export default App
