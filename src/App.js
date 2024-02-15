import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Explore from './components/Explore';
import Courses from './components/Courses';
import About from './components/About';
import WhyUs from './components/WhyUs/WhyUs';
import Reviews from './components/Reviews/Reviews';

const App = () => {
    return (
        <body>
            <header className="container">
                <Navbar />
            </header>
            <main>
                <Hero />
                <Stats />
                <Explore />
                <Courses />
                <About />
                <WhyUs />
                <Reviews />
            </main>
        </body>
    )
}

export default App;