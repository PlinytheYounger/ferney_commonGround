import React, {useState} from 'react';
import './carousel.css';
import { images } from '../Helpers/CarouselData';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Carousel() {

    const [currImg, setCurrImg] = useState(0);

    function handleCarouselClick(evt) {
        if(evt.target.className === 'left') {
            if(currImg === 0) {
                setCurrImg(images.length - 1);
            } else {
                setCurrImg(currImg - 1);
            }
        }
        else if (evt.target.className === 'right') {
            if(currImg === images.length - 1) {
                setCurrImg(0);
            } else {
                setCurrImg(currImg + 1);
            }
        }
    }

    return (
        <div className="carousel">
            <div className="carouselInner" 
                style={
                    { 
                        backgroundImage: `url(${images[currImg].img})`, 
                        backgroundRepeat: 'no-repeat', 
                        backgroundSize: 'cover'
                    }}>
                <div className="left" onClick={handleCarouselClick}>
                    <ArrowBackIosIcon/>
                </div>
                <div className="center">
                </div>
                <div className="right" onClick={handleCarouselClick}>
                    <ArrowForwardIosIcon/>
                </div>
            </div>
        </div>
    )
}

export default Carousel;

// () => {
//     currImg > 0 && setCurrImg(currImg - 1)
// }