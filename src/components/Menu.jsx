import iconLemon from '../assets/lemon.svg'
import iconPackage from '../assets/package.svg'
import iconSettings from '../assets/settings.svg'

function Menu(props) {

    return (
        <div className='menu'>
            <div>
                <img src={iconLemon} alt="main" />
            </div>
            <div>
                <img src={iconPackage} alt="store" />
                { props.items ? <span className='menu_badge'>{props.items}</span> : null }
                {/* Yo. rivi tuo paketin päälle tiedon lisäosien määrästä,
                    ehdollisuuden toteuttaa ternary operator,
                    span ja tyylimääritteet tuovat ikoniin numero merkin. */}
            </div>
            <div>
                <img src={iconSettings} alt="settings" />
            </div>
        </div>
    )

}

export default Menu