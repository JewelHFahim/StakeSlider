import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 7.5,
    slidesToScroll: 7,
    afterChange: (current) => {
      setCurrentIndex(current);
    },
    className: "mySlider p-4",
  };

  const handleNextClick = () => {
    const nextIndex = Math.min(currentIndex + 7, 17);
    if (sliderRef.current) {  sliderRef.current.slickNext() }
    setCurrentIndex(nextIndex);
  };

  // const handlePrevClick = () => {
  //   const prevIndex = Math.max(currentIndex - 7, 0);

  //   if (sliderRef.current) {
  //     sliderRef.current.slickPrev();
  //   }

  //   setCurrentIndex(prevIndex);
  // };

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="w-[1300px] h-[300px] border border-red-600 slider relative"
        onClick={handleNextClick}
      >
        <Slider {...settings} ref={sliderRef}>
          {Array.from({ length: 18 }).map((item, index) => (
            <div key={item}>
              <img
                src={`./assets/img${index}.jpeg`}
                alt=""
                className={`w-[151px] h-[203px] mx-4 rounded-xl z-[999] mt-5 ${
                  index >= currentIndex + 7 ? "blur-image" : ""
                } `}
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* <button
        className={`slick-arrow slick-prev ${
          currentIndex === 0 ? "slick-disabled" : ""
        }`}
        onClick={handlePrevClick}
      >
        Previous
      </button>
      <button
        className={`slick-arrow slick-next ${
          currentIndex >= 11 ? "slick-disabled" : ""
        }`}
        onClick={handleNextClick}
      >
        Next
      </button> */}
    </div>
  );
};

export default App;
