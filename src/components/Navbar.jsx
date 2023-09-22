import logo from '../assets/logo.png';
import burger from '../assets/menu-burger.png';
import upload from '../assets/upload.png';
import Searchbar from './Searchbar';

import './Navbar.sass'

const Navbar = ()  => {
    return <>
        <div className='Navbar'>
            <img src={burger} alt='menu burger' className='logo'></img>
            <img src={logo} alt='agora logo' className='logo'></img>
            <Searchbar className='logo'></Searchbar>
            <img src={upload} alt='upload logo' className='logo'></img>
        </div>
    </>
}

export default Navbar;