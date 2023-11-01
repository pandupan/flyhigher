import { Alert, Grid, Snackbar, Stack } from "@mui/material"
import { UpdateProfileForm } from "../forms/UpdateProfileForm"
import { MyListingSection } from "../sections/profile/MyListingSection"
import { useQuery, useMutation, useQueryClient } from "react-query"
import { useEffect, useState } from "react"
import { ProfileSection } from "../sections/profile/ProfileSection"
import { ReviewForMeSection } from "../sections/profile/ReviewForMeSection"
import { getProfile, updateProfile } from "../../api-services/profileService"
import { NameAboutSection } from "../sections/profile/NameAboutSection"

export const ProfilePage: React.FC<{ userId: string }> = ({ userId }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [detail, setDetail] = useState<string>("")
  const [image, setImage] = useState<any>(null)
  const [message, setMessage] = useState<string>("")
  const [open, setOpen] = useState<boolean>(false)
  const [openError, setOpenError] = useState<boolean>(false)
  const queryClient = useQueryClient()

  const { isLoading, error, data } = useQuery({
    queryKey: ["profileData"],
    queryFn: () => getProfile(userId),
  })

  const mutation = useMutation((formData: any) => updateProfile(formData), {
    onSuccess: (response) => {
      console.log("sukses", response)

      setEmptyFields()
      fillInitData()
      setIsEdit(() => false)
      setMessage(() => "Success update profile data")
      setOpen(() => true)
      return queryClient.invalidateQueries({ queryKey: ["profileData"] })
    },
    onError: (error: any) => {
      console.log("error mutation", error?.response?.data?.message)

      setMessage(() => error?.response?.data?.message ?? "Something went wrong")
      setOpenError(() => true)
    },
  })

  const setEmptyFields = () => {
    setImage(() => null)
    setFirstName(() => "")
    setLastName(() => "")
    setEmail(() => "")
    setPhone(() => "")
    setDetail(() => "")
  }

  const handleUpdateProfile = async (e: MouseEvent) => {
    e.preventDefault()
    console.log("updating data profile...")
    let formData = new FormData()
    formData.append("email", email)
    formData.append("phone", phone)
    formData.append("first_name", firstName)
    formData.append("last_name", lastName)
    formData.append("detail_users", detail)
    if (image) {
      formData.append("image", image || null)
    }
    formData.append("id_user", userId)

    try {
      const resp = await mutation.mutateAsync(formData)
      console.log("hasil", resp)
    } catch (error) {
      console.log("gagal", error)
    }
  }

  const fillInitData = () => {
    setFirstName(() => data?.data?.first_name)
    setLastName(() => data?.data?.last_name)
    setEmail(() => data?.data?.email)
    setPhone(() => data?.data?.phone)
    setDetail(() => data?.data?.detail_users)
  }

  const handleClose = () => {
    setMessage(() => "")
    setOpen(() => false)
    setOpenError(() => false)
  }

  useEffect(() => {
    if (data) {
      fillInitData()
    }
  }, [data])

  return (
    <>
      <Grid container spacing={0} paddingY={5} width={"100%"}>
        <Grid item xs={12} md={4}>
          <ProfileSection
            data={data?.data}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            image={image}
            setImage={setImage}
            setMessage={setMessage}
            setOpenSuccess={setOpen}
            setOpenError={setOpenError}
          />
        </Grid>

        <Grid item xs={12} md={8} paddingLeft={{ xs: 0, md: 5 }}>
          <Stack spacing={2} direction={"column"} width={"100%"}>
            {!isEdit ? (
              <NameAboutSection
                name={data?.data?.name}
                about={data?.data?.detail_users}
                setIsEdit={setIsEdit}
              />
            ) : (
              <UpdateProfileForm
                onSubmit={handleUpdateProfile}
                firstName={firstName}
                lastName={lastName}
                detail={detail}
                setFirstName={setFirstName}
                setLastName={setLastName}
                setDetail={setDetail}
                isLoading={mutation.isLoading}
              />
            )}
            <MyListingSection
              data={data?.data?.listing_product}
              isEdit={isEdit}
            />
            <ReviewForMeSection
              rating={data?.data?.avg_rating}
              countReviewer={data?.data?.total_reviewer}
              reviews={data?.data?.listing_rating}
            />
          </Stack>
        </Grid>
      </Grid>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert variant="filled" severity="success">
          {message}
        </Alert>
      </Snackbar>
      <Snackbar
        open={openError}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert variant="filled" severity="error">
          {message}
        </Alert>
      </Snackbar>
    </>
  )
}
