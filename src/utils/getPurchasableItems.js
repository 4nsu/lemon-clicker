const getPurchasableItems = (items) => {

    // Taulukko, johon ostettavissa olevat tuotteet kootaan
    let purchasableitems = []
    // Lähtökohtaisesti kaikkia ostettavia tuotteita ei ole listattu
    let allItemsListed = false
    // Käydään tuotteet yksitellen läpi
    items.forEach(item => {
        // Tarkasta, onko ostettavat tuote listattu
        if (!allItemsListed) {
            // Ei ole, lisätään tuote listaan
            purchasableitems.push(item)
            // Jos tuotteen määrä on 0, ei listata enempää
            if (item.qty == 0) {
                allItemsListed = true
            }
        }
    });

    // Palautetaan koostettu taulukko
    return purchasableitems

}

export default getPurchasableItems