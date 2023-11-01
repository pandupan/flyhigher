import Image from "next/image"
import { styled } from "@mui/material/styles"
import {
  Typography,
  Box,
  CardMedia,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { Star, CalendarToday, ArrowForward } from "@mui/icons-material"
import { JastipProduct } from "@/types"

interface JastipCardProps {
  item: JastipProduct
}

const ProductBox = styled(Box)({
  "&:hover": {
    opacity: 1,
    borderRadius: "0%",
    transform: "scale(1.05)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  transition: "transform 0.3s ease",
})

const JastipCard: React.FC<JastipCardProps> = ({ item }) => {
  const theme = useTheme()
  const isMobileView = useMediaQuery(theme.breakpoints.down("md"))
  const isTabletView = useMediaQuery(theme.breakpoints.down("lg"))

  return (
    <ProductBox sx={{ marginBottom: "16px" }} justifyContent="center">
      <CardMedia
        component="img"
        image={item?.image}
        alt={item?.product_name}
        loading="lazy"
        sx={{
          borderRadius: !isTabletView ? "6px" : "16px",
          width: isMobileView ? "100%" : isTabletView ? "100%" : "260px",
          height: isMobileView ? "200px" : isTabletView ? "270px" : "270px",
          objectFit: "cover",
          marginBottom: "16px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <CalendarToday
            sx={{
              fontSize: "16px",
              color: "#03dac6",
              marginBottom: "2px",
            }}
          />
          <Typography
            sx={{
              fontSize: "13px",
              color: "#03dac6",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
              width: "100%",
            }}
          >
            {item?.date}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "2px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "16px",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {item?.from_country}
          </Typography>
          <Image
            src={item?.image_from_country}
            alt={item?.from_country}
            style={{
              borderRadius: "6px",
              objectFit: "contain",
            }}
            width={20}
            height={20}
            loading="lazy"
          />
          <ArrowForward
            sx={{
              fontSize: "16px",
            }}
          />
          <Image
            src={item?.image_to_country}
            alt={item?.to_country}
            style={{
              borderRadius: "6px",
              objectFit: "contain",
            }}
            width={20}
            height={20}
            loading="lazy"
          />
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "16px",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {item?.to_country}
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: "16px",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
            maxWidth: "100%",
            color: "#03dac6",
          }}
        >
          {item?.low_price} - {item?.high_price}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "justifyContent",
              gap: "6px",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
              maxWidth: "100%",
            }}
          >
            <Avatar
              sx={{ width: 30, height: 30 }}
              alt={item?.name_user || "user-avatar"}
              src={item?.image_user}
            />
            <Typography
              sx={{
                fontSize: "13px",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                width: "160px",
              }}
            >
              {item?.name_user}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Star
              sx={{
                width: "16px",
                marginRight: "6px",
                letterSpacing: "2px",
                textAlign: "center",
                fill: "#f8d62b",
              }}
            />
            <Typography fontSize={13}>{item?.avg_rating}</Typography>
          </Box>
        </Box>
      </Box>
    </ProductBox>
  )
}

export default JastipCard
