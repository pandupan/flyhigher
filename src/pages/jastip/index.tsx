import { Inter } from "next/font/google"
import { HeadMeta } from "@/components/meta/HeadMeta"
import { MainLayout } from "@/components/layouts/MainLayout"
import { useEffect, useState } from "react"
import { JastipProduct } from "@/types"
import Image from "next/image"
import ButtonCategoryService from "@/components/ButtonCategoryService"
import JastipCard from "@/components/cards/JastipCard"
import styles from "@/styles/Home.module.css"
import FlightIcon from "@mui/icons-material/Flight"
import SearchIcon from "@mui/icons-material/Search"
import {
  Typography,
  Box,
  ButtonBase,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material"
import { useFetchJastipCategories } from "../../hooks"
import { useGetProducts } from "@/hooks/useProducts"
import ListSection from "@/components/shared/ListSection/ListSection"
import { FlightTakeoff, FlightLand, CalendarMonth } from "@mui/icons-material"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"

import Modal from "@mui/material/Modal"
import dayjs from "dayjs"
import pickBy from "lodash/pickBy"

const inter = Inter({ subsets: ["latin"] })

const ModalCategories = ({
  options,
  open,
  setOpen,
  onClick,
}: {
  options: any
  open: boolean
  setOpen: (e: boolean) => void
  onClick: (e: any) => void
}) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60%",
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          From
        </Typography>

        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >
          {options.map((item: any, index: number) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  gap: "6px",
                  fontWeight: "600",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => (onClick(item), setOpen(false))}
              >
                <Image
                  src={item?.image_country}
                  alt={item?.value}
                  style={{
                    objectFit: "contain",
                  }}
                  width={30}
                  height={30}
                  loading="lazy"
                />
                <Typography>{item?.value}</Typography>
              </div>
            )
          })}
        </Box>
      </Box>
    </Modal>
  )
}

const ModalCalendar = ({
  open,
  setOpen,
  fromDate,
  toDate,
  setFromDate,
  setToDate,
}: {
  open: boolean
  setOpen: (e: boolean) => void
  fromDate: any
  toDate: any
  setFromDate: (e: any) => void
  setToDate: (e: any) => void
}) => {
  const handleSetFromDate = (date: any) => {
    setFromDate(date ? dayjs(date).startOf("month") : null)
  }

  const handleSetToDate = (date: any) => {
    setToDate(date ? dayjs(date).endOf("month") : null)
  }

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "80%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Start Date"
            views={["month", "year"]}
            openTo="month"
            value={fromDate}
            onChange={(newValue) => handleSetFromDate(newValue)}
            slotProps={{ textField: { variant: "filled" } }}
          />

          <DatePicker
            label="Due Date"
            views={["month", "year"]}
            openTo="month"
            value={toDate}
            onChange={(newValue) => handleSetToDate(newValue)}
            slotProps={{ textField: { variant: "filled" } }}
          />
        </LocalizationProvider>
      </Box>
    </Modal>
  )
}

export default function Jastip() {
  const theme = useTheme()
  const isMobileView = useMediaQuery(theme.breakpoints.down("lg"))

  const [listCategoriesJastip] = useFetchJastipCategories()
  const [selectedFrom, setSelectedFrom] = useState(listCategoriesJastip[0])
  const [selectedTo, setSelectedTo] = useState(
    listCategoriesJastip[1] ?? listCategoriesJastip[0]
  )
  const [fromDate, setFromDate] = useState(dayjs().startOf("month"))
  const [toDate, setToDate] = useState(dayjs().endOf("month"))

  const [params, setParams]: any = useState({
    from_country: listCategoriesJastip[0],
    to_country: listCategoriesJastip[1] ?? listCategoriesJastip[0],
    from_date: dayjs().startOf("month"),
    to_date: dayjs().endOf("month"),
  })

  const { data: listProductsJastip } = useGetProducts("jastip", params, {
    select: (data: any) => data?.data,
  })

  const [isOpenFrom, setIsOpenFrom] = useState(false)
  const [isOpenTo, setIsOpenTo] = useState(false)
  const [isOpenDate, setIsOpenDate] = useState(false)

  const handleSetParams = () => {
    const newParams =
      pickBy(
        {
          from_country: selectedFrom?.id,
          to_country: selectedTo?.id,
          from_date: dayjs(fromDate).format("YYYY-MM-DD"),
          to_date: dayjs(toDate).format("YYYY-MM-DD"),
        },
        (value) => !!value
      ) || {}

    setParams(newParams)
  }

  useEffect(() => {
    setSelectedFrom(listCategoriesJastip[0])
    setSelectedTo(listCategoriesJastip[1] ?? listCategoriesJastip[0])
  }, [listCategoriesJastip])

  return (
    <>
      <MainLayout>
        <HeadMeta />

        <main className={`${styles.main} ${inter.className}`}>
          <ButtonCategoryService />
          <section>
            <ListSection>
              <ListSection.Header>
                <Box
                  style={{
                    display: "flex",
                    gap: "6px",
                    alignItems: "center",
                    marginTop: "8px",
                  }}
                >
                  <FlightIcon
                    sx={{
                      height: "32px",
                    }}
                  />

                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Jastip
                  </Typography>
                </Box>
              </ListSection.Header>
              {isMobileView ? (
                <Grid container spacing="10px">
                  <Grid item xs={4}>
                    <ButtonBase
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        gap: "6px",
                        backgroundColor: "#090808",
                        borderRadius: "8px",
                        marginTop: "10px",
                        fontSize: "16px",
                        padding: "8px",
                        border: "3px solid #090808",
                        "&:hover": {
                          border: "3px solid #fff",
                          transition: "all 0.3s ease",
                        },
                        transition: "transform 0.3s ease",
                      }}
                      onClick={() => setIsOpenFrom(true)}
                    >
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <FlightTakeoff
                          sx={{
                            width: "14px",
                            marginRight: "6px",
                            letterSpacing: "2px",
                            textAlign: "center",
                          }}
                        />
                        <Typography>From</Typography>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          gap: "6px",
                          fontWeight: "600",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                      >
                        <Image
                          src={selectedFrom?.image_country}
                          alt={selectedFrom?.value}
                          style={{
                            objectFit: "contain",
                          }}
                          width={14}
                          height={14}
                          loading="lazy"
                        />
                        <Typography>{selectedFrom?.value}</Typography>
                      </div>
                    </ButtonBase>
                  </Grid>

                  <Grid item xs={4}>
                    <ButtonBase
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        gap: "6px",
                        backgroundColor: "#090808",
                        borderRadius: "8px",
                        marginTop: "10px",
                        fontSize: "16px",
                        padding: "8px",
                        border: "3px solid #090808",
                        "&:hover": {
                          border: "3px solid #fff",
                          transition: "all 0.3s ease",
                        },
                        transition: "transform 0.3s ease",
                      }}
                      onClick={() => setIsOpenTo(true)}
                    >
                      <div style={{ display: "flex", flexDirection: "row" }}>
                        <FlightLand
                          sx={{
                            width: "14px",
                            marginRight: "6px",
                            letterSpacing: "2px",
                            textAlign: "center",
                          }}
                        />
                        <Typography>To</Typography>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          gap: "6px",
                          fontWeight: "600",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                      >
                        <Image
                          src={selectedTo?.image_country}
                          alt={selectedTo?.value}
                          style={{
                            objectFit: "contain",
                          }}
                          width={14}
                          height={14}
                          loading="lazy"
                        />
                        <Typography>{selectedTo?.value}</Typography>
                      </div>
                    </ButtonBase>
                  </Grid>

                  <Grid item xs={4}>
                    <ButtonBase
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        gap: "6px",
                        backgroundColor: "#090808",
                        borderRadius: "8px",
                        marginTop: "10px",
                        fontSize: "16px",
                        padding: "8px",
                        border: "3px solid #090808",
                        "&:hover": {
                          border: "3px solid #fff",
                          transition: "all 0.3s ease",
                        },
                        transition: "transform 0.3s ease",
                      }}
                      onClick={() => setIsOpenDate(true)}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <CalendarMonth
                          sx={{
                            width: "14px",
                            marginRight: "6px",
                            letterSpacing: "2px",
                            textAlign: "center",
                          }}
                        />
                        <Typography sx={{ fontSize: "0.6rem" }}>
                          Choose Date
                        </Typography>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          fontWeight: "600",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                      >
                        <Typography
                          sx={{ fontSize: "0.6rem", marginTop: "4px" }}
                        >
                          {fromDate ? dayjs(fromDate).format("YYYY MMM") : ""}
                          {toDate
                            ? " - " + dayjs(toDate).format("YYYY MMM")
                            : ""}
                        </Typography>
                      </div>
                    </ButtonBase>
                  </Grid>

                  <Grid item container xs={12} justifyContent="center">
                    <Grid item xs={4}>
                      <ButtonBase
                        sx={{
                          width: "100%",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          gap: "6px",
                          backgroundColor: "#090808",
                          borderRadius: "8px",
                          marginTop: "10px",
                          fontSize: "16px",
                          padding: "8px",
                          border: "3px solid #090808",
                          "&:hover": {
                            border: "3px solid #fff",
                            transition: "all 0.3s ease",
                          },
                          transition: "transform 0.3s ease",
                        }}
                        onClick={handleSetParams}
                      >
                        <SearchIcon
                          sx={{
                            width: "14px",
                            marginRight: "6px",
                            letterSpacing: "2px",
                            textAlign: "center",
                          }}
                        />
                        <Typography sx={{ fontSize: "1rem" }}>
                          Search
                        </Typography>
                      </ButtonBase>
                    </Grid>
                  </Grid>
                </Grid>
              ) : (
                <ListSection.Categories listCategories={listCategoriesJastip} />
              )}
              <ListSection.Products>
                {listProductsJastip?.map(
                  (item: JastipProduct, index: number) => (
                    <ListSection.Product key={index}>
                      <JastipCard item={item} />
                    </ListSection.Product>
                  )
                )}
              </ListSection.Products>
            </ListSection>
          </section>

          <ModalCategories
            options={listCategoriesJastip}
            open={isOpenFrom}
            setOpen={setIsOpenFrom}
            onClick={setSelectedFrom}
          />
          <ModalCategories
            options={listCategoriesJastip}
            open={isOpenTo}
            setOpen={setIsOpenTo}
            onClick={setSelectedTo}
          />
          <ModalCalendar
            open={isOpenDate}
            setOpen={setIsOpenDate}
            fromDate={fromDate}
            setFromDate={setFromDate}
            toDate={toDate}
            setToDate={setToDate}
          />
        </main>
      </MainLayout>
    </>
  )
}
