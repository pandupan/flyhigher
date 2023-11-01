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
  addSubProductBisnis,
  addSubProductFreelance,
  addSubProductJastip,
  deleteSubProductBisnis,
  deleteSubProductFreelance,
  deleteSubProductJastip,
  updateListingBisnis,
  updateListingFreelance,
  updateListingJastip,
  updateSubProductBisnis,
  updateSubProductFreelance,
  updateSubProductJastip,
} from "@/api-services/postListingService"
import { RangeDateForm } from "./RangeDateForm"
import { RangeLocationForm } from "./RangeLocationForm"
import { ServiceListFormSection } from "./ServiceListFormSection"
import { ProductListFormSection } from "./ProductListFormSection"
import { StoreLocationForm } from "./StoreLocationForm"
import { useRouter } from "next/router"
import { getDetailEditProduct } from "@/api-services/productService"

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

export const EditListingForm: React.FC<{ slugProduct: any; username: any }> = ({
  slugProduct,
  username,
}) => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: [`productDetail${username}${slugProduct}`],
    queryFn: () =>
      getDetailEditProduct({ username: username, slug_product: slugProduct }),
    cacheTime: 0,
  })

  const router = useRouter()
  const [serviceName, setServiceName] = useState<string>("")
  const [serviceType, setServiceType] = useState<string>(
    data?.tipe_product?.toUpperCase() || ""
  )
  const [category, setCategory] = useState<string>("")
  const [city, setCity] = useState<{
    city_id: string
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

  const [subProducts, setSubProducts] = useState<any[]>([])
  const [subProducts2, setSubProducts2] = useState<any[]>([])

  const maxSize = 2
  const tokenUser = "WmlCb0RxdnpyajN4M3RZaG55Ujl4QT09"

  // const { isLoading, error, data } = useQuery({
  //   queryKey: ["profileData"],
  //   queryFn: () => getProfile(userId),
  // })

  // FREELANCE MUTATION
  const mutationFreelance = useMutation(
    (formData: any) => updateListingFreelance(tokenUser, formData),
    {
      onSuccess: (response) => {
        console.log("sukses", response)

        setMessage(() => "Success update listing freelance")
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

  const mutationDeleteSubProductFreelance = useMutation(
    (formData: any) => deleteSubProductFreelance(tokenUser, formData),
    {
      onSuccess: (response) => {
        console.log("sukses", response)
        setMessage(
          () => response?.message || "Success delete sub product freelance"
        )
        setOpen(() => true)
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

  const mutationUpdateSubProductFreelance = useMutation(
    (formData: any) => updateSubProductFreelance(tokenUser, formData),
    {
      onSuccess: (response) => {
        console.log("sukses", response)
        setMessage(
          () => response?.message || "Success update sub product freelance"
        )
        setOpen(() => true)
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

  const mutationAddSubProductFreelance = useMutation(
    (formData: any) => addSubProductFreelance(tokenUser, formData),
    {
      onSuccess: (response) => {
        console.log("sukses", response)
        refetch()
        setMessage(
          () => response?.message || "Success add sub product freelance"
        )
        setOpen(() => true)
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

  // JASTIP MUTATION
  const mutationJastip = useMutation(
    (formData: any) => updateListingJastip(tokenUser, formData),
    {
      onSuccess: (response) => {
        console.log("sukses", response)

        setMessage(() => "Success update listing jastip")
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

  const mutationDeleteSubProductJastip = useMutation(
    (formData: any) => deleteSubProductJastip(tokenUser, formData),
    {
      onSuccess: (response) => {
        console.log("sukses", response)
        setMessage(
          () => response?.message || "Success delete sub product jastip"
        )
        setOpen(() => true)
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

  const mutationUpdateSubProductJastip = useMutation(
    (formData: any) => updateSubProductJastip(tokenUser, formData),
    {
      onSuccess: (response) => {
        console.log("sukses", response)
        setMessage(
          () => response?.message || "Success update sub product jastip"
        )
        setOpen(() => true)
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

  const mutationAddSubProductJastip = useMutation(
    (formData: any) => addSubProductJastip(tokenUser, formData),
    {
      onSuccess: (response) => {
        console.log("sukses", response)
        refetch()
        setMessage(() => response?.message || "Success add sub product jastip")
        setOpen(() => true)
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

  // RETAIL MUTATION
  const mutationBisnis = useMutation(
    (formData: any) => updateListingBisnis(tokenUser, formData),
    {
      onSuccess: (response) => {
        console.log("sukses", response)

        setMessage(() => "Success update listing bisnis")
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

  const mutationDeleteSubProductBisnis = useMutation(
    (formData: any) => deleteSubProductBisnis(tokenUser, formData),
    {
      onSuccess: (response) => {
        console.log("sukses", response)
        setMessage(
          () => response?.message || "Success delete sub product bisnis"
        )
        setOpen(() => true)
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

  const mutationUpdateSubProductBisnis = useMutation(
    (formData: any) => updateSubProductBisnis(tokenUser, formData),
    {
      onSuccess: (response) => {
        console.log("sukses", response)
        setMessage(
          () => response?.message || "Success update sub product bisnis"
        )
        setOpen(() => true)
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

  const mutationAddSubProductBisnis = useMutation(
    (formData: any) => addSubProductBisnis(tokenUser, formData),
    {
      onSuccess: (response) => {
        console.log("sukses", response)
        refetch()
        setMessage(() => response?.message || "Success add sub product bisnis")
        setOpen(() => true)
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

  const addIntialProductList = async (items: any[]) => {
    let newSubProducts2 = subProducts2.slice()

    for (let i = 0; i < items.length; i++) {
      newSubProducts2.push({
        ...items[i],
        preview: items[i].image_sub_product,
        image: null,
      })
    }

    setSubProducts2(() => newSubProducts2)
  }

  const resetProductList = async () => {
    console.log("resetting product list")
    setSubProducts2(() => [])
    console.log("resetted product list")
  }

  const addIntialServiceList = async (items: any[]) => {
    let newSubProducts = subProducts.slice()

    for (let i = 0; i < items.length; i++) {
      newSubProducts.push({
        ...items[i],
        preview: items[i].image_sub_product,
        image: null,
      })
    }

    setSubProducts(() => newSubProducts)
  }

  const resetServiceList = async () => {
    setSubProducts(() => [])
  }

  const initData = async () => {
    await resetProductList()
    await resetServiceList()
    console.log("product data original => ", data)
    if (data) {
      console.log("init data", data)

      addIntialProductList(data.data?.product_list || [])
      addIntialServiceList(data.data?.service_list || [])
      setCategory(() => data.data?.category?.id as string)
      setDetail(() => data.data?.why_me)
      setDescription(() => data.data?.description)
      setServiceName(() => data.data?.product_name)
      setServiceType(() => data.data?.tipe_product?.toUpperCase())
      setFromCountry(() => data.data?.from_country?.id)
      setToCountry(() => data.data?.to_country?.id)
      setFromDate(() => data.data?.from_date)
      setToDate(() => data.data?.to_date)
      if (
        data.data?.tipe_product?.toUpperCase() ===
        (ServiceType.RETAIL as string)
      ) {
        setCity(() => {
          return {
            city_id: data?.data?.city?.city_id?.toString(),
            city_name: data?.data?.city?.city_name,
          }
        })
      }
    }
  }

  useEffect(() => {
    // setCategory(() => "")
    setCategories(() => [])
    handleFetchCategories()
    // if (serviceType === (ServiceType.RETAIL as string)) {
    //   setCity(() => {
    //     return {
    //       city_id: data?.data?.city?.city_id,
    //       city_name: data?.data?.city?.city_name,
    //     }
    //   })
    // }
  }, [serviceType])

  useEffect(() => {
    ;(async () => await initData())()

    return () => {}
  }, [data])

  const handleAddProduct = async (formData: any) => {
    console.log("formData", formData)

    const payload = new FormData()
    payload.append("id_product", data?.data?.id_product)
    payload.append("title", formData?.title)
    payload.append("price", formData?.price)
    payload.append("amount", formData?.amount)
    payload.append("image_product_other", formData?.image || "")

    if (serviceType === ServiceType.JASTIP) {
      mutationAddSubProductJastip.mutate(payload)
    }
    if (serviceType === ServiceType.FREELANCE) {
      mutationAddSubProductFreelance.mutate(payload)
    }
    if (serviceType === ServiceType.RETAIL) {
      payload.append("tipe_product", formData?.type)
      mutationAddSubProductBisnis.mutate(payload)
    }
  }

  const handleRemoveService = async (index: number) => {
    const payload = new FormData()
    payload.append("id_sub_product", subProducts[index]?.id_sub_product)

    try {
      const resp =
        serviceType === (ServiceType.JASTIP as string)
          ? await mutationDeleteSubProductFreelance.mutateAsync(payload)
          : await mutationDeleteSubProductBisnis.mutateAsync(payload)
      if (resp.code === 200) {
        refetch()
        // removeSubProducts(index)
      }
    } catch (error) {}
  }

  const handleRemoveProduct = async (index: number) => {
    const payload = new FormData()
    payload.append("id_sub_product", subProducts2[index]?.id_sub_product)

    try {
      const resp =
        serviceType === (ServiceType.JASTIP as string)
          ? await mutationDeleteSubProductJastip.mutateAsync(payload)
          : await mutationDeleteSubProductBisnis.mutateAsync(payload)
      if (resp.code === 200) {
        await refetch()
      }
    } catch (error) {}
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
      formData.append("id_product", data?.data?.id_product)
      formData.append("product_name", serviceName)
      formData.append("product_detail", detail)
      formData.append("product_description", description)

      formData.append("image_product_1", image.imageOne || "")
      formData.append("image_product_2", image.imageTwo || "")
      formData.append("image_product_3", image.imageThree || "")
      formData.append("image_product_4", image.imageFour || "")
      formData.append("image_product_5", image.imageFive || "")

      // const newTitles = [...titles, ...titles2]
      // const newImages = [...imageProductOthers, ...imageProductOthers2]
      // const newPrices = [...prices, ...prices2]
      // const newAmounts = [...amounts, ...amounts2]
      // const newSubProducts = [...subProducts, ...subProducts2]

      // if (
      //   [
      //     ServiceType.RETAIL as string,
      //     ServiceType.FREELANCE as string,
      //   ].includes(serviceType)
      // ) {
      //   for (let index = 0; index < newTitles.length; index++) {
      //     formData.append(`id_sub_product[${index}]`, subProducts2[index])
      //   }
      // }

      // if ([ServiceType.RETAIL as string].includes(serviceType)) {
      //   for (let index = 0; index < newTitles.length; index++) {
      //     formData.append(`title[${index}]`, newTitles[index])
      //   }
      //   for (let index = 0; index < newImages.length; index++) {
      //     formData.append(
      //       `image_product_other[${index}]`,
      //       newImages[index] || ""
      //     )
      //   }
      //   for (let index = 0; index < newPrices.length; index++) {
      //     formData.append(`price[${index}]`, newPrices[index].toString())
      //   }
      //   for (let index = 0; index < newAmounts.length; index++) {
      //     formData.append(`amount[${index}]`, newAmounts[index].toString())
      //   }
      // }

      if (serviceType === (ServiceType.FREELANCE as string)) {
        console.log("freelance")
        // for (let index = 0; index < titles.length; index++) {
        //   formData.append(`title[${index}]`, titles[index])
        // }
        // for (let index = 0; index < imageProductOthers.length; index++) {
        //   formData.append(
        //     `image_product_other[${index}]`,
        //     imageProductOthers[index] || ""
        //   )
        // }
        // for (let index = 0; index < prices.length; index++) {
        //   formData.append(`price[${index}]`, prices[index].toString())
        // }
        // for (let index = 0; index < amounts.length; index++) {
        //   formData.append(`amount[${index}]`, amounts[index].toString())
        // }
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

        formData.append("id_categories", category)
        formData.append("city_id", JSON.stringify(city?.city_id))
        formData.append("city_name", city?.city_name || "")

        mutationBisnis.mutate(formData)
      }
    }
  }

  const handleUpdateProduct = (formData: any) => {
    console.log("formData", formData)

    let payload = new FormData()
    payload.append("id_sub_product", formData.id_sub_product)
    payload.append("title", formData.title)
    payload.append("price", formData.price)
    payload.append("amount", formData.amount)
    payload.append("image_product_other", formData.image)

    if (serviceType === ServiceType.JASTIP) {
      mutationUpdateSubProductJastip.mutate(payload)
    }
    if (serviceType === ServiceType.FREELANCE) {
      mutationUpdateSubProductFreelance.mutate(payload)
    }
    if (serviceType === ServiceType.RETAIL) {
      mutationUpdateSubProductBisnis.mutate(payload)
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
          onChange={(e) => {
            console.log("do nothing")
          }}
          fullWidth
          options={SERVICES_OPTION}
          valueKey="value"
          labelKey="label"
          emptyOption
          emptyOptionLabel="--Select service--"
          emptyOptionValue=""
          readOnly
        />

        {serviceType === (ServiceType.JASTIP as string) ? null : (
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
          value={serviceName}
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
          data={data}
        />

        <Box>
          <Grid container spacing={2} gap={0}>
            <Grid item md={6} xs={12}>
              <UploadBox
                title="Upload Your Best Picture Here"
                variant="large"
                name="imageOne"
                preview={data?.data?.image_product_1}
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
                    preview={data?.data?.image_product_2}
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
                    preview={data?.data?.image_product_3}
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
                    preview={data?.data?.image_product_4}
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
                    preview={data?.data?.image_product_5}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Stack>

      {![
        ServiceType.FREELANCE as string,
        ServiceType.RETAIL as string,
      ].includes(serviceType) ? null : (
        <ServiceListFormSection
          data={data?.data?.service_list}
          onAddService={handleAddProduct}
          onRemoveService={handleRemoveService}
          onUpdateService={handleUpdateProduct}
        />
      )}

      {![ServiceType.RETAIL as string, ServiceType.JASTIP as string].includes(
        serviceType
      ) ? null : (
        <ProductListFormSection
          data={data?.data?.product_list}
          onAddProduct={handleAddProduct}
          onRemoveProduct={handleRemoveProduct}
          onUpdateProduct={handleUpdateProduct}
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
