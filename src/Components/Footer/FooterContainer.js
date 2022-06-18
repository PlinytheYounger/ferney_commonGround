import './footercontainer.css';
import fblogo from '../../images/fb-logo-ferney-farms.png';
import instalogo from '../../images/insta-logo-ferney-farms.png';
import {Link} from 'react-router-dom';


const FooterContainer = () => {
    return(
        <footer>
            <div className="menu-items">
                <div className="">
                    <Link className="btn" to="/berrypicking">
                        <h3>Berry Picking</h3>
                    </Link>
                </div>
                <div className="">
                    <Link clasNames="btn" to="/playgardens">
                        <h3>The Playgardens</h3>
                    </Link>
                </div>
                <div className="">
                    <Link className="btn" to="/aboutus">
                        <h3>About Us</h3>
                    </Link>
                </div>
                <div className="">
                    <Link className="btn" to="/contactboot">
                        <h3>Contact</h3>
                    </Link>
                </div>
            </div>
            <div className="row" id="line"></div>
            <div className="social-icons">
                <div className="fb-logo">
                    <img src={fblogo} alt="facebook page link" class="fb-logo"></img>
                </div>
                <div className="insta-logo">
                    <img src={instalogo} alt="instagram page link" class="insta-logo"></img>
                </div>
                <div className="copyright">
                    <p>&copy;Ferney CommonGround 2022</p>
                </div>
            </div>
        </footer>
    )
}

export default FooterContainer;