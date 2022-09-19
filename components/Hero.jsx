import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import ExternalLinks from "./ExternalLinks";
import { Container } from "@mui/material";

export default function Hero() {
  return (
    <Container maxWidth="sm" sx={{marginBottom:"20px"}}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar src="/profilepic.jpg" sx={{ width: 200, height: 200 }} />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1>Hello, I'm Felix 👋</h1>
          <h3>
            Web Developer, from <br></br> Byron Bay Australia
          </h3>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ExternalLinks />
        </Grid>
      </Grid>
    </Container>
  );
}
