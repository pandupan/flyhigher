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
  console.log(cities)

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
              value={JSON.stringify(location)}
              onChange={(e) => {
                setLocation(JSON.parse(e.target.value as any))
              }}
              fullWidth
              isObject={true}
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
