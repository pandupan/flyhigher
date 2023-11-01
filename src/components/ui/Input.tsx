import { InputBase, InputLabel, InputBaseProps, Stack } from "@mui/material"

type InputProps = InputBaseProps & {
  label?: string
}

export default function Input({ label, id, ...props }: InputProps) {
  return (
    <Stack spacing={1}>
      {Boolean(label) && (
        <InputLabel
          htmlFor={id}
          sx={{
            color: "rgba(255, 255, 255, 1)",
            fontSize: "inherit",
            fontFamily: "inherit",
            fontWeight: 500,
          }}
        >
          {label}
        </InputLabel>
      )}
      <InputBase
        id={id}
        fullWidth
        placeholder={label}
        sx={{
          padding: "0.25rem 1rem",
          borderRadius: "10em",
          backgroundColor: "rgba(255, 255, 255, 0.075)",
          color: "rgb(255, 255, 255)",
          fontSize: "0.875rem",
          "::placeholder": { color: "rgb(255, 255, 255)" },
          "&.Mui-focused": {
            outline: "2px solid #1976d2",
          },
        }}
        {...props}
      />
    </Stack>
  )
}
