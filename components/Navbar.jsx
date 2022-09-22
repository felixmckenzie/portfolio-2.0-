import React from "react";
import Link from "next/link";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useModeContext, useUpdateModeContext } from "../utils/toggleMode";
export default function Navbar() {
const mode = useModeContext()
const toggleMode = useUpdateModeContext()
  return (
    <Container maxWidth="sm">
    <Toolbar sx={{ borderBottom: 1, borderColor: "divider", justifyContent:'space-between', overflowX: "auto" }}>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <a target="_blank" href="/Resume.pdf" rel="noopener noreferrer">Resume</a>
        <IconButton sx={{ ml: 1 }} onClick={toggleMode} color="inherit">
        {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Toolbar>
    </Container>
   
  )
}
