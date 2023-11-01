import Link from "next/link"
import { ButtonBase, Typography, Box } from "@mui/material"
import { LinkProps } from "@/types"

const ShowMoreButton: React.FC<LinkProps> = ({ link }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href={link} style={{ color: "white" }}>
        <ButtonBase
          sx={{
            backgroundColor: "#090808",
            borderRadius: "8px",
            height: "32px",
            fontSize: "16px",
            padding: "16px 32px",
            border: "3px solid #090808",
            "&:hover": {
              border: "3px solid #fff",
              transition: "all 0.3s ease",
            },
          }}
        >
          <Typography>Show More</Typography>
        </ButtonBase>
      </Link>
    </Box>
  )
}

export default ShowMoreButton
