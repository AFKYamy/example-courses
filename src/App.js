import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Explore from './components/Explore';
import Courses from './components/Courses';

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
            </main>
        </body>
    )
}

export default App;