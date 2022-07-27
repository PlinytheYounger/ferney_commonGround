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
                            <h4 className="h4-berry">PRICES (Cash or Zelle Only)</h4>
                                <p className="p-berry"><b>Blueberries:</b><i> Pick Your Own:</i> $4.50/pound | <i>Ready Picked:</i> $4/pint </p>
                            <h4 className="h4-berry">PICKING SCHEDULE</h4>
                                <p className="p-berry"> <b>Evening Pick:</b> 5pm - sunset.</p>
                                <p><i>*Midday berry picking is closed due to heat which makes berries and people turn to mush</i></p>
                            <h4 className="h4-berry">BERRY PICKING GUIDELINES</h4>
                                <ol>
                                    <li>
                                        <p className="p-berry">Check-in at the market before berrypicking for a container and directions.</p>
                                    </li>
                                    <li>
                                        <p className="p-berry">No dogs - no exceptions.</p>
                                    </li>
                                    <li>
                                        <p className="p-berry">Leave the green berries. You won’t want to eat them and they will not ripen off the bush.</p>
                                    </li> 
                                </ol>
                            <h4 className="h4-berry">RECOMMENDATIONS</h4>
                                <ol>
                                    <li>
                                        <p className="p-berry">Bring a cooler to store berries on you way home.</p>
                                    </li>
                                    <li>
                                        <p className="p-berry">Do not wash berries until you want to eat them. We do not apply sprays of any kind - often the frozen berries I use in smoothies go right in with all their natural glory. ;)</p>
                                    </li>
                                </ol>
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
