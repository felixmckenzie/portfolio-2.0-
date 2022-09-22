import React from "react";
import styles from "../styles/Hero.module.css"
import Image from 'next/image'
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
          <div className={styles.profile}>
          <Avatar src="/profilepic.jpg" alt="profile picture"  sx={{width:200, height:200}} />
          </div>
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
          <h1>Felix McKenzie</h1>
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
