import DropdownItem from './DropdownItem';
import './headercontainer.css';

function DropdownMenu() {

    return(
        <div className="dropdown">
                <DropdownItem name="Home" link="/">Home</DropdownItem>
                <DropdownItem name="Berry Picking" link="/berrypicking">Berry Picking</DropdownItem>
                <DropdownItem name="PlayGardens" link="/playgardens">Play Gardens</DropdownItem>
                <DropdownItem name="About Us" link="/aboutus">About Us</DropdownItem>
        </div>
    )
}

export default DropdownMenu;