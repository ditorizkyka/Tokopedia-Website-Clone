import { Carousel } from "@material-tailwind/react";
import React from "react";

const CarouselCustomKategori = () => {
    // Daftar gambar untuk setiap slide
    const images = [
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    ];
  
    // Daftar data card untuk setiap slide
    const cardsData = [
      [
        { title: "Card 1 Slide 1", description: "Description for Card 1" },
        { title: "Card 2 Slide 1", description: "Description for Card 2" },
        { title: "Card 3 Slide 1", description: "Description for Card 3" },
        { title: "Card 4 Slide 1", description: "Description for Card 4" },
      ],
      [
        { title: "Card 1 Slide 2", description: "Description for Card 1" },
        { title: "Card 2 Slide 2", description: "Description for Card 2" },
        { title: "Card 3 Slide 2", description: "Description for Card 3" },
        { title: "Card 4 Slide 2", description: "Description for Card 4" },
      ],
      [
        { title: "Card 1 Slide 3", description: "Description for Card 1" },
        { title: "Card 2 Slide 3", description: "Description for Card 2" },
        { title: "Card 3 Slide 3", description: "Description for Card 3" },
        { title: "Card 4 Slide 3", description: "Description for Card 4" },
      ],
    ];
  
    // State untuk aktifnya slide
    const [activeIndex, setActiveIndex] = React.useState(0);
  
    // Mengubah slide berikutnya
  
    return (
      <div className="flex "> {/* Wrapper untuk centering */}
        <Carousel
          
          className="rounded-xl "
          value={activeIndex}
          onChange={setActiveIndex}
        >
          {images.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              {cardsData[index].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-lg rounded-lg p-2 m-2 cursor-pointer"
                >
                  <h3 className="text-xl font-bold">{card.title}</h3>
                  <p className="font-appRegular text-md">{card.description}</p>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
  
        {/* Tombol Navigasi */}
        {/* <button
          className="absolute top-1/2 start-0 transform -translate-y-1/2 z-50 bg-white bg-opacity-50 p-2 rounded-full"
          onClick={prevSlide}
        >
          Prev
        </button>
        <button
          className="absolute top-1/2 end-0 transform -translate-y-1/2 z-50 bg-white bg-opacity-50 p-2 rounded-full"
          onClick={nextSlide}
        >
          Next
        </button> */}
      </div>
    );
  };
  
  export default CarouselCustomKategori;