"use client"

import { Box, Button, Stack } from "@mui/material"
import { BsPlus, BsTools } from "react-icons/bs"
import { ServiceFormCard } from "../cards/ServiceFormCard"

type serviceListFormSectionProp = {
  onAddService: any
  onChangeService: any
  onRemoveService: any
  titles: string[]
  images: File[]
  prices: number[]
  amounts: number[]
}

export const ServiceListFormSection: React.FC<serviceListFormSectionProp> = ({
  onAddService,
  onChangeService,
  onRemoveService,
  titles = [],
  images = [],
  prices = [],
  amounts = [],
}) => {
  return (
    <Stack spacing={1}>
      <Box sx={{ width: "100%" }}>
        <Stack
          spacing={2}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack spacing={2} direction={"row"} alignItems={"center"}>
            <BsTools />
            <h3>Service List</h3>
          </Stack>
          <Button
            variant="contained"
            color="primary"
            startIcon={<BsPlus />}
            onClick={onAddService}
          >
            Add Services
          </Button>
        </Stack>
      </Box>
      <Box sx={{ width: "100%", overflow: "auto" }}>
        <Stack spacing={4} direction={"row"} sx={{ padding: "30px 0" }}>
          {titles?.map((title, idx) => (
            <ServiceFormCard
              key={idx}
              index={idx}
              title={title}
              image={images[idx]}
              price={prices[idx]}
              amount={amounts[idx]}
              onRemove={() => onRemoveService(idx)}
              onChangeService={onChangeService}
            />
          ))}
        </Stack>
      </Box>
    </Stack>
  )
}
