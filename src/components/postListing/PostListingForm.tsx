"use client"
import { useEffect, useState } from "react"

import {
  Stack,
  Grid,
  Box,
  TextareaAutosize,
  Tabs as MuiTabs,
  Tab as MuiTab,
  Button as MuiButton,
  Typography,
  Alert,
  Snackbar,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import {
  Settings as SettingsIcon,
  GridView as GridIcon,
  AddAPhoto as AddAPhotoIcon,
  AddCircle as AddCircleIcon,
  Save as SaveIcon,
} from "@mui/icons-material"

import Input from "../ui/Input"
import Select from "../ui/Select"
import UploadBox from "./UploadBox"
import { SERVICES_OPTION } from "../../../data/services"
import { EnumProductType, ServiceType } from "@/types"
import { useMutation, useQuery } from "react-query"
import {
  postListingBisnis,
  postListingFreelance,
  postListingJastip,
} from "@/api-services/postListingService"
import { RangeDateForm } from "./RangeDateForm"
import { RangeLocationForm } from "./RangeLocationForm"
import { ServiceListFormSection } from "./ServiceListFormSection"
import { ProductListFormSection } from "./ProductListFormSection"
import { StoreLocationForm } from "./StoreLocationForm"
import { useRouter } from "next/router"

const Textarea = styled(TextareaAutosize)({
  display: "block",
  width: "100%",
  padding: "0.75rem",
  border: "none",
  borderRadius: "1rem",
  backgroundColor: "rgba(255, 255, 255, 0.075)",
  color: "rgb(255, 255, 255, 0.8)",
  fontSize: "1rem",
  fontFamily: "inherit",
  fontWeight: "inherit",
  "::placeholder": { color: "rgb(255, 255, 255, 0.2)" },
  ":focus": {
    outline: "2px solid #1976d2",
  },
})

const Tabs = styled(MuiTabs)({
  backgroundColor: "rbga(0, 0, 0, 1)",
  "& .MuiTabs-indicator": { backgroundColor: "#03dac6" },
})

const Tab = styled(MuiTab)({
  color: "#03dac6",
  "&.Mui-selected": { color: "#03dac6" },
})

const Button = styled(MuiButton)({
  padding: "0.375rem 1.75rem",
  borderRadius: "2em",
  backgroundColor: "#51bb25",
  color: "#fff",
  textTransform: "initial",
  whiteSpace: "nowrap",
  "&:hover": {
    backgroundColor: "#3f901d",
  },
})

const BASE_URL = "https://api.flyhigher.id"

const TabPanel = (props: {
  children?: React.ReactNode
  index: number
  value: number
}) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  )
}

export const PostListingForm = () => {
  const router = useRouter()
  const [serviceName, setServiceName] = useState<string>("")
  const [serviceType, setServiceType] = useState<string>("")
  const [category, setCategory] = useState<string>("")
  const [city, setCity] = useState<{
    city_id: number
    city_name: string
  } | null>(null)
  const [activeTab, setActiveTab] = useState<number>(0)
  const [image, setImage] = useState<{
    imageOne: File | null
    imageTwo: File | null
    imageThree: File | null
    imageFour: File | null
    imageFive: File | null
  }>({
    imageOne: null,
    imageTwo: null,
    imageThree: null,
    imageFour: null,
    imageFive: null,
  })
  const [detail, setDetail] = useState<string>("")
  const [description, setDescription] = useState("")
  const [categories, setCategories] = useState([])
  const [message, setMessage] = useState<string>("")

  const [open, setOpen] = useState<boolean>(false)
  const [openError, setOpenError] = useState<boolean>(false)

  const [fromCountry, setFromCountry] = useState<string>("")
  const [toCountry, setToCountry] = useState<string>("")
  const [fromDate, setFromDate] = useState<string>("")
  const [toDate, setToDate] = useState<string>("")

  const [titles, setTitles] = useState<string[]>([])
  const [imageProductOthers, setImageProductOthers] = useState<File[]>([])
  const [prices, setPrices] = useState<number[]>([])
  const [amounts, setAmounts] = useState<number[]>([])
  const [typeProduct, setTypeProduct] = useState<EnumProductType.SERVICE[]>([])

  const [titles2, setTitles2] = useState<string[]>([])
  const [imageProductOthers2, setImageProductOthers2] = useState<File[]>([])
  const [prices2, setPrices2] = useState<number[]>([])
  const [amounts2, setAmounts2] = useState<number[]>([])
  const [typeProduct2, setTypeProduct2] = useState<EnumProductType.PRODUCT[]>()

  const maxSize = 2
  const tokenUser = "WmlCb0RxdnpyajN4M3RZaG55Ujl4QT09"

  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["profileData"],
  //   queryFn: () => getProfile(userId),
  // })

  const mutationFreelance = useMutation(
    (formData: any) => postListingFreelance(tokenUser, formData),
    {
      onSuccess: (response) => {
        console.log("sukses", response)

        setMessage(() => "Success post listing freelance")
        setOpen(() => true)
        router.push(response?.data?.slug_url)
      },
      onError: (error: any) => {
        console.log("error mutation", error?.response?.data?.message)

        setMessage(
          () => error?.response?.data?.message ?? "Something went wrong"
        )
        setOpenError(() => true)
      },
    }
  )

  const mutationJastip = useMutation(
    (formData: any) => postListingJastip(tokenUser, formData),
    {
      onSuccess: (response) => {
        console.log("sukses", response)

        setMessage(() => "Success post listing jastip")
        setOpen(() => true)
        router.push(response?.data?.slug_url)
      },
      onError: (error: any) => {
        console.log("error mutation", error?.response?.data?.message)

        setMessage(
          () => error?.response?.data?.message ?? "Something went wrong"
        )
        setOpenError(() => true)
      },
    }
  )

  const mutationBisnis = useMutation(
    (formData: any) => postListingBisnis(tokenUser, formData),
    {
      onSuccess: (response) => {
        console.log("sukses", response)

        setMessage(() => "Success post listing bisnis")
        setOpen(() => true)
        router.push(response?.data?.slug_url)
      },
      onError: (error: any) => {
        console.log("error mutation", error?.response?.data?.message)

        setMessage(
          () => error?.response?.data?.message ?? "Something went wrong"
        )
        setOpenError(() => true)
      },
    }
  )

  useEffect(() => {
    setCategory(() => "")
    setCategories(() => [])
    handleFetchCategories()
  }, [serviceType])

  const handleAddService = async (e: any) => {
    console.log("add new service card form")

    let newImageProductOthers = imageProductOthers.slice()
    newImageProductOthers.push(null)
    setImageProductOthers(() => newImageProductOthers)

    let newTitles = titles.slice()
    newTitles.push("")
    setTitles(() => newTitles)

    let newPrices = prices.slice()
    newPrices.push(0)
    setPrices(() => newPrices)

    let newAmounts = amounts.slice()
    newAmounts.push(1)
    setAmounts(() => newAmounts)

    let newTypeProduct = typeProduct.slice()
    newTypeProduct.push(EnumProductType.SERVICE)
    setTypeProduct(() => newTypeProduct)
  }

  const handleAddProduct = async (e: any) => {
    console.log("add new product card form")

    let newImageProductOthers2 = imageProductOthers2.slice()
    newImageProductOthers2.push(null)
    setImageProductOthers2(() => newImageProductOthers2)

    let newTitles2 = titles2.slice()
    newTitles2.push("")
    setTitles2(() => newTitles2)

    let newPrices2 = prices2.slice()
    newPrices2.push(0)
    setPrices2(() => newPrices2)

    let newAmounts2 = amounts2.slice()
    newAmounts2.push(1)
    setAmounts2(() => newAmounts2)

    let newTypeProduct2 = typeProduct2?.slice()
    newTypeProduct2?.push(EnumProductType.PRODUCT)
    setTypeProduct2(() => newTypeProduct2)
  }

  const handleChangeService = (e: any, index: number, context: string) => {
    if (context === "image") {
      if (!e.target.files[0]) {
        return
      }
      if (!["image/png", "image/jpeg"].includes(e.target.files[0].type)) {
        setMessage(() => `Image extension not supported, upload png or jpg`)
        setOpen(() => true)
        return
      }
      if (e.target.files[0].size / 1024 > maxSize * 1024) {
        setMessage(() => `Image too large, max ${maxSize} Mb`)
        setOpen(() => true)
        return
      }

      let newImageProductOthers = imageProductOthers.slice()
      newImageProductOthers[index] = e.target.files[0]
      setImageProductOthers(() => newImageProductOthers)
    }

    if (context === "title") {
      let newTitles = titles.slice()
      newTitles[index] = e?.target?.value
      setTitles(() => newTitles)
    }

    if (context === "price") {
      let newPrices = prices.slice()
      newPrices[index] = e?.target?.value?.replace(/\D/g, "")
      setPrices(() => newPrices)
    }

    if (context === "amount") {
      let newAmounts = amounts.slice()
      let value = e?.replace(/\D/g, "")
      newAmounts[index] = value
      setAmounts(() => newAmounts)
    }
  }

  const handleChangeProduct = (e: any, index: number, context: string) => {
    if (context === "image") {
      if (!e.target.files[0]) {
        return
      }
      if (!["image/png", "image/jpeg"].includes(e.target.files[0].type)) {
        setMessage(() => `Image extension not supported, upload png or jpg`)
        setOpen(() => true)
        return
      }
      if (e.target.files[0].size / 1024 > maxSize * 1024) {
        setMessage(() => `Image too large, max ${maxSize} Mb`)
        setOpen(() => true)
        return
      }

      let newImageProductOthers2 = imageProductOthers2.slice()
      newImageProductOthers2[index] = e.target.files[0]
      setImageProductOthers2(() => newImageProductOthers2)
    }

    if (context === "title") {
      let newTitles2 = titles2.slice()
      newTitles2[index] = e?.target?.value
      setTitles2(() => newTitles2)
    }

    if (context === "price") {
      let newPrices2 = prices2.slice()
      newPrices2[index] = e?.target?.value?.replace(/\D/g, "")
      setPrices2(() => newPrices2)
    }

    if (context === "amount") {
      let newAmounts2 = amounts2.slice()
      let value = e?.replace(/\D/g, "")
      newAmounts2[index] = value
      setAmounts2(() => newAmounts2)
    }
  }

  const handleRemoveService = (index: number) => {
    let newImageProductOthers = imageProductOthers.slice()
    newImageProductOthers.splice(index, 1)
    setImageProductOthers(() => newImageProductOthers)

    let newTitles = titles.slice()
    newTitles.splice(index, 1)
    setTitles(() => newTitles)

    let newPrices = prices.slice()
    newPrices.splice(index, 1)
    setPrices(() => newPrices)

    let newAmounts = amounts.slice()
    newAmounts.splice(index, 1)
    setAmounts(() => newAmounts)

    let newTypeProduct = typeProduct.slice()
    newTypeProduct.splice(index, 1)
    setTypeProduct(() => newTypeProduct)
  }

  const handleRemoveProduct = (index: number) => {
    let newImageProductOthers2 = imageProductOthers2.slice()
    newImageProductOthers2.splice(index, 1)
    setImageProductOthers2(() => newImageProductOthers2)

    let newTitles2 = titles2.slice()
    newTitles2.splice(index, 1)
    setTitles2(() => newTitles2)

    let newPrices2 = prices2.slice()
    newPrices2.splice(index, 1)
    setPrices2(() => newPrices2)

    let newAmounts2 = amounts2.slice()
    newAmounts2.splice(index, 1)
    setAmounts2(() => newAmounts2)

    let newTypeProduct2 = typeProduct2?.slice()
    newTypeProduct2?.splice(index, 1)
    setTypeProduct2(() => newTypeProduct2)
  }

  const handleFetchCategories = async () => {
    if (serviceType) {
      let url = ""

      switch (serviceType) {
        case ServiceType.JASTIP as string:
          url = "jastip_categories"
          break
        case ServiceType.RETAIL as string:
          url = "bisnis_categories"
          break
        case ServiceType.FREELANCE as string:
          url = "freelance_online_categories"
        default:
          break
      }

      try {
        const response = await fetch(`${BASE_URL}/${url}`)
        const responseJSON = await response.json()

        if (responseJSON && responseJSON.status === "success") {
          setCategories(responseJSON.data)
        }
      } catch (error) {}
    }
  }

  const handleChangeImage = (e: any) => {
    if (!e.target.files[0]) {
      return
    }
    console.log("picture: ", e.target.files)
    if (!["image/png", "image/jpeg"].includes(e.target.files[0].type)) {
      setMessage(() => `Image extension not supported, upload png or jpg`)
      setOpen(() => true)
      return
    }
    if (e.target.files[0].size / 1024 > maxSize * 1024) {
      setMessage(() => `Image too large, max ${maxSize} Mb`)
      setOpen(() => true)
      return
    }

    setImage(() => {
      return { ...image, [e.target.name]: e.target.files[0] }
    })
  }

  const handleClose = () => {
    setMessage(() => "")
    setOpen(() => false)
    setOpenError(() => false)
  }

  const handleSubmitForm = async (e: any) => {
    e.preventDefault()
    if (
      [
        ServiceType.FREELANCE as string,
        ServiceType.JASTIP as string,
        ServiceType.RETAIL as string,
      ].includes(serviceType) &&
      !mutationBisnis?.isLoading &&
      !mutationFreelance?.isLoading &&
      !mutationJastip?.isLoading
    ) {
      let formData = new FormData()
      formData.append("product_name", serviceName)
      formData.append("product_detail", detail)
      formData.append("product_description", description)

      formData.append("image_product_1", image.imageOne || "")
      formData.append("image_product_2", image.imageTwo || "")
      formData.append("image_product_3", image.imageThree || "")
      formData.append("image_product_4", image.imageFour || "")
      formData.append("image_product_5", image.imageFive || "")

      if (
        [
          ServiceType.FREELANCE as string,
          ServiceType.JASTIP as string,
        ].includes(serviceType)
      ) {
        for (let index = 0; index < titles.length; index++) {
          formData.append(`title[${index}]`, titles[index])
        }
        for (let index = 0; index < imageProductOthers.length; index++) {
          formData.append(
            `image_product_other[${index}]`,
            imageProductOthers[index]
          )
        }
        for (let index = 0; index < prices.length; index++) {
          formData.append(`price[${index}]`, JSON.stringify(prices[index]))
        }
        for (let index = 0; index < amounts.length; index++) {
          formData.append(`amount[${index}]`, JSON.stringify(amounts[index]))
        }
      }

      if (serviceType === (ServiceType.FREELANCE as string)) {
        console.log("freelance")
        formData.append("id_categories", category)
        mutationFreelance.mutate(formData)
      }

      if (serviceType === (ServiceType.JASTIP as string)) {
        console.log("jastip")

        formData.append("from_the_country", fromCountry)
        formData.append("to_country", toCountry)
        formData.append("from_date", fromDate)
        formData.append("to_date", toDate)

        mutationJastip.mutate(formData)
      }

      if (serviceType === (ServiceType.RETAIL as string)) {
        console.log("RETAIL")
        const newTitles = [...titles, ...titles2]
        const newImages = [...imageProductOthers, ...imageProductOthers2]
        const newPrices = [...prices, ...prices2]
        const newAmounts = [...amounts, ...amounts2]
        const serviceTypes = titles.map(() => "service")
        const productTypes = titles2.map(() => "product")
        const typeProducts = [...serviceTypes, ...productTypes]

        formData.append("id_categories", category)
        formData.append("city_id", JSON.stringify(city?.city_id))
        formData.append("city_name", city?.city_name || "")

        for (let index = 0; index < newTitles.length; index++) {
          formData.append(`title[${index}]`, newTitles[index])
        }
        for (let index = 0; index < newImages.length; index++) {
          formData.append(`image_product_other[${index}]`, newImages[index])
        }
        for (let index = 0; index < newPrices.length; index++) {
          formData.append(`price[${index}]`, JSON.stringify(newPrices[index]))
        }
        for (let index = 0; index < newAmounts.length; index++) {
          formData.append(`amount[${index}]`, JSON.stringify(newAmounts[index]))
        }
        for (let index = 0; index < typeProducts.length; index++) {
          formData.append(`tipe_product[${index}]`, typeProducts[index])
        }

        mutationBisnis.mutate(formData)
      }
    }
  }

  return (
    <Stack spacing={4}>
      <Snackbar
        open={open}
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

      <Stack spacing={1} direction="row" alignItems="center">
        <SettingsIcon />
        <Typography variant="subtitle2">Type Of Service</Typography>
        <Select
          displayEmpty
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value as string)}
          fullWidth
          options={SERVICES_OPTION}
          valueKey="value"
          labelKey="label"
          emptyOption
          emptyOptionLabel="--Select service--"
          emptyOptionValue=""
        />

        {serviceType === ServiceType.JASTIP ? null : (
          <>
            <GridIcon />
            <Typography variant="subtitle2">Categories</Typography>
            <Select
              displayEmpty
              value={category}
              onChange={(e) => setCategory(e.target.value as string)}
              fullWidth
              options={categories}
              valueKey="id"
              labelKey="value"
              emptyOption
              emptyOptionLabel="--Select category--"
              emptyOptionValue=""
            />
          </>
        )}
      </Stack>

      <Stack spacing={2}>
        <Input
          id="title"
          fullWidth
          placeholder="Name your service"
          onChange={(e) => setServiceName(e.target.value)}
        />

        {serviceType === (ServiceType.RETAIL as string) ? (
          <StoreLocationForm location={city} setLocation={setCity} />
        ) : null}

        {serviceType === (ServiceType.JASTIP as string) ? (
          <RangeLocationForm
            fromLocation={fromCountry}
            setFromLocation={setFromCountry}
            toLocation={toCountry}
            setToLocation={setToCountry}
          />
        ) : null}

        <RangeDateForm
          type={serviceType}
          openDate={fromDate}
          setOpenDate={setFromDate}
          closeDate={toDate}
          setCloseDate={setToDate}
        />

        <Box>
          <Grid container spacing={2} gap={0}>
            <Grid item md={6} xs={12}>
              <UploadBox
                title="Upload Your Best Picture Here"
                variant="large"
                name="imageOne"
                onChange={handleChangeImage}
                image={image.imageOne}
                icon={
                  <Box
                    sx={{
                      color: "#fff",
                      borderRadius: "20px",
                      padding: "20px",
                      border: "1px solid #202020",
                    }}
                  >
                    <Stack direction="row" spacing={3} alignItems="center">
                      <AddAPhotoIcon />
                      <Typography variant="h5">Add Picture Here</Typography>
                    </Stack>
                  </Box>
                }
              />
            </Grid>

            <Grid item md={6} xs={12}>
              <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                  <UploadBox
                    title="Upload Your Portfolio"
                    variant="medium"
                    name="imageTwo"
                    icon={<AddCircleIcon />}
                    onChange={handleChangeImage}
                    image={image.imageTwo}
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <UploadBox
                    title="Upload Picture Here"
                    variant="medium"
                    name="imageThree"
                    icon={<AddCircleIcon />}
                    onChange={handleChangeImage}
                    image={image.imageThree}
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <UploadBox
                    title="Upload Your Picture"
                    variant="medium"
                    name="imageFour"
                    icon={<AddCircleIcon />}
                    onChange={handleChangeImage}
                    image={image.imageFour}
                  />
                </Grid>

                <Grid item md={6} xs={12}>
                  <UploadBox
                    title="Upload Your Testimonial"
                    variant="medium"
                    name="imageFive"
                    icon={<AddCircleIcon />}
                    onChange={handleChangeImage}
                    image={image.imageFive}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Stack>

      {![
        ServiceType.FREELANCE as string,
        ServiceType.JASTIP as string,
        ServiceType.RETAIL as string,
      ].includes(serviceType) ? null : (
        <ServiceListFormSection
          titles={titles}
          images={imageProductOthers}
          prices={prices}
          amounts={amounts}
          onAddService={handleAddService}
          onRemoveService={handleRemoveService}
          onChangeService={handleChangeService}
        />
      )}

      {![ServiceType.RETAIL as string].includes(serviceType) ? null : (
        <ProductListFormSection
          titles={titles2}
          images={imageProductOthers2}
          prices={prices2}
          amounts={amounts2}
          onAddProduct={handleAddProduct}
          onRemoveProduct={handleRemoveProduct}
          onChangeProduct={handleChangeProduct}
        />
      )}

      <Grid container columnSpacing={0} alignItems="center">
        <Grid item xs={12} md={7}>
          <Stack spacing={3} minHeight="0">
            <Box sx={{ position: "sticky", top: 0, left: 0 }}>
              <Tabs
                value={activeTab}
                onChange={(_, value) => setActiveTab(value)}
              >
                <Tab label="Why Me" />
                <Tab label="Description" />
              </Tabs>
            </Box>

            <TabPanel index={0} value={activeTab}>
              <div>
                <Stack direction="row" alignItems="baseline" spacing={2}>
                  <Box component="h2" sx={{ fontWeight: 500 }} mb={3}>
                    Why Me
                  </Box>
                </Stack>

                <Textarea
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  minRows={16}
                  placeholder="Type here..."
                />
              </div>
            </TabPanel>
            <TabPanel index={1} value={activeTab}>
              <div>
                <Stack direction="row" alignItems="baseline" spacing={2}>
                  <Box component="h2" sx={{ fontWeight: 500 }} mb={3}>
                    Description
                  </Box>
                </Stack>

                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  minRows={16}
                  placeholder="Type here..."
                />
              </div>
            </TabPanel>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            size="large"
            startIcon={<SaveIcon />}
            onClick={handleSubmitForm}
          >
            {mutationBisnis?.isLoading ||
            mutationFreelance?.isLoading ||
            mutationJastip?.isLoading
              ? "Saving..."
              : "Save"}
          </Button>
        </Grid>
      </Grid>
    </Stack>
  )
}
