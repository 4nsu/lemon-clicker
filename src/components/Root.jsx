import Menu from '../components/Menu'
import { Outlet } from 'react-router-dom'

function Root(props) {

    return (
        <div className='root'> {/* root-luokka huolehtii koko sovelluksen koosta */}
            <div className='root_content'> {/* root_content-luokka on yksilöllisen sisällön kääre */}
                <Outlet />
            </div>
            <Menu items={props.items} />
        </div>
    )

}

export default Root