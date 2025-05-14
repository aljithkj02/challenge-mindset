import { CTA } from "./components/CTA"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { VideoSection } from "./components/VideoSection"


function App() {

    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar />
            <Hero />
            <VideoSection />
            <CTA />
            <Footer />
        </main>
    )
}

export default App
