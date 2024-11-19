import iconLemon from '../assets/lemon.svg'
import shortenNumber from '../utils/shortenNumber';

// Funktio, joka selvittää kuvan polun suoritusaikana
function getImageUrl(name) {
    // Jotta merkkijonoon voi sijoittaa JavaScriptiä, tulee käyttää ``, eikä '' tai "".
    return new URL(`../assets/items/${name}`, import.meta.url).href;
}

function Item(props) {

    // Selvitetään kuvan url
    const url = getImageUrl(props.item.image)

    return (
        <div    className={ props.disabled ? 'item item-disabled' : 'item' }
                // Lisätään elementtiin klikkauksesta aktivoituva käsittelijä,
                // joka kutsuu oston käsittelijää, klikatun tuotteen tunnisteella.
                onClick={()=>{props.handlePurchase(props.item.id)}}>
            <div className='item_icon'>
                <img src={url} alt="" />
            </div>
            <div className='item_desc'>
                {props.item.name}<br />
                {shortenNumber(props.item.price)} <img src={iconLemon} alt="lemons" />
            </div>
            <div className='item_qty'>
                {props.item.qty}
            </div>
        </div>
    )

}

export default Item