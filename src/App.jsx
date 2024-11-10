import Balance from './components/Balance'
import Booster from './components/Booster'
import Header from './components/Header'
import Lemon from './components/Lemon'
import { useState } from 'react'
import './App.css'

function App() {

    // Luodaan tilamuuttuja, jossa tallennetaan napautusten määrä.
    const [clicks, setClicks] = useState(0);

    // Luodaan funktio, joka hakee tilamuuttujan nykyisen arvon,
    // lisää siihen yhden, ja tallentaa tilamuuttujan uudeksi arvoksi
    // setClicks-funktiokutsulla.
    const handleClick = () => {
        // Kasvatetaan napautusten määrää yhdellä.
        setClicks(clicks + 1);
    }

    return (
        <>
            <div>
                <Header>lemon clicker</Header>
                <Balance total={clicks} />
                <Lemon onClick={handleClick} />
                <Booster value="3.2" />
            </div>
        </>
    )
}

export default App