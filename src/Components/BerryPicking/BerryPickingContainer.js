import Header from '../Header/HeaderContainer';
import Footer from '../Footer/FooterContainer';
import berryPhoto1 from '../../images/BerryPicking.JPG';
import berryPhoto3 from '../../images/BerryPicking3.JPEG';
import './berryPickingContainer.css';

const BerryPickingContainer = () => {
    return (
        <div>
            <Header />
            <div className="berry-picking-container">
                <div className="title">
                    <h2>Berry Picking</h2>
                </div>
                <div className="berry-container">
                    <div className="first-container">
                        <div className="prices-info">
                            <h4 className="h4-berry">PRICES</h4>
                                <p className="p-berry">More info to come!</p>
                            <h4 className="h4-berry">PICKING SCHEDULE</h4>
                                <p className="p-berry">More info to come!</p>
                            <h4 className="h4-berry">BERRY PICKING GUIDELINES</h4>
                                <p className="p-berry">More info to come!</p>
                        </div>
                        <div className="pink-rose">
                            <img className="berries" src={berryPhoto1} alt="Beautiful pink rose"></img>
                        </div>
                    </div>
                    <div className="blueberry-container">
                        <div className="blueberry-image">
                            <img className="berries" src={berryPhoto3} alt='Gardens with berries and other plants'></img>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default BerryPickingContainer;