import Balance from './components/Balance'
import Booster from './components/Booster'
import Header from './components/Header'
import Lemon from './components/Lemon'
import Menu from './components/Menu'
import { useState } from 'react'
import './App.css'

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
        <div className='root'> {/* root-luokka huolehtii koko sovelluksen koosta */}
            <div className='root_content'> {/* root_content-luokka on yksilöllisen sisällön kääre */}
                <div className='container clicker'> {/* container-luokka huolehtii sisällön sijoittelusta */}
                    <Header>lemon clicker</Header>
                    <Balance total={stats.clicks} />
                    <Lemon onClick={handleClick} />
                    <Booster value={stats.increase} />
                </div>
            </div>
            <Menu items={stats.itemstobuy} />
        </div>
    )
}

export default App