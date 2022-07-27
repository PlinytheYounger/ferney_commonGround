import Header from '../Header/HeaderContainer';
import Footer from '../Footer/FooterContainer';
import Carousel from './Carousel';
import homePageOne from '../../images/homePage1.JPG';
import homePageTwo from '../../images/homePage2.jpg';


import './homecontainer.css';

const HomeContainer = () => {
    return (
        <div className="home-container-div">
            <Header />
            <main className="container">
                <Carousel/>
                <div className="title-statement">
                    <h1 >Family-friendly pick your own blueberries in Willis, Virginia</h1>
                    <div className="text-box">
                        <h4>Our small family farm provides visitors an entirely unique agritourism experience. Together with our pick-your-own berry farm, Ferney CommonGround is meant to provoke awe of nature and reinforce the deep-rooted importance of science, community, and play throughout our lives.</h4>
                    </div>
                </div>
                <div className="home-info-container">
                    <div className="home-image1">
                        <img src={homePageOne} alt="view of the farm from the top of the playgarden" className="home-image1-img"></img>
                    </div>
                    <div className="home-image2">
                        <img src={homePageTwo} alt="unique and colorful birdhouses in a row" className="home-image2-img"></img>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
};

export default HomeContainer;
