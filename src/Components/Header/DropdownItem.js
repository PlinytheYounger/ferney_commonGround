import {Link} from 'react-router-dom';
import './headercontainer.css';


function DropdownItem(props) {
    return (
        <Link className="menu-item" type="button" to={props.link}>
        {props.name}
        </Link>
    )
}

export default DropdownItem;


        