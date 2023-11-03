import { Inter } from "next/font/google"
import { HeadMeta } from "@/components/meta/HeadMeta"
import Image from "next/image"
import styles from "@/styles/Home.module.css"
import {
  Typography,
  Box,
  useMediaQuery,
  Button,
  useTheme,
  Container,
  TextField,
} from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import InterestsIcon from '@mui/icons-material/Interests';
import CreateIcon from '@mui/icons-material/Create';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ArticleIcon from '@mui/icons-material/Article';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { Person, PersonPinSharp } from "@mui/icons-material"
import PersonSearchIcon from "@mui/icons-material/PersonSearch"
import DescriptionIcon from "@mui/icons-material/Description"
import EditIcon from "@mui/icons-material/Edit"
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';

const inter = Inter({ subsets: ["latin"] })

export default function Jastip() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Container 
        className={`${styles.main} ${inter.className}`}
        sx={{overflow: 'hidden'}}
      >
          <HeadMeta />
          {isMobile ? (
            // Mobile Header
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
          // Desktop Header
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

          {/* Freelance Menu */}
          <Box sx={{ display: 'flex', gap: '10px', flexDirection: 'column', mx: {xs:'0', md:'auto'}}}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
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
                mx: 'auto', 
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
                mx: 'auto',  
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

            <Box sx={{width:'700px', px: 'auto',}}>
              <Box sx={{ display: 'flex', justifyItems: 'center', justifyContent: {xs:'start', md: 'space-between'}, gap: '10px', py: '10px'}}>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'center',
                    justifyItems: 'center', 
                    gap: '10px', 
                    bgcolor: '#101013',
                    borderRadius: '8px',
                    px: '10px',
                    py: '5px',
                  }}>
                    <HelpOutlineIcon sx={{ fontSize: '20px' }}/>
                    <Typography sx={{ fontWeight:'300', width:'100px', py:'2px' }}>Why Me</Typography>
                </Box>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'center',
                    justifyItems: 'center', 
                    gap: '10px', 
                    bgcolor: '#101013',
                    borderRadius: '8px',
                    px: {xs:'5px', md:'10px'},
                    py: '5px',
                  }}>
                    <ArticleIcon sx={{ fontSize: '20px' }}/>
                    <Typography sx={{ fontWeight:'300', width:'100px', py:'2px' }}>Description</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', justifyItems: 'center', justifyContent: {xs:'start', md: 'space-between'}, gap: '10px', py: '10px'}}>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'center',
                    justifyItems: 'center', 
                    gap: '10px', 
                    bgcolor: '#101013',
                    borderRadius: '8px',
                    px: {xs:'5px', md:'10px'},
                    py: '5px',
                  }}>
                    <AccessibilityNewIcon sx={{ fontSize: '20px' }}/>
                    <Typography sx={{ fontWeight:'300', width:'100px', py:'2px' }}>About Seller</Typography>
                </Box>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'center',
                    justifyItems: 'center', 
                    gap: '10px', 
                    bgcolor: '#101013',
                    borderRadius: '8px',
                    px: '10px',
                    py: '5px',
                  }}>
                    <RateReviewIcon sx={{ fontSize: '20px' }}/>
                    <Typography sx={{ fontWeight:'300', width:'100px', py:'2px' }}>Review</Typography>
                </Box>
              </Box>

          </Box>

        </Box>
      </Container>
      <Container 
        className={`${styles.main} ${inter.className}`}
        sx={{overflow: 'hidden'}}
      >
        {/* Daftar Jasa */}
          <Box sx={{ maxWidth: "100%", width: "100%", p: "10px" }}>
            <Box
              sx={{
                display: "flex",
                color: "white",
                width: "100%",
                paddingBottom: "10px",
              }}
            >
              <InterestsIcon sx={{ height: "32px", margin: "0 8px 0 0" }} />
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Daftar Jasa
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mx: "20px",
                  bgcolor: "#37bf28",
                  fontWeight: "bold",
                  px: "20px",
                  borderRadius: "8px",
                  gap: "10px",
                }}
              >
                <AddIcon />
                Jasa
              </Button>
            </Box>

            {/* Box picture */}
            <Box sx={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center', justifyContent:{ xs:'center', md:'start'} }}>
              {[...Array(10)].map((_, index) => (
                <Box key={index} sx={{ display: 'flex', flexDirection: 'column', gap: '10px', my: '10px' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      mx: 'auto',
                      bgcolor: '#262626',
                      borderRadius: '12px',
                      px: '10px',
                      py: '5px',
                      width: '150px',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <PhotoCameraIcon sx={{ fontSize: '120px', mx: 'auto', py: '20px' }} />
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      mx: 'auto',
                      gap: '10px',
                      bgcolor: '#262626',
                      borderRadius: '8px',
                      px: '10px',
                      py: '5px',
                      width: '150px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <CreateIcon sx={{ fontSize: '20px' }} />
                    <Typography sx={{ fontWeight: 'bold', fontSize: '10px', mt: '2px' }}>Isi Nama Jasa Anda</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      mx: 'auto',
                      gap: '10px',
                      bgcolor: '#262626',
                      borderRadius: '8px',
                      px: '10px',
                      py: '5px',
                      width: '150px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}
                  >
                    <Typography sx={{ fontWeight: 'bold', fontSize: '10px', mt: '2px' }}>Rp. 1000.000</Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        {/* Why me TEXT FIELD */}
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "white",
              width: "100%",
              paddingBottom: "10px",
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
              paddingBottom: "10px",
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

        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "white",
              width: "100%",
              paddingBottom: "10px",
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
            <Box
              sx={{
                width: {xs: "100px", md: "120px", lg: "150px"},
                height: {xs: "100px", md: "120px", lg:"150px"},
                border: "1px solid #ccc",
                borderRadius: "10%",
                overflow: "hidden",
                position: "relative"
              }}
            >
              <Image
                src={"/banana.jpeg"}
                fill={true}
                alt="logoIcon"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Box
              sx={{
                px: {xs: "10px" ,lg:"20px"},
              }}
            >
              <Button
                startIcon={<EditIcon />}
                sx={{

                  minWidth: "175px",

                  minHeight: "20px",
                  backgroundColor: "#33c12a",
                  color: "white",
                  fontSize: {xs:"10px", lg:"15px"}
                }}
              >
                Edit Your Profile
              </Button>
              <Typography
                sx={{
                  color: "#5c6166",
                  marginTop: {xs: "8px",md: "12px" ,lg: "17px"},
                  fontSize: { xs: "10px", md: "15px", lg: "17px" } 
                }}
              >
                {/* REVISI BINTANG */}
                ★★★★★ 5.0 (2200+ reviews)
              </Typography>
              <Typography
                sx={{
                  color: "#5c6166",
                  marginop: {xs: "2px",md: "5px" ,lg: "10px"},
                  fontSize: { xs: "10px", md: "15px", lg: "17px" } 
                }}
              >
                Response Time = 3 minutes ago
              </Typography>
              <Typography
                sx={{
                  color: "#5c6166",
                  marginTop: {xs: "10px",md: "15px" ,lg: "20px"},
                  fontSize: { xs: "10px", md: "15px", lg: "17px" } 
                }}
              >
                Last Transaction = 2 minutes ago
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* REVIEWS  */}

        <Box sx={{ pt: "12px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "white",
              width: "100%",
              paddingBottom: "10px",
            }}
          >
            <RateReviewIcon sx={{ height: "32px", margin: "0 8px 0 0" }} />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Reviews
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              overflowX: "auto",

            }}
          >
            {/* FIRST REVIEW(AARON) */}

            <Box
              sx={{
                display: "flex",
                color: "white",
                minWidth: "315px",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  border: "1px solid #ccc",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={"/banana.jpeg"}
                  width={50}
                  height={50}
                  alt="logoIcon"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Box
                sx={{
                  px: "20px",
                }}
              >
                <Typography sx={{ color: "#5c6166", fontWeight: "bold", fontSize: "11px" }}>
                  Aaron Wilson
                </Typography>
                <Typography sx={{ color: "#5c6166" }}>
                  {/* REVISI BINTANG */}
                  ★★★★★
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        border: "1px",
                        borderRadius: "5%",
                        backgroundColor: "#56636c",
                      }}
                    >
                      <Typography sx={{ color: "white", fontWeight: "bold",fontSize: { xs: "10px", md: "11px", lg: "13px" } }}>
                        Quality Work
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        border: "1px",
                        borderRadius: "5%",
                        backgroundColor: "#56636c",
                      }}
                    >
                      <Typography sx={{ color: "white", fontWeight: "bold",fontSize: { xs: "10px", md: "11px", lg: "13px" } }}>
                        Friendly
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        border: "1px",
                        borderRadius: "5%",
                        backgroundColor: "#56636c",
                      }}
                    >
                       <Typography sx={{ color: "white", fontWeight: "bold",fontSize: { xs: "10px", md: "11px", lg: "13px" } }}>
                        On-Time
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Typography
                  sx={{ color: "#5c6166", maxWidth: {xs: "200px", lg: "230px" }, fontSize: "11px" }}
                >
                  Amazing service. Delivery is on time and an amazing firendly
                  person. Good luck ir your future endeavours
                </Typography>
              </Box>
            </Box>

            {/* SECOND REVIEW */}

            <Box
              sx={{
                display: "flex",
                color: "white",
                minWidth: "315px",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  border: "1px solid #ccc",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={"/banana.jpeg"}
                  width={50}
                  height={50}
                  alt="logoIcon"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Box
                sx={{
                  px: "20px",
                }}
              >
                <Typography sx={{ color: "#5c6166", fontWeight: "bold", fontSize: "11px" }}>
                  Aaron Wilson
                </Typography>
                <Typography sx={{ color: "#5c6166" }}>
                  {/* REVISI BINTANG */}
                  ★★★★★
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        border: "1px",
                        borderRadius: "5%",
                        backgroundColor: "#56636c",
                      }}
                    >
                      <Typography sx={{ color: "white", fontWeight: "bold",fontSize: { xs: "10px", md: "11px", lg: "13px" } }}>
                        Quality Work
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        border: "1px",
                        borderRadius: "5%",
                        backgroundColor: "#56636c",
                      }}
                    >
                      <Typography sx={{ color: "white", fontWeight: "bold",fontSize: { xs: "10px", md: "11px", lg: "13px" } }}>
                        Friendly
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        border: "1px",
                        borderRadius: "5%",
                        backgroundColor: "#56636c",
                      }}
                    >
                       <Typography sx={{ color: "white", fontWeight: "bold",fontSize: { xs: "10px", md: "11px", lg: "13px" } }}>
                        On-Time
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Typography
                  sx={{ color: "#5c6166", maxWidth: {xs: "200px", lg: "230px" }, fontSize: "11px" }}
                >
                  Amazing service. Delivery is on time and an amazing firendly
                  person. Good luck ir your future endeavours
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                color: "white",
                minWidth: "315px",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  border: "1px solid #ccc",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={"/banana.jpeg"}
                  width={50}
                  height={50}
                  alt="logoIcon"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Box
                sx={{
                  px: "20px",
                }}
              >
                <Typography sx={{ color: "#5c6166", fontWeight: "bold", fontSize: "11px" }}>
                  Aaron Wilson
                </Typography>
                <Typography sx={{ color: "#5c6166" }}>
                  {/* REVISI BINTANG */}
                  ★★★★★
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        border: "1px",
                        borderRadius: "5%",
                        backgroundColor: "#56636c",
                      }}
                    >
                      <Typography sx={{ color: "white", fontWeight: "bold",fontSize: { xs: "10px", md: "11px", lg: "13px" } }}>
                        Quality Work
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        border: "1px",
                        borderRadius: "5%",
                        backgroundColor: "#56636c",
                      }}
                    >
                      <Typography sx={{ color: "white", fontWeight: "bold",fontSize: { xs: "10px", md: "11px", lg: "13px" } }}>
                        Friendly
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        border: "1px",
                        borderRadius: "5%",
                        backgroundColor: "#56636c",
                      }}
                    >
                       <Typography sx={{ color: "white", fontWeight: "bold",fontSize: { xs: "10px", md: "11px", lg: "13px" } }}>
                        On-Time
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Typography
                  sx={{ color: "#5c6166", maxWidth: {xs: "200px", lg: "230px" }, fontSize: "11px" }}
                >
                  Amazing service. Delivery is on time and an amazing firendly
                  person. Good luck ir your future endeavours
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
        sx={{
          display: "flex",
          justifyContent: "center"
        }}>
        <Button
                startIcon={<SaveIcon />}
                sx={{
                  width: "270px",
                  height: "35px",
                  fontSize: "15px",
                  backgroundColor: "#33c12a",
                  color: "white",
                }}
              >
                Save
              </Button>
        </Box>
      </Container>
    </>
  )
}
