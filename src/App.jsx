import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 7.5,
    slidesToScroll: 7.,
    afterChange: (current) => {
      setCurrentIndex(current);
    },
    className:"mySlider p-4"
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="w-[1300px] h-[300px] border border-red-600 slider relative" >
      <Slider {...settings}>
        {Array.from({length: 18}).map((item, index) => (
          <div key={item}>
              <img src={`../src/assets/img${index}.jpeg`} alt=""
              className={`w-[151px] h-[203px] mx-4 rounded-xl z-[999] mt-5  ${
                index >= currentIndex + 7 ? "blur-image" : ""
              } `}/>   
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default App;
