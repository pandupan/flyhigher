import { Container, useMediaQuery, useTheme } from "@mui/material"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/free-mode"
import SwiperCore, { Pagination, Autoplay } from "swiper"
import { SetBanner } from "@/types"

SwiperCore.use([Pagination, Autoplay])

const Banner: React.FC<SetBanner> = ({ setBanner }) => {
  const theme = useTheme()
  const isMobileView = useMediaQuery(theme.breakpoints.down("lg"))
  return (
    <Container style={{ padding: "0" }}>
      <Swiper
        slidesPerView={isMobileView ? 1 : 3}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false, // Keep autoplay after interaction
        }}
      >
        {Array.from(Array(6)).map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <Image
              src="/banana.jpeg"
              alt="banana"
              style={{
                borderRadius: "16px",
                cursor: "pointer",
                width: isMobileView ? "100%" : "370px",
                height: isMobileView ? "auto" : "400px",
                objectFit: "cover",
              }}
              width={0}
              height={0}
              sizes="100vw"
              loading="lazy"
              onClick={() => setBanner(true)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default Banner
