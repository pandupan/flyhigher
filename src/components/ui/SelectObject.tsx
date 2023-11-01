import { styled } from "@mui/material/styles"
import {
  InputLabel,
  FormControl,
  Select as MuiSelect,
  SelectProps,
  InputBase,
  MenuItem,
} from "@mui/material"

const Input = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 20,
    backgroundColor: "#090909",
    overflow: "hidden",
    textOverFlow: "ellipsis",
    whiteSpace: "nowrap",
    padding: "0 72px 0 8px !important",
    color: "#898989",
  },
  "& svg": {
    fill: "#898989",
  },
}))

type OptionsType = {
  city_id: number
  city_name: string
}

type Props = SelectProps & {
  label?: string
  emptyOption?: boolean
  emptyOptionValue?: string
  options: any
  valueKey: string
  labelKey: string
}

export default function SelectObject({
  label,
  options,
  valueKey,
  labelKey,
  emptyOption,
  emptyOptionValue,
  ...props
}: Props) {  
  return (
    <FormControl sx={{ m: 1 }} variant="standard">
      {label && (
        <InputLabel id="demo-customized-select-label">{label}</InputLabel>
      )}
      <MuiSelect
        {...props}
        input={<Input />}
        MenuProps={{
          sx: {
            "& ul": {
              backgroundColor: "#090909",
              color: "#ffffff",
              "& li": {
                fontSize: 14,
              },
            },
          },
        }}
      >
        {!emptyOption ?null: (
          <MenuItem value="" disabled>
            <em>{emptyOptionValue}</em>
          </MenuItem>
        )}
        {options?.length > 0
          ? options?.map((option: OptionsType, i:number) => (
              <MenuItem key={i} value={option}>
                {option[labelKey]}
              </MenuItem>
            ))
          : null}
      </MuiSelect>
    </FormControl>
  )
}
