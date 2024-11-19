import './App.css';
import AppRouter from './components/AppRouter';
import items from './config/items.js';
import { useState } from 'react';
import round from './utils/round.js';

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
        newstats.balance = round(newstats.balance + newstats.increase,1);
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
            newstats.balance = round(newstats.balance - newstoreitems[index].price,1)
            // Lasketaan tuotteen uusi hinta
            newstoreitems[index].price = Math.floor(newstoreitems[index].baseprice * Math.pow(1.15,newstoreitems[index].qty))
            // Koostemuuttujien esittely
            let increase = 1
            let upgrades = 0
            // Käydään tuotteet yksitellen läpi
            for (let i=0; i<storeitems.length; i++) {
                // Lisätään tuotteiden määrä kokonaismäärään
                upgrades = upgrades + storeitems[i].qty
                // Lisätään tuotteen vaikutus kasvatusarvoon
                increase = increase + storeitems[i].multiplier * storeitems[i].qty
            }
            // Tallennetaan lasketut koostearvot
            newstats.increase = increase
            newstats.upgrades = upgrades
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