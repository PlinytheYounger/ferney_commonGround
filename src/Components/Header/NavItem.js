import {useState} from 'react';
import './headercontainer.css';

function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className="menu-container">
                <img className="menu" alt="hamburger menu" onClick={() => setOpen(!open)} src={props.image}></img>
            </div>
            {open && props.children}
        </div>
    )
}

export default NavItem;