// components/Slider.tsx
'use client'


import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import Image from 'next/image'

export default function Slider() {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      className="mySwiper swiper-slider carousel-slide-with-content"
    >
      <SwiperSlide>
        <div className="carousel-slide-with-content">
          <Image src="/1.jpg" alt="slide 1" width={800} height={400} style={{ width: '100%', height: 'auto' }} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel-slide-with-content">
          <Image src="/2.jpg" alt="slide 2" width={800} height={400} style={{ width: '100%', height: 'auto' }} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="carousel-slide-with-content">
          <Image src="/3.jpg" alt="slide 3" width={800} height={400} style={{ width: '100%', height: 'auto' }} />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
