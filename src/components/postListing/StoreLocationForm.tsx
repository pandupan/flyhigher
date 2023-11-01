import { Stack, Typography } from "@mui/material"
import Select from "../ui/Select"
import { useQuery } from "react-query"
import { getLocationBisnis } from "@/api-services/postListingService"
import { LocationCity } from "@mui/icons-material"

export const StoreLocationForm: React.FC<{
  location: any
  setLocation: any
}> = ({ location, setLocation }) => {
  const {
    isLoading,
    error,
    data: cities,
  } = useQuery({
    queryKey: ["cityData"],
    queryFn: () => getLocationBisnis(),
  })

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={1}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1}
        alignItems={"center"}
      >
        <div>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <LocationCity />
            <Typography>Store Location:</Typography>
            <Select
              displayEmpty
              value={location}
              onChange={(e) => setLocation(e.target.value as string)}
              fullWidth
              options={cities?.data}
              labelKey="city_name"
              emptyOption={true}
              emptyOptionLabel="--Store Location--"
              emptyOptionValue={null}
            />
          </Stack>
        </div>
      </Stack>
    </Stack>
  )
}
