import AppRouter from './components/AppRouter';
import { useState } from 'react';
import './App.css';

function App() {

    // Luodaan tilamuuttuja, johon tallennetaan pelin laskennalliset tiedot.
    const [stats, setStats] = useState({ clicks: 0, balance: 0, increase: 0, itemstobuy: 0 });

    // Luodaan klikkauksen käsittelevä funktio.
    const handleClick = () => {
        // Tehdään kopio stats-tilamuuttujasta.
        let newstats = {...stats} // {...stats} avaa stats-oliorakenteen auki eli ottaa sen jokaisen alkion omaksi arvokseen
        // Kasvatetaan napautusten lukumäärää yhdellä.
        newstats.clicks = newstats.clicks + 1;
        // Tallennetaan päivitetty stats-muuttuja.
        setStats(newstats);
    }

    return (
        <AppRouter stats={stats} handleClick={handleClick} />
    )
}

export default App