import "./navbar.ayuda.scss"
import SearchIcon from '@mui/icons-material/Search';

const NavbarAyuda = () => {
    return (
        <div className='navbarayuda'>
            <div className="wrapperayuda">
                {/* <div className="search">
                    <input type="text" placeholder="Search..."/>
                    <SearchIcon/>
                </div> */}
                <div className="itemayuda">
                    <img
                        src="https://images.pexels.com/photos/4047185/pexels-photo-4047185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="avatarayuda"
                    />
                </div>
            </div>
        </div>
    )
}

export default NavbarAyuda