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
  [key: string]: number | string
}

type Props = SelectProps & {
  label?: string
  emptyOption?: boolean
  emptyOptionValue?: any
  emptyOptionLabel?: string
  options: any
  valueKey?: string
  labelKey: string
  isObject?: boolean
}

export default function Select({
  label,
  options,
  valueKey,
  labelKey,
  emptyOption,
  emptyOptionValue,
  emptyOptionLabel,
  isObject = false,
  ...props
}: Props) {
  return (
    <FormControl sx={{ m: 1 }} variant="standard">
      {label && (
        <InputLabel id="demo-customized-select-label">{label}</InputLabel>
      )}
      <MuiSelect
        {...props}
        value={props.value}
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
        {emptyOption && (
          <MenuItem value={emptyOptionValue} disabled>
            <em>{emptyOptionLabel}</em>
          </MenuItem>
        )}
        {options?.length > 0
          ? options?.map((option: any, i: number) => (
              <MenuItem
                key={i}
                value={
                  valueKey
                    ? option[valueKey as keyof OptionsType]
                    : isObject
                    ? JSON.stringify(option)
                    : option
                }
              >
                {option[labelKey as keyof OptionsType]}
              </MenuItem>
            ))
          : null}
      </MuiSelect>
    </FormControl>
  )
}
