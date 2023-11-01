import { ListingCard } from "@/components/cards/ListingCard"
import { Button, Stack, Typography } from "@mui/material"
import { useRouter } from "next/router"
import { AiFillPlusCircle } from "react-icons/ai"

type myListingSectionProp = {
  isEdit: boolean
  data: any
}

export const MyListingSection: React.FC<myListingSectionProp> = ({
  data = [],
  isEdit = false,
}) => {
  const router = useRouter()

  return (
    <Stack direction={"column"}>
      <Stack
        alignItems={{ xs: "start", md: "center" }}
        justifyContent={"space-between"}
        direction={{ xs: "column", sm: "row" }}
      >
        <Typography fontWeight={"bold"}>My Listing(s)</Typography>
        {isEdit ? null : (
          <Button
            variant="contained"
            startIcon={<AiFillPlusCircle />}
            onClick={() => router.push("/member/post_skill")}
          >
            Post Your Service
          </Button>
        )}
      </Stack>
      {data?.length > 0 ? (
        <Stack
          direction={"row"}
          spacing={2}
          overflow={"auto"}
          width={"100%"}
          paddingY={3}
        >
          {data?.map((item: any, idx: number) => (
            <ListingCard key={idx} data={item} />
          ))}
        </Stack>
      ) : (
        <span>nothing here.</span>
      )}
    </Stack>
  )
}
