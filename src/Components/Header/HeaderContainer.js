import './headercontainer.css';
import FCGIcon from '../../images/FCGIcon.png';
import NavItem from './NavItem';
import DropdownMenu from './DropdownMenu';
import menuSvg from '../../images/menu_svg.svg';

const HeaderContainer = () => {

    return(
        <header>
            <div className="navbar">
                <div className="logo-menu">
                    <div className='logo-image'>
                        <img src={FCGIcon} alt='ferney farms logo'></img>
                    </div>
                    <div className="header-line"></div>
                    <div className="navbar-brand">
                        <h2>Ferney CommonGround.</h2>
                    </div>
                </div>
                <div className="header-menu">
                    <NavItem image={menuSvg}>
                        <DropdownMenu />
                    </NavItem>
                </div>
            </div>
        </header>
    )
}

export default HeaderContainer;