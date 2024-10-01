"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";


// Custom arrow components
function NextArrow({ onClick }) {
  return (
    <div
      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-white  rounded-full p-2 cursor-pointer z-10"
      onClick={onClick}
    >
      <Image
        src="/assets/Images/icons/nextArrow.svg"
        alt="logo"
        height={16}
        width={16}
      />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-white  rounded-full p-2 cursor-pointer z-10"
      onClick={onClick}
    >
      <Image
        src="/assets/Images/icons/previousArrow.svg"
        alt="logo"
        height={16}
        width={16}
      />
    </div>
  );
}

function EventSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, 
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: "slider-custom h-full",
  };

  return (
    <section className="w-full lg:w-1/2 rounded-sm overflow-hidden mx-auto">
      <div className="relative w-full h-full overflow-hidden">
        <Slider {...settings}>
          <div className="slide-item relative w-full h-[350px]">
            {/* Dark overlay  to make text pop on image*/}
            <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

            <Image
              src="/assets/Images/temp/slide1.svg"
              alt="Slide 1"
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-10  text-white z-20 w-full px-6">
              <p className="text-xs font-semibold mb-4">
                Latest News & Updates
              </p>
              <p className="text-xs font-normal w-[96%] ">
                Turpis interdum nunc varius ornare dignissim pretium. Massa
                ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat.
                Fringilla purus, erat fringilla tincidunt quisque non.
                Pellentesque in ut tellus.
              </p>
            </div>
          </div>

          <div className="slide-item relative w-full h-[350px]">
            {/* Dark overlay  to make text pop on image*/}
            <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

            <Image
              src="/assets/Images/temp/slide2.svg"
              alt="Slide 1"
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-10  text-white z-20 w-full px-6">
              <p className="text-xs font-semibold mb-4">
                Latest News & Updates
              </p>
              <p className="text-xs font-normal w-[96%] ">
                Turpis interdum nunc varius ornare dignissim pretium. Massa
                ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat.
                Fringilla purus, erat fringilla tincidunt quisque non.
                Pellentesque in ut tellus.
              </p>
            </div>
          </div>
          <div className="slide-item relative w-full h-[350px]">
            {/* Dark overlay  to make text pop on image*/}
            <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

            <Image
              src="/assets/Images/temp/slide3.svg"
              alt="Slide 1"
              layout="fill"
              objectFit="cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-10  text-white z-20 w-full px-6">
              <p className="text-xs font-semibold mb-4">
                Latest News & Updates
              </p>
              <p className="text-xs font-normal w-[96%] ">
                Turpis interdum nunc varius ornare dignissim pretium. Massa
                ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat.
                Fringilla purus, erat fringilla tincidunt quisque non.
                Pellentesque in ut tellus.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default EventSlider;
