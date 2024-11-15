import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { image1, image2, image3, image4, image5, image6, image7 } from "../assets";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ImagesSlider3 = () => {
  const ref = useRef(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const inView = useInView(ref, {
    once: true,
    threshold: 1,
  });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView && 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative pb-10">
      <button
        ref={navigationPrevRef}
        className="max-sm:hidden absolute -left-10 top-1/2 -translate-y-1/2 z-10 group"
      >
        <i className="fa-solid fa-chevron-left text-light-green-100 text-5xl group-hover:text-dark-blue-1 duration-300 transition-all"></i>
      </button>

      <button
        ref={navigationNextRef}
        className="max-sm:hidden absolute -right-10 top-1/2 -translate-y-1/2 z-10 group"
      >
        <i className="fa-solid fa-chevron-right text-light-green-100 text-5xl group-hover:text-dark-blue-1 duration-300 transition-all"></i>
      </button>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        className="h-full w-full relative"
        spaceBetween={5}
        slidesPerView={1}
        loop={true}
        speed={500}
        onSwiper={(swiper) => {
          // Override prevEl & nextEl now that refs are defined
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;

          // Re-init navigation
          swiper.navigation.destroy();
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        pagination={{
          clickable: true,
          el: ".swiper-custom-pagination",
          bulletClass: "swiper-custom-bullet",
          bulletActiveClass: "swiper-custom-bullet-active",
          renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {[image1, image2, image3, image5, image6, image7].map(
          (image, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center relative rounded-md border border-[#b1b1b166] overflow-hidden"
            >
              <img
                src={image}
                alt={`slide ${index + 1}`}
                className="block w-full h-full rounded-md select-none object-cover"
              />
            </SwiperSlide>
          )
        )}
      </Swiper>

      <div className="swiper-custom-pagination absolute bottom-0 z-10"></div>
    </motion.div>
  );
};

export default ImagesSlider3;
