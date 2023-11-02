import { useState } from "react"
import Image from "next/image"
import { Inter } from "next/font/google"
import { HeadMeta } from "@/components/meta/HeadMeta"
import { MainLayout } from "@/components/layouts/MainLayout"
import styles from "@/styles/Home.module.css"
import ButtonCategoryService from "@/components/ButtonCategoryService"
import FreelanceCard from "@/components/cards/FreelanceCard"
import { FreelanceProduct } from "@/types"
import { Person, PersonPinSharp } from "@mui/icons-material"
import PersonSearchIcon from "@mui/icons-material/PersonSearch"
import DescriptionIcon from "@mui/icons-material/Description"
import EditIcon from "@mui/icons-material/Edit"
import StarIcon from '@mui/icons-material/Star';
import {
  Typography,
  Box,
  Button,
  useMediaQuery,
  useTheme,
  Grid,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Container,
} from "@mui/material"
import { KeyboardArrowDown } from "@mui/icons-material"
import {
  useFetchCategoriesFreelanceOnline,
  useFetchCategoriesFreelanceOffline,
} from "../../hooks"
import ListSection from "@/components/shared/ListSection/ListSection"
import { useGetProducts } from "@/hooks/useProducts"
import pickBy from "lodash/pickBy"
import HomepageFilter from "@/components/dropdown/HomepageFilter"
import PostServiceButton from "@/components/buttons/PostServiceButton"

const inter = Inter({ subsets: ["latin"] })

const index = () => {
  return (
    <>
      <Container 
        className={`${styles.main} ${inter.className}`}
      >

        {/* Why me TEXT FIELD */}

        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "white",
              width: "100%",
              paddingBottom: "10px"
            }}
          >
            <PersonSearchIcon sx={{ height: "32px", margin: "0 8px 0 0" }} />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Why Me?
            </Typography>
          </Box>
          <TextField
            multiline
            rows={6}
            fullWidth
            InputProps={{
              sx: {
                color: "#828485",
                backgroundColor: "#262626",
                "& input": {
                  fontSize: "8px", // Atur ukuran teks yang lebih kecil
                  height: "30px", // Atur tinggi (height) yang lebih kecil
                },
              },
            }}
            defaultValue="Self PR. Isi semua keuntungan atau alasan pembeli harus pilih anda..."
          />
        </Box>

        {/* Description TEXT FIELD */}

        <Box sx={{ pt: "12px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "white",
              width: "100%",
              paddingBottom: "10px"
            }}
          >
            <DescriptionIcon sx={{ height: "32px", margin: "0 8px 0 0" }} />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Description
            </Typography>
          </Box>
          <TextField
            multiline
            rows={6}
            fullWidth
            InputProps={{
              sx: {
                color: "#828485",
                backgroundColor: "#262626",
                "& input": {
                  fontSize: "8px", // Atur ukuran teks yang lebih kecil
                  height: "30px", // Atur tinggi (height) yang lebih kecil
                },
              },
            }}
            defaultValue="Isi deskripsi lengkap dari jasa, produk, dan skill yang anda tawarkan secara detil..."
          />
        </Box>

        {/* TALENTS PROFILE */}

        <Box >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "white",
              width: "100%",
              paddingBottom: "10px"
            }}
          >
            <Person sx={{ height: "32px", margin: "0 8px 0 0" }} />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Talent&apos;s Profile
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              color: "white",
              width: "100%",
            }}
          >
            <div
              style={{
                width: "150px",
                height: "150px",
                border: "1px solid #ccc",
              }}>
              <Image
                src={"/banana.jpeg"}
                width={50}
                height={50}
                alt="logoIcon"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <Box 
            sx={{
              px: "20px",

            }}
            >
              <Button
                startIcon={<EditIcon />}
                sx={{ 
                  width: '270px', // Atur lebar
                  height: '35px', // Atur tinggi
                  fontSize: '15px', // Atur ukuran font
                  backgroundColor: '#33c12a', // Atur warna latar belakang
                  color: "white",
                 }}
              >
                Edit Your Profile
              </Button>
              <Typography sx={{ 
                color: "#5c6166",
                marginTop: "17px",
                }}>

                  {/* REVISI BINTANG */}

               ★★★★★ 5.0 (2200+ reviews)
              </Typography>
              <Typography sx={{ 
                color: "#5c6166",
                marginTop: "10px",
                }}>
                Response Time = 3 minutes ago
              </Typography>
              <Typography sx={{ 
                color: "#5c6166",
                marginTop: "20px",
                }}>
                Last Transaction = 2 minutes ago
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default index
