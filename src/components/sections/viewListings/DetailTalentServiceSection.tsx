import { Grid, Stack } from "@mui/material"
import { AboutSellerSection } from "./AboutSellerSection"
import { ButtonActive, ButtonInActive } from "../../buttons/TalentButton"
import { BiUserPin } from "react-icons/bi"
import { CgFileDocument } from "react-icons/cg"
import { MdOutlineRateReview } from "react-icons/md"
import { ReviewCard } from "@/components/cards/ReviewCard"
import { useRouter } from "next/router"

export const DetailTalentServiceSection = () => {
  const router = useRouter()

  return (
    <Stack direction={"row"} paddingY={"30px"}>
      <Grid container spacing={0} gap={0}>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={4} textAlign={'center'}>
              <ButtonActive onClick={() => router.push("#whyMe")}>
                why me
              </ButtonActive>
            </Grid>
            <Grid item xs={12} sm={4} textAlign={'center'}>
              <ButtonInActive onClick={() => router.push("#description")}>
                description
              </ButtonInActive>
            </Grid>
            <Grid item xs={12} sm={4} textAlign={'center'}>
              <ButtonInActive onClick={() => router.push("#reviews")}>
                review
              </ButtonInActive>
            </Grid>
          </Grid>
          <Stack paddingY={"10px"}>
            <Stack
              id="whyMe"
              marginTop={"25px"}
              style={{
                scrollMarginTop: "100px",
              }}
            >
              <Stack direction={"row"} spacing={2} fontSize={"20px"}>
                <BiUserPin
                  className="text-white"
                  style={{
                    margin: "auto 0",
                  }}
                />
                <span className="text-white">Why Me</span>
              </Stack>
              <Stack marginTop={"10px"}>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
              </Stack>
            </Stack>

            <Stack
              id="description"
              marginTop={"25px"}
              style={{
                scrollMarginTop: "100px",
              }}
            >
              <Stack
                direction={"row"}
                spacing={2}
                fontSize={"20px"}
                color={"white"}
              >
                <CgFileDocument
                  style={{
                    margin: "auto 0",
                  }}
                />
                <span>Description</span>
              </Stack>

              <Stack marginTop={"10px"}>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
                <div>pengiriman cepat</div>
              </Stack>
            </Stack>

            <Stack
              id="reviews"
              marginTop={"25px"}
              style={{
                scrollMarginTop: "100px",
              }}
            >
              <Stack
                direction={"row"}
                spacing={2}
                fontSize={"20px"}
                color={"white"}
              >
                <MdOutlineRateReview
                  style={{
                    margin: "auto 0",
                  }}
                />
                <span>Reviews</span>
              </Stack>

              <Stack
                marginTop={"10px"}
                maxHeight={"200px"}
                overflow={"auto"}
                direction={"row"}
                spacing={2}
              >
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
                <ReviewCard />
              </Stack>
            </Stack>
          </Stack>
        </Grid>

        <Grid xs={12} sm={6}>
          <AboutSellerSection />
        </Grid>
      </Grid>
    </Stack>
  )
}
