import React from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import Title from "./Title";
// img
import imgDetail from "../assets/pexels-alex-staudinger-1732414.jpg";
import imgDetail2 from "../assets/gazettaa.png";
import imgDetail3 from "../assets/menu2.jpg";
const GetStarted = () => {
  const CustomGridItem = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  const CustomTypography = styled(Typography)({
    fontSize: "1.1rem",
    textAlign: "start",
    lineHeight: "1.5",
    color: "#515151",
    marginTop: "1.5rem",
  });

  return (
    <Grid
      container
      spacing={{ xs: 4, sm: 4, md: 0 }}
      sx={{
        py: 10,
        px: 2,
      }}
    >
      <CustomGridItem item xs={12} sm={8} md={6} component="section">
        <Box
          component="article"
          sx={{
            px: 4,
          }}
        >
          <Title text={"QR MENU"} textAlign={"start"} />
          <CustomTypography>
            Customers can scan the QR code with their smartphones to access the
            menu digitally, reducing the need for physical menus and minimizing
            contact between staff and customers.
          </CustomTypography>
        </Box>
      </CustomGridItem>

      <Grid item xs={12} sm={4} md={6}>
        <img
          src={imgDetail3}
          alt=""
          style={{
            width: "50%",
            paddingLeft:"190px"
            
          }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={4}
        md={6}
        sx={{
          order: { xs: 4, sm: 4, md: 3 },
        }}
      >
        <img
          src={imgDetail2}
          alt=""
          style={{
            width: "100%",
          }}
        />
      </Grid>

      <CustomGridItem
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          order: { xs: 3, sm: 3, md: 4 },
        }}
      >
        <Box
          component="article"
          sx={{
            px: 4,
          }}
        >
          <Title text={"Gazettaa.com"} textAlign={"start"} />
          <CustomTypography>
          Gazettaa is a news, entertainment and digital advertising website that is revolutionizing the way people consume content. Gazetta is a powerful platform for business owners and professionals to promote their goods and services and to connect with their target audience.
          </CustomTypography>
        </Box>
      </CustomGridItem>

      <CustomGridItem
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          order: { xs: 3, sm: 3, md: 4 },
        }}
      >
        <Box
          component="article"
          sx={{
            px: 4,
            pt:"70px"
          }}
        >
          <Title text={"Power bank"} textAlign={"start"} />
          <CustomTypography>
          We offer a 20,000mAh power bank with three cable options (Type-C, USB, and iPhone) for phone charging. It's available at rates of 10 ETB for 1 hour, 20 ETB for 2 hours, and 30 ETB for 6 hours. Once activated, these cables can charge three different phones simultaneously. Users can extend the charge by entering code "NO 1" up to five times when their phone is off, activating 5 minutes of charging each time. The system automatically turns off after the selected hourly package expires. It's not functional without the system itself, and we provide it to restaurants at no cost. Payments can be made both cashless and upfront via the online payment system Telebirr.
          </CustomTypography>

          <img
          src={imgDetail}
          alt=""
          style={{
            width: "110%",
            paddingLeft:"755px",
            marginTop:"-290px"
          }}
        />
        </Box>
      </CustomGridItem>
      
      


      
    </Grid>
  );
};

export default GetStarted;
