import { ReviewCard } from "@/components/cards/ReviewCard"
import { Badge, Stack, Typography } from "@mui/material"
import { BaseEmptySection } from "../empty/BaseEmptySection"

type reviewForMeSectionProp = {
  countReviewer: number
  rating: number
  reviews: any
}

export const ReviewForMeSection: React.FC<reviewForMeSectionProp> = ({
  countReviewer = 0,
  rating = 0,
  reviews = [],
}) => {
  return (
    <Stack direction={"column"}>
      <Stack>
        <Typography fontWeight={"bold"}>
          Review From Buyer{" "}
          <Badge color="secondary" badgeContent={rating} sx={{ mx: 3 }} /> (
          {countReviewer} Reviewer)
        </Typography>
      </Stack>

      {reviews?.length < 1 ? (
        <BaseEmptySection />
      ) : (
        <Stack
          direction={"row"}
          spacing={2}
          overflow={"auto"}
          width={"100%"}
          paddingY={3}
        >
          {reviews?.map((review: any, idx: number) => (
            <ReviewCard key={idx} data={review} />
          ))}
        </Stack>
      )}
    </Stack>
  )
}
