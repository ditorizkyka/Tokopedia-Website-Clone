/* eslint-disable react/prop-types */

import Slider from 'react-slick';
// import Card from './CARDTEST';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainCardProduct from './MainCard';

const CarouselTest = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const cards = [
        { title: 'Card 1', content: 'This is the content of card 1.' },
        { title: 'Card 2', content: 'This is the content of card 2.' },
        { title: 'Card 3', content: 'This is the content of card 3.' },
        { title: 'Card 4', content: 'This is the content of card 4.' },
        { title: 'Card 5', content: 'This is the content of card 5.' },
        { title: 'Card 6', content: 'This is the content of card 1.' },
        { title: 'Card 7', content: 'This is the content of card 2.' },
        { title: 'Card 8', content: 'This is the content of card 3.' },
        { title: 'Card 9', content: 'This is the content of card 4.' },
        { title: 'Card 10', content: 'This is the content of card 5.' },
    ];

    return (
        <div className="w-full mt-6  ">
            <Slider {...settings}>
                {cards.map((card, index) => (
                    <MainCardProduct key={index} title={card.title} content={card.content}></MainCardProduct>
                    // <Card key={index} title={card.title} content={card.content} />
                ))}
            </Slider>
        </div>
    );
};

export default CarouselTest;

const PrevArrow = ({ onClick }) => {
    return (
        <div
            className="absolute top-1/2 left-0 transform -translate-y-1/2 p-1 bg-gray-100 rounded-full cursor-pointer z-10"
            onClick={onClick}
        >
            <svg className="w-5 h-5 text-grayDark-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
        </div>
    );
};
const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 right-0 transform -translate-y-1/2 p-1 bg-gray-100 rounded-full cursor-pointer"
            onClick={onClick}
        >
            <svg className="w-5 h-5 text-grayDark-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
        </div>
    );
};


