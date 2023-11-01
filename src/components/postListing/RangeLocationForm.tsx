import { Stack, Typography } from "@mui/material"
import Select from "../ui/Select"
import { useQuery } from "react-query"
import { getLocationJastip } from "@/api-services/postListingService"

export const RangeLocationForm: React.FC<{
  fromLocation: any
  setFromLocation: any
  toLocation: any
  setToLocation: any
}> = ({ fromLocation, setFromLocation, toLocation, setToLocation }) => {
  const {
    isLoading,
    error,
    data: locations,
  } = useQuery({
    queryKey: ["locationJastip"],
    queryFn: () => getLocationJastip(),
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
            <Select
              displayEmpty
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value as string)}
              fullWidth
              options={locations?.data}
              valueKey="id"
              labelKey="value"
              emptyOption={true}
              emptyOptionLabel="--Select Location--"
              emptyOptionValue=""
            />
            <Typography>To</Typography>
            <Select
              displayEmpty
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value as string)}
              fullWidth
              options={locations?.data}
              valueKey="id"
              labelKey="value"
              emptyOption={true}
              emptyOptionLabel="--Select Location--"
              emptyOptionValue=""
            />
          </Stack>
        </div>
      </Stack>
    </Stack>
  )
}
