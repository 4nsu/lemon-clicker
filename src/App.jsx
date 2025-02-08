import './App.css';
import AppRouter from './components/AppRouter';
import getPurchasableItems from './utils/getPurchasableItems.js';
import items from './config/items.js';
import { useState } from 'react';
import round from './utils/round.js';

function App() {

    // Luodaan tilamuuttuja, johon tallennetaan tuotelista.
    const [storeitems, setStoreitems] = useState(items);

    // Esitellään pelin laskennalliset alkuarvot.
    const initialstats = {
        clicks: 0,
        balance: 0,
        increase: 1,
        itemstobuy: 0,
        upgrades: 0,
        collected: 0
    }

    // Luodaan tilamuuttuja, johon tallennetaan pelin laskennalliset tiedot.
    const [stats, setStats] = useState(initialstats);

    // Laskee niiden tuotteiden lkm, joiden ostamiseen on varaa
    const countBuyableItems = (items, balance) => {
        let total = 0
        getPurchasableItems(items).forEach(item => {
            if (item.price <= balance) total++
        })
        return total
    }

    // Luodaan klikkauksen käsittelevä funktio.
    const handleClick = () => {
        // Tehdään kopio stats-tilamuuttujasta.
        let newstats = {...stats} // {...stats} avaa stats-oliorakenteen auki eli ottaa sen jokaisen alkion omaksi arvokseen
        // Kasvatetaan napautusten lukumäärää yhdellä.
        newstats.clicks = newstats.clicks + 1;
        // Kasvatetaan sitruunoiden määrää kasvatusarvolla.
        newstats.balance = round(newstats.balance + newstats.increase,1);
        // Lasketaan ostettavissa olevien tuotteiden lukumäärä
        newstats.itemstobuy = countBuyableItems(storeitems, newstats.balance)
        // Kasvatetaan sitruunoiden keräysmäärää.
        newstats.collected = round(newstats.collected + newstats.increase, 1)
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
            let newstoreitems = JSON.parse(JSON.stringify(storeitems))
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
                upgrades = upgrades + newstoreitems[i].qty
                // Lisätään tuotteen vaikutus kasvatusarvoon
                increase = increase + newstoreitems[i].multiplier * newstoreitems[i].qty
            }
            // Tallennetaan lasketut koostearvot
            newstats.increase = increase
            newstats.upgrades = upgrades
            // Lasketaan ostettavissa olevien tuotteiden lukumäärä
            newstats.itemstobuy = countBuyableItems(newstoreitems, newstats.balance)
            // Tallennetaan uudet tilamuuttujien arvot
            setStoreitems(newstoreitems)
            setStats(newstats)
        }

    }

    const handleReset = () => {
        // Päivitetään tilamuuttujat alkuarvoihin.
        setStats(initialstats)
        setStoreitems(items)
    }

    return (
        <AppRouter  stats={stats} 
                    storeitems={storeitems} 
                    handleClick={handleClick}
                    handlePurchase={handlePurchase}
                    handleReset={handleReset} />
    )
}

export default App