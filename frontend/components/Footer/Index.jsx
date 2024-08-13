import { Container, Box, Typography, Link, Snackbar, Alert, IconButton, createTheme, ThemeProvider } from "@mui/material";
import { Email as EmailIcon, Phone as PhoneIcon, Home as HomeIcon, Facebook as FacebookIcon, Instagram as InstagramIcon, LinkedIn as LinkedInIcon } from "@mui/icons-material";
import { useState } from "react";
import { pink } from "@mui/material/colors";
import "./Index.scss";

const theme = createTheme({
  palette: {
    primary: { main: "#5a48a7" },
    secondary: pink,
  },
});

export default function Footer() {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSnackbarClose = () => setOpenSnackbar(false);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100vw", background: "#2f2626", color: "#FCD6C5", padding: "20px 0" }}>
        <Container sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {/* About Us Section */}
          <Box sx={{ flex: '1', textAlign: 'center', marginBottom: "20px" }}>
            <Typography variant="h6" component="h1" sx={{ fontSize: "20px", fontWeight: "bold", color: "white", marginBottom: "10px" }}>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ color: "#FCD6C5" }}>
              Elevate Property Group is your premier real estate partner, offering a wide range of properties to fit your needs. Explore our listings and find your dream home with ease. Our dedicated team is here to assist you every step of the way.
            </Typography>
          </Box>

          {/* Quick Links Section */}
          <Box sx={{ flex: '1', textAlign: 'center', marginBottom: "20px" }}>
            <Typography variant="h6" component="h1" sx={{ fontSize: "20px", fontWeight: "bold", color: "white", marginBottom: "10px" }}>
              Quick Links
            </Typography>
            <Link href="/" color="#FCD6C5" sx={{ display: "block", marginBottom: "5px" }}>Home</Link>
            <Link href="/about" color="#FCD6C5" sx={{ display: "block", marginBottom: "5px" }}>About Us</Link>
            <Link href="/service" color="#FCD6C5" sx={{ display: "block", marginBottom: "5px" }}>Services</Link>
            <Link href="/destinations" color="#FCD6C5" sx={{ display: "block", marginBottom: "5px" }}>Destinations</Link>
            <Link href="/properties" color="#FCD6C5" sx={{ display: "block", marginBottom: "5px" }}>Properties</Link>
          </Box>

          {/* Contact Us Section */}
          <Box sx={{ flex: '1', textAlign: 'center', marginBottom: "20px" }}>
            <Typography variant="h6" component="h1" sx={{ fontSize: "20px", fontWeight: "bold", color: "white", marginBottom: "10px" }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ color: "#FCD6C5", marginBottom: "10px" }}>
              <EmailIcon sx={{ verticalAlign: "middle", marginRight: "5px" }} /> arunrealestate@gmail.com
            </Typography>
            <Typography variant="body2" sx={{ color: "#FCD6C5", marginBottom: "10px" }}>
              <PhoneIcon sx={{ verticalAlign: "middle", marginRight: "5px" }} /> (+91) 8838292480
            </Typography>
            <Typography variant="body2" sx={{ color: "#FCD6C5", marginBottom: "10px" }}>
              <HomeIcon sx={{ verticalAlign: "middle", marginRight: "5px" }} /> 2/21 cross cutroad, Chennai, Tamil Nadu, India
            </Typography>
          </Box>

          {/* Follow Us Section */}
          <Box sx={{ flex: '1', textAlign: 'center', marginBottom: "20px" }}>
            <Typography variant="h6" component="h1" sx={{ fontSize: "20px", fontWeight: "bold", color: "white", marginBottom: "10px" }}>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
              <IconButton color="primary" href="https://www.facebook.com" target="_blank">
                <FacebookIcon sx={{ color: "#FCD6C5" }} />
              </IconButton>
              <IconButton color="primary" href="https://www.instagram.com" target="_blank">
                <InstagramIcon sx={{ color: "#FCD6C5" }} />
              </IconButton>
              <IconButton color="primary" href="https://www.linkedin.com/in/arun-kumar-4a30a627a/" target="_blank">
                <LinkedInIcon sx={{ color: "#FCD6C5" }} />
              </IconButton>
            </Box>
          </Box>
        </Container>

        {/* Copyright Information */}
        <Container sx={{ textAlign: 'center', paddingTop: "20px" }}>
          <Typography align="center" color="#FCD6C5">
            &copy; {new Date().getFullYear()} Elevate Property  Group. All rights are reserved.
          </Typography>
        </Container>

        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
          <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: "100%" }}>
            Message sent successfully!
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
}
