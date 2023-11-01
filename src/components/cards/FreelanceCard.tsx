import Image from "next/image"
import { styled } from "@mui/material/styles"
import {
  Typography,
  Box,
  CardMedia,
  Avatar,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { Star } from "@mui/icons-material"
import { FreelanceProduct } from "@/types"

interface FrelanceCardProps {
  item: FreelanceProduct
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

const FrelanceCard: React.FC<FrelanceCardProps> = ({ item }) => {
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
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "20px",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          {item?.product_name}
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",

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
              gap: "6px",
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
              }}
            >
              {item?.name_user}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Star
              sx={{
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

export default FrelanceCard
