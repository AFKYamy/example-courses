import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Explore from './components/Explore';

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
            </main>
        </body>
    )
}

export default App;