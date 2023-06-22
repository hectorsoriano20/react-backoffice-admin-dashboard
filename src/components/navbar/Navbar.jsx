import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..."/>
                    <SearchIcon/>
                </div>
                <div className="item">
                    <img
                        src="https://images.pexels.com/photos/4047185/pexels-photo-4047185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className="avatar"
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar