import { Box } from "@mui/material"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const LoginSlider = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 2000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  }

  return (
    <Slider {...settings}>
      <Box height="100vh">
        <img src="/img/slider/1.png" height="100%" />
      </Box>
      <Box height="100vh">
        <img src="/img/slider/2.png" />
      </Box>
      <Box height="100vh">
        <img src="/img/slider/3.png" />
      </Box>
    </Slider>
  )
}

export default LoginSlider
