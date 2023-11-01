import { Container } from "@mui/material"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import SwiperCore, { Pagination, Navigation } from "swiper"
import { SetBanner } from "@/types"
import { Close } from "@mui/icons-material"

SwiperCore.use([Pagination, Navigation])

const Banner: React.FC<SetBanner> = ({ setBanner }) => {
  return (
    <Container style={{ position: "relative", padding: "0" }}>
      <Close
        sx={{
          position: "absolute",
          display: "flex",
          top: "8px",
          right: "12px",
          zIndex: 2,
          cursor: "pointer",
          fontSize: { lg: "48px", md: "36px", xs: "24px" },
          "&:hover": {
            color: "pink",
          },
        }}
        onClick={() => setBanner(false)}
      />
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {Array.from(Array(3)).map((item: any, index: number) => (
          <SwiperSlide key={index}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/banana.jpeg"
              alt="banana"
              style={{
                cursor: "pointer",
                // objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
              // width={1000}
              // height={1000}
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default Banner
