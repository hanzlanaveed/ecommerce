import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Footer from '../components/Footer';
import Banner1 from "../assets/banner1.webp";
import Banner2 from "../assets/banner2.webp";
import Banner3 from "../assets/banner3.PNG";
import Banner4 from "../assets/banner4.PNG";
import Banner5 from "../assets/banner5.PNG";


const Home = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await fetch('/data.json');
        const jsonData = await response.json();
        setBrands(jsonData);
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
    };
  
    fetchBrands();
  }, []);

  return (
    <div className="bg-white z-0">
      
      <div className="w-full h-[300px] sm:h-64 md:h-80 lg:h-[700px]">
        <Swiper
          pagination={{ clickable: true }}
          navigation={true} 
          autoplay={{
            delay: 3000,
            disableOnInteraction: false, 
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="w-full h-full"
        >
          <SwiperSlide>
            <div className="w-full h-full">
              <img
              src={Banner1}
                className="w-full h-full object-cover"
                alt="Slide 1"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full">
              <img
                src={Banner2}
                className="w-full h-full object-cover"
                alt="Slide 2"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full">
              <img
                src={Banner3}
                className="w-full h-full object-cover"
                alt="Slide 3"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full">
              <img
                src={Banner4}
                className="w-full h-full object-cover"
                alt="Slide 4"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full">
              <img
                src={Banner5}
                className="w-full h-full object-cover"
                alt="Slide 5"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      
      <h1 className="text-4xl font-bold text-center mt-10">
        B<span className="underline underline-offset-8 decoration-red-600">rand</span>s
      </h1>

      <div className="sm:hidden lg:flex mySwiperContainer w-full pb-8 px-4">
        <Swiper
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 99 },
            768: { slidesPerView: 1, spaceBetween: 99},
            1024: { slidesPerView: 1, spaceBetween: 99}, 
          }}
          pagination={{ type: 'fraction' }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper pb-16 pt-12 px-20"
        >
          {brands.reduce((parentSlides, brand, index) => {
            
            if (index % 3 === 0) {
              parentSlides.push([]);
            }

            const marginTopClass = index % 3 === 0 ? 'mt-0' : index % 3 === 1 ? 'mt-10' : 'mt-20';
            const currentParentSlide = parentSlides[parentSlides.length - 1];
            currentParentSlide.push(
              <div key={brand.key} className={`relative w-full h-[400px]  bg-gray-200 border-2 border-yellow-600 rounded-3xl transition hover:-translate-y-1 hover:scale-110 duration-150 ${marginTopClass}`}>
                <img
                  src={brand.image}
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                  alt={brand.name}
                />
                <a
                  href={brand.website}
                  className="absolute bottom-7 left-1/2 transform -translate-x-1/2 px-2 py-2  text-center text-yellow-600 text-xl w-80 border-2 border-yellow-600 rounded-lg hover:bg-yellow-600 hover:text-white hover:border-none"
                >
                  Click Me
                </a>
              </div>
            );

            return parentSlides;
          }, []).map((childSlides, index) => (
            <SwiperSlide key={index}>
              <div className="flex space-x-24">
                {childSlides}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      <div className="mySwiperContainer lg:hidden sm:flex w-full pb-8 px-4">
        <Swiper
          slidesPerView={1}  
          spaceBetween={30}  
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 100 },
            768: { slidesPerView: 2, spaceBetween: 100 }, 
            1024: { slidesPerView: 3, spaceBetween: 100}
          }}
          pagination={{ type: 'fraction' }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper pb-16 pt-12 sm:px-36 mx-4"
        >
          {brands.map((brand) => {
            return (
              <SwiperSlide key={brand.key}>
                <div className="relative w-full h-[300px] bg-gray-200 border-2 border-yellow-500 rounded-3xl transition hover:-translate-y-1 hover:scale-110 duration-150">
                  <img
                    src={brand.image}
                    className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                    alt={brand.name}
                  />
                  <a
                    href={brand.website}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-2 py-2 bg-white text-center text-yello-500 w-48 text-xl text-yellow-600 border-2 border-yellow-500 rounded-lg hover:bg-yellow-700"
                  >
                    Click Me
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>


      <Footer />
    </div>
  );
};

export default Home;
