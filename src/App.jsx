import AppRouter from './components/AppRouter';
import items from './config/items.js';
import { useState } from 'react';
import './App.css';

function App() {

    // Luodaan tilamuuttuja, johon tallennetaan tuotelista.
    const [storeitems, setStoreitems] = useState(items);

    // Luodaan tilamuuttuja, johon tallennetaan pelin laskennalliset tiedot.
    const [stats, setStats] = useState({ clicks: 0, balance: 0, increase: 1, itemstobuy: 0 });

    // Luodaan klikkauksen käsittelevä funktio.
    const handleClick = () => {
        // Tehdään kopio stats-tilamuuttujasta.
        let newstats = {...stats} // {...stats} avaa stats-oliorakenteen auki eli ottaa sen jokaisen alkion omaksi arvokseen
        // Kasvatetaan napautusten lukumäärää yhdellä.
        newstats.clicks = newstats.clicks + 1;
        // Kasvatetaan sitruunoiden määrää kasvatusarvolla.
        newstats.balance = newstats.balance + newstats.increase;
        // Tallennetaan päivitetty stats-muuttuja.
        setStats(newstats);
    }

    // Luodaan oston käsittelevä funktio
    const handlePurchase = (id) => {

        // Etsitään tunnistetta vastaava indeksi tuotetaulukosta
        const index = storeitems.findIndex(storeitem => storeitem.id == id)
        // Tarkastetaan onko käyttäjällä varaa tuotteeseen
        if (stats.balance >= storeitems[index].price) {
            // Luodaan tilamuuttujien kopiot
            let newstoreitems = [...storeitems]
            let newstats = {...stats}
            // Kasvatetaan tuotteiden määrää yhdellä
            newstoreitems[index].qty++
            // Vähennetään varoista tuotteen hinta
            newstats.balance = newstats.balance - newstoreitems[index].price
            // TODO uusi tuotehinta
            // Tallennetaan uudet tilamuuttujien arvot
            setStoreitems(newstoreitems)
            setStats(newstats)
        }

    }

    return (
        <AppRouter  stats={stats} 
                    storeitems={storeitems} 
                    handleClick={handleClick}
                    handlePurchase={handlePurchase} />
    )
}

export default App