import logo from '../../assets/images/logo.png';
import searchIcon from '../../assets/images/search.png';
import { CartWidget } from '../CartWidget/CartWidget';
import { NavBar } from '../NavBar/NavBar';


const Header =()=>{
    return (
        <div class='header'>
            <div class='header__top'>
                <img src={logo} className='logo' alt='logo'></img>
                <div className='search-product-input-container'>
                    <img src={searchIcon} className='searchIcon'></img>
                    <input type='text' className='search-product-input' placeholder='Buscar producto...'></input>
                </div>
                <CartWidget />
            </div>
            <NavBar />
        </div>
    )
}

export { Header };