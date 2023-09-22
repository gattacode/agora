import './Searchbar.sass'
import searchbutton from '../assets/search.png'

const Searchbar = ()  => {
    return <>
        <div className='Searchbar'>
        <img src={searchbutton} alt='search button' className='logo'></img>
        </div>
    </>
}

export default Searchbar;