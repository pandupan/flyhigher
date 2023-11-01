import { UpdateEmailPhoneForm } from "@/components/forms/UpdateEmailPhoneForm"
import { UpdatePasswordForm } from "@/components/forms/UpdatePasswordForm"
import { Button, Stack } from "@mui/material"
import { VerifyInfoSection } from "./VerifyInfoSection"
import { UpdateImageProfileForm } from "@/components/forms/UpdateImageProfileForm"

const imageStyle = {
  width: "100%",
  height: "100%",
  maxWidth: "200px",
  maxHeight: "200px",
  borderRadius: "9999px",
  margin: "0 auto",
  padding: "15px",
}

type profileSectionProp = {
  data: any
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  phone: string
  setPhone: React.Dispatch<React.SetStateAction<string>>
  isEdit: boolean
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>
  image: boolean
  setImage: React.Dispatch<React.SetStateAction<any>>
  setMessage: React.Dispatch<React.SetStateAction<string>>
  setOpenSuccess: React.Dispatch<React.SetStateAction<boolean>>
  setOpenError: React.Dispatch<React.SetStateAction<boolean>>
}

export const ProfileSection: React.FC<profileSectionProp> = ({
  data = null,
  email,
  phone,
  setEmail,
  setPhone,
  isEdit,
  setIsEdit,
  image,
  setImage,
  setMessage,
  setOpenSuccess,
  setOpenError,
}) => {
  return (
    <Stack spacing={2} direction={"column"}>
      {isEdit ? null : (
        <Button
          color="secondary"
          variant="contained"
          onClick={() => setIsEdit(() => true)}
        >
          Edit
        </Button>
      )}
      {!isEdit ? (
        <>
          <img
            src={
              data?.image ||
              `https://api.dicebear.com/6.x/initials/svg?seed=${
                data?.name || "avatar"
              }`
            }
            alt="your profile image"
            style={imageStyle}
          />
          <VerifyInfoSection setIsEdit={setIsEdit} />
        </>
      ) : (
        <>
          <UpdateImageProfileForm image={data?.image} setImage={setImage} />
          <UpdateEmailPhoneForm
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
          />
          <UpdatePasswordForm
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            setMessage={setMessage}
            setOpenSuccess={setOpenSuccess}
            setOpenError={setOpenError}
          />
        </>
      )}
    </Stack>
  )
}
