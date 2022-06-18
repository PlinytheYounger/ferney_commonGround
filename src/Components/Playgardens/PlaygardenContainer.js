import Header from '../Header/HeaderContainer';
import Footer from '../Footer/FooterContainer';
import './playgardenContainer.css';
import playgardenImg1 from '../../images/Playgarden1.JPEG';
import playgardenImg2 from '../../images/Playgarden2.JPEG';
import playgardenImg3 from '../../images/Playgarden3.JPG';
import playgardenImg4 from '../../images/Playgarden4.JPEG';

const PlaygardenContainer = () => {
    return (
        
        <div>
            <Header />
            <div className="container-div">
                <div className="title">
                    <h1>Playgardens</h1>     
                </div>
                <div clasName="playgardens-page-container">

                    <div className="first-container">
                        <div className="about-the-playgardens">
                            <h4>About the Playgardens</h4>
                            <p>Our playgardens are carefully created to encourage exploration and immersive hands-on learning for visitors of all ages. We provide a challenging and stimulating natural playground as well as a welcoming, casual space for adults to gather and relax.</p>
                            <p>All of the play materials are intended to be touched and manipulated. Please be prepared for your child to get dirty and wet. Before you leave, visit our mud-washing station to prevent taking too much mud home with you!</p>
                        </div>
                        <div className="playgarden-img2">
                            <img src={playgardenImg2} alt=""></img>
                        </div>
                    </div>

                    <div className="second-container">
                        <div className="playgarden-img1">
                            <img src={playgardenImg1} alt=""></img>
                        </div>
                        <div className="space-attributes">
                            <h4>The space includes:</h4>
                            <ul>
                                <li>20’ Hillside slide and tunnel</li>
                                <li>Log climbing structures</li>
                                <li>Climbing wall</li>
                                <li>Stumps & boulders</li>
                                <li>Winding secret-garden paths of flowers, fruits, and vegetable gardens with rainwater irrigation</li>
                                <li>Risky Creek – a muddy bog & wildlife habitat with a wobble bridge</li>
                                <li>Slingshot battleground</li>
                                <li>Mud kitchens and sandbox</li>
                                <li>Waterplay with hand pump and log sluiceways</li>
                                <li>Forts & teepees</li>
                                <li>Outdoor classroom</li>
                                <li>Tiny Town Market & picnic tables</li>
                            </ul>
                        </div>
                    </div>

                    <div className="guidelines">
                        <div className="guidelines">
                            <h4>Guidelines for the Playgardens:</h4>
                            <p>The playgardens are a part of Ferney CommonGround, guests who wish to visit must show a valid membership card or pay the daily admission rates.
                            </p>
                            <p>In an effort to maintain the natural habitat, please be gentle with any bugs, animals, or plants found on the property.</p>
                            <p>The playgardens are intended for self-led family/group experiences. Accompanying adults are solely responsible for their children and must be present at all times. Staff will be available occasionally to provide special programming activities, or to assist with visitor questions.</p>
                            <p>We encourage visitors to enjoy their snacks and lunches at our outdoor tables, but we ask that you please respect the space by discarding all trash in the proper receptacles.</p>
                            <p>There are no restrooms in the outdoor space, please visit the port-a-potty located next to parking.
    Observe all posted signs as they are there to guide and inform you during your visit.</p>
                        </div>
                    </div>
                    <div className="last-container">
                        <div className="playgarden-img3">
                            <img src={playgardenImg3} alt=""></img>
                        </div>
                        <div className="playgarden-img4">
                            <img src={playgardenImg4} alt=""></img>
                        </div>
                    </div>

                </div>
            </div>
            
            <Footer />
        </div>
        
    )
};

export default PlaygardenContainer;