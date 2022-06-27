import Header from '../Header/HeaderContainer';
import Footer from '../Footer/FooterContainer';
import './aboutUsContainer.css';
import aboutUs1 from '../../images/AboutUs1.JPG';
import aboutUs2 from '../../images/AboutUs2.JPG';
// import aboutUs3 from '../../images/AboutUs3.JPEG';
import aboutUs4 from '../../images/AboutUs4.JPG';

const AboutUsContainer = () => {
    return (
        <>
        <Header />
        <div className="about-us-container">
            <div className="aboutUsTitle">
                <h1>About Us</h1>
            </div>
            <div className='our-story'>
                <div>
                    <h3><b>Ferney CommonGround</b> is a small family-owned berry farm and community destination located atop the Blue Ridge Plateau in Floyd, Virginia. We provide visitors a unique agritourism experience with imaginative natural playgrounds and gardens, seasonal pick-your-own berries, and a welcoming, casual space for people of all ages to gather and unwind. Come for the berries, run wild in the gardens, and stay into the golden hour among the flowers.</h3>

                    <h3><b>Address: </b>1825 Ferney Creek Road NW, Willis, VA 24380</h3>
                    <h3><b>Please Note: </b>All public operations are currently limited to Wednesday - Sunday Only</h3>
                    
                </div>
                <div>
                    <img src={aboutUs2} alt="orange and white cat on an old tire in front of a white fence"></img>
                </div>
            </div>

                <div className="additional-photos">
                    <div>
                        <img src={aboutUs4} alt="friend gathering around chess"></img>
                    </div>

                    <div>
                        <img src={aboutUs1} alt="greenhouse with plants"></img>
                    </div>
                </div>

            {/* <div className="mailing-list-button">
                <button className="btn">JOIN OUR MAILING LIST</button>
            </div> */}
        </div>
        <Footer />
        </>
    )
};

export default AboutUsContainer;