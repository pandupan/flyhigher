import { Inter } from "next/font/google"
import { HeadMeta } from "@/components/meta/HeadMeta"
import Image from "next/image"
import styles from "@/styles/Home.module.css"
import {
  Typography,
  Box,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import InterestsIcon from '@mui/icons-material/Interests';
import CreateIcon from '@mui/icons-material/Create';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';

const inter = Inter({ subsets: ["latin"] })

export default function Jastip() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Container 
        className={`${styles.main} ${inter.className}`}
      >
          <HeadMeta />
          {isMobile ? (
              <Box
                component="section"
                sx={{
                  display: 'flex',
                  justifyItems: 'center',
                  justifyContent: 'space-between',
                  py: '10px',
                }}
              >
                <Image src={'/img/logo.png'} width={50} height={50} alt="logoIcon" />
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: 'center',
                    fontWeight: '800',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Post Your Services
                </Typography>
                <PersonIcon sx={{ fontSize: '50px' }} />
              </Box>
          ) : (
          <Box
            component="section"
            sx={{
              display: 'flex',
              justifyItems: 'center',
              py: '10px',
              gap: '30px',
            }}
          >
            <KeyboardBackspaceIcon sx={{ fontSize: '30px' }} />
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                fontWeight: '800',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Post Your Services
            </Typography>
          </Box>
          )}
          <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column', mx: 'auto', }}>
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  gap: '10px',
                  px: '10px',
                  py: '5px', 
                }}>
                  <PersonIcon sx={{ fontSize: '20px' }}/>
                  <Typography sx={{ fontWeight:'800' }}>Freelance</Typography>
              </Box>
              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  gap: '10px', 
                  bgcolor: '#262626',
                  borderRadius: '8px',
                  px: '10px',
                  py: '5px',
                }}>
                  <InterestsIcon sx={{ fontSize: '20px' }}/>
                  <Typography sx={{ fontWeight:'300' }}>Pilih Kategori</Typography>
              </Box>
            </Box>
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '10px', 
                bgcolor: '#262626',
                borderRadius: '8px',
                px: '10px',
                py: '5px',
                width: '280px',
              }}
            >
              <CreateIcon sx={{ fontSize: '20px' }}/>
              <Typography sx={{ fontWeight:'300' }}>Isi Nama Jasa Anda</Typography>
            </Box>
            <Box 
              sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                bgcolor: '#262626',
                borderRadius: '8px',
                px: '10px',
                py: '5px',
                width: '280px',
                flexDirection: 'column',
                textAlign: 'center',
              }}
            >
              <PhotoCameraIcon sx={{ fontSize: '180px',mx: 'auto', py: '20px' }}/>
              <Typography sx={{ fontWeight:'300', pb: '20px' }}>Upload Foto Jasa dan Portfolio Anda Disini</Typography>
            </Box>
            
            <Box>
              <Box sx={{ display: 'flex', justifyItems: 'center', justifyContent: 'center', gap: '10px', py: '10px', }}>
                <Box>
                  <Box sx={{ borderRadius: '50%', overflow: 'hidden', width: 25, height: 25, position: 'relative' }}>
                    <Image src={'/img/dummy_profile.jpg'} fill={true} alt="ProfileIcon" />
                  </Box>
                </Box>
                <Typography sx={{ textAlign: 'center', fontWeight: '800', color: '#4a4a4a' }}>Kai Havertz</Typography>
                <InfoIcon sx={{ fontSize: '25px', color: '#4a4a4a' }}/>
              </Box>
              <Box sx={{ display: 'flex', justifyItems: 'center', justifyContent: 'center', gap: '2px', color: '#4a4a4a', fontSize: '15px'}}>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <Typography sx={{fontWeight: 'medium', px:'3px' }}>5.0</Typography>
                <Typography sx={{fontWeight: 'medium', px:'3px' }}>(260 Reviews)</Typography>
              </Box>
            </Box>


            <Box sx={{width:'730px '}}>
              <Box sx={{ display: 'flex', justifyItems: 'center', justifyContent: 'center', gap: '10px', py: '10px'}}>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    gap: '10px', 
                    bgcolor: '#262626',
                    borderRadius: '8px',
                    px: '10px',
                    py: '5px',
                  }}>
                    <InterestsIcon sx={{ fontSize: '20px' }}/>
                    <Typography sx={{ fontWeight:'300' }}>Pilih Kategori</Typography>
                </Box>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    gap: '10px', 
                    bgcolor: '#262626',
                    borderRadius: '8px',
                    px: '10px',
                    py: '5px',
                  }}>
                    <InterestsIcon sx={{ fontSize: '20px' }}/>
                    <Typography sx={{ fontWeight:'300' }}>Pilih Kategori</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', justifyItems: 'center', justifyContent: 'center', gap: '10px', py: '10px'}}>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    gap: '10px', 
                    bgcolor: '#262626',
                    borderRadius: '8px',
                    px: '10px',
                    py: '5px',
                  }}>
                    <InterestsIcon sx={{ fontSize: '20px' }}/>
                    <Typography sx={{ fontWeight:'300' }}>Pilih Kategori</Typography>
                </Box>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    gap: '10px', 
                    bgcolor: '#262626',
                    borderRadius: '8px',
                    px: '10px',
                    py: '5px',
                  }}>
                    <InterestsIcon sx={{ fontSize: '20px' }}/>
                    <Typography sx={{ fontWeight:'300' }}>Pilih Kategori</Typography>
                </Box>
              </Box>

            </Box>

          </Box>
      </Container>
    </>
  )
}
