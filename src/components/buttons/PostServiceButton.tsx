import Link from "next/link"
import { ButtonBase, Typography } from "@mui/material"
import { AddCircle } from "@mui/icons-material"
import { LinkProps } from "@/types"

const PostServiceButton = () => {
  return (
    <Link href="/member/post_listing" style={{ color: "white" }}>
      <ButtonBase
        sx={{
          backgroundColor: "#0fd5c1",
          borderRadius: "16px",
          height: "32px",
          fontSize: "16px",
          padding: "16px",
          border: "3px solid #0fd5c1",
          "&:hover": {
            border: "3px solid #fff",
            transition: "all 0.3s ease",
          },
        }}
      >
        <AddCircle
          sx={{
            width: "15px",
            marginRight: "6px",
            letterSpacing: "2px",
            textAlign: "center",
          }}
        />
        <Typography
          sx={{
            fontSize: "14px",
            letterSpacing: "1px",
          }}
        >
          Post Your Service
        </Typography>
      </ButtonBase>
    </Link>
  )
}

export default PostServiceButton
