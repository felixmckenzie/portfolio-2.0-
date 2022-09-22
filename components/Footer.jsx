import React from 'react'
import { Container } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';


export default function Footer() {
  return (
    <Container maxWidth="sm" sx={{ display: "flex", borderTop: 1, borderColor: "divider", px: "20px", py: "10px", alignItems:"center", justifyContent:"center"}}>
       <CopyrightIcon/> Felix Mckenzie 2022
    </Container>
  )
}
