import iconLemon from '../assets/lemon.svg'
import iconPackage from '../assets/package.svg'
import iconSettings from '../assets/settings.svg'
import { NavLink } from "react-router-dom";

function Menu(props) {

    return (
        <div className='menu'>
            <div>
                <NavLink to="/">
                    <img src={iconLemon} alt="main" />
                </NavLink>
            </div>
            <div>
                <NavLink to="/store">
                    <img src={iconPackage} alt="store" />
                    { props.items ? <span className='menu_badge'>{props.items}</span> : null }
                    {/* Yo. rivi tuo paketin päälle tiedon lisäosien määrästä,
                        ehdollisuuden toteuttaa ternary operator,
                        span ja tyylimääritteet tuovat ikoniin numero merkin. */}
                </NavLink>
            </div>
            <div>
                <NavLink to="/settings">
                    <img src={iconSettings} alt="settings" />
                </NavLink>
            </div>
        </div>
    )

}

export default Menu